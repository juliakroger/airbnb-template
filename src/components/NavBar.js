import React from 'react';
import LogOut from './LogOut';
import { reactLocalStorage } from 'reactjs-localstorage';
const user = (reactLocalStorage.getObject('user'))

const NavBar = ({RouteChange}) => {
    return(
        <nav className="dt w-100 border-box pa3 ph5-ns bg-light-blue ">
            <p>{user.user}</p>
            <p className="dtc v-mid mid-gray link dim w-25 pointer" title="Home">
                <img src="https://library.lapeer.org/children/images/mypc-website-icon-2-books.png/@@images/62152f98-be65-43be-8fe9-e7dcb97f5646.png" onClick={() => RouteChange('')} className="dib w2 h2 br-100" alt="Site Name"/>
            </p>
            <div className="dtc v-mid w-75 tr">
                <p className="link dim dark-gray f6 dib mr3 pointer" onClick={() => RouteChange('addBook')}>Add new Book</p>
                <p className="link dim dark-gray f6 dib mr3 pointer" onClick={() => RouteChange('MyBooks')}>My books</p>
                <p className="link dim dark-gray f6 dib mr3 pointer" onClick={() => RouteChange('ToRead')}>Books to read</p>
                <LogOut/>
            </div>
        </nav>
    );
}

export default NavBar;