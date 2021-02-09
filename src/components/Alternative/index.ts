import styled from 'styled-components';
import { lighten } from 'polished';
import { secondary, white } from '../../themes'

export const Alternative = styled.div`
  display: flex;
  border: 2px solid ${lighten(0.2, secondary)};
  border-radius: 5px;
  padding: 8px;
  color: ${white};
  background-color: ${secondary};
  margin: 8px;
`
