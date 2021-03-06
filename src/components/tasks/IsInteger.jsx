import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const isInteger = value => {
  return Number.isInteger(+value);
}

const code = `const isInteger = value => {
  return Number.isInteger(+value);
}`;

export default function IsInteger() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="p-field">
        <label htmlFor="value" className="p-d-block">
          Enter text to if it Integer
        </label>
        <span className="p-input-icon-right">
          <i
            className="pi pi-check-circle"
            style={{ color: isInteger(value) ? "green" : "red" }}
          />
          <InputText
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
      </div>
      <h2>Code</h2>
      <InputTextarea rows={5} cols={75} value={code} />
    </>
  );
}
