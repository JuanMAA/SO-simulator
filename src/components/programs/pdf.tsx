import { Col } from "antd";
import Iframe from "react-iframe";

export default function PDFProgram(props: any) {
  return (
    <Col
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
      }}
      key={"col-4-window-new-" + props.index}
      xs={24}
      hidden={
        props.item !== undefined
          ? props.item.name.includes(".pdf")
            ? false
            : true
          : true
      }
    >
      <Iframe url={props.pdf} width="100%" height="85%" styles={{
          position: "absolute"
      }}/>
    </Col>
  );
}
