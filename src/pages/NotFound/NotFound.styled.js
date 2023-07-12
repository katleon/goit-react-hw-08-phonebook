import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 364px;
  padding: 25px;
  background: white;
  color: rgb(14, 30, 37);
  border-radius: 8px;
  box-shadow: 0px 12px 22px 3px rgba(0, 0, 0, 0.36);
  height: auto;
`;
export const Header = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 24px;
`;

export const StyledLink = styled(Link)`
  border-radius: 10px;
  padding: 8px;
  background: #2a3166;
  color: white;
  &:hover {
    background: #e60576;
    box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.31) inset;
  }
`;
