import React from "react";
import { useTheme } from "styled-components";
import { Check } from "phosphor-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Title, IconContainer } from "./styles";

interface Props {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  colorText?: string;
  onPress?: () => void;
}

export function SuccessfulButton({
  title,
  disabled = false,
  color,
  colorText,
  onPress,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      onPress={onPress}
      activeOpacity={0.8}
      color={color || theme?.colors.success}
      disabled={disabled}
    >
      <Title colorText={colorText}>{title}</Title>
      <IconContainer>
        <Check size={RFValue(24)} color={theme?.colors.success4} />
      </IconContainer>
    </Container>
  );
}
