import { useState } from 'react';

export default function StateInputDate() {
  const [date, setDate] = useState('');
  function handleOnChange(e) {
    console.log(e.target.value);
    setDate(e.target.value);
  }
  return (
    <div>
      <input type='date' value={date} onChange={handleOnChange} />
    </div>
  );
}
