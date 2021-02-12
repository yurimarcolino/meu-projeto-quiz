import React from 'react';
import { Body } from './Body'
import {  Header } from './Header'
import { Container } from './styles';

export const Quiz: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Body/>
    </Container>
  )
}

