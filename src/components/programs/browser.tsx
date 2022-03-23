import { Col } from "antd";
import { browserIcons } from "../../dummy";

export default function BrowserProgram(props: any) {
  return (
    <>
      {browserIcons.map((data: any, indexIcon: any) => (
        <Col
          key={"col-5-window-new-" + props.index + "-icon-" + indexIcon}
          hidden={
            props.item !== undefined
              ? props.item.name === "Navegador"
                ? false
                : true
              : true
          }
          xs={4}
          style={{ textAlign: "center" }}
        >
          <a href={`${data.url}`} target="_blank" rel="noreferrer">
            <img
              src={data.icon}
              style={{
                width: "100%",
                cursor: "pointer",
                padding: 10,
                maxWidth: 300,
              }}
              alt="Icon"
            />
            <p>{data.name}</p>
          </a>
        </Col>
      ))}
    </>
  );
}
