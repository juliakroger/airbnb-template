import React, {Component} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

const user = (reactLocalStorage.getObject('user'))

class MyBooks extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            user_id: user.user
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/books',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: this.state.user_id
            })
        })
            .then(response => response.json())
            .then(data => this.setState({books: data}))
    }

    render(){
    return(
        <div className="pa4">
            <h2 className="tc f2 black-70 coolFont">All my books</h2>
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                    <tr className="stripe-dark">
                        <th className="fw6 tl pa3 bg-white">Title</th>
                        <th className="fw6 tl pa3 bg-white">Author</th>
                        <th className="fw6 tl pa3 bg-white">Price</th>
                        <th className="fw6 tl pa3 bg-white">Read</th>
                    </tr>
                    </thead>
                    <tbody className="lh-copy">

{
    (this.state.books || []).map((book) => {
     return(
            <tr className="stripe-dark" key={book.id}>
            <td className="pa3">{book.name}</td>
            <td className="pa3">{book.author}</td>
            <td className="pa3">${book.book_price}</td>
            <td className="pa3">{book.read}</td>
        </tr>)
    }
    )
}
                    </tbody>
                </table>
            </div>
        </div>
    );
    }
}

export default MyBooks;