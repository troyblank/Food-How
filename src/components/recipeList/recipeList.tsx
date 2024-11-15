import React, { type FunctionComponent } from 'react';
import { recipes } from '../../../static/recipes.json';
import Link from 'next/link';
// import { get } from 'lodash';

export const RecipeList: FunctionComponent = () => {
    // constructor(props) {
    //     super(props);

    //     const { recipes } = this.props;

    //     this.state = { recipes: recipes || [] };
    // }

    // filterList(value) {
    //     const { recipes: allRecipes = [] } = this.props;
    //     const re = new RegExp(value, 'i');
    //     const recipes = allRecipes.filter((r) => Boolean(re.test(r)));

    //     this.setState({ recipes });
    // }

    const onChange = (e) => {
        // const value = get(e, 'target.value', '');

        // this.filterList(value);
    }


        // const { recipes } = this.state;

        return (
          <>
            <header className={'recipe-list__header'}>
                <h1>Food How</h1>
                <p>Food How is a place on how to make food. You will find recipes on this site that are used to make foods that are probably pretty good to eat.</p>
            </header>
            <section className={'recipe-list__search'}>
                <input
                    autoComplete={'off'}
                    type={'text'}
                    name={'search'}
                    placeholder={'Search'}
                    onChange={onChange}
                />
            </section>
            <section className={'recipe-list__nodes'}>
            { recipes.map((r) => (
                <Link href={'/recipe/[recipe]'} as={`/recipe/${r.replace(/ /g, '_')}`} key={r}>
                    {r}
                </Link>
            ))}
            </section>
          </>
        );
}
