import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import deck from '../logic/deck';
import Card from './Card';
import styles from './deck.module.css';

const Deck = () => {
  const [randomCardNumber, setRandomCardNumber] = useState(Math.floor(Math.random() * (53 - 0) + 0));

  return (
    <div className={styles.deck}>
      <Card value={deck[randomCardNumber].value} type={deck[randomCardNumber].type} rule={deck[randomCardNumber].rule} />
      <div className={styles.infoMessage}><i>Hover the card to read the rule</i></div>
      <Button className={styles.btnDraw} variant='contained' onClick={() => setRandomCardNumber(Math.floor(Math.random() * (53 - 0) + 0))}>Draw a card</Button>
    </div>
  );
}

export default Deck;