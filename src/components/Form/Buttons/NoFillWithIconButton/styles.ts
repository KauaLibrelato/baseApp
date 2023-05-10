/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity<{
  color?: string;
}>`
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ theme, color }: any) => color ?? theme.colors.secondary4};
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
`;

export const Title = styled.Text<{
  colorText?: string;
}>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary500};
  color: ${({ theme, colorText }: any) => colorText ?? theme.colors.secondary4};
`;

export const IconContainer = styled.View`
  margin-right: 10px;
`;
