import React from "react";
import { FirebaseDatabase } from "../firebase/FirebaseService";

export class FirebaseTodos extends React.Component {
  state = {
    todos: undefined,
    newTodo: undefined
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    FirebaseDatabase.collection("todos")
      .get()
      .then(snapshot =>
        snapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        }))
      )
      .then(response =>
        this.setState({
          todos: response
        })
      );
  };

  addNewItem = () => {
    const newTodo = {
      content: this.state.newTodo,
      read: false
    };

    FirebaseDatabase.collection("todos")
      .add(newTodo)
      .then(response => {
        // const doc = await response.get();
        // console.log(doc.data());

        this.getTodos();
      });
  };

  handleNewTodoInput = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  deleteTodo = event => {
    const todoId = event.target.dataset.todoId;

    FirebaseDatabase.collection("todos")
      .doc(todoId)
      .delete()
      .then(() => this.getTodos());
  };

  render() {
    const { todos, newTodo } = this.state;

    console.log(newTodo);

    return (
      <div className="wrapper">
        <input onChange={this.handleNewTodoInput} type="text" />

        <button onClick={this.addNewItem}>add new</button>
        <p>jedan&thinsp;asdada&nbsp;dva&#x200a;tri&emsp;</p>
        {todos &&
          todos.map(todo => (
            <div>
              <h2>{todo.content}</h2>
              <button data-todo-id={todo.id} onClick={this.deleteTodo}>
                X
              </button>
            </div>
          ))}
        <input
          onChange={this.handleFileInput}
          type="file"
          name="pic"
          accept="image/*"
        />
      </div>
    );
  }
}
