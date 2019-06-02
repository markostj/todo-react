import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components";

import { connect } from "react-redux";
import { getTodosActions } from "../redux/todosActions";

class Todos extends React.Component {
  state = {
    totalCount: 0,
    currentPage: 1,
    itemsPerPage: 5
  };

  componentDidMount() {
    const { getTodosRequest, getTodosSuccess, getTodosError } = this.props;

    getTodosRequest();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => {
        getTodosSuccess(todos);
        this.setTotalCount(todos);
      })
      .catch(error => getTodosError(error));
  }

  setPage = event => {
    const { value } = event.target;
    this.setState({
      currentPage: parseInt(value)
    });
  };

  setTotalCount = todos => {
    this.setState({
      totalCount: todos.length
    });
  };

  componentWillUpdate(nextProps) {
    const { todos } = this.props;

    if (todos !== nextProps.todos) {
      this.setTotalCount(nextProps.todos);
    }
  }

  renderItem = ({ id, title }) => (
    <div key={id}>
      <Link to={`/todos/${id}`}>{title}</Link>
    </div>
  );

  render() {
    const { todos, todosAreChanging, error } = this.props;

    if (todosAreChanging) {
      return <p>Loading...</p>;
    }

    if (!todos) {
      return <div className="loader" />;
    }

    const { itemsPerPage, currentPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedTodos = todos.slice(startIndex, endIndex);

    return (
      <div className="wrapper">
        {pagedTodos.map(item => this.renderItem(item))}
        <Pagination {...this.state} setPage={this.setPage} />
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos.todos,
    todosAreChanging: state.todos.todosAreChanging,
    error: state.todos.error
  }),
  dispatch => ({
    getTodosRequest: () => dispatch(getTodosActions.todosRequest()),
    getTodosSuccess: todos => dispatch(getTodosActions.todosSuccess(todos)),
    getTodosError: error => dispatch(getTodosActions.todosSuccess(error))
  })
)(Todos);
