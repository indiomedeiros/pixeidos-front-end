import React from "react";
import {InputContainer, Input } from "./styled"
export default function InputComponent(props) {
  return (
    <InputContainer>
    <label>
     {props.label}
        <Input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            pattern={props.pattern}
            title={props.title}
            required
        />
      </label>
    </InputContainer>
  );
}