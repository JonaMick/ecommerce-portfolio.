import { Box } from '@chakra-ui/react'

import * as React from 'react';

 interface ICategoryLabelProps{
    children: React.ReactNode;
  }
  
  export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({children}) =>{
    return (
      <Box 
        bgColor="white"
        position="relative"
        padding="1rem 1.5rem"
        width="fit-content"
        zIndex={1}
        textTransform="uppercase"
        fontWeight="bold"
        borderRadius="0.5rem"
        textAlign="center"
      >
        {children}
      </Box>
    )
  };