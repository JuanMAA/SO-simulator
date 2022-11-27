import {
  LoadingOutlined,
} from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setRefreshItem } from "../redux/antDesign/antdSlice";
import { Tooltip } from 'antd';

export default function Icon(props: any) {

  const refreshItem: boolean = useSelector((state: RootState) => state.counter.refreshItem);
  const dispatch = useDispatch();

  useEffect(() => {
    if (refreshItem) {
      setTimeout(() => dispatch(setRefreshItem(false)), 500)
    }
  }, [refreshItem]);

  return (
    <div
      hidden={!props.showIcon}
      style={{
        userSelect: "none",
        position: "fixed",
        left: props.position.left,
        top: props.position.top,
        padding: 10,
        cursor: "move",
        color: "white",
        textShadow: "1px 2px 3px #666",
        textAlign: "center"
      }}
      onMouseDown={props.onStart}
      onTouchStart={props.onStart}
      onClick={() => props.addItem()}
    >
      <div hidden={!refreshItem}>
        <LoadingOutlined size={2000} style={{ fontSize: 70, paddingBottom: 5 }} />
      </div>
      <img hidden={refreshItem}
        src={props.icon !== "" ? props.icon : ""}
        style={{
          width: 70,
          display: "block",
          margin: "auto",
          paddingBottom: 5,
          userSelect: "none",
          cursor: "pointer",
        }}
        alt="icon"
      />
      {props.name}
      {props.children}
    </div>
  );
}
