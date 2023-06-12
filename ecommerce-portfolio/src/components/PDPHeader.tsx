import { ShareIcon } from "@/icons/Share"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Flex, Heading, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"
import { Rating } from "./Rating"
import { Product } from "@/pages"

type Props = {
  product: Product;
}

export function PDPHeader({product: {category, title, rating, id}}: Props){
  return(
    <Box bg="gray.100" padding="1rem">
      <Container>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Flex fontSize={'sm'} as={UnorderedList} gap={'2rem'} listStyleType={'none'} m={'0'}>
              <ListItem whiteSpace={'nowrap'}>
                <Link href="/">Home</Link>
                <ListIcon w={18} h={18} as={ChevronRightIcon} color='gray' ml={'2'} mr={'o'} />
              </ListItem>
              <ListItem textTransform={'capitalize'} whiteSpace={'nowrap'}>
                <Link href={`${category}`}>{category}</Link>
                <ListIcon w={18} h={18} as={ChevronRightIcon} color='gray' ml={'2'} mr={'o'} />
              </ListItem>
              <ListItem><Text noOfLines={1}>{title}</Text></ListItem>
            </Flex>
            <Button color={'gray'} variant={'ghost'} leftIcon={<ShareIcon w={18} h={18} />}>Share</Button>
          </Flex>
        <Heading textAlign={'center'} as="h1" fontSize="2xl">{title}</Heading>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Flex gap="0.5rem" alignItems={'baseline'}>
              <Rating rate={rating.rate} />
              <Text>{rating.count} reviews</Text> 
            </Flex>
          <Flex gap={'1rem'} fontSize={'sm'}>
            <Text>sku: {id}</Text>
            <Text>Availability: In Stock</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}