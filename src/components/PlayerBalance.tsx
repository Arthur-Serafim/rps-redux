import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PlayerBalance: React.FC = () => {
  const balance = useSelector((state: RootState) => state.game.balance);
  return <h2>Balance: ${balance}</h2>;
};

export default PlayerBalance;
