import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className="text-center sticky-top container-fluid bg-dark text-white">
        <h2 className='mt-3'>Publish Your Courses!</h2>
        <Link to='/add-courses'>
          <button className='btn mt-3' style={{ background: "white", color: "black", marginRight: "10px", cursor: "pointer", marginBottom: "10px" }}>
            Add Course
          </button>
        </Link>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Dashboard;
