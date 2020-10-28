import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './app/components/Header'
import Input from './app/components/Input'
import SubTitle from './app/components/SubTitle'
import TodoItem from './app/components/Todo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do 입력"/>
          <Input/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do List"/>
          <TodoItem/>
          <TodoItem/>
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
