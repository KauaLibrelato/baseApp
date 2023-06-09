/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const InputTextContainer = styled.TextInput<{
  error: boolean;
  disabled: boolean | undefined;
  isFocused?: any;
}>`
  width: 100%;
  padding: 16px;
  color: ${({ theme }: any) => theme.colors.gray2};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ error, isFocused }: any) =>
    error ? "#FF3333" : isFocused ? "#FFB100" : "#BAB6AB"};
  background-color: ${({ disabled }: any) => (disabled ? "#F2F2F2" : "#FFF")};
  color: ${({ disabled, error }: any) =>
    // eslint-disable-next-line no-nested-ternary
    disabled ? "#999999" : error === true ? "#FF3333" : "#1C1B17"};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary500};
`;

export const Error = styled.View`
  margin-top: 4px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }: any) => theme.colors.danger4};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary400};
`;

export const InputLabel = styled.Text<{ labelColor: any }>`
  margin-top: 8px;
  color: ${({ theme, labelColor }: any) => labelColor ?? theme.colors.gray5};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary500};
  margin-bottom: 4px;
`;
