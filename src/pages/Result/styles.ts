import styled from 'styled-components/native';
import { primary, secondary, white } from '../../themes';


export const InfoContainer = styled.View`
  margin-bottom: 80px;
  align-items: center;

`

export const Container = styled.View`
  color: ${white};
  background-color: ${primary};
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 25px;
  color: ${white};
`

export const AssertionText = styled.Text`
  font-size: 60px;
  color: ${secondary};
`
