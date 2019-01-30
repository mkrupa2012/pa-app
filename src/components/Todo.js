import React from 'react';

import TodoInput from './todo/Todoinput.js';
import TodoList from './todo/Todolist.js';

import uuid from 'uuid';


class ToDo extends React.Component {

state={
    items: [],
    id: uuid(),
    item: '',
    editItem: false
};


handleChange = e => (
    this.setState({
        item: e.target.value
    })
);

handleSubmit = e => {
    e.preventDefault();

const newItem = {
    id: this.state.id,
    title: this.state.item
};

const updatedItems = [...this.state.items, newItem];

this.setState({
    items: updatedItems,
    item: '',
    id: uuid(),
    editItem: false
    });

};

clearList = () => {
    this.setState({
        items: []
    });
};

handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
        items: filteredItems
    });
};

handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
        items: filteredItems,
        item: selectedItem.title,
        editItem: true,
        id: id
    });
};
    render() {
    return (
                <div className="col-10 mx-auto col-md-8 mt-4 content">
                <h5 className="todo-title text-center">Twój osobisty notatnik online</h5>
                <br/>
                <h6 className="todo-title text-center">Notatnik z ważnymi terminami i zadaniami do wykonania to dziś niezbędność. 
                    Skorzystaj z notatnika online, który nie pozwoli Ci o niczym
                    zapomnieć. Bądź zawsze na bierząco ze swoimi sprawami prywatnymi i zawodowymi.
                </h6>
                <br/>
                <h5 className="todo-title text-center">Wprowadź zadanie</h5>
                <TodoInput 
                item={this.state.item} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
                />
                <TodoList 
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                />
                </div>
        )
    }
}

export default ToDo;