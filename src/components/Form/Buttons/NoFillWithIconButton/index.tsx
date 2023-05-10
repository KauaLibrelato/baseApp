import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "styled-components";
import { Container, Title, IconContainer } from "./styles";

interface Props {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  colorText?: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

export function NoFillWithIconButton({
  title,
  disabled = false,
  loading = false,
  color,
  children,
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
      color={color || theme?.colors.secondary4}
      disabled={disabled}
      style={{ opacity: disabled === false || loading === true ? 1 : 0.5 }}
    >
      {loading ? (
        <ActivityIndicator color={theme?.colors.gray5} size="small" />
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconContainer>{children}</IconContainer>
          <Title colorText={colorText}>{title}</Title>
        </View>
      )}
    </Container>
  );
}
