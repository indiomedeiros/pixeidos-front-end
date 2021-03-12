import React from "react";
import { Input } from "./styled"
export default function InputComponent(props) {
  return (

        <Input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            pattern={props.pattern}
            title={props.title}
            placeholder = {props.placeholder}
            required
        />
  
  );
}