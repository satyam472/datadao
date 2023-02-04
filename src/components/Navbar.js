import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const[address,setAddress] = useState("");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleConnectWallet = async()=>{

    if(window.ethereum){
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
              // Return the address of the wallet
              setAddress(res[0]);
              console.log("address = ",res[0])
      });
    }
    else{
      alert("install metamask extension!!")
    }
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            DataDao
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' style={{textDecoration:"none"}} className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{textDecoration:"none"}}
              >
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/My_Courses'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My_Courses
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          {button && <Button buttonStyle='btn--outline'>Connect Wallet</Button>} */}
          <Link to='/sign-up'>
          <button type="button" className="mb-2 mr-3 btn btn-light">Sign Up</button>
          </Link>
          <button type="button" onClick={handleConnectWallet} className="mb-2 btn btn-light">Connect Metamask</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
