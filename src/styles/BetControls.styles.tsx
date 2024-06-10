import styled from "styled-components";
import { COLORS } from "./colors";

export const BetControlsButton = styled.button`
  border-radius: 50px;
  padding: 20px 45px;
  background: ${COLORS.betControlsButton.background};
  border: 2px solid ${COLORS.gold};
  color: ${COLORS.gold};
  box-shadow: none;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 25px;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
