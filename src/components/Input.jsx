import { TextField } from "@mui/material";
import React from "react";
import "../Styles/Input.css";
import { inputcheck } from "../Utils/Inputcheck";

const Input = (props) => {

  console.log(`Input Component - ${props.name} Value:`, props.value);

  return (
    <div className="input-component">
      <p className="input-title">{props.title}</p>
      <TextField
        variant="outlined"
        type={props.type}
        name={props.name}
        {...props.register(props.name, inputcheck(props.type, props.name))}
        multiline={props.multiline}
        rows={5}
        value={props.value}
        onChange={(e) =>{  console.log(`Input Component - ${props.name} onChange:`, e.target.value);
                           props.setValue(e.target.value.toString())}
                          }
        error={props.error}
        helperText={props.errorMessage ? props.errorMessage : null}
      />
    </div>
  );
};

export default Input ;