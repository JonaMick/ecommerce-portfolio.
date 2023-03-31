import { Box, Grid } from "@chakra-ui/react";
import { Product } from "@/pages";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { slugify } from "@/utils/sluglify";

type Props = {
  products: Product[]
}

export function HomeProductsGrid(props: Props){
  return(
    <Grid
      gridTemplateColumns={{
        base: "repeat(auto-fit, 255px)",
        md: "repear(auto-fit, minmax(255px, 1fr))",
      }}
      gridAutoFlow={{
        base: "column",
        md: "row",
      }}
      alignItems="stretch"
      gridAutoColumns="255px"
      gridAutoRows="1fr"
      overflowX={{
        base: "scroll",
        md: "auto"
      }}
      gap="1.85rem"
      scrollSnapType="x mandatory">
      {props.products.map((product, i) => {
        //const slug = product.title.toLowerCase().replace(/ /g, '-');
        const slug = slugify(product.title)
        
        return (
        <Box
          marginLeft={{
            base: i == 0 ? '1rem' : '0',
            md: 0,
          }}
          key={ product.id }
          scrollSnapAlign="center"
          border="solid 1px"
          borderColor={"gray.200"}
          padding={"1rem"}>
          <Link href={`/products/${slug}-${product.id}`}>
          <ProductCard  {...product} />
          </Link>
        </Box>)
      })}
    </Grid>
  );
}