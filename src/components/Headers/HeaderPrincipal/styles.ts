/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  padding: 24px 16px;
`;

export const Informations = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }: any) => theme.colors.gray5};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }: any) => theme.fonts.primary500};
`;

export const IconContainerOne = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{ color?: string }>`
  background-color: ${({ color }: any) => color};
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{ color?: string }>`
  background-color: ${({ color }: any) => color};
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
`;
