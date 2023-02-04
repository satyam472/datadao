import React from 'react'

const addVideos = () => {
  return (
    <div className='container'>
      <div className='container'>
        <form className='addCourseForm'>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Video Number :</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <label for="exampleFormControlFile1">Video Name :</label>
            <input className="form-control" type="text" placeholder="Video Name"></input>
          </div>
          <div>
            <label for="exampleFormControlFile1">Video Describtion :</label>
            <input className="form-control" type="text" placeholder="Course Describtion :"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Module Number :</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <label for="exampleFormControlFile1">Module Name :</label>
            <input className="form-control" type="text" placeholder="Tutor Name"></input>
          </div>
          <div class="text-center">
            <button type="submit" className="mt-2 btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default addVideos;