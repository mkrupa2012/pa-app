import React from 'react';

import {
    Link,
} from 'react-router-dom';

class Navigation extends React.Component {  
    render() {    
        return (
            <nav className='nav-dark bg-dark'> 
                <ul className='nav justify-content-center'>
                    <li className='nav-item nav-link'>
                        <Link className='text-light' activeClassName="active" to="/">Home</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link className='text-light' to="/payments">Lista płatności</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link className='text-light' to="/todo">Lista zadań</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link className='text-light' to="/late">Lista zaległości</Link>
                    </li>
                </ul>
            </nav>           
                )
            }            
        }

export default Navigation;