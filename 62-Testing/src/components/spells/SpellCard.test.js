import SpellCard from  './SpellCard'
import { shallow } from 'enzyme';
import React from 'react'

const spellProps = {
    spell: {
  id: 3,
  name: "Aid",
  desc:
    "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each targetâ€™s hit point maximum and current hit points increase by 5 for the duration.",
  highlvl:
    "When you cast this spell using a spell slot of 3rd level or higher, a targetâ€™s hit points increase by an additional 5 for each slot level above 2nd.",
  page: "phb 211",
  range: "30 feet",
  components: "V S M",
  ritual: false,
  concentration: false,
  duration: "8 hours",
  castingtime: "1 action",
  material: "A tiny strip of white cloth.",
  lvl: 2,
  school: "Abjuration",
  klasses: "Cleric Paladin"
}};

it('Renders the SpellCard given a single spell as props', () => {
    const renderedCard = shallow(<SpellCard {...spellProps}/>)
    expect(renderedCard).toMatchSnapshot()
})
