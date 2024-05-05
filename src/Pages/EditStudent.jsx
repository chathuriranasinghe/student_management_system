import React, { useState } from 'react';
import logout from '../images/logout.png';
import home from '../images/home.png';
import student from '../images/student.png';
import course from '../images/course.png';
import kdu_logo from '../images/kdu_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
export default function EditStudent() {
  const [clear, setClear] = useState(false)
  const [view, setView] = useState(false);
  const [searchData, setsearchData] = useState({ indexNo: "" });
  const [updateForm,setUpdateForm] = useState(false)
  const [saveForm,setSaveForm] = useState(false)
  const [deleteForm,setDeleteForm] = useState(false)
  const [data, setData] = useState([]);
  const [post, setPost] = useState({
    indexNo: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    address: "",
    nicNo: "",
    degree: ""
  });
  //api for the display all the student when load page 
  //and if you add/delete/update studet it dispaly in student list using this api
  async function handleDisplay() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/getStudents"
      ); // Using the Next.js API route
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const databyid = await response.json();
      setData(databyid);
      console.log(databyid);
      console.log(data);
      setView(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

//this is user effect function it use to run  handleDisplay when change the view object
  useEffect(() => {
    if (view === true) {
      handleDisplay();
      setView(false); // Perform your side effect when view is true
    }
    
  }, [view]);

  const handleUpdate = () => {
    setUpdateForm(true);
  };
  const handleSave = () => {
    setSaveForm(true);
  };
//for search the student
  const handleInputSearch = (e) => {
    const { id, value } = e.target;
    setsearchData((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [id]: value,
    }));
  };
    //for the get inputchage at save student
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [name]: value,
    }));
  };


//api for the search student from user id
  async function handleSearch() {
    console.log("searchdata", searchData);
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/getStudentByIndexNo/${searchData.indexNo}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
        }
      ); // Using the Next.js API route
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const databyid = await response.json();
      setData([databyid]);
      console.log(databyid);
      console.log(data);
      setsearchData({ indexNo: "" })
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  //claer to input filed
    useEffect(() => {
if(clear=== true){
  setPost({    indexNo: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  address: "",
  nicNo: "",
  degree: ""})
  setClear(false);
}
      
    }, [clear]);
  //api for the save the user
  useEffect(() => {
   
    // e.preventDefault();
   
    if(saveForm === true){
      setView(false);
      const response =axios.post('http://localhost:8080/api/v1/user/saveStudent', post)
    .then(function (response) {
      console.log('Response:', response.data);
      console.log("Successfully saved student details!!!")
      
      setClear(true);
      console.log('postdata', post);
      setSaveForm(false)
      setView(true);

   })
  .catch(function (error) {

      console.error('Error:', error);
  });
    }

    if(updateForm === true){
      setView(false);
      const response =axios.put('http://localhost:8080/api/v1/user/updateStudent', post)
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


}, [saveForm, updateForm]);

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
        <form class=" ml-6 space-y-4 pb-16">
        <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="Index number"
              name='indexNo'
              value={post.indexNo}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="First Name"
              name='firstName'
              value={post.firstName}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="Last Name"
              name='lastName'
              value={post.lastName}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="Date of Birth"
              name='dateOfBirth'
              value={post.dateOfBirth}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <select
       
              onChange={(e) => handleInputChange(e)}
              name='gender'
              value={post.gender}
              required={true}
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              </select>
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
              name='email'
              value={post.email}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="Address"
              name='address'
              value={post.address}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              onChange={(e) => handleInputChange(e)}
              placeholder="NIC Number"
              name='nicNo'
              value={post.nicNo}
              required={true}
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <select
           value={post.degree}
           required={true}
              onChange={(e) => handleInputChange(e)}
              name='degree'
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected> Degree</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Computer Science">Computer Science</option>
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
          <div className='bg-[#E2E2E2] w-full h-16 relative flex items-center px-6 rounded-md'>
            <h1 className='text-black font-semibold text-lg font-inter'>Index Number</h1>
            <div class="px-8 flex items-center ">
    <label for="index" class="block mb-2 text-sm font-md text-gray-900 dark:text-white"/>
    <input 
    type="text"
     onChange={(e) => handleInputSearch(e)}
     value={searchData.indexNo}
     required={true}
     id="indexNo" 
    class="pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-60 h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="D/BSE/_ /____"/>
  </div>
  <div className='relative flex pl-96 space-x-12'>

  <button 
  class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]"

  onClick={() => handleSearch()}
  type="submit">
  Search
  </button>

  <button type="refresh" 
  class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]"
  onClick={() => handleDisplay()}
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
                    First Name
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of Birth
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Email 
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    NIC No.
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Degree
                </th>
                </tr>
        </thead>
        <tbody>
        {data &&
                  data.reverse().map((item) => (
                    <tr class="border-b  py-4 border-gray-200 dark:border-gray-700">
                      <td className=" font-medium  py-4 text-gray-900">{item.indexNo}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.firstName}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.lastName}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.dateOfBirth}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.gender}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.email}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.address}</td>
                      <td className=" font-medium  py-4 text-gray-900">{item.nicNo}</td>
                      <td className=" font-medium py-4 text-gray-900">{item.degree}</td>
                    </tr>
                  ))}
        </tbody>
    </table>
</div>
</div>
<div className='w-full h-16 bg-[#E2E2E2]  my-64 relative flex items-center justify-center space-x-12 rounded-b-md '>
<button type="submit" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" onClick={() => { handleSave();  }} >Add</button>
<button type="submit" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" onClick={() => { handleUpdate();  }}>Update</button>
<button type="submit" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Delete</button>
</div>
        </div>
        </div>
      </div>
      </div>
        </div>
  )
}
