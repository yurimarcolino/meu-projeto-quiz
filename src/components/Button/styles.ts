import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { primary, white } from '../../themes';

export const Container = styled(RectButton)`
  height: 50px;
  width: 200px;
  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 18px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
`

