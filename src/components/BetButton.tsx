import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeBet } from "../store/slices/gameSlice";
import { BetChip, StyledBetButton } from "../styles/BetButton.styles";
import { RootState } from "../store";

interface BetButtonProps {
  bet: "rock" | "paper" | "scissors";
}

const BetButton: React.FC<BetButtonProps> = ({ bet }) => {
  const dispatch = useDispatch();
  const bets = useSelector((state: RootState) => state.game.bets);

  const currentBets = useMemo(
    () => bets.filter((item) => item === bet),
    [bets, bet]
  );

  const handleClick = () => {
    dispatch(placeBet(bet));
  };

  return (
    <StyledBetButton type={bet} onClick={handleClick}>
      {currentBets.length > 0 && <BetChip>{currentBets.length * 500}</BetChip>}
      <span>{bet}</span>
    </StyledBetButton>
  );
};

export default BetButton;
