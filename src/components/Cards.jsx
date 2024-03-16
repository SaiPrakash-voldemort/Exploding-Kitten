import React, { useEffect, useState } from "react";
import "./Cards.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, zero } from "../features/DefuseBomb";
import { decrementBomb, incrementBomb, zeroBomb } from "../features/BombDefuse";
const Cards = () => {
  const [cardNum, setcardNum] = useState();
  const [count, setCount] = useState(0);
  // const [defuseCard, setDefuseCard] = useState(0);
  const [score, setScore] = useState(0);
  const [bomb, setBomb] = useState(0);
  let cardValue;
  var x = 1;
  const defuseCount = useSelector((state) => state.defuseBomb.value);
  const bombCount = useSelector((state) => state.bombDefuse.value);
  const dispatch = useDispatch();

  const handleReplay = () => {
    dispatch(zeroBomb(0));
    dispatch(zero(0));
    setcardNum(null);
    setCount(0);
    setDefuseCard(0);
    setScore(0);
    setBomb(0);
  };
  const handleClick = () => {
    setcardNum(Math.floor(Math.random() * 4));
    //Shuffle Card Logic
    if (cardNum == 1) {
      dispatch(zero(0));
      setCount(0);
    } else {
      setCount(count + 1);
    }
    //Defuse Card Logic
    if (cardNum == 3) {
      dispatch(increment());
    }
    //Score Logic
    if (count >= 5) {
      setScore(score + 1);
    }
    //Bomb Card Logic
    if (cardNum == 2) {
      dispatch(incrementBomb());
    }
    //Bomb and Defuse Logic
    if (bombCount > 0 && defuseCount > 0) {
      dispatch(decrementBomb());
      dispatch(decrement());
      console.log(bombCount, defuseCount);
    }
  };

  console.log(cardNum);

  if (cardNum == 0) {
    cardValue = "/src/imgs/cat.mp4";
  } else if (cardNum == 1) {
    cardValue = "/src/imgs/shuffle.mp4";
  } else if (cardNum == 2) {
    cardValue = "/src/imgs/bomb.mp4";
  } else if (cardNum == 3) {
    cardValue = "/src/imgs/bombDefuse.mp4";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-950">
      <div className="flex justify-between w-4/5 p-2 m-2 text-2xl font-bold text-white">
        <h1>Defuse Card:{defuseCount}</h1>
        <h1>Score:{score}</h1>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-4/5 gap-3 bg-white shadow-2xl h-4/5 rounded-2xl">
        <div className="flex flex-wrap items-center justify-center w-4/5 gap-3 bg-white h-4/5 rounded-2xl">
          <div
            className="flex items-center justify-center shadow-2xl rounded-2xl h-[450px] w-[300px] bg-lime-600"
            onClick={handleClick}
          ></div>
          <div className="cardGen flex items-center justify-center shadow-2xl rounded-2xl h-[450px] w-[300px] transition ease-in-out 3s">
            {bombCount > 0 ? (
              <h1>You Lost You got bomb</h1>
            ) : count >= 5 ? (
              <h1>Game Over!! You Won You have drawn all cards</h1>
            ) : (
              <video
                src={cardValue}
                loop
                autoPlay
                height="450px"
                width="300px"
              ></video>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          {(count >= 5 || bombCount > 0) && (
            <button
              onClick={handleReplay}
              href="#_"
              class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
            >
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Replay
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
