import { useSelector } from "react-redux";
import { RootState } from "../store";
import { InfoHeaderContainer, InfoList, InfoListItem, InfoLabel } from "../styles/InfoHeader.styles";
import currency from "currency.js";

const InfoHeader: React.FC = () => {
  const { balance, bets, won } = useSelector((state: RootState) => state.game);

  const formattedBalance = currency(balance).format();
  const formattedBets = currency(bets.length * 500).format();
  const formattedWon = currency(won).format();

  return (
    <InfoHeaderContainer>
      <InfoList>
        <InfoListItem>
          <InfoLabel>Balance:</InfoLabel> {formattedBalance}
        </InfoListItem>
        <InfoListItem>
          <InfoLabel>Bet:</InfoLabel> {formattedBets}
        </InfoListItem>
        <InfoListItem>
          <InfoLabel>Win:</InfoLabel> {formattedWon}
        </InfoListItem>
      </InfoList>
    </InfoHeaderContainer>
  );
};

export default InfoHeader;
