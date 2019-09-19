import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Chance from 'chance';
import Recipe from './recipe';

describe('Recipe', () => {
    const chance = new Chance();
    const fileName = chance.word();
    const title = chance.word();
    const meta = chance.word();
    const ingredients = [chance.word(), chance.word(), chance.word()];
    const directions = [chance.word(), chance.word(), chance.word()];
    const recipe = {
        title,
        meta,
        ingredients,
        directions
    };

    global.fetch = () => new Promise((resolve) => resolve(
        { json: () => new Promise((rresolve) => rresolve(recipe)) }
    ));

    it('should render', () => {
        const wrapper = shallow(<Recipe fileName={fileName} />);

        assert.equal(wrapper.type(), null);
    });

    it('should render a recipe after fetching recipe json', () => {
        const wrapper = shallow(<Recipe fileName={fileName} />);

        wrapper.setState({ recipe });

        assert.isTrue(wrapper.contains(
          <section className={'recipe'}>
            <header>
              <h1>{ title }</h1>
              <h3>{meta}</h3>
            </header>
            <section>
              <h2>Ingredients</h2>
              <ul className={'recipe__ingredients'}>
                <li dangerouslySetInnerHTML={{ __html: ingredients[0] }} />
                <li dangerouslySetInnerHTML={{ __html: ingredients[1] }} />
                <li dangerouslySetInnerHTML={{ __html: ingredients[2] }} />
              </ul>
            </section>
            <section>
              <h2>Directions</h2>
              <ol>
                <li dangerouslySetInnerHTML={{ __html: directions[0] }} />
                <li dangerouslySetInnerHTML={{ __html: directions[1] }} />
                <li dangerouslySetInnerHTML={{ __html: directions[2] }} />
              </ol>
            </section>
          </section>
        ));
    });
});
