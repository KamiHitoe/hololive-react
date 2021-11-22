import styled from 'styled-components';
import Counter from './Counter';

const Image = styled.img`
  max-width: 20rem;
  height: auto;
`;
const CastName = styled.h3`
  color: gray;
`;

export default function Character(props) {
  return (
    <div>
      <CastName>{props.name}</CastName>
      <Image src={props.path} alt="{props.name}" />
      <Counter />
    </div>
  )
}

