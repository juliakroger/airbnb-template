import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import AddBooks from '../components/AddBooks';
import MyBooks from '../components/MyBooks';
import BooksToRead from "../components/BooksToRead";

const quotes = ['Reading gives us someplace to go when we have to stay where we are.',
    'Always read something that will make you look good if you die in the middle of it.',
    'Anyone who says they have only one life to live must not know how to read a book.',
    'I think of life as a good book. The further you get into it, the more it begins to make sense.',
    'Any book that helps a child to form a habit of reading, to make reading one of his deep and continuing needs, is good for him.',
    'Great books help you understand, and they help you feel understood.',
    'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
    'A book is a version of the world. If you do not like it, ignore it or offer your own version in return.',
    'We lose ourselves in books. We find ourselves there too.',
    'Keep reading books, but remember that a book is only a book, and you should learn to think for yourself.'
];

const random = Math.floor((Math.random() * 10) + 0);
class App extends Component {

    constructor(){
    super();
    this.state = {
        route: ''
    }
  }


  RouteChange = (route) => {
    this.setState({route: route})
  }


  render() {
    return (
      <div className="container helvetica">
          <NavBar RouteChange={this.RouteChange}/>
          {
              (this.state.route === 'ToRead') ? <BooksToRead/>
              : (this.state.route === 'addBook') ? <AddBooks/>
              : (this.state.route === 'MyBooks') ? <MyBooks/>
              : <h1 className="tc coolFont">{quotes[random]}</h1>
          }


      </div>
    );
  }
}

export default App;
