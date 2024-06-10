import styled, { css } from "styled-components";
import { COLORS } from "./colors";

export const StyledBetButton = styled.button<{
  type: "rock" | "paper" | "scissors";
}>`
  margin: 5px;
  font-size: 16px;
  width: 300px;
  height: 200px;
  font-size: 32px;
  text-transform: capitalize;
  position: relative;
  border-radius: 5px;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;

  & span {
    width: 300px;
    position: absolute;
    bottom: 15px;
    left: 0;
    align-text: center;
  }

  ${({ type }) => css`
    background: ${COLORS[type].background};
    border: 2px solid ${COLORS[type].border};
    color: ${COLORS[type].color};
  `}
`;

export const BetChip = styled.div`
  width: 75px;
  height: 75px;
  min-width: 75px;
  min-height: 75px;
  border-radius: 50%;
  border: 5px solid ${COLORS.betChip.border};
  color: ${COLORS.dark};
  background: ${COLORS.betChip.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  font-weight: bold;
  font-size: 24px;
`;
