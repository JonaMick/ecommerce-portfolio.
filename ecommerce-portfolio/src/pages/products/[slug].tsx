import { useEffect, useState } from 'react';
import { slugify } from "@/utils/sluglify";
import { AspectRatio, Box, Button, Container, Divider, Flex, Grid, Heading, Link, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { Product as ProductModel } from "..";
import { PDPHeader } from "@/components/PDPHeader";

import logo_aes256 from 'public/logo_aes256.png';
import logo_amex from 'public/logo_amex.png';
import logo_discover from 'public/logo_discover.png';
import logo_mastercard from 'public/logo_mastercard.png';
import logo_paypal from 'public/logo_paypal.png';
import logo_stripe from 'public/logo_stripe.png';
import logo_visa from 'public/logo_visa.png';

type Props = {
  product: ProductModel
}

function Price({ price }: {price: number}){
  const currency = new Intl.NumberFormat('es-US', {style: 'currency', currency: 'USD'}).format
  (price);
  return <Text fontSize="xl" fontWeight={'bold'}>{currency}</Text>;
}

export default function Product( { product} : Props){
  const {id, title, price, image, rating, category, description} = product;
  const [ showPrice, SetShowPrice ] = useState(false);
  
  useEffect(()=>{
    SetShowPrice(true);
  }, []);
  return (
    <>
      <PDPHeader product={product} />
      <Container as={Grid} gridTemplateColumns={'1fr 34.25rem'} mt='2rem' gap='2rem'>
        <AspectRatio position='relative' ratio={1} maxWidth='100%' marginBottom={'1rem'}>
          <Image
            src={image}
            alt=""
            fill={true}
            style={{
              objectFit: 'contain',
            }} 
          ></Image>
        </AspectRatio>
        <Box>
          <Heading as="h3" textTransform={'uppercase'} fontSize={'md'} mb='0.5rem' color="gray.500">Description</Heading>
          <Text>{description}</Text>
          <Divider my={'2rem'} variant='bold' />
          <Flex alignItems={'center'} gap="1.5rem">
            {showPrice && <Price price={price}/>} <Button>Add to Cart</Button>
            <Link href='#'>
              <Image src="/ico-like.svg" alt="" width="24" height="24" />
            </Link>
            <Link href='#'>
              <Image src="/ico-legal.svg" alt="" width="24" height="24" />
            </Link>
          </Flex>
          <Divider my={'2rem'} variant='bold' />
          <Flex gap="1.75rem" fontSize={'sm'} mb="2rem">
            <Flex alignItems="center" gap="0.25rem" as={Link} href='#'>
              <Image src="/ico-truck.svg" alt="icon of a truck" width="24" height="24" /> Shipping & Delivery
            </Flex>
            <Flex alignItems="center" gap="0.25rem" as={Link} href='#'>
              <Image src="/ico-return.svg" alt="icon of two curve arrow" width="24" height="24" /> Returns & Exchanges
            </Flex>
            <Flex alignItems="center" gap="0.25rem" as={Link} href='#'>
              <Image src="/ico-mail.svg" alt="icon of an envelope" width="24" height="24" /> Ask a question
            </Flex>
          </Flex>
          <Flex alignItems={'center'} gap="1.5rem">
            <Heading as="h3" whiteSpace={'nowrap'} textTransform={'uppercase'} fontSize={'md'} color="gray.500">Guaranteed safe checkout</Heading>
            <Divider variant='bold'/>
          </Flex>
          
          <Flex justifyContent={'space-between'} mt="1.5rem" mb="2rem">
            <Image src={logo_aes256} alt='' />
            <Image src={logo_amex} alt='' />
            <Image src={logo_discover} alt='' />
            <Image src={logo_mastercard} alt='' />
            <Image src={logo_paypal} alt='' />
            <Image src={logo_stripe} alt='' />
            <Image src={logo_visa} alt='' />
          </Flex>
          <Divider variant='bold'/>
        </Box>
      </Container>
    </>);
}

export async function getStaticPaths() {
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());

  const slugs: string[] = products.map((product: ProductModel) => {
    return `${slugify(product.title)}-${product.id}`
  })

  console.log(slugs)

  return{
    //paths: [{ params: {slug: '1'}}, {params: {slug: '2'}}],
    paths: slugs.map((slug) => ({ params: {slug} })),
    fallback: false,
  }  
}

export async function getStaticProps( context: {params: {slug: string} } ) {

  const id = context.params.slug.split('-').pop();

  const product = await fetch(`https:fakestoreapi.com/products/${id}`).then((res) => res.json());

  return{
    props: {
      product
    },
  }
}