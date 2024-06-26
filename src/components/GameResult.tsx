import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  BetResult,
  GameResultContainer,
  IndividualBets,
  PositionsPicking,
  WinnerResult,
} from "../styles/GameResult.styles";
import currency from "currency.js";
import { Bet, revealPlay } from "../store/slices/gameSlice";

const GameResult: React.FC = () => {
  const dispatch = useDispatch();

  const bets = useSelector((state: RootState) => state.game.bets);
  const result = useSelector((state: RootState) => state.game.result);
  const winner = useSelector((state: RootState) => state.game.winner);
  const won = useSelector((state: RootState) => state.game.won);

  const uniqueBets = useMemo(() => [...new Set(bets)], [bets]);

  const isDraw = useMemo(
    () => winner && result && !bets.includes(winner) && bets.includes(result),
    [winner, result, bets]
  );

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        dispatch(revealPlay());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [result, dispatch]);

  const renderIndividualBets = useCallback(
    () =>
      uniqueBets.map((item) => (
        <IndividualBets key={item}>
          <p>{result}</p> <span>VS</span> <p>{item}</p>
        </IndividualBets>
      )),
    [uniqueBets, result]
  );

  const renderWinnerResult = (winner: Bet) => (
    <div>
      <BetResult won={bets.includes(winner) || !!isDraw}>
        {isDraw ? "Draw" : bets.includes(winner) ? winner : result}
        {!isDraw && " won"}
      </BetResult>
      {!!won && !isDraw && (
        <WinnerResult>
          <span>You win</span> {currency(won).format()}
        </WinnerResult>
      )}
    </div>
  );

  return (
    <GameResultContainer>
      {!winner && result && renderIndividualBets()}
      {winner && result && renderWinnerResult(winner)}
      {!result && <PositionsPicking>pick your positions</PositionsPicking>}
    </GameResultContainer>
  );
};

export default GameResult;
