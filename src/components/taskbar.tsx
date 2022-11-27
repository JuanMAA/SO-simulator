import { Col, Menu, Row } from "antd";
import {
  MenuOutlined,
  LogoutOutlined,
  BgColorsOutlined,
  CalendarOutlined,
  EyeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Clock } from "../class/Clock";
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/antDesign/antdSlice'
import { CSSProperties } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  itemsNav?: any;
  icons?: any;
  hiddenWindows: Function;
}

export default function Taskbar(data: Props) {

  const { ItemGroup, SubMenu, Item } = Menu;
  const theme = useSelector((state: RootState) => state.counter.theme);
  const dispatch = useDispatch();

  const style = {
    menu: {
      position: "fixed",
      bottom: 0,
      width: "100%"
    } as CSSProperties,
    subMenu: {
      fontSize: 15
    } as CSSProperties,
    clock: {
      right: 0,
      position: "absolute",
      paddingRight: 20
    } as CSSProperties,
    image: {
      width: 20,
      height: 20,
      marginBottom: 3,
      marginRight: 5
    } as CSSProperties
  };

  return (
    <Menu
      key={uuidv4()}
      selectedKeys={["SubMenu"]}
      mode="horizontal"
      theme={theme}
      style={style.menu}
    >
      <SubMenu
        key={"sm-1"}
        icon={<MenuOutlined />}
        title="Inicio"
        style={style.subMenu}
      >
        <ItemGroup title="Opciones">
          <SubMenu
            key="ig-sm-2"
            icon={<BgColorsOutlined />}
            title="Tema"
          >
            <Item key="ig-sm-2-item-1">Dark</Item>
            <Item key="ig-sm-2-item-2">Light</Item>
            <Item key="ig-sm-2-item-3">Compact</Item>
          </SubMenu>
          <SubMenu
            key="ig-sm-1"
            icon={<UnorderedListOutlined />}
            title="Idioma"
            disabled={true}
          >
            <Item key="ig-sm-1-item-1">Español</Item>
            <Item key="ig-sm-1-item-2">Ingles</Item>
          </SubMenu>
          <Item
            icon={<EyeOutlined />}
            key="ig-sm-3-item-6"
            onClick={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "Desactivar" : "Activar"} modo oscuro
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
            style={style.image}
            alt={"Icono"}
          />
          {item.name}
        </Item>
      ))}
      <div
        style={style.clock}
        key={"clock"}
      >
        <Row>
          <Col xs={0} md={24}>
            <Clock />
          </Col>
        </Row>
      </div>
    </Menu>
  );
}
