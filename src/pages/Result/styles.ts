import styled from 'styled-components/native';
import { primary, secondary, white } from '../../themes';


export const InfoContainer = styled.View`
  margin-bottom: 32px;
`

export const Container = styled.View`
  color: ${white};
  background-color: ${primary};
  padding: 0 30px;
  height: 100%;

  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  width: 100%;
  font-size: 25px;
  color: ${white};
`

export const AssertionText = styled.Text`
  width: 100%;
  font-size: 60px;
  color: ${secondary};
`
