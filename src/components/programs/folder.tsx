import { Col, Breadcrumb, Tree, Divider } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default function Folder(props: any) {
  const { DirectoryTree } = Tree;

  const treeData = [
    {
      title: "desarrollos laborales",
      key: "0-0",
      children: [
        {
          title: "opciones",
          key: "0-0-0",
          children: [
            {
              title: "modulos ofbiz.txt",
              key: "0-0-0-0",
              isLeaf: true,
            },
          ],
        },
        {
          title: "turbus",
          key: "0-0-1",
          children: [
            {
              title: "motor de itineriarios.txt",
              key: "0-0-1-0",
              isLeaf: true,
            },
          ],
        },
        {
          title: "starken",
          key: "0-0-2",
          children: [
            {
              title: "formularios dinamicos.txt",
              key: "0-0-2-0",
              isLeaf: true,
            },

            {
              title: "gestor de contenidos.txt",
              key: "0-0-2-1",
              isLeaf: true,
            },
          ],
        },
      ],
    },
    {
      title: "desarrollos personales",
      key: "0-1",
      //children: [
      //  {
      //    title: "reloj control.txt",
      //    key: "0-1-0",
      //    isLeaf: true,
      //  },
      //],
    },
  ];

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
      <Breadcrumb
        style={{
          color: props.darkMode === "dark" ? "white !important" : "#001529",
        }}
      >
        <Breadcrumb.Item>
          <HomeOutlined
            style={{ color: props.darkMode === "dark" ? "white" : "#001529" }}
          />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <UserOutlined
            style={{ color: props.darkMode === "dark" ? "white" : "#001529" }}
          />
          <span
            style={{ color: props.darkMode === "dark" ? "white" : "#001529" }}
          >
            Mis Documentos
          </span>
        </Breadcrumb.Item>
        {/*
        <Breadcrumb.Item>Application</Breadcrumb.Item>
         */}
      </Breadcrumb>
      <Divider />
      <div>
        <DirectoryTree
          style={{
            backgroundColor: props.darkMode === "dark" ? "#001529" : "white",
            color: props.darkMode === "dark" ? "white" : "#001529",
          }}
          multiple
          onSelect={(_, n) => {
            if (
              !props.itemsNav
                .map((e: any) => {
                  return e.name;
                })
                .includes(n.node.title)
            ) {
              let data: any = {};
              data.name = n.node.title;
              props.addItem(data);
            }
          }}
          defaultExpandAll
          treeData={treeData}
        />
      </div>
    </Col>
  );
}
