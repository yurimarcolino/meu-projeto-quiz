import styled from 'styled-components/native';
import { lighten } from 'polished';
import { primary, white } from '../../themes';

interface CustomAlternativeProps {
  selected: boolean
}

export const Alternative = styled.Text<CustomAlternativeProps>`
  border: 2px solid ${lighten(0.2, primary)};
  border-radius: 5px;
  color: ${white};
  background-color: ${props => props.selected ? lighten(0.2, primary) : lighten(0.1, primary) };
  align-items: center;

  padding: 8px;
  margin: 5px;
  width: 100%;
`
