import React from 'react';
import styles from './card.module.css';

const Card = ({ value, type, rule }) => {
  // const [flipped, setFlipped] = useState(false);
  const flipped = false;

  const valueLetter = value === '10' ? '10' : value.split('')[0] ;
  const typeLetter = type.name.split('')[0];
  const cardFile = './cards/' + valueLetter + typeLetter + '.png';
  
  return (
    <div className={styles.outerCard}> 
      <div className={flipped ? `${styles.card} ${styles.flipped}` : styles.card}>
        <div className={styles.front}>
          <img alt="Card" src={cardFile} className={styles.front} />
        </div>
        <div className={styles.back}>
          <div>{rule.rule}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;