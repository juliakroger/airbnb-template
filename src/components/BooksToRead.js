import React , {Component} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

const user = (reactLocalStorage.getObject('user'))

class BooksToRead extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            user_id: user.user
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/booksToRead', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: this.state.user_id
            })
        })
            .then(response => response.json())
            .then(data => this.setState({books: data}))
    }

    submitButton = (id, obj) => {
        fetch('http://localhost:3000/updateRead', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                readIt: 'read',
                id: id
            })
        })
            .then(response => response.json())
    }

    render(){
        return(
            <div className="pa4">
                <h2 className="tc f2 black-70 coolFont">Books to read</h2>
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center" cellSpacing="0">
                        <tbody className="lh-copy">

                        {
                            this.state.books.map((book) => {
                                return (
                                    <tr className="stripe-dark" key={book.id}>
                                        <td className="pa3">{book.name}</td>
                                        <td className="pa3">{book.author}</td>
                                        <td><p onClick={this.submitButton.bind(this, book.id)} className="tc input-reset db w-50 f6 b ttu tracked pv2 ph2 pointer bg-light-blue hover-bg-lightest-blue bn br-pill">Read it!</p></td>
                                    </tr>
                                )
                            })

                        }
                        </tbody>
                    </table>


                </div>
            </div>
        );
    }
}

export default BooksToRead;