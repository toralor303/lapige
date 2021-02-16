import Card from '../model/Card';
import types from './types';
import rules from './rules';

const deck = [];
const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace' ];

// eslint-disable-next-line
values.map(v => {
// eslint-disable-next-line
    types.map(t => {
        deck.push(new Card(t, v, rules[values.indexOf(v)]));
    })
});

export default deck;