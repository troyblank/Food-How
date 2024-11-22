// @ts-nocheck // remove when removing reducers
import React, { useEffect } from 'react'
// import { GetServerSidePropsContext } from 'next'
// import { type User } from '../types'
// import { AuthProvider } from '../contexts'
import { recipes } from '../../static/recipes.json';
import { Head, Navigation, RecipeList } from '../components'
// import { getServerSidePropsOrRedirect } from '../utils'

// export const getServerSideProps = async (serverSideContext: GetServerSidePropsContext) => getServerSidePropsOrRedirect(serverSideContext)

// export const HomePage = ({ user }: { user: User }) => {

// return (
//     <AuthProvider user={user}>
//         <Head />
//         <Header />
//         <Balance />
//         <Log />
//     </AuthProvider>
// )

// const recipePaths = recipes.reduce((accumulator, recipe) => {
//     accumulator[`/recipe/${recipe.replace(/ /g, '_')}`] = { page: '/recipe/[recipe]' };
//     return accumulator;
// }, {});

export const HomePage = () => {




    // console.log(recipePaths)

	return (
        <>
            <Head />
            <Navigation />
            <RecipeList recipes={recipes} />
        </>
	)
}

export default HomePage


// OLD FOOOD HOW


// import list from '../static/recipes.json';
// import { Head, Navigation, RecipeList } from '../src/components';

// export default function IndexPage() {
//     const { recipes } = list;

//     return (
//       <x>

//
//         <RecipeList recipes={recipes} />
//       </x>
//     );
// }
