import { Layout } from "antd";
import { Component } from "react";
import { wallpapers } from "../dummy";

export class Desktop extends Component {
  target: null | any;
  distX: number;
  distY: number;
  wallpaper: string = wallpapers[Math.floor(Math.random() * 2)].background;

  constructor(props: any) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.target = null;
    this.distX = 0;
    this.distY = 0;
  }

  onStart(e: any) {
    this.target = e.target;
    if (
      this.target &&
      typeof this.target.className !== "object" &&
      !this.target.className.includes("rdw-")
    ) {
      const evt = e.type === "touchstart" ? e.changedTouches[0] : e;
      this.distX = Math.abs(this.target.offsetLeft - evt.clientX);
      this.distY = Math.abs(this.target.offsetTop - evt.clientY);
      this.target.style.pointerEvents = "none";
    }
  }

  onEnd() {
    if (this.target) {
      this.target.style.pointerEvents = "initial";
    }
  }

  onMove(e: any) {
    if (this.target) {
      if (
        this.target.style.pointerEvents === "none" &&
        this.target.className !== undefined &&
        typeof this.target.className !== "object" &&
        !this.target.className.includes("ant-") &&
        !this.target.className.includes("react-resizable") &&
        !this.target.className.includes("rdw-") &&
        !this.target.className.includes("public-DraftStyleDefault")
      ) {
        const evt = e.type === "touchmove" ? e.changedTouches[0] : e;
        this.target.style.left = `${evt.clientX - this.distX}px`;
        this.target.style.top = `${evt.clientY - this.distY}px`;
      }
    }
  }

    render() {
    const { children }: any = this.props;

    return (
      <Layout
        key={"layout-p"}
        className="dragger-area"
        onMouseMove={this.onMove}
        onTouchMove={this.onMove}
        onMouseUp={this.onEnd}
        onTouchEnd={this.onEnd}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      >
        <img
          key={"background-p"}
          draggable="false"
          style={{
            height: "100%",
            pointerEvents: "none",
            userSelect: "none",
          }}
          src={this.wallpaper}
          alt="Fondo de Pantalla"
        />
        {children(this.onStart)}
      </Layout>
    );
  }
}
