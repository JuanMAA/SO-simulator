export default function Icon(props: any) {
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
      }}
      onMouseDown={props.onStart}
      onTouchStart={props.onStart}
      onClick={()=>{
        props.addItem()
      }}
    >
      <img
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
