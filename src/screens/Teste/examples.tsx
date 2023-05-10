import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Formik } from "formik";
import { GlobalButton, InputText } from "../../components";
import {
  showMessageErrorfunction,
  showMessageSuccessfunction,
} from "./utils/functions";

export function Teste() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 40,
          paddingHorizontal: 16,
          flex: 1,
        }}
      >
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, values }) => (
            <>
              <InputText
                onChangeText={handleChange("email")}
                onBlur={() => handleBlur("email")}
                value={values.email}
              />
              <View style={{ marginTop: 16, width: "100%" }}>
                <GlobalButton
                  title="Clique"
                  onPress={() => showMessageSuccessfunction()}
                  onLongPress={() => showMessageErrorfunction()}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
