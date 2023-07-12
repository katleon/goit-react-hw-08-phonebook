import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  font-size: 30px;
  color: #e8eae3;
  &.active {
    color: #f5b935;
  }
  &:hover {
    color: #f5b935;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 12px 22px 3px rgba(0, 0, 0, 0.36);
  padding: 15px 0;
  margin: 25px auto;
  background: #2a3166;
  max-width: 500px;
  border-radius: 10px;
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -50%);
`;
