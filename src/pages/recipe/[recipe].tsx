import React from 'react';
import { useRouter } from 'next/router';
// import { Recipe } from '../../src/components/connections';
import { Head, Navigation, Recipe } from '../../components';

export default function RecipePage() {
    const router = useRouter();
    const { recipe } = router?.query

    console.log(recipe)

    return (
      <>
        <Head />
        <Navigation />
        <Recipe fileName={recipe} />
      </>
    );
}
