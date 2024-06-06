import { useDispatch, useSelector } from "react-redux";
import { clearBets, setResult } from "../store/slices/gameSlice";
import { RootState } from "../store";
import { BetControlsButton } from "../styles/BetControls.styles";

const PlayButton = () => {
  const dispatch = useDispatch();

  const generateResult = () => {
    const choices = ["rock", "paper", "scissors"] as const;
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // dispatch(setResult(randomChoice));
    dispatch(setResult(randomChoice));
  };
  return <BetControlsButton onClick={generateResult}>Play</BetControlsButton>;
};

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <BetControlsButton onClick={() => dispatch(clearBets())}>
      reset
    </BetControlsButton>
  );
};
export const BetControls = () => {
  const result = useSelector((state: RootState) => state.game.result);

  return result ? <ResetButton /> : <PlayButton />;
};

export default BetControls;
