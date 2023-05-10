import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  colorText?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export function GlobalButton({
  title,
  disabled = false,
  loading = false,
  color,
  colorText,
  onPress,
  onLongPress,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      onPress={onPress}
      activeOpacity={0.8}
      color={color || theme?.colors.primary4}
      disabled={disabled}
      style={{ opacity: disabled === false || loading === true ? 1 : 0.5 }}
      onLongPress={onLongPress}
    >
      {loading ? (
        <ActivityIndicator color={theme?.colors.secondary4} size="small" />
      ) : (
        <Title colorText={colorText}>{title}</Title>
      )}
    </Container>
  );
}
