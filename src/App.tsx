/* eslint-disable array-callback-return */
import { notification, MenuTheme, ConfigProvider, Dropdown, Menu } from "antd";
import { Desktop } from "./class/Desktop";
import Icon from "./components/icon";
import Taskbar from "./components/taskbar";
import Window from "./components/window";
import Login from "./components/login";
import { CSSProperties, useEffect, useState } from "react";
import { dummyItem } from "./dummy";
import "draft-js/dist/Draft.css";
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import esEs from "antd/es/locale/es_ES";
import ImgProgram from "./components/programs/img";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import {
  FileOutlined,
  FolderOutlined,
  RedoOutlined,
  DeleteOutlined,
  ProfileOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { Modal } from "antd";
import { message } from "antd";
import { setRefreshItem } from "./redux/antDesign/antdSlice";

interface ItemsNavegationInterface {
  name: string,
  priority: number,
  icon: string,
  hidden: boolean
}

export default function App() {

  document.oncontextmenu = (e) => e.preventDefault();
  document.title = `Portafolio - ${window.location.hostname}`;

  const [showWindows, setShowWindows] = useState(false as boolean);
  const [itemsNav, setItemsNav] = useState([] as ItemsNavegationInterface[]);
  const [titleItem, setTitleItem] = useState("" as any);
  const [icons] = useState(dummyItem);

  const theme: MenuTheme = useSelector((state: RootState) => state.counter.theme);
  const size: SizeType = useSelector((state: RootState) => state.counter.size);
  //const titleItem: string = useSelector((state: RootState) => state.counter.titleItem);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      return notification.open({
        message: "Modo oscuro activado",
        description: "Para desactivarlo dirígete a la barra de tareas.",
      });
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      return notification.open({
        message: "Modo oscuro activado",
        description: "Para desactivarlo dirígete a la barra de tareas.",
      });
    }
  }, [theme]);

  const style = {
    container: {
      transition: "all 1s 0s ease-out",
      animation: "pulse 3s ease-in-out",
      opacity: showWindows ? "1" : "0",
      visibility: showWindows ? "visible" : "hidden",
      animationFillMode: "both"
    } as CSSProperties
  };

  const menu = [
    {
      label: 'Actualizar',
      key: '1',
      icon: <RedoOutlined />,
      onClick: () => {
        dispatch(setRefreshItem(true));
        setTimeout(() => message.success('Actualizacion realizada correctamente!'), 500);
      }
    },
    {
      label: 'Nuevo',
      key: '3',
      icon: <ProfileOutlined />,
      children: [
        {
          label: 'Documento de texto',
          key: 'nuevo-1',
          icon: <FileOutlined />,
          onClick: () => {
             message.warning('Opción momentáneamente deshabilitada');
          }
        },
        {
          label: 'Carpeta',
          key: 'nuevo-2',
          icon: <FolderOutlined />,
          onClick: () => {
            message.warning('Opción momentáneamente deshabilitada');
          }
        }
      ],
    },
    //{
    //  label: 'Propiedades',
    //  key: '4',
    //  icon: <ProfileOutlined />,
    //  onClick: (data: any) => {
    //    Modal.confirm({
    //      content: 'Bla bla ...',
    //      okText: 'Eliminar',
    //      cancelText: 'Cancelar',
    //      centered: true,
    //    });
    //  }
    //},
  ]

  const menuIcons = [
    {
      label: 'Eliminar elemento',
      key: '1',
      icon: <DeleteOutlined />,
      onClick: (data: any) => {
        console.log("titleItem", titleItem)
        if (titleItem) {
          Modal.confirm({
            title: `Seguro/a que desea eliminar este elemento ${titleItem}`,
            icon: <ExclamationCircleOutlined />,
            okText: 'Eliminar',
            cancelText: 'Cancelar',
            centered: true,
            onOk: () => {
              message.success('Elemento eliminado correctamente!');
            }
          });
        } else {
          message.warning('El elemento no se puede eliminar');
        }
      }
    },
    {
      label: 'Renombrar elemento',
      key: '2',
      icon: <FileTextOutlined />,
    }
  ]

  const pestaña = [
    {
      label: 'Cerrar elemento',
      key: '1',
      icon: <DeleteOutlined />
    }
  ]

  const [menuOverlay, setMenuOverlay] = useState(menu as any);

  return (
    <>
      <ConfigProvider locale={esEs} componentSize={size}>
        <Login showWindows={() => setShowWindows(true)} />
        <ImgProgram />
        <Dropdown overlay={<Menu
          items={menuOverlay}
        />} trigger={['contextMenu']}>
          <div style={style.container} onAuxClick={(data: any) => {
            if (data.target.title) {
              console.log("--->", data.target.title)
              setTitleItem(data.target.title);
            }
            try {
              if (data?.target) {
                if (data?.target?.className?.includes("dragger-area") || data?.target?.className?.includes("ant-row")) {
                  setMenuOverlay(menu)
                } else if (data?.target?.className?.includes("ant-menu-item-active") || data?.target?.className?.includes("ant-menu-title-content")) {
                  setMenuOverlay(pestaña)
                } else {
                  if (data.target.title.includes(".jpg")) {
                    setMenuOverlay(menuIcons)
                  } else {
                    setMenuOverlay(menuIcons)
                  }
                }
              }
            } catch (error) {
              console.log(error)
            }
          }}>
            <Desktop key={"desktop-p"}>
              {(onStart: any) => {
                return (
                  <>
                    {icons.map((data: any, index: number) => (
                      <>
                        <Icon
                          key={"iconos-" + index}
                          onStart={onStart}
                          showIcon={data.showIcon}
                          name={data.name}
                          index={index}
                          position={
                            data.position
                              ? {
                                left: data.position.left,
                                top: data.position.top,
                              }
                              : {}
                          }
                          addItem={() => {
                            if (
                              !itemsNav
                                .map((e: any) => {
                                  return e.name;
                                })
                                .includes(data.name)
                            ) {
                              let newData = data;
                              newData.hidden = false;
                              newData.priority = itemsNav.length + 1;
                              if (
                                !itemsNav
                                  .map((e: any) => {
                                    return e.name;
                                  })
                                  .includes(data.name)
                              ) {
                                setItemsNav([...itemsNav, newData]);
                              }
                            } else {
                            }
                          }}
                          icon={data.icon}
                        />
                        <Window
                          key={"window-" + index}
                          onStart={onStart}
                          itemsNav={itemsNav}
                          index={index}
                          addItems={(item: any) => {
                            console.log("item",item)
                            var newData: any = icons.find((data: any) => {
                              return data.name === item.name;
                            });
                            console.log("newData",newData)
                            if (item !== undefined && newData !== undefined) {
                              newData.hidden = false;
                              newData.priority = itemsNav.length + 1;
                              if (
                                !itemsNav
                                  .map((e: any) => {
                                    return e.name;
                                  })
                                  .includes(newData.name)
                              ) {
                                console.log("[...itemsNav, newData]",[...itemsNav, newData])
                                setItemsNav([...itemsNav, newData]);
                              }
                            }
                          }}
                          item={
                            itemsNav.filter((e: any) => {
                              return e.name === data.name;
                            })[0]
                          }
                          hiddenWindows={(name: any) => {
                            let newData = [...itemsNav];
                            newData.map((e: any) => {
                              if (name === e.name) e.hidden = !e.hidden;
                            });
                            setItemsNav(newData);
                          }}
                          closeWindows={(name: any) => {
                            setItemsNav([
                              ...itemsNav.filter((e: any) => {
                                return e.name !== name;
                              }),
                            ]);
                          }}
                          setPriority={(priority: number) => {
                            let newData = [...itemsNav];
                            newData
                              .map((e: any) => {
                                if (newData.length === e.priority) e.priority = 0;
                                return e;
                              })
                              .map((e: any) => {
                                if (priority === e.priority)
                                  e.priority = newData.length;
                                return e;
                              })
                              .map((e: any) => {
                                if (0 === e.priority) e.priority = priority;
                                return e;
                              });
                            setItemsNav(newData);
                          }}
                        />
                      </>
                    ))}
                  </>
                );
              }}
            </Desktop>
            <Taskbar
              itemsNav={itemsNav}
              icons={icons}
              hiddenWindows={(name: string, priority: any) => {
                let newData = [...itemsNav];
                newData.map((e: any): any => {
                  if (name === e.name) e.hidden = !e.hidden;
                });
                newData = [...itemsNav]
                  .filter((e: any) => {
                    if (newData.length === e.priority) e.priority = 0;
                    return e;
                  })
                  .filter((e: any) => {
                    if (priority === e.priority) e.priority = newData.length;
                    return e;
                  })
                  .filter((e: any) => {
                    if (0 === e.priority) e.priority = priority;
                    return e;
                  });
                setItemsNav(newData);
              }}
            />
          </div>
        </Dropdown>
      </ConfigProvider>
    </>
  );
}
