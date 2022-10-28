import { Container } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface props{
  children: ReactNode
}

const CustomContainer = ({ children }: props) => {
  return (
    <Container
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="md"
      maxWidth="container.lg"
      padding={"0.1rem"}
      my={"2rem"}
    >
      {children}
    </Container>
  );
}

export default CustomContainer
