import { Grid, GridItemProps, GridItem } from "@chakra-ui/react";
import Image from "next/image";

import { slugify } from "@/utils/sluglify";

import { CenteredLabel } from "./CenteredLabel";

import { Categories } from "@/models/Categories";

type Props = {
  categories: Categories[]
}

export function HomeHeroCategories({ categories }: Props) {
    return (<Grid templateColumns='540px 255px 255px' gap="30px" templateRows='200px 260px'>
      {categories.map((cat, key) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;
        
        const gridItemProps: GridItemProps = {
          position: 'relative',
          w: '100%',
          h: '100%'
        };
  
        if (key === 0) {
            gridItemProps.rowSpan = 2;
        }
  
        if (key === categories.length - 1) {
            gridItemProps.colSpan = 2;
        }
  
        return <GridItem {...gridItemProps} key={key}><Image src={imageUrl} alt={cat} fill={true} /><CenteredLabel>{cat}</CenteredLabel></GridItem>;
      })}
    </Grid>);
  }