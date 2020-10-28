import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './app/components/Header'
import Input from './app/components/Input'
import SubTitle from './app/components/SubTitle'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle/>
          <Input/>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    centered: {
      alignItems: 'center',
    },
    inputContainer: {
      marginLeft:20
    }
});
