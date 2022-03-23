import React, { useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Row,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  LoginOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { wallpapers } from "../dummy";

interface Props {
  showWindows: Function;
}

export default function Login(data: Props) {
  const [isOpen, setIsOpen] = useState(true as boolean);
  const [loading, setLoading] = useState(true as boolean);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundImage: `url(${
            wallpapers[Math.floor(Math.random() * 2)].background
          })`,
          backgroundSize: "cover",
          //filter: "blur(3px)"
          opacity: !isOpen ? "0" : "1",
          transition: "all 0.3s 0s ease-out",
          animation: "pulse 1.2s ease-in-out",
          visibility: !isOpen ? "hidden" : "visible",
        }}
      >
        <Row
          style={{
            height: "100%",
          }}
        >
          <Col
            hidden={loading}
            xs={24}
            style={{ margin: "auto", textAlign: "center", color: "white" }}
          >
            <LoadingOutlined style={{ fontSize: 70, marginBottom: 20 }} spin />
            <label style={{ fontSize: 20 }}>
              <br />
              Iniciando sesion ...
            </label>
          </Col>
          <Col hidden={!loading} xs={24} style={{ margin: "auto" }}>
            <div style={{ textAlign: "center", fontSize: 40, margin: "auto" }}>
              <Avatar
                style={{
                  width: 200,
                  height: 200,
                  fontSize: 200,
                  textAlign: "center",
                }}
                icon={<UserOutlined />}
              />
              <div style={{ color: "white", fontSize: 20, padding: 10 }}>
                <label style={{ fontWeight: "bold" }}>
                  {document.domain.replace("www.", "").split(".")[0]}
                </label>
                .{document.domain.replace("www.", "").split(".")[1]}
              </div>
            </div>
            <Form
              size="large"
              style={{
                width: "30em",
                margin: "auto",
                paddingTop: 30,
                paddingLeft: 25,
                paddingRight: 25,
                paddingBottom: 5,
                borderRadius: 5,
                backgroundColor: "rgba(255,255,255,0.9)",
                transition: "all 1.3s 0s ease-out",
                animation: "pulse 2.2s ease-in-out",
              }}
              name="normal_login"
              className="login-form"
              onFinish={async (e: any) => {
                setLoading(false);
                setTimeout(() => {
                  setIsOpen(false);
                  //setLoading(true);
                  data.showWindows(true);
                }, 3000);
              }}
            >
              <Form.Item name="Usuario">
                <Input
                  defaultValue={"Invitado"}
                  value={"Invitado"}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Usuario"
                />
              </Form.Item>
              <Form.Item name="Contraseña">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Item>
              <div></div>
              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  <LoginOutlined />
                  Ingresar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}
