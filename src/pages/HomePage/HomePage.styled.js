import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Center = styled.div`
  position: relative;
  padding: 50px 25px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const MainHeader = styled.h1`
  font-size: 80px;
  padding: 10px;
  color: white;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
  text-shadow: black 0.1em 0.1em 0.1em}
`;

export const Paragraph = styled.p`
  max-width: 480px;
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const StyledLink = styled(Link)`
  color: #e60576;
`;
