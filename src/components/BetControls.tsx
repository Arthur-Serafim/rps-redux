import { useDispatch, useSelector } from "react-redux";
import { clearBets, setResult } from "../store/slices/gameSlice";
import { RootState } from "../store";

const PlayButton = () => {
  const dispatch = useDispatch();

  const generateResult = () => {
    const choices = ["rock", "paper", "scissors"] as const;
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // dispatch(setResult(randomChoice));
    dispatch(setResult("rock"));
  };
  return <button onClick={generateResult}>Play</button>;
};

const ResetButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(clearBets())}>reset</button>;
};
export const BetControls = () => {
  const result = useSelector((state: RootState) => state.game.result);

  return result ? <ResetButton /> : <PlayButton />;
};

export default BetControls;
