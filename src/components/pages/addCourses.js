import React,{useState} from 'react'
import {useForm} from 'react-hook-form';

const addCourses = () => {
    // const[formDetail,setformDetail] = useState([]);

    handleSubmit = (data)=>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="exampleFormControlFile1">Course Name :</label>
                <input className="form-control" type="text" placeholder="Course Name" name='course_name' {...register("course_name")}></input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlFile1">Course Thumbnail :</label>
                <input type="file" classNameName="form-control-file" id="exampleFormControlFile1" name='course_image' {...register("course_image")}></input>
            </div>
            <div>
                <label for="exampleFormControlFile1">Tutor Name :</label>
                <input className="form-control" type="text" placeholder="Tutor Name" name='tutor_name' {...register("tutor_name")}></input>
            </div>
            <div class="text-center">
                <button type="submit" className="mt-2 btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default addCourses;