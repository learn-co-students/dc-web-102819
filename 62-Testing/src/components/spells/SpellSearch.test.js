import React from 'react'
import SpellSearchBar from './SpellSearch'
import { shallow } from 'enzyme'

it("Renders the SpellSearchBar", () => {
  const renderedCard = shallow(<SpellSearchBar spellSearch={() => {}}/>);
  expect(renderedCard).toMatchSnapshot();

});

it('Is able to submit form', () => {
    const renderedCard = shallow(<SpellSearchBar spellSearch={() => {}} />);
    renderedCard.find("input").simulate("submit");
    
})