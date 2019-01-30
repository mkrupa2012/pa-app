import React, { Component } from 'react'
import TodoItem from "./Todoitem.js";

export default class TodoList extends Component {
    render() {

const {items, clearList, handleDelete, handleEdit } = this.props;
    return (
        <ul className="list-group my-5">
        <h5 className="text-center">Lista zadań</h5>
            {items.map(item => {
                return( <TodoItem 
                key={item.id} 
                title={item.title} 
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                /> 
                )
                })
            }
        <button type="button" className="btn btn-danger btn-block mt-3" 
        onClick={ clearList }>Wyczyść listę</button>
        </ul>
        )
    }
}

