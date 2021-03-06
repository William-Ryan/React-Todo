import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './styles.css'

const items = [
    {
        task: 'Do Laundry',
        id: 230,
        completed: false
    },
    {
        task: 'Wash Dishes',
        id: 231,
        completed: false 
    }
];

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            itemsList: items
        };
    }
    
    toggleItem = clickedId => {
        const newItemsList = this.state.itemsList.map(item => {
            if (item.id === clickedId) {
                return {
                    ...item,
                    completed: !item.completed
                };
            } else {
                return item;
            }
        });

        this.setState({
            itemsList: newItemsList
        });
    };

    addNewItem = itemText => {
        const newItem = {
            name: itemText,
            id: Date.now(),
            purchased: false
        };
        this.setState({
            itemsList: [...this.state.itemsList, newItem]
        });
    };

    itemDelete = () => {
      const resetList = this.state.itemsList.filter(items => !items.completed)

      this.setState({
        itemsList: resetList
      })
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                  <h1>Shopping List</h1>
                  <TodoForm addNewItem={this.addNewItem} 
                    itemDelete={this.itemDelete}
                  />
                </div>
                  <TodoList 
                    items={this.state.itemsList} 
                    toggleItem={this.toggleItem}
                  />
            </div>
        );
    }
}

export default App;

