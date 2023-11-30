"use client";
import { useEffect, useRef } from "react";
import "./style.css";
import { montserrat } from "@/app/fonts";

export function Input({ label, type, name }) {
  const boxInputRef = useRef();
  const inputRef = useRef();

  function labelActivate() {
    if (inputRef.current.value != "") return;
    boxInputRef.current.classList.toggle("active-custom-input");
  }

  return (
    <div ref={boxInputRef} className={` ${montserrat.className} box-input`}>
      <span className={`label-on`}>{label}</span>
      <input
        onFocus={labelActivate}
        onBlur={labelActivate}
        className={`form-control`}
        ref={inputRef}
        type={type}
        name={name}
      />
      <fieldset className={`field-set`}>
        <legend>
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
}

export function Select({ children, label, type, name }) {
  const boxInputRef = useRef();
  const inputRef = useRef();

  function labelActivate() {
    if (inputRef.current.value != "") return;
    boxInputRef.current.classList.toggle("active-custom-input");
  }

  return (
    <div ref={boxInputRef} className={` ${montserrat.className} box-input`}>
      <span className={`label-on`}>{label}</span>
      <select
        onFocus={labelActivate}
        onBlur={labelActivate}
        className={`form-control select`}
        ref={inputRef}
        type={type}
        name={name}
      >
        {children}
      </select>
      <fieldset className={`field-set`}>
        <legend>
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
}
