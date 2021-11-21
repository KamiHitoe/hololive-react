import styled from 'styled-components';
import Counter from './Counter';

const Image = styled.img`
  max-width: 20rem;
  height: auto;
`;

export default function Character(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <Image src={props.path} alt="{props.name}" />
      <Counter />
    </div>
  )
}

