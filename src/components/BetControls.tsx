import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBets, startPlay } from "../store/slices/gameSlice";
import { RootState } from "../store";
import { BetControlsButton } from "../styles/BetControls.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const PlayButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const dispatch = useDispatch();

  const generateResult = () => {
    dispatch(startPlay());
  };

  return (
    <BetControlsButton ref={ref} onClick={generateResult} {...props}>
      Play
    </BetControlsButton>
  );
});

const ClearButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const dispatch = useDispatch();

  return (
    <BetControlsButton
      ref={ref}
      onClick={() => dispatch(clearBets())}
      {...props}
    >
      Clear
    </BetControlsButton>
  );
});

export const BetControls: React.FC = () => {
  const result = useSelector((state: RootState) => state.game.result);
  const winner = useSelector((state: RootState) => state.game.winner);

  const isDisabled = result && !winner;

  return result ? (
    <ClearButton ref={null} disabled={!!isDisabled} />
  ) : (
    <PlayButton ref={null} disabled={!!isDisabled} />
  );
};

export default BetControls;
