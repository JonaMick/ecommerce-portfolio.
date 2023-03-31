import { slugify } from "@/utils/sluglify";
import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import { relative } from "path";
import { Product as ProductModel } from "..";

type Props = {
  product: ProductModel
}

export default function Product( {product: {title, price, image, rating, category, description}} : Props){
  return (
    <>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{rating.count}, {rating.rate}</p>
      <p>{category}</p>
      <p>{description}</p>
      <AspectRatio position={'relative'} ratio={1} maxWidth='100%' marginBottom={'1rem'}>
        <Image
          src={image}
          alt=""
          fill={true}
          style={{
            objectFit: 'contain',
          }} 
        ></Image>
      </AspectRatio>
    </>);
}

// Generates `/products/1` and `/products/2`
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