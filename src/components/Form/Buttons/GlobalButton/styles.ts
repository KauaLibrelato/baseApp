/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity<{
  color?: string;
}>`
  width: 100%;
  background-color: ${({ color, theme }: any) => color ?? theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 16px;
`;

export const Title = styled.Text<{
  colorText?: string;
}>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary500};
  color: ${({ colorText, theme }: any) => colorText ?? theme.colors.secondary4};
`;
