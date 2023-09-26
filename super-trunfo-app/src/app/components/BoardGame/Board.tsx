"use client";
import { fetchCards } from "@/app/mock/api-mock";
import { CardType } from "@/app/page";
import { useEffect, useState } from "react";
import React from "react";
import { SortCardButton } from "../SortButton/SortButton";
import { CardsLayout } from "../CardsLayout/cardLayout";
import { data } from "autoprefixer";

export const Board = () => {

const [sortCard, setSortCard] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);

  const handleClick = () => {
    setSortCard(!sortCard);
    console.log("clicou");
  };

  useEffect(() => {
    fetchCards().then((data) => {
      setCards(data as CardType[]);
    });

  }, [cards]);


  return(
    <body>
      <SortCardButton handleClick={handleClick}/>

      <CardsLayout />

      <CardsLayout />
    </body>
  );

};