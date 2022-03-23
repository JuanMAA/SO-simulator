/* eslint-disable array-callback-return */
import { notification, MenuTheme } from "antd";
import { Desktop } from "./class/Desktop";
import Icon from "./components/icon";
import Taskbar from "./components/taskbar";
import Window from "./components/window";
import Login from "./components/login";
import { useEffect, useState } from "react";
import { dummyItem } from "./dummy";
import "draft-js/dist/Draft.css";

export default function App() {
  document.oncontextmenu = (e: any) => e.preventDefault();
  document.title = `Portafolio - ${window.location.hostname}`;

  const [darkMode, setDarkMode] = useState("light" as MenuTheme);
  const [itemsNav, setItemsNav] = useState([] as Object[]);
  const [showWindows, setShowWindows] = useState(false as boolean);

  const [icons] = useState(dummyItem);

  useEffect(() => {
    if (darkMode === "dark") {
      return notification.open({
        message: "Modo oscuro activado",
        description: "Para desactivarlo dirígete a la barra de tareas.",
      });
    }
  }, [darkMode]);

  return (
    <>
      <Login showWindows={() => setShowWindows(true)} />
      <div
        style={{
          opacity: !showWindows ? "0" : "1",
          transition: "all 1s 0s ease-out",
          animation: "pulse 3s ease-in-out",
          animationFillMode: "both",
          visibility: !showWindows ? "hidden" : "visible",
        }}
      >
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
                      darkMode={darkMode}
                      addItems={(item: any) => {
                        console.log("item", item);
                        var newData: any = icons.find((data) => {
                          return data.name === item.name;
                        });
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
          darkMode={darkMode}
          itemsNav={itemsNav}
          icons={icons}
          setDarkMode={(mode: MenuTheme) => {
            setDarkMode(mode);
          }}
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
    </>
  );
}
