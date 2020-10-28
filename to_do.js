import React from 'react'
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native'
import Header from './app/components/Header'
import SubTitle from './app/components/SubTitle'
import Input from './app/components/Input'
import TodoItem from './app/components/Todo'

export default class Todo extends React.Component {
    state = {
        inputValue: "",
        todos: [
            {
                title: "ID",
                isComplete: false
            },
            {
                title: "PW",
                isComplete: false
            }
        ]
    }
}

componentWillMount(){
    AsyncStorage.getItem('@todo:state').then((state) => {
        if( state != null){
            this.setState(JSON.parse(state));
        }
    });
}

saveItem = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))

}

_makeTodoItem = ({item, index}) => {
    return (
        <TodoItem
        text={item.title}
        isComplete={item.isComplete}
        changeComplete={() => {
            const newTodo = [...this.state.todos];
            newTodo[index].isComplete = !newTodo[index].isComplete;
            this.setState({todos:newTodo}, this.saveItem);
        }}
        deleteItem = {() => {
            const newTodo = [...this.state.todos];
            newTodo.splice(index, 1);
            this.setState({todos:newTodo}, this.saveItem)
        }}  />
    )
}

_changeText = (value) => {
    this.setState({inputValue: value})
}

_addTodoItem = () => {
    if(this.state.inputValue !== ''){
        const Input = this.state.inputValue;
        const prevItem = this.state.todos;
        const newItem = { title: Input, isComplete: false}
        this.setState({
            inputValue: '',
            todos: prevItem.concat(newItem)
        }, this.saveItem)
    }
}




