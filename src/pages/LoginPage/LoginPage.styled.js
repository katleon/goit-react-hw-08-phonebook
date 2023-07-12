import styled from 'styled-components';

export const Center = styled.div`
  position: relative;
  padding: 50px 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 12px 22px 3px rgba(0, 0, 0, 0.36);
  max-width: 400px;
  margin: 0 auto;
`;

export const MainHeader = styled.h1`
  font-size: 2em;
  padding: 10px;
  color: #000;
  letter-spacing: 2px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Inputbox = styled.div`
  position: relative;
  max-width: 100%;
  height: 50px;
  margin-bottom: 50px;
  &:last-child {
  margin-bottom: 0;
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
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
  &:not(:placeholder-shown) ~ span {
    color: #e60576;
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
  &:valid ~ span {
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

export const Btn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  width: 50%;
  background: #2a3166;
  color: #fff;
  border: #fff;
  &:hover {
    background: #e60576;
    box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.31) inset;
  }
`;
