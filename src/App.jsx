import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

export const App = () => {
  console.log("App");
  const [num, setNum] = useState(0);
  //useStateは関数コンポーネントの一番上でしか使用できない
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
    //関数内の関数は、関数が終わったタイミングで実行される
    //なので例えば、setNum(num+1)を2行記載しても、1ずつしか増えない
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log("Effect");
    if (num > 0) {
      if (num % 3 == 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
    // numの値に変更があった場合にEffectを実行する
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>^_^</p>}
    </>
  );
};
