import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  &::before {
    content: '♦';
    color: #e60576;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  border: 2px solid #fff;
  outline: none;
  padding: 8px;
  border-radius: 10px;
  font-size: 1em;
  width: 30%;
  background: #2a3166;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  &:hover {
    background: #e60576;
    box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.31) inset;
  }
`;

export const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
