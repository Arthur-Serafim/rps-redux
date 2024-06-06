import styled, { css } from "styled-components";

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

  ${({ type }) => {
    switch (type) {
      case "rock":
        return css`
          background: rgba(0, 0, 255, 0.3);
          border: 2px solid rgb(0, 0, 255);
          color: rgb(0, 0, 255);
        `;
      case "paper":
        return css`
          background: rgba(0, 255, 0, 0.3);
          border: 2px solid rgb(0, 255, 0);
          color: rgb(0, 255, 0);
        `;
      case "scissors":
        return css`
          background: rgba(255, 0, 0, 0.3);
          border: 2px solid rgb(255, 0, 0);
          color: rgb(255, 0, 0);
        `;
    }
  }}
`;

export const BetChip = styled.div`
  width: 75px;
  height: 75px;
  min-width: 75px;
  min-height: 75px;
  border-radius: 50%;
  border: 5px solid rgb(25, 0, 255);
  color: #2b2b2b;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  font-weight: bold;
  font-size: 24px;
`;
