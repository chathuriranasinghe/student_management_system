import React, { useState } from 'react';
import logout from '../images/logout.png';
import home from '../images/home.png';
import student from '../images/student.png';
import course from '../images/course.png';
import kdu_logo from '../images/kdu_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
export default function EditCourse() {
  const [clear, setClear] = useState(false)
  const [updateForm,setUpdateForm] = useState(false)
  const [saveForm,setSaveForm] = useState(false)
  const [searchData, setsearchData] = useState({ indexNo:""})
  const [data, setData] = useState([])
  const [view, setView] = useState(false)
  const [courseData, setCourseData] = useState({
    indexNo: '',
    semester: '',
    course1: '',
    course2: '',
    course3: '',
    course4: '',
    course5: '',
    course6: '',
    course7: '',
    course8: ''
  })



  async function handleDisplay() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/course/getCourses"
      ); // Using the Next.js API route
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const databyid = await response.json();
      setData(databyid);
      console.log(databyid);
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  //call to handleDidplay function using useEffect
  useEffect(() => {
    if (view === true) {
      handleDisplay(); 
      setView(false)// Perform your side effect when view is true
  }
  
  }, [view]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [name]: value,
    }));
  };


  const handleInputSearch = (e) => {
    const { id, value } = e.target;
    setsearchData((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [id]: value,
    }));
  };

  //search function
  async function handleSearch() {
    console.log("searchdata", searchData);
    console.log("searchdata", searchData.indexNo);
    try {
      const response = await fetch(`http://localhost:8080/api/v1/course/getCourseByIndexNo/${searchData.indexNo}`,
      {
        method:'GET',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  }}
  ); // Using the Next.js API route
      
  if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const databyid = await response.json();
      setData([databyid  ]);
      setsearchData({ indexNo: "" })
      console.log(databyid);

      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
//form submission function


const handleUpdate = () => {
  setUpdateForm(true);
};
const handleSave = () => {
  setSaveForm(true);
};
useEffect(() => {
  console.log('courseData', courseData);
  
  if(saveForm === true){
    setView(false);
    const response =axios.post('http://localhost:8080/api/v1/course/saveCourse', courseData)
  .then(function (response) {
    console.log('Response:', response.data);
    console.log("Successfully saved student details!!!")
    
    setClear(true);
    console.log('courseData', courseData);
    setSaveForm(false)
    setView(true);

 })
.catch(function (error) {

    console.error('Error:', error);
});
  }

  if(updateForm === true){
    setView(false);
    const response =axios.put('http://localhost:8080/api/v1/course/updateCourse', courseData)
  .then(function (response) {
    console.log('Response:', response.data);
    console.log("Successfully updated student details!!!")
    setClear(true);
    setUpdateForm(false)
    setView(true);
})
.catch(function (error) {

    console.error('Error:', error);
});
  }

      // e.preventDefault();
     
        // //update api
        // if(updateForm === true){
        //   setView(false);
        //   console.log(courseData);
        //   try {
        //     const response =  fetch("http://localhost:8080/api/v1/course/updateCourse", {
           
        //     method: "PUT",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(courseData), // Send the email as an object
        //     });
      
        //     if (response.ok) {
            
        //       console.log("Course details update successfull");
        //       setClear(true);
        //       setUpdateForm(false);
        //       setView(true);
          
        //     } else {
        //       console.log("Course details update fail");
              
        //     }
        //   } catch (error) {
        //     console.error("An error occurred:", error);
        //   }
        // }
  
        // //save api
        // if(saveForm === true){
        //   console.log(courseData);
        //    setView(false);
        //   try {
        //     const response =  fetch("http://localhost:8080/api/v1/course/saveCourse", {
          
        //     method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(courseData), // Send the email as an object
        //     });
      
        //     if (response.ok) {
            
        //       console.log("Course details save successfull");
        //       setClear(true);
        //       setSaveForm(false);
        //       setView(true);
             
          
        //     } else {
        //       console.log("Course details update fail");
              
        //     }
        //   } catch (error) {
        //     console.error("An error occurred:", error);
        //   }
        
        // }
      }, [saveForm, updateForm]);
        //claer to input filed
    useEffect(() => {
      if(clear=== true){
        setCourseData({ 
          indexNo: '',
          semester: '',
          course1: '',
          course2: '',
          course3: '',
          course4: '',
          course5: '',
          course6: '',
          course7: '',
          course8: ''  
          })
        setClear(false);
      }
            
          }, [clear]);
  return (
    <div className='bg-[#B8F6FA] h-screen  px-4 py-4'>
        <div className='relative flex items-start flex-col'>
            <div className='w-full h-20 bg-[#97CDD0] flex items-center space-x-80 '>
                <div className='mx-4'>
            <img src={kdu_logo} alt='KDU Logo' className='w-16 h-auto'/>
                </div>
                <div className='pl-6'>
                <h1 className='text-black font-extrabold text-3xl font-inter'>STUDENT MANAGEMENT SYSTEM</h1>
                </div>
                <div className='relative flex space-x-8'>
                <Link to='/Home' className='relative flex hover:bg-[#97CDD0] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {home} alt="Home Logo" className='w-8 h-8 rounded-md'/>
          </Link>
          <Link to='/StudentDetails' className='relative flex hover:bg-[#97CDD0] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {student} alt="Home Logo" className='w-8 h-8 rounded-md'/>
          </Link>
          <Link to='/CourseDetails' className='relative flex hover:bg-[#97CDD0] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {course} alt="Home Logo" className='w-8 h-8 rounded-md'/>
          </Link>
                </div>
        </div>                
            </div>
            <div className='relative flex '>
        <div className='w-1/4 h-lc rounded-md bg-white relative flex items-center  mt-6 '>
        <form class=" ml-6 space-y-3 pb-16 w-full" >
        <input
              type="text"
              placeholder="Index number"
              onChange={(e) => handleInputChange(e)}
              value={courseData.indexNo}
              required={true}
     
              name='indexNo'
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <select
             onChange={(e) => handleInputChange(e)}
             value={courseData.semester}
             required={true}
    
              name='semester'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Semester</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
              <option value="Semester 4">Semester 4</option>
              <option value="Semester 5">Semester 5</option>
              <option value="Semester 6">Semester 6</option>
              <option value="Semester 7">Semester 7</option>
              <option value="Semester 8">Semester 8</option>
              </select>
              <select
             onChange={(e) => handleInputChange(e)}
             value={courseData.course1}
             required={true}
             name='course1'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 1</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
               onChange={(e) => handleInputChange(e)}
               value={courseData.course2}
               required={true}
              name='course2'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 2</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
               onChange={(e) => handleInputChange(e)}
               value={courseData.course3}
               required={true}
              name='course3'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 3</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
             onChange={(e) => handleInputChange(e)}
             value={courseData.course4}
             required={true}
              name='course4'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 4</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
              onChange={(e) => handleInputChange(e)}
              value={courseData.course5}
              required={true}
              name='course5'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 5</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
              onChange={(e) => handleInputChange(e)}
              value={courseData.course6}
              required={true}
              name='course6'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 6</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
             onChange={(e) => handleInputChange(e)}
             value={courseData.course7}
             required={true}
              name='course7'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 7</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
              <select
            onChange={(e) => handleInputChange(e)}
            value={courseData.course8}
            required={true}
              name='course8'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Course 8</option>
              <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
              </select>
          </form>
<div className='w-full h-16 bg-[#97CDD0] absolute inset-x-0 bottom-0 rounded-b-md hover:bg-[#009DCE]' >
        <Link to='/Login' className=' flex justify-center items-center pt-3'>  
        <img src={logout} alt='Logout Logo' className='w-10 h-auto'/>
          <h1 className='font-bold text-xl text-black'>Logout</h1></Link>
      </div>
        </div>
        <div className='flex flex-col w-3/4  items-start'>
        <div className='w-full pl-6 pt-6  '>
        <div className='bg-white rounded-md h-lc '>
          <div className='space-y-8 px-3 py-3'>
          <div className='bg-[#E2E2E2] w-full h-16 relative flex items-center pl-6 pr-6 rounded-md'>
            <h1 className='text-black  font-semibold text-lg font-inter'>Index Number</h1>
            <div class="px-4 relative flex items-center ">
    <label for="index" class="block mb-2 text-sm font-md text-gray-900 dark:text-white"/>
    <input type="index" class="pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-60 h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="D/BSE/_ /____"
     onChange={(e) => handleInputSearch(e)}
     value={searchData.indexNo}
     required={true}
     id="indexNo"/>
  </div>
  <div className='relative flex pl-96 space-x-12'>

  <button  class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]"
   type="submit"    onClick={handleSearch}
  >Search</button>
  <button type="refresh" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" 
          onClick={handleDisplay}
         >Refresh</button>
    </div>
          </div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Index No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Semester
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Course 1
                </th>
                <th scope="col" class="px-6 py-3">
                    Course 2
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Course 3
                </th>
                <th scope="col" class="px-6 py-3">
                    Course 4
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Course 5
                </th>
                <th scope="col" class="px-6 py-3">
                    Course 6
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Course 7
                </th>
                <th scope="col" class="px-6 py-3">
                    Course 8
                </th>
                </tr>
        </thead>
        <tbody className=''>
  
  {console.log("near the map",data)}
  { 
  data.map((item, index)=>(
     
    <tr class="border-b border-gray-200 dark:border-gray-700">
       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th>
  <td className=" text-black">{item.indexNo}</td>
  <td className=" text-black">{item.semester}</td>
  <td className=" text-black">{item.course1}</td>
  <td className=" text-black">{item.course2}</td>
  <td className=" text-black">{item.course3}</td>
  <td className=" text-black">{item.course4}</td>
  <td className=" text-black">{item.course5}</td>
  <td className=" text-black">{item.course6}</td>
  <td className=" text-black">{item.course7}</td>
  <td className=" text-black">{item.course8}</td>
    </tr>
    
    ))
  
                  }
    </tbody>
      
    </table>
</div>
</div>
<div className='w-full h-16 bg-[#E2E2E2]  my-64 relative flex items-center justify-center space-x-12 rounded-b-md '>
<button type="submit" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" onClick={() => { handleSave();  }} >Save</button>
<button type="submit" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" onClick={() => { handleUpdate(); }}>Update</button>
<button type="submit" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Delete</button>
</div>
        </div>
        </div>
      </div>
      </div>
        </div>
  )
}
