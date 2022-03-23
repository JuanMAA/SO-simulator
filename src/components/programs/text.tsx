import { Editor } from "react-draft-wysiwyg";
import { ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
import { Col } from "antd";
import htmlToDraft from "html-to-draftjs";

export default function TextProgram(props: any) {
  useEffect(() => {
    const contentBlocks: any = htmlToDraft(props.html ? props.html : "");
    const contentState = ContentState.createFromBlockArray(contentBlocks);
    setIsOpen(convertToRaw(contentState));
  }, [props.html]);

  const [isOpen, setIsOpen] = useState(null as any);

  return (
    <Col
      key={"col-3-window-new-" + props.index}
      xs={24}
      hidden={
        props.item !== undefined
          ? props.item.name.includes(".txt")
            ? false
            : true
          : true
      }
      style={{
        height: "80%",
        width: "80%",
        overflow: "auto",
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      <Editor
        contentState={isOpen}
        onContentStateChange={setIsOpen}
        toolbarStyle={{
          color: "#001529",
        }}
      />
    </Col>
  );
}
