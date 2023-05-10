/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { Eye, EyeSlash } from "phosphor-react-native";
import {
  Container,
  InputTextContainer,
  Error,
  ErrorText,
  ChangeVisibiliyPassword,
  IconContainer,
  InputContainer,
  InputLabel,
} from "./styles";

interface Props extends TextInputProps {
  value?: string;
  errorText?: any;
  error?: any;
  password?: any;
  secureTextEntry?: any;
  label?: string;
  labelColor?: string;
  onBlur?: any;
}

export function PasswordInput({
  value,
  errorText,
  error,
  password,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secureTextEntry,
  label,
  labelColor,
  onBlur,
  ...rest
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      {label && <InputLabel labelColor={labelColor}>{label}</InputLabel>}
      <Container>
        <InputContainer error={error} isFocused={isFocused}>
          <InputTextContainer
            value={value}
            password={password}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            secureTextEntry={isPasswordVisible}
            {...rest}
          />
          <ChangeVisibiliyPassword
            onPress={() => handlePasswordVisibilityChange()}
          >
            <IconContainer>
              {!isPasswordVisible ? (
                <Eye size={24} color="#191919" />
              ) : (
                <EyeSlash size={24} color="#191919" />
              )}
            </IconContainer>
          </ChangeVisibiliyPassword>
        </InputContainer>

        {errorText && (
          <Error>
            <ErrorText>{errorText}</ErrorText>
          </Error>
        )}
      </Container>
    </>
  );
}
