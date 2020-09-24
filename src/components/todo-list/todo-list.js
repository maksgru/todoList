import React, { Component } from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone, onToggleImportant } = this.props;
    return (
      <ul className="list-group todo-list">
        {todos.map((todo) => {
          const { id, ...todoProps } = todo;
          return (
            <li key={id} className="list-group-item">
              <TodoListItem
                {...todoProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
