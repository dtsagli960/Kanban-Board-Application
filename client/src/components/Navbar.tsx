import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
      {
        !loginCheck ? (
          <li className="nav-item">
          <div className="button-container">
            <button type="button" id="create-ticket-link">
              <Link to="/">New Ticket</Link>
            </button>
            <button type="button" id="login">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </li>
        ) : (
          <li className='nav-item'>
            <div className="button-container">
            <button type='button' id='create-ticket-link'>
              <Link to='/create' >New Ticket</Link>
            </button>
            <button type='button' id="logout" onClick={() => {
              auth.logout();
            }}>Logout</button>
            </div>
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Navbar;
