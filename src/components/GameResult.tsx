import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {
  GameResultContainer,
  IndividualBets,
  PositionsPicking,
} from "../styles/GameResult.styles";

const GameResult: React.FC = () => {
  const bets = useSelector((state: RootState) => state.game.bets);
  const result = useSelector((state: RootState) => state.game.result);
  const winner = useSelector((state: RootState) => state.game.winner);
  const uniqueBets = [...new Set(bets)];
  const [displayWinner, setDisplayWinner] = useState("");

  useEffect(() => {
    if (!winner) {
      setDisplayWinner("");
    } else {
      setTimeout(() => {
        setDisplayWinner(winner);
      }, 2000);
    }
  }, [winner]);

  return (
    <GameResultContainer>
      {!displayWinner &&
        result &&
        uniqueBets.map((item) => (
          <IndividualBets>
            {result} <span>VS</span> {item}
          </IndividualBets>
        ))}
      {displayWinner && result && (
        <IndividualBets>{winner} wins</IndividualBets>
      )}
      {!result && <PositionsPicking>pick your positions</PositionsPicking>}
    </GameResultContainer>
  );
};

export default GameResult;
