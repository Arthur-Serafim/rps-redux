import { useSelector } from "react-redux";
import { RootState } from "../store";
import { InfoHeaderContainer } from "../styles/InfoHeader.styles";

export const InfoHeader = () => {
  const balance = useSelector((state: RootState) => state.game.balance);
  const bets = useSelector((state: RootState) => state.game.bets);
  const won = useSelector((state: RootState) => state.game.won);

  return (
    <InfoHeaderContainer>
      <ul>
        <li>Balance: {balance}</li>
        <li>Bet: {bets.length * 500}</li>
        <li>Win: {won}</li>
      </ul>
    </InfoHeaderContainer>
  );
};

export default InfoHeader;
