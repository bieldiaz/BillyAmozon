import React, { Component } from 'react';
import Menu from './Components/Menu';
import List from './Components/List';

import './App.css';

class App extends React.Component {
  //CUANDO HAY UNA CLASSE SE TIENE DE REFERENCIAR EL STATE CON EL THIS
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg' },
        { id: 1, rating: 3, title: 'The shining', image: 'libro02.jpg' },
        { id: 2, rating: 5, title: 'Código Da Vinci', image: 'libro03.jpg' },
        { id: 3, rating: 5, title: 'El principito', image: 'libro04.jpg' },
        { id: 4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg' }
      ],
      copyBooks: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onremove = this.onremove.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  initBooks() {
    //this.setState({copyBooks: [...this.state.books]});
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }

  componentDidMount() {
    this.initBooks();
  }

  onSearch(query) {
    if (query === '') {
      this.setState({ copyBooks: [...this.state.books] });
    } else {

      const temp = [...this.state.books];
      var res = [];
      temp.forEach(item => {
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });

      this.setState({ copyBooks: [...res] });
    }
  }

  addItem(item) {
    var temp = [...this.state.books];
    const id = temp[temp.length - 1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({ books: [...temp] });
    this.initBooks();
  }

  onremove(id) {
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id != id);
    this.setState({ books: [...res] });
    this.initBooks();
    console.log('eliminaando');
  }

  updateRating(item) {
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({ books: [...temp] });
    this.initBooks();
  }

  render() {
    return (
      <div className="app">
        <Menu title="Billy Store" onsearch={this.onSearch} onadd={this.addItem} />
        <List className="list" items={this.state.copyBooks} onremove={this.onremove} onupdaterating={this.updateRating} />
      </div>
    );
  }
}

export default App;
