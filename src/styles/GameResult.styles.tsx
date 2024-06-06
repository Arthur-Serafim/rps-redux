import styled from "styled-components";

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

export const IndividualBets = styled.p`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;

  & span {
    color: orange;
    font-size: 16px;
    margin: 0 36px;
  }
`;

export const BetResult = styled.h2<{ won: boolean }>`
  font-size: 42px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: ${({ won }) => (won ? "rgb(0, 255, 0)" : "rgb(255 ,0 ,0)")};
  font-weight: bold;
  margin-top: 0;
`;
