import Link from "next/link";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react'

export function TopBar() {
    return (
      <Flex bg='black' w='100%' p={2} color='white' justifyContent="space-between" 
      fontSize= "xs" >
           <Flex gap="1.5rem"> 
            <Flex as={Link} href="#" alignItems="center" gap="0.5rem" ><Image src="/ico-phone.svg" width={24} height={24} alt=""/>  +38 050 12 34 567</Flex>
      
            <Flex as={Link} href="#" alignItems="center" gap="0.5rem" ><Image src="/ico-location.svg" width={24} height={24} alt=""/> Ukraine, Kyiv,Khreshchatyk 1 </Flex>
      
            <Flex as={Link} href="#" alignItems="center" gap="0.5rem" ><Image src="/ico-clock.svg" width={24} height={24} alt=""/> All week 24/7 </Flex>
      
            </Flex>
          <Flex gap= "1rem" >
            <Flex as={Link}  href="#"><Image src="/ico-fbook.svg" width={24} height={24} alt=""/> </Flex>
      
        <Flex as={Link} href="#"><Image src="/ico-twitter.svg" width={24} height={24} alt=""/> </Flex>
       
        <Flex as={Link} href="#"><Image src="/ico-ig.svg" width={24} height={24} alt=""/> </Flex>
       
            <Flex as={Link} href="#"><Image src="/ico-pinterest.svg" width={24} height={24} alt=""/></Flex>
            </Flex>
      </Flex>
    );
  }