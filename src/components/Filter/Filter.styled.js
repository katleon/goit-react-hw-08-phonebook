import styled from 'styled-components';

export const Filterbox = styled.div`
  position: relative;
  max-width: 100%;
  height: 50px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  box-sizing: border-box;
  &:focus ~ span {
    color: #e60576;
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
  &:not(:placeholder-shown) ~ span {
    color: #e60576;
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
`;
