import React, { Component } from 'react';
import Menu from './Components/Menu';
import List from './Components/List';

import './App.css';

class App extends React.Component {
  //CUANDO HAY UNA CLASSE SE TIENE DE REFERENCIAR EL STATE CON EL THIS

  constructor(props) {//CONSTRUCTOR EN REACT

    super(props);

    this.state = {
      books: [
        { id: 0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg' },
        { id: 1, rating: 3, title: 'The Shining', image: 'libro02.jpg' },
        { id: 2, rating: 5, title: 'Codigo Da Vinci', image: 'libro03.jpg' },
        { id: 3, rating: 5, title: 'El principito', image: 'libro04.jpg' },
        { id: 4, rating: 2, title: 'Sobrenatural', image: 'libro05.jpg' }
      ],
      copyBooks: [

      ]
    };
  }

  componentDidMount() {
    this.initBooks();

  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }

  onAdd = (item) => {
    let temp = [... this.state.books];
    const id = temp[temp.length - 1].id++;
    item['id'] = id;
    temp.push(item);
    this.setState({ books: [...temp] });
    this.initBooks();
  }
  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
    } else {
      const temp = [... this.state.books];
      let res = [];
      temp.forEach(item => {

        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });

      this.setState({ copyBooks: [...res] });

    }
  }

  render() {
    return (
      <div className="app" >
        <Menu title="Billy Store" onadd={this.onAdd} onsearch={this.onSearch} />
        <List items={this.state.copyBooks} />

      </div>
    );
  }

}

export default App;
