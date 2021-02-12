import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Time, Container } from './styles'

export const Timer: React.FC = () => {
  const [time, setTime] = useState(600);

  const navigation = useNavigation();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  useEffect(() => {
    const timer = setTimeout(() => {
      if(time > 0){
        setTime(time - 1)
      }else{
        clearTimeout(timer);
        navigation.navigate('Result',{
          answer: []
        })
      }
    }, 1000);
    return () => clearTimeout(timer);
  })

  return(
    <>
      <Container>
        <Time>{minutes}:{seconds}</Time>
      </Container>

    </>
  )
}
