import React, { type FunctionComponent } from 'react';
// import { connect } from 'react-redux';
// import Ingredient from '../ingredient/ingredient';

type IngredientListProps = {
    shoppingList: any,
    dispatch: any,
    title: string,
    ingredients: any,
    fileName: string
}

export const IngredientList: FunctionComponent = ({
    shoppingList, dispatch, title, ingredients, fileName
}) => {

    console.log(ingredients)

    return (
        <>
            { title && <h3 className={'ingredient__title'}>{title}</h3> }
            <ul>
                { ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </>
    )

//     render() {
//         const { shoppingList, dispatch, title, ingredients, fileName } = this.props;

//         return (

//             <ul>
//               { ingredients.map((i) => (
//                 <Ingredient
//                   fileName={fileName}
//                   text={i}
//                   shoppingList={shoppingList}
//                   dispatch={dispatch}
//                   key={i}
//                 />
//             ))}
//             </ul>

//         );
//     }
}

// const mapStateToProps = (state) => ({
//     shoppingList: state.shoppingListStore.shoppingList
// });

// export default connect(mapStateToProps)(IngredientListComponent);
