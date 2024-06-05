import styled from "styled-components";

export const GameResultContainer = styled.div`
  height: 500px;
  position: relative;

  display: flex;
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

  & span {
    color: orange;
    font-size: 16px;
    margin: 0 36px;
  }
`;
