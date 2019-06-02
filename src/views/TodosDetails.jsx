import React from "react";
import { Id, Title } from "../components";
import { connect } from "react-redux";

class TodosDetails extends React.Component {
  // updateShared = event => {
  //   const { value } = event.currentTarget;
  //   this.setState({ shared: value });
  // };

  render() {
    const { todos, todosAreChanging } = this.props;

    if (todosAreChanging) {
      return <div className="loader" />;
    }

    if (!todos) {
      return <p>No todos.</p>;
    }

    const thisTodo = todos.find(todo => todo.id == this.props.match.params.id);

    return (
      <div>
        <Id id={thisTodo.id} />
        <Title title={thisTodo.title} />
        <p>UserId: {thisTodo.userId}</p>
        <p>{thisTodo.completed ? "completed" : "not-completed"}</p>
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos.todos,
  todosAreChanging: state.todos.todosAreChanging,
  error: state.todos.error
}))(TodosDetails);
