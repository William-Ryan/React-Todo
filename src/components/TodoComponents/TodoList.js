// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"

import Todo from "./Todo"

export default function TodoList(props){
    console.log(props)

    const state = count => {
        count = this.props.items.value
    }

    return (
        <div className="todo-list">
            {props.items.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </div>
    );
};