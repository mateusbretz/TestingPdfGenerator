import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
