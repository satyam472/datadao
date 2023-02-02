import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';

function MyCourses() {
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
    <>
    <div className='row'>
        <div className='col col-md-12'>
            <div className='created_cards'>
        <h1>Courses you created</h1>
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
        </div>
        <div className='col col-md-12'>
            <div className='purchased_cards'>
        <h1>Courses you purchased</h1>
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
        </div>
    </div>

    </>
  );
}

export default MyCourses;


{/* <div className='cards'>
<h1>Check out these Featured Courses!</h1>
<div className='cards__container'>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItem
         src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
         title='The road to web3'
         des='A 10-week self-paced program to make you an advanced web3 developer.'
         label='Web3'
         path='/dashboard'
      />
      <CardItem
        src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
        title='The road to web3'
        des='A 10-week self-paced program to make you an advanced web3 developer.'
        label='Web3'
        path='/dashboard'
      />
      <CardItem
         src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
         title='The road to web3'
         des='A 10-week self-paced program to make you an advanced web3 developer.'
         label='Web3'
         path='/dashboard'
      />
    </ul>
  </div>
</div>
</div> */}