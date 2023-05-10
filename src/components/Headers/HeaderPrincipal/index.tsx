import React from "react";

import * as Styles from "./styles";

interface Props {
  title: string;
  onPress1?: () => void;
  onPress2?: () => void;
  children1?: React.ReactNode;
  children2?: React.ReactNode;
}

export function HeaderPrincipal({
  title,
  onPress1,
  onPress2,
  children1,
  children2,
  ...rest
}: Props) {
  return (
    <Styles.Container {...rest}>
      <Styles.Informations>
        <Styles.IconContainerOne
          color={children1 ? "#fff" : "#F4F3F1"}
          onPress={onPress1}
        >
          {children1}
        </Styles.IconContainerOne>
        <Styles.Title>{title}</Styles.Title>
        <Styles.IconContainer
          color={children2 ? "#fff" : "#F4F3F1"}
          onPress={onPress2}
        >
          {children2}
        </Styles.IconContainer>
      </Styles.Informations>
    </Styles.Container>
  );
}
