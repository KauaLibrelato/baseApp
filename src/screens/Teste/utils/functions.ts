import { showMessage } from "react-native-flash-message";

export function showMessageSuccessfunction() {
  showMessage({
    type: "success",
    message: "Sucesso",
    description: "Teste de Sucesso",
  });
}

export function showMessageErrorfunction() {
  showMessage({
    type: "danger",
    message: "Erro",
    description: "Teste de erro",
  });
}
