import React from "react";
import { global } from "styled-jsx/css";
import { Board } from "./components/BoardGame/Board";

export interface ICardType {
  name: string;
  image: string;
  attributes: {
    attack: number;
    defense: number;
    magic: number;
  };
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <Board />       


        
      </div>
    </main>
  )
}
