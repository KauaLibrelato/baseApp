/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<{
  error: boolean;
  disabled?: boolean;
  isFocused?: boolean;
}>`
  width: 100%;
  color: ${({ theme }: any) => theme.colors.gray2};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ error, isFocused }: any) =>
    error ? "#FF3333" : isFocused ? "#FFB100" : "#BAB6AB"};
  background-color: ${({ disabled }: any) => (disabled ? "#CCCCCC" : "#FFF")};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputTextContainer = styled.TextInput<{
  error: boolean;
  disabled: boolean;
}>`
  padding: 16px;
  width: 85%;
  color: ${({ disabled }: any) => (disabled ? "#999999" : "#1C1B17")};
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
  margin-bottom: 8px;
`;

export const ChangeVisibiliyPassword = styled.TouchableOpacity`
  padding: 10px;
  margin-right: 6px;
`;

export const IconContainer = styled.View``;

export const InputLabel = styled.Text<{ labelColor: any }>`
  margin-top: 8px;
  color: ${({ theme, labelColor }: any) => labelColor ?? theme.colors.gray5};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary500};
  margin-bottom: 4px;
`;
