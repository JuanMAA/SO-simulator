import { Col, Breadcrumb, Tree, Divider, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleImage, setVisibleSrc } from "../../redux/antDesign/antdSlice";
import { dummyItem } from "../../dummy";
import { RootState } from "../../redux/store";
import Search from "antd/lib/input/Search";
import { Input } from "antd";

export default function Folder(props: any) {

  const { DirectoryTree } = Tree;

  const theme: string = useSelector((state: RootState) => state.counter.theme);
  const dispatch = useDispatch();

  const getColorTheme = (isColor?: boolean, newtheme?: string): object => {
    const color = (newtheme ? newtheme : theme) !== "dark" && !isColor ? "white" : "#001529";
    const result = isColor ? { color } : { backgroundColor: color };
    return result
  }

  return (
    <Col
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        color: props.darkMode === "dark" ? "white" : "#001529",
      }}
      key={"col-4-window-new-" + props.index}
      xs={24}
      hidden={
        props.item !== undefined
          ? props.item.name.includes("Mis")
            ? false
            : true
          : true
      }
    >
      <Row>
        <Col xs={8}>
          <Breadcrumb
            style={{
              color: theme === "dark" ? "white !important" : "#001529",
            }}
          >
            <Breadcrumb.Item>
              <HomeOutlined
                style={{ color: theme === "dark" ? "white" : "#001529" }}
              />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <UserOutlined
                style={{ color: theme === "dark" ? "white" : "#001529" }}
              />
              <span
                style={{ color: theme === "dark" ? "white" : "#001529" }}
              >
                {props.item?.name}
              </span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Divider />
      <div>
        <DirectoryTree
          className={"dt-" + props.item?.name}
          style={{
            backgroundColor: theme === "dark" ? "#001529" : "white",
            color: theme === "dark" ? "white" : "#001529",
          }}
          multiple
          onSelect={(_: any, n: any) => {
            if (!n.node.title?.toString().includes(".jpg")) {
              if (
                !props.itemsNav
                  .map((e: any) => {
                    return e.name;
                  })
                  .includes(n.node.title)
              ) {
                let data: any = {};
                data.name = n.node.title;
                console.log(data)
                props.addItem(data);
              }
            } else {
              const find = dummyItem.find((e: any) => { return e.name === n.node.title })
              dispatch(setVisibleImage(true))
              dispatch(setVisibleSrc(find?.img ?? ""))
            }
          }}
          defaultExpandAll
          treeData={props.item?.files}
        />
      </div>
    </Col>
  );
} 
