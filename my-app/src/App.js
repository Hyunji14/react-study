import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😆</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100%{
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  // 이렇게 하면 Emoji component가 p 이든, span 이든 상관없음
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;
export default App;
