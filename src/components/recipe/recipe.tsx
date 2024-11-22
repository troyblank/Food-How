import React, { useEffect, useState, type FunctionComponent } from 'react';
import dompurify from 'dompurify';
import { isArray } from 'lodash';
import { IngredientList } from '../'
// import IngredientList from '../ingredientList/ingredientList';
// import Directions from '../directions';


export function objectifyIngredients(polymorphicIngredients) {
    // ingredients can be an array or object:
    // this converts all to an object for easy parsing.
    let ingredients = polymorphicIngredients;

    if (isArray(ingredients)) {
        ingredients = { '': [...ingredients] };
    }

    return ingredients;
}

type RecipeProps = {
    fileName: string
}

export const Recipe: FunctionComponent<RecipeProps> = ({ fileName }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/static/recipes/${fileName}.json`)
            .then((response) => response.json())
            .then((recipe) => {
                setRecipe(recipe)
            });
    }, [])

    if (!recipe) return null;

    const { title, meta, ingredients: polymorphicIngredients, directions } = recipe;
    const ingredients = objectifyIngredients(polymorphicIngredients);
    const ingredientTitles = Object.keys(ingredients)

    console.log(meta)

    return (
        <section className={'recipe'}>
            <header>
               <h1>{ title }</h1>
               { meta && <h3 dangerouslySetInnerHTML={{ __html: dompurify.sanitize(meta) }} /> }
            </header>
            <section>
               <h2>Ingredients</h2>
               { ingredientTitles.map((title) => (
                    <IngredientList
                        title={title}
                        ingredients={ingredients[title]}
                        fileName={fileName}
                        key={title}
                    />
               ))}
             </section>
        </section>
    )
}

{/*  */}


//     render() {
//         const { fileName } = this.props;
//         const { recipe } = this.state;


//         const { title, meta, ingredients: polymorphicIngredients, directions } = recipe;
//         const ingredients = objectifyIngredients(polymorphicIngredients);
//         const ingredientTitles = Object.keys(ingredients);

//         return (



//             <section>
//               <h2>Directions</h2>
//               <Directions steps={directions} />
//             </section>

//         );
//     }
// }
