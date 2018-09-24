import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class MainScreen extends React.PureComponent {
  render() {
    const { user, onOpenAddingNewUser } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={onOpenAddingNewUser}>Programm Main click me</Text>
        {this.getUser(user)}
      </View>
    );
  }

  getUser(user) {
    return user ? (
      <Text>
        {user.name},{user.age}
      </Text>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
