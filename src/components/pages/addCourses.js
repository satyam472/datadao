import React from 'react'

const addCourses = () => {
    return (
        <form>
            <div>
                <label for="exampleFormControlFile1">Course Name :</label>
                <input className="form-control" type="text" placeholder="Course Name"></input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlFile1">Course Thumbnail :</label>
                <input type="file" classNameName="form-control-file" id="exampleFormControlFile1"></input>
            </div>
            <div>
                <label for="exampleFormControlFile1">Tutor Name :</label>
                <input className="form-control" type="text" placeholder="Tutor Name"></input>
            </div>
            <div class="text-center">
                <button type="submit" className="mt-2 btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default addCourses;