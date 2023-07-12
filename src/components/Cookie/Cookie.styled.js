import styled from 'styled-components';

export const Center = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(https://static.vecteezy.com/system/resources/previews/002/027/273/original/cute-cookie-with-speech-bubbles-free-vector.jpg);
  background-position: 50% 50%;
  background-size: contain;
  color: black;
  padding: 20px;
  z-index: 9999;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 30px;
`;

export const MainHeader = styled.h2`
  padding-top: 10px;
`;

export const Span = styled.p`
  max-width: 250px;
`;

export const Btn = styled.button`
  background: #2a3166;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 100px;
  font-size: 15px;
  &:hover {
    background: #e60576;
    box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.31) inset;
  }
`;
