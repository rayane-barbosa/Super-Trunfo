"use client";
import React from "react";


interface SortCardButtonProps {
  handleClick: () => void;
}

export const SortCardButton = ({ handleClick }: SortCardButtonProps) => {
  return (
    <>
      {" "}
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sortear
      </button>
    </>
  );
};
