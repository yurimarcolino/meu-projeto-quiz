import styled from 'styled-components/native';
import { primary, white } from '../../themes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: ${primary};
`

export const Title = styled.Text`
  font-size: 40px;
  color: ${white};
  margin: 64px 0 200px;
`

export const Text = styled.Text`
  font-size: 15px;
  color: ${white};
  margin-left: 45px;
  margin-right: 20px;
  margin-bottom: 150px;

`
