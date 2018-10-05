import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from "react-native";
import { Field, reduxForm } from "redux-form";
import { wrapTextInput } from "./otherComponents/wrapers";

// ----------------------------Проверка на валидность---------------------
const requiredText = value =>
  !value || value.trim === "" ? "Обязательное поле" : undefined;
const requiredNumber = value =>
  value && isNaN(Number(value)) ? "Требуется число" : undefined;

class AddingScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Field
          name="name"
          component={wrapTextInput}
          validate={requiredText}
          title="Name"
          placeholder="Name"
          SubmitFailed={this.props.submitFailed}
          underlineColorAndroid="transparent"
          onBlur={Keyboard.dismiss}
          componentProps={{
            multiline: true,
          }}
        />

        <Field
          name="age"
          component={wrapTextInput}
          validate={[requiredNumber, requiredText]}
          onBlur={Keyboard.dismiss}
          title="Age"
          placeholder="Age"
          SubmitFailed={this.props.submitFailed}
          underlineColorAndroid="transparent"
          componentProps={{
            multiline: true,
            keyboardType: "numeric",
          }}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={this.props.handleSubmit(this.props.onOpenMain)}
        >
          <Text style={styles.btnText}>End</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const init = {
  name: " ",
  age: " ",
};
export default reduxForm({
  form: "SearchScreen",
  initialValues: init,
})(AddingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00f7ba",
    marginBottom: 5,
    marginTop: 5,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
  },
  btnText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});
