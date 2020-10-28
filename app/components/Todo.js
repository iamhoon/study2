import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

const {width,height} = Dimensions.get('window')

const TodoItem = () => (
    <View style={styles.todoContainer}>
        <View>
            <Icon name="check-circle" size={20}/>
            <Text style={styles.todos}>할일 1</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth: 1,
        width: width-40
    },
    todos: {
        fontSize: 20
    },
})

export default TodoItem