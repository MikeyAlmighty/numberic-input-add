import React, { useState, useEffect } from "react";

const Solution = () => {
  const [input_values, set_inputvalues] = useState({
    sales: 0,
    bank_deposit: 0,
    supply: 0,
    expenses: 0
  });

  const [total, set_total] = useState(0);

  useEffect(() => {
    const arrValues = Object.values(input_values);
    const inputTotals = arrValues.reduce((accum, curr) => (accum += curr), 0);
    set_total(inputTotals);
  }, [input_values]);

  const changeValues = ({ name, value }) => {
    set_inputvalues({ ...input_values, [name]: parseInt(value) });
  };

  return (
    <div>
      <h1>{total}</h1>
      <input
        type="number"
        onChange={({ target }) => changeValues(target)}
        name="sales"
      />
      <input
        type="number"
        onChange={({ target }) => changeValues(target)}
        name="bank_deposit"
      />
      <input
        type="number"
        onChange={({ target }) => changeValues(target)}
        name="supply"
      />
      <input
        type="number"
        onChange={({ target }) => changeValues(target)}
        name="expenses"
      />
    </div>
  );
};

export default Solution;
