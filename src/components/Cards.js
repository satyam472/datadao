import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  const[courses,setCourses] = useState([]); 

  const fetchCardDetails = async()=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch("http://localhost:4000/course/getAllCourse",requestOptions);
    console.log(response)
    const tempdata = await response.json();
    // const data = tempdata.map(JSON.parse);
    console.log(tempdata.response);
    setCourses(tempdata.response);
  }

  useEffect(() => {
    fetchCardDetails()
  }, []);

  return (
    <div className='cards'>
      <h1>Check out these Featured Courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              courses.map((course,index)=>(
                <CardItem
                  src= {course.image}
                  title = {course.course_name}
                  des= {course.tutor_name}
                  path='/dashboard'
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
