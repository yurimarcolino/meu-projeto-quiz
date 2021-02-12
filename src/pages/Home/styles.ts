import styled from 'styled-components/native';
import { primary, secondary, white } from '../../themes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: ${primary};
`

export const Title = styled.Text`
  font-size: 40px;
  color: ${secondary};
  margin: 64px 0 200px;
`

export const Text = styled.Text`
  font-size: 22px;
  color: ${white};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 150px;
  text-align: justify;
  text-justify: inter-word;
`
