import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    // fetch
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => {
        // bring it into state
        this.setState({todos: response.data})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    //console.log('in render' + this.state.todos);
    const items = this.state.todos.length > 1 && this.state.todos.map((item) => {
      return <li key={item.id}>{item.title}</li>
    });
    return(
      // iterate
      <div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;
