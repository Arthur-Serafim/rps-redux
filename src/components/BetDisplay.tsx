import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const BetDisplay: React.FC = () => {
  const bets = useSelector((state: RootState) => state.game.bets);
  return (
    <div>
      <h2>Your Bets</h2>
      <ul>
        {bets.map((bet, index) => (
          <li key={index}>{bet}</li>
        ))}
      </ul>
    </div>
  );
};

export default BetDisplay;
