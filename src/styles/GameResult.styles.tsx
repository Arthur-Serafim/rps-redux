import styled from "styled-components";
import { COLORS } from "./colors";

export const GameResultContainer = styled.div`
  height: 500px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PositionsPicking = styled.h3`
  text-transform: uppercase;
  color: orange;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const IndividualBets = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 200px 25px 200px;
  margin-bottom: 25px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;
  text-align: center;
  & p {
    margin: 0;
    
    &:first-child {
      justify-self: end;
    }

    &:last-child {
      justify-self: start;
    }
  }

  & span {
    color: orange;
    font-size: 16px;
    align-self: end;
  }
`;

export const BetResult = styled.h2<{ won: boolean }>`
  font-size: 42px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: ${({ won }) => (won ? COLORS.betResult.won : COLORS.betResult.lost)};
  font-weight: bold;
  margin-top: 0;
`;

export const WinnerResult = styled.p`
  text-transform: uppercase;
  color: white;
  font-size: 24px;
  font-weight: bold;

  & span {
    color: orange;
  }
`;
