import styled from "styled-components";

export const InfoHeaderContainer = styled.nav`
  width: 100%;
  background: black;
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
    }
  }
`;
