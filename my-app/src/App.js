import styled from 'styled-components';

function App() {
  return (
    <Father>
      <Box bgColor='teal'></Box>
      <Cricle bgColor='whitesmoke'></Cricle>
    </Father>
  );
}

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Cricle = styled(Box)`
  border-radius: 50px;
`;

export default App;
