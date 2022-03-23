import { Menu, MenuTheme } from "antd";
import {
  MenuOutlined,
  FontSizeOutlined,
  FontColorsOutlined,
  LogoutOutlined,
  BgColorsOutlined,
  ZoomInOutlined,
  EyeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Clock } from "../class/Clock";
const { ItemGroup, SubMenu, Item } = Menu;

interface Props {
  darkMode?: MenuTheme;
  itemsNav?: any;
  icons?: any;
  setDarkMode: Function;
  hiddenWindows: Function;
}

export default function Taskbar(data: Props) {
  return (
    <Menu
      key="menu"
      selectedKeys={["SubMenu"] as any}
      mode="horizontal"
      theme={data.darkMode}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <SubMenu
        key={"sm-1"}
        icon={<MenuOutlined />}
        title="Inicio"
        style={{ fontSize: 15 }}
      >
        <ItemGroup title="Opciones">
          <SubMenu
            key="ig-sm-1"
            icon={<UnorderedListOutlined />}
            title="Idioma"
            disabled={true}
          >
            <Item key="ig-sm-1-item-1">Español</Item>
            <Item key="ig-sm-1-item-2">Ingles</Item>
          </SubMenu>
          <SubMenu
            key="ig-sm-2"
            icon={<BgColorsOutlined />}
            title="Color"
            disabled={true}
          >
            <Item key="ig-sm-2-item-1">Azul</Item>
            <Item key="ig-sm-2-item-2">Rojo</Item>
          </SubMenu>
          <SubMenu
            key="ig-sm-3"
            icon={<ZoomInOutlined />}
            title="Texto"
            disabled={true}
          >
            <SubMenu
              key="ig-sm-3-item-sm-1"
              icon={<FontSizeOutlined />}
              title="Tamaño"
            >
              <Item key="ig-sm-3-item-2">Azul</Item>
              <Item key="ig-sm-3-item-3">Rojo</Item>
            </SubMenu>
            <SubMenu
              key="ig-sm-3-item-sm-2"
              icon={<FontColorsOutlined />}
              title="Tipo Fuente"
            >
              <Item key="ig-sm-3-item-4">Azul</Item>
              <Item key="ig-sm-3-item-5">Rojo</Item>
            </SubMenu>
          </SubMenu>
          <Item
            icon={<EyeOutlined />}
            key="ig-sm-3-item-6"
            onClick={() =>
              data.setDarkMode(data.darkMode === "dark" ? "light" : "dark")
            }
          >
            {data.darkMode === "dark" ? "Desactivar" : "Activar"} modo oscuro
          </Item>
          <Item
            icon={<LogoutOutlined />}
            key="ig-sm-3-item-7"
            onClick={() => ((window as any).location = "/")}
          >
            Reiniciar
          </Item>
        </ItemGroup>
      </SubMenu>
      {data.itemsNav.map((item: any, key: number) => (
        <Item
          className={
            item.priority === data.itemsNav.length && !item.hidden
              ? "ant-menu-item-active"
              : ""
          }
          key={"m-auto-" + key}
          onClick={() => {
            data.hiddenWindows(item.name, item.priority);
          }}
        >
          <img
            key={"m-img-" + key}
            src={item.icon !== "" ? item.icon : ""}
            style={{ width: 20, height: 20, marginBottom: 3, marginRight: 5 }}
            alt={"Icono"}
          />
          {item.name}
        </Item>
      ))}
      <div
        style={{ right: 0, position: "absolute", paddingRight: 20 }}
        key={"clock"}
      >
        <Clock />
      </div>
    </Menu>
  );
}
