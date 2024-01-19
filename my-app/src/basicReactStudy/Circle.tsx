import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// interface : 타입스크립트에게 object shape 을 설명해주는 TS의 개념
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(1);

  // ?? 의미 : borderColor 가 undefine 라면 white로 넘기겠다는 것
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? 'white'}
    ></Container>
  );
}

export default Circle;
