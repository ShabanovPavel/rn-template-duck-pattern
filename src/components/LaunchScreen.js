import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default () => (
  <View style={styles.container}>
    <Image source={require('../images/logo.png')} style={styles.logo} resizeMode={'contain'} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bfd8ff'
  },
  logo: {
    height: 45,
    marginBottom: 25
  }
})
