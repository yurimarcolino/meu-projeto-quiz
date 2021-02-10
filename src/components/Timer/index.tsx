import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

export const Timer: React.FC = () => {
  const [time, setTime] = useState(20);

  const navigation = useNavigation();

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
      {time}
    </>
  )
}
