import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Formik } from "formik";
import { InputText } from "../components";

export function Teste() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          flex: 1,
        }}
      >
        <Formik
          initialValues={{ teste: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, values }) => (
            <InputText
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
              value={values.teste}
            />
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
