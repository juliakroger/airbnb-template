import React , {Component} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

const user = (reactLocalStorage.getObject('user'))

class AddBooks extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: user.user,
            book_name: '',
            book_author: '',
            book_price: '',
            book_read: 'not read'
        }
    }

    cleanInputs = () => {
        document.getElementById('bookname').value='';
        document.getElementById('bookauthor').value='';
        document.getElementById('bookprice').value='';
    }

    onBookNameChange = (event) => {
        this.setState({book_name: event.target.value})
    }

    onBookAuthorChange = (event) => {
        this.setState({book_author: event.target.value})
    }

    onBookPriceChange = (event) => {
        this.setState({book_price: event.target.value})
    }

    onBookSelectChange = (event) => {
        this.setState({book_read: event.target.value})
    }

    onSubmit = () => {
        fetch('http://localhost:3000/addbook', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: this.state.user_id,
                name: this.state.book_name,
                author: this.state.book_author,
                book_price: this.state.book_price,
                read: this.state.book_read,
            })
        })
            .then(response => response.json())
            .then(alert('Livro cadastrado com sucesso'))
            .then(this.cleanInputs)

    }

    render(){
    return(
    <form className="measure center">
        <h2 className="tc f2 black-70 coolFont">Add a new book</h2>
        <div className="mt3">
            <label className="db f6 ph2 mb2">Book Name</label>
            <input onChange={this.onBookNameChange} className="db w-100 b pv2 ph3 bg-light-blue hover-bg-lightest-blue hover-gray bn br-pill " type="text" id="bookname" />
        </div>
        <div className="mt3">
            <label className="db f6 ph2 mb2">Author</label>
            <input onChange={this.onBookAuthorChange} className="db w-100 b pv2 ph3 bg-light-blue hover-bg-lightest-blue hover-gray bn br-pill " type="text" id="bookauthor"/>
        </div>
        <div className="mt3">
            <label className="db f6 ph2 mb2">Price</label>
            <input onChange={this.onBookPriceChange} className="db w-100 b pv2 ph3 bg-light-blue hover-bg-lightest-blue hover-gray bn br-pill " type="text" id="bookprice"/>
        </div>

        <div className="mt3">
        <select id="lang" onChange={this.onBookSelectChange} value={this.state.value} className="db w-100 b pv2 ph3 bg-light-blue hover-bg-lightest-blue hover-grey bn br-pill pa2 input-reset">
            <option value="not read">Not read</option>
            <option value="read">Read</option>
        </select>
        </div>

        <p onClick={this.onSubmit} className="tc input-reset db w-100 f6 b ttu tracked pv3 ph3 pointer bg-light-blue hover-bg-lightest-blue bn br-pill">Add book</p>

    </form>
    );
    }
}

export default AddBooks;