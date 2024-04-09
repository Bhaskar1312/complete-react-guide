import { useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        // <HistoryItem key={index} count={count.value} /> // you can remove index if this line is commented and when this line is used, whole unordered list changes instead of just the first ele
        <HistoryItem key={count.id} count={count.value} />
      // what if random key generated is equal?, key helps to highlight the selected element only instead of always 2nd ele
      ))}
    </ol>
  );
}
