import styled from "styled-components";
import { COLORS } from "./colors";

export const InfoHeaderContainer = styled.nav`
  width: 100%;
  background: ${COLORS.dark};
  color: white;
`;

export const InfoList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 15px 0;
`;

export const InfoListItem = styled.li`
  margin-right: 50px;
  font-weight: bold;
`;

export const InfoLabel = styled.span`
  color: ${COLORS.gold};
  text-transform: uppercase;
`;
