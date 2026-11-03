"use client";

import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

type FavoriteButtonProps = {
  title: string;
  className: string;
};

export function FavoriteButton({ title, className }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={
        isFavorite
          ? `Remover ${title} dos favoritos`
          : `Adicionar ${title} aos favoritos`
      }
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite((favorite) => !favorite)}
      className={className}
    >
      <IoMdHeartEmpty size={22} color={isFavorite ? "red" : "#ed8780"} />
    </button>
  );
}
