import { Calendar, Popover } from "antd";
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from 'uuid';

export class Clock extends React.Component<any, any> {
  intervalID: any;

  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    } as Readonly<{}> | null | any;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render() {
    return (
      <Popover
        placement="topRight"
        content={
          <Calendar
            key={"calendario"}
            fullscreen={false}
            style={{ width: 500, height: 350 }}
          />
        }
        trigger="hover"
      >
        <div key={uuidv4()} style={{ cursor: "pointer" }}>
          <CalendarOutlined /> {this.state.time}
        </div>
      </Popover>
    );
  }
}
