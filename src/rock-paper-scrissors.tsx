import { useState } from "react";

interface ItemProps {
  item: string;
  click: (item: string) => void;
}

function Item(props: ItemProps): JSX.Element {
  return (
    <>
      <button className="item" onClick={() => props.click(props.item)}>
        {props.item}
      </button>
    </>
  );
}

export function Game(): JSX.Element {
  const itemArray = ["🪨", "📄", "✂️"];
  const randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
  const [result, setResult] = useState("");
  const [oppo, setOppo] = useState(randomItem);
  const [score, setScore] = useState(0);
  const handleSelection = (item: string) => {
    checkResult(item);
    setOppo(randomItem);
  };
  const checkResult = (item: string) => {
    if (item === randomItem) {
      setResult("DRAW");
    } else if (item === "🪨" && randomItem === "📄") {
      setResult("YOU LOSE");
      setScore((pre) => pre - 1);
    } else if (item === "🪨" && randomItem === "✂️") {
      setResult("YOU WIN");
      setScore((pre) => pre + 1);
    } else if (item === "📄" && randomItem === "✂️") {
      setResult("YOU LOSE");
      setScore((pre) => pre - 1);
    } else if (item === "📄" && randomItem === "🪨") {
      setResult("YOU WIN");
      setScore((pre) => pre + 1);
    } else if (item === "✂️" && randomItem === "🪨") {
      setResult("YOU LOSE");
      setScore((pre) => pre - 1);
    } else if (item === "✂️" && randomItem === "📄") {
      setResult("YOU WIN");
      setScore((pre) => pre + 1);
    } else {
      setResult("");
    }
  };

  const itemButtons = itemArray.map((item, index) => (
    <Item key={index} item={item} click={() => handleSelection(item)} />
  ));

  return (
    <>
      {itemButtons}
      <h1>{oppo}</h1>
      {result}
      <br />
      Score: {score}
    </>
  );
}
