// src/containers/CounterContainer.tsx
import React, { useState } from 'react'
import CounterOrganism from '../components/organisms/CounterOrganism/CounterOrganism'

const CounterContainer: React.FC = () => {
  const [index, setIndex] = useState(0);

  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <CounterOrganism
      value={index}
      onIncrement={increment}
      onDecrement={decrement}
    />
  );
};

export default CounterContainer;