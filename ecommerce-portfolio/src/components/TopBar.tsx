import Link from "next/link"
import Image from "next/image"
import { Flex } from "@chakra-ui/react"

export function TopBar(){
    return (<Flex bg='black' w='100%' p={2} color='white' justifyContent={'space-between'} fontSize='xs'>
      <Flex gap='1.5rem'>
        <Flex as={Link} href="#" alignItems='center' gap='0.5rem'><Image src='/ico-small-phone.svg' alt='' width='24' height='24' />+38 (050) 12 34 567</Flex>
        <Flex as={Link} href="#" alignItems='center' gap='0.5rem'><Image src='/ico-small-location.svg' alt='' width='24' height='24' />Ukranie, Kyiv, Khreshchatyk 1</Flex>
        <Flex as={Link} href="#" alignItems='center' gap='0.5rem'><Image src='/ico-small-clock.svg' alt='' width='24' height='24' />All week 24/7</Flex>
      </Flex>
      <Flex gap='1rem'>
        <Link href="#"><Image src='/ico-small-fb.svg' alt='' width='24' height='24' /></Link>
        <Link href="#"><Image src='/ico-small-tw.svg' alt='' width='24' height='24' /></Link>
        <Link href="#"><Image src='/ico-small-ig.svg' alt='' width='24' height='24' /></Link>
        <Link href="#"><Image src='/ico-small-pin.svg' alt='' width='24' height='24' /></Link>
      </Flex>
    </Flex>)
}
