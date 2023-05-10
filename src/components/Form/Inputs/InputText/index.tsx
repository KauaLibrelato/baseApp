/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import {
  Container,
  InputTextContainer,
  Error,
  ErrorText,
  InputLabel,
} from "./styles";

interface Props extends TextInputProps {
  value?: string;
  error?: any;
  errorText?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  labelColor?: string;
  onBlur?: any;
}

export function InputText({
  value,
  name,
  errorText,
  disabled,
  label,
  labelColor,
  onBlur,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      {label && <InputLabel labelColor={labelColor}>{label}</InputLabel>}
      <Container>
        <InputTextContainer
          name={name}
          disabled={disabled}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          isFocused={isFocused}
          {...rest}
        />
        {errorText && (
          <Error>
            <ErrorText>{errorText}</ErrorText>
          </Error>
        )}
      </Container>
    </>
  );
}
