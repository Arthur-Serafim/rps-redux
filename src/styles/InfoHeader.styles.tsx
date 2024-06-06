import styled from "styled-components";

export const InfoHeaderContainer = styled.nav`
  width: 100%;
  background: #2b2b2b;
  color: white;
  & ul {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 15px 0;

    & li {
      margin-right: 50px;
      font-weight: bold;

      & span {
        color: #f1c40f;
        text-transform: uppercase;
      }
    }
  }
`;
