"use client";
import { fetchCards } from "@/app/mock/api-mock";
import { ICardType } from "@/app/page";
import { useEffect, useState } from "react";
import React from "react";
import { SortCardButton } from "../SortButton/SortButton";
import { CardsLayout } from "../CardsLayout/cardLayout";
import { ScoreUpdate } from "../Score/ScoreUpdate";


export interface IWinner {
  player?: boolean;
  bot?: boolean;
  tied?: boolean;

}



export const Board = () => {

const [sortCard, setSortCard] = useState(false);
  const [cards, setCards] = useState<ICardType[]>([]);

  const handleClick = () => {
    setSortCard(!sortCard);
    sortRandomCard();
    console.log("clicou");
  };

  useEffect(() => {
    fetchCards().then((data) => {
      setCards(data as ICardType[]);
    });

  }, [cards]);

  const sortRandomCard = () => {
    const numberBotCard = Math.floor(Math.random() * cards.length);
    let cardBot = cards[numberBotCard];
    cards.splice(numberBotCard, 1);

    console.log( 'CardBot: ', cardBot);

    const numberPlayerCard = Math.floor(Math.random() * cards.length);
    let cardPlayer = cards[numberPlayerCard];
    cards.splice(numberPlayerCard, 1);

    console.log( 'CardPlayer: ', cardPlayer);
    
  }

  const showCardPlayer = () => {
    console.log("showCardPlayer");

  }




  return(
    <body>
      <div className="board-game">

      <ScoreUpdate score={0} />

      <SortCardButton handleClick={handleClick}/>
      <CardsLayout/>

      <CardsLayout />
      </div>
    </body>
  );

};