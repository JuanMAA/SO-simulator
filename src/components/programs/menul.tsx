import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

export default function MenuLeft() {
  return (
    <>
      <Menu
        theme={"dark"}
        style={{
          left: 300,
          top: 200,
          width: 200
        }}
        mode="vertical"
      >
        {" "}
        <Item key="7" icon={<MailOutlined />}>
          Actualizar
        </Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Nuevo">
          <Item key="2">Documento de texto</Item>
        </SubMenu>
        <Item key="7" icon={<MailOutlined />}>
          Cambiar fondo
        </Item>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Personalizar">
          <Item key="5">Option 5</Item>
          <Item key="6">Option 6</Item>
          <SubMenu key="sub3" title="Submenu">
            <Item key="7">Option 7</Item>
            <Item key="8">Option 8</Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </>
  );
}
