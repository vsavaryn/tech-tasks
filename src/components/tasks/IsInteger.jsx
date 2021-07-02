import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const isInteger = value => {
  return Number.isInteger(+value);
}

export default function IsInteger() {
  const [value, setValue] = useState("");

  return (
    <div className="p-field">
      <label htmlFor="value" className="p-d-block">
        Enter text
      </label>
      <InputText
        id="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!isInteger(value) && (
        <small id="value-help" className="p-error p-d-block">
          -- NOT INTEGER --
        </small>
      )}
    </div>
  );
}
