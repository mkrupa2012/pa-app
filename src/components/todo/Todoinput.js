import React, { Component } from 'react';

class TodoInput extends Component {
    render() {

const { item, handleChange, handleSubmit, editItem } = this.props;

return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Wpisz nazwę zadania" value={item} onChange={handleChange}/>
                </div>
                <button type="submit" 
                className={editItem 
                ? "btn btn-block btn-success mt-3" 
                : "btn btn-block btn-info mt-3"
                }>
                {editItem ? "Zakończ edycję i zapisz" : "Dodaj zadanie"}
                </button>
            </form>
        </div>
        )
    }
}


export default TodoInput;