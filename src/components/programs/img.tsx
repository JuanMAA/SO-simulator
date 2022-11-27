
import { Image } from 'antd';
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleImage } from "../../redux/antDesign/antdSlice";

export default function ImgProgram() {
  const dispatch = useDispatch();

  const isVisible: boolean = useSelector((state: RootState) => state.counter.visibleImage);
  const srcImg: string = useSelector((state: RootState) => state.counter.visibleSrc);

  return (
    <>
      <Image
        hidden={true}
        preview={{
          visible: isVisible,
          src: srcImg,
          onVisibleChange: value => dispatch(setVisibleImage(value))
        }}
      />
    </>
  );
}
