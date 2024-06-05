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
          background: rgba(25, 0, 255, 0.2);
          border: 2px solid rgb(25, 0, 255);
          color: rgb(25, 0, 255);
        `;
      case "paper":
        return css`
          background: rgba(0, 205, 61, 0.2);
          border: 2px solid rgb(0, 205, 61);
          color: rgb(0, 205, 61);
        `;
      case "scissors":
        return css`
          background: rgba(253, 17, 17, 0.2);
          border: 2px solid rgb(253, 17, 17);
          color: rgb(253, 17, 17);
        `;
    }
  }}
`;

export const BetChip = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  border: 5px solid pink;
  color: pink;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
