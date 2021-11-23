import styled from 'styled-components';
import Counter from './Counter';
import { castList } from '../data/castList';

const Image = styled.img`
  max-width: 20rem;
  height: auto;
`;

export default function Character(props) {
  return (
    <div>
      <Counter />
    </div>
  )
}

