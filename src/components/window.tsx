import { Button, Col, Row } from "antd";

import { DownOutlined, ExpandOutlined, CloseOutlined } from "@ant-design/icons";
import { ResizableBox } from "react-resizable";
import { useEffect, useState, useLayoutEffect, CSSProperties } from "react";

import CurriculumPDF from "../docs/curriculum.pdf";
import TextProgram from "../components/programs/text";
import BrowserProgram from "../components/programs/browser";
import PDFProgram from "../components/programs/pdf";
import Folder from "../components/programs/folder";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export default function Window(props: any) {

  const [fullSize, setFullSize] = useState(false as boolean);
  const [distance, setDistance] = useState(undefined as any);
  const [windowSize, setWindowSize] = useState(undefined as any);
  const theme: string = useSelector((state: RootState) => state.counter.theme);
  const [width, height] = useWindowSize();

  useEffect(
    () => setDistance(fullSize ? { left: 0, top: 0 } : undefined),
    [fullSize]
  );

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const multiSearchAnd = (text: string, searchWords: string[]) => (
    searchWords.every((el) => {
      return text.match(new RegExp(el,"i"))
    })
  )

  const style = {
    container: {
      userSelect: "none",
      background: theme === "dark" ? "#ebebeb" : "white",
      padding: fullSize ? 0 : 20,
      position: "absolute",
      zIndex: props.item !== undefined ? props.item.priority : 0,
      cursor: "move",
      boxShadow: "0px 1px 17px 3px rgba(0,0,0,0.07)",
      borderRadius: "8px 8px 8px 8px",
      left: distance ? distance.left : `${(18 - props.index ?? 0)}%`,
      top: distance ? distance.left : `${(21 - props.index ?? 0)}%`,
      backgroundColor: "#ebebeb",
    } as CSSProperties
  };

  return (
    <>
      <div
        key={"window-new-" + props.index}
        hidden={props.item !== undefined ? props.item.hidden : true}
        onMouseDown={props.onStart}
        style={style.container}
        className="shadow-box"
        onTouchStart={props.onStart}
        onClick={(e: any) => {
          let className: string = e.target.className;
          if (
            typeof className !== "object" &&
            className !== undefined &&
            !multiSearchAnd(className ,[
              "-close", 
              "-down", 
              "rdw-",
              "public-DraftStyleDefault", 
              "ant-tree-node-content-wrapper"])
          ) {
            props.setPriority(props.item.priority);
          }
        }}
      >
        <ResizableBox
          key={"resizable-new-" + props.index}
          onResize={(e: any) => setWindowSize(e)}
          className="box"
          width={
            fullSize
              ? window.innerWidth
              : props.item !== undefined
                ? props.item.dimensions.width
                : 0
          }
          height={
            fullSize
              ? window.innerHeight
              : props.item !== undefined
                ? props.item.dimensions.height
                : 0
          }
          minConstraints={[580, 450] as any}
          resizeHandles={["se"] as any}
        >
          <>
            <Row
              key={"row-window-new-" + props.index}
              style={{
                userSelect: "none",
                cursor: "initial",
                backgroundColor:
                  theme === "dark" ? "#001529" : "white",
                color: theme === "dark" ? "white" : "#001529",
                width: "100%",
                height: "100%",
              }}
            >
              <Col
                key={"col-1-window-new-" + props.index}
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                  margin: 0,
                  textAlign: "left",
                }}
                xs={16}
              >
                <img
                  src={props.item !== undefined ? props.item.icon : ""}
                  style={{
                    width: 15,
                    height: 15,
                    marginBottom: 3,
                    marginRight: 5,
                  }}
                  alt={"Icono"}
                />
                {props.item !== undefined ? props.item.name : true}
              </Col>
              <Col
                key={"col-2-window-new-" + props.index}
                xs={8}
                style={{
                  paddingTop: 10,
                  paddingRight: 10,
                  margin: 0,
                  textAlign: "right",
                }}
              >
                <Button
                  size={"small"}
                  style={{
                    margin: "0px !important",
                    color: theme === "dark" ? "white" : "#001529",
                  }}
                  //size="small"
                  type="text"
                  onClick={() => {
                    setFullSize(!fullSize);
                  }}
                >
                  <ExpandOutlined style={{ width: "100%", height: "100%" }} />
                </Button>
                <Button
                  size="small"
                  type="text"
                  style={{
                    margin: "0px !important",
                    color: theme === "dark" ? "white" : "#001529",
                  }}
                  onClick={(e: any) => {
                    if (props.item !== undefined) {
                      props.hiddenWindows(props.item.name);
                    }
                  }}
                >
                  <DownOutlined style={{ width: "100%", height: "100%" }} />
                </Button>
                <Button
                  style={{
                    margin: "0px !important",
                    color: theme === "dark" ? "white" : "#001529",
                  }}
                  type="text"
                  size="small"
                  onClick={(e: any) => {
                    setDistance(false);
                    if (props.item !== undefined) {
                      props.closeWindows(props.item.name);
                    }
                  }}
                >
                  <CloseOutlined style={{ width: "100%", height: "100%" }} />
                </Button>
              </Col>
              <TextProgram
                darkMode={theme}
                index={props.index}
                item={props.item}
                html={props.item?.html}
                windowSize={windowSize}
              />
              <BrowserProgram
                index={props.index}
                item={props.item}
                windowSize={windowSize}
              />
              <PDFProgram
                darkMode={theme}
                index={props.index}
                item={props.item}
                pdf={CurriculumPDF}
              />
              <Folder
                darkMode={theme}
                index={props.index}
                item={props.item}
                pdf={CurriculumPDF}
                addItem={props.addItems}
                itemsNav={props.itemsNav}
              />
            </Row>
            {props.children}
          </>
        </ResizableBox>
      </div>
    </>
  );
}
