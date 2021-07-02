import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea"

const isPalindrome = (str) => {
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase()
  return str.length > 0 && Array.from(str).reverse().join("") === str;
};

const code = `const isPalindrome = (str) => {
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase()
  return str.length > 0 && Array.from(str).reverse().join("") === str;
};`;

export default function IsPalindrome() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="p-field">
        <label htmlFor="value" className="p-d-block">
          Enter text to check it is Polindrome
        </label>
        <span className="p-input-icon-right">
          <i
            className="pi pi-check-circle"
            style={{ color: isPalindrome(value) ? "green" : "red" }}
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
