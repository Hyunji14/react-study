import styled from 'styled-components';

function App() {
  return (
    <Father as='header'>
      <Btn>Log In</Btn>
      {/* as => 같은 CSS를 가진 새로운 html component 생성*/}
      <Btn as='a' href='/'>
        Log In
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

export default App;
