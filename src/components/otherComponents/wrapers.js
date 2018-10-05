import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const wrapTextInput = ({
  input: { value, onChange, ...restInput },
  title,
  SubmitFailed,
  meta: { touched, error, warning },
  componentProps,
  ...restProps
}) => (
  <View style={styles.containerInfo}>
    <Text
      style={
        SubmitFailed && touched && (error || warning) ? (
          [styles.nameItem, { color: "#f00" }]
        ) : (
          styles.nameItem
        )
      }
    >
      {title}
    </Text>
    <TextInput
      onChangeText={onChange}
      {...restInput}
      {...componentProps}
      underlineColorAndroid="transparent"
      style={
        SubmitFailed && touched && (error || warning) ? (
          [styles.value, { borderColor: "#f00" }]
        ) : (
          styles.value
        )
      }
      {...restProps}
    >
      <Text>{value}</Text>
    </TextInput>

    <Text style={styles.warning}>
      {SubmitFailed && touched && (error || warning) ? error || warning : null}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  containerInfo: {
    backgroundColor: "#fff",
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  nameItem: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 16,
    color: "#000",
    maxHeight: 120,
    margin: 0,
    padding: 0,
    borderBottomWidth: 0.5,
  },
});
