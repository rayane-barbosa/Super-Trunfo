"use client";
import React, { useState } from "react";
import { IWinner } from "@/app/components/BoardGame/Board";

interface IScoreUpdateProps {
  score: number;
}

export const ScoreUpdate = ({ score }: IScoreUpdateProps): React.ReactNode  => {
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const handleUpdate = (winner: IWinner) => {
    if (winner.player === true) {
      setPlayerScore(playerScore + 1);
    } else if (winner.bot === true) {
      setBotScore(botScore + 1);
    } else {     
      console.log("Tied");
    }
    

    return (
      <>
        {" "}
        <h1 className="text-2xl font-bold text-center">
          Player Score: {score} / Bot Score: {score}{" "}
        </h1>
      </>
    );
  };
  return handleUpdate({ });
};
