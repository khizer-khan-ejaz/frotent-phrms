import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { Context } from '../context/Context';
import axios from "axios";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

import useToast from "../hooks/useToast";


function Signup() {



  const { setUser } = useContext(Context);
  const { showSuccess, showError } = useToast();

  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [otherDetails, setOtherDetails] = useState({
    dateOfBirth: "",
    favouriteBook: "",
    petName: ""
  })

  const [passwordErrors, setPasswordErrors] = useState({
    number: false,
    character: false,
    specialCharacter: false,
  })
  const [validated, setValidated] = useState(false);

  const [signupLoading, setSignupLoading] = useState(false);
  const navigate = useNavigate();

  function validatePassword(password) {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);

    if (!hasLowerCase && !hasUpperCase) {
      setPasswordErrors(prevState => ({ ...prevState, character: true }));
    } else {
      setPasswordErrors(prevState => ({ ...prevState, character: false }));
    }

    if (!hasNumber) {
      setPasswordErrors(prevState => ({ ...prevState, number: true }));
    } else {
      setPasswordErrors(prevState => ({ ...prevState, number: false }));
    }

    if (!hasSpecialChar) {
      setPasswordErrors(prevState => ({ ...prevState, specialCharacter: true }));
    } else {
      setPasswordErrors(prevState => ({ ...prevState, specialCharacter: false }));
    }

  }

  useEffect(() => {
    const isPasswordValidated =
        !passwordErrors.number &&
        !passwordErrors.character &&
        !passwordErrors.specialCharacter;

    if (
        signupDetails.name.length > 0 &&
        signupDetails.email.length > 0 &&
        signupDetails.password.length > 0 &&
        isPasswordValidated
    ) {
        setValidated(true);
    } else {
        setValidated(false);
    }
}, [
    signupDetails.name,
    signupDetails.email,
    signupDetails.password,
    passwordErrors.number,
    passwordErrors.character,
    passwordErrors.specialCharacter,
]);

  const handlePasswordChange = (e) => {

    setSignupDetails({ ...signupDetails, password: e.target.value })
    validatePassword(e.target.value);

  }


  const handleSignup = async () => {

    try {

      console.log(signupDetails);
      console.log(otherDetails);

      if(!signupDetails.name || !signupDetails.email || !signupDetails.password || !otherDetails.dateOfBirth || !otherDetails.favouriteBook || !otherDetails.petName){
        showError("All fields are required")
        return;
      }

      setSignupLoading(true);

      const res = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/api/admin/signup`,
        method: "post",
        data: { name: signupDetails.name, email: signupDetails.email, password: signupDetails.password , dob : otherDetails?.dateOfBirth , book : otherDetails.favouriteBook , petName : otherDetails.petName },
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      const data = res.data;

      if (data.error) {
        showError(data.error);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/admin");
      showSuccess(data.success);


    } catch (error) {
      showError(error.response.data.error);
      return;
    } finally {
      setSignupLoading(false);
    }

  }

  const [showPassword, setShowPassword] = useState(false);

  const handleShowToggle = () => setShowPassword(!showPassword);



  return (
    <>

      <div className=" borde bg-[#EFF8FF] w-[100vw] h-[100vh] flex justify-center items-center">

        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center ">

          {/* heading section */}
          <div> <h1 className="text-[29px] mb-2 font-bold text-gray-700">Welcome</h1> </div>

          {/* form container */}
          <div className="bg-white shadow-md  w-[90%] sm:w-[90%]  md:w-[60%]  flex rounded-[40px] justify-center items-center p-3" >


            {/* left part for image */}
            <div className=" hidden md:flex w-[45%] rounded-[40px] overflow-hidden justify-center items-center  ">
              <img className="max-h-[450px]" src="images/login.jpg" alt="signup-image" />
            </div>

            {/* right part for form */}
            <div className="  rounded-[40px] relative  w-[100%] md:w-[55%] flex gap-5 flex-col  items-center p-2 md:p-5">

              <h1 className=" text-2xl text-gray-700 ">Signup</h1>

              <div className="flex  w-full   flex-col p-3 gap-4">



                <div className="flex gap-2">
                  <div className="flex gap-3 flex-col flex-1">
                    <input value={signupDetails.name} onChange={(e) => setSignupDetails({ ...signupDetails, name: e.target.value })} className=" flex-1 px-3 py-3  bg-gray-50 outline-none focus:bg-white  rounded-md border shadow-md   border-gray-300  " type="text" placeholder="enter name" />

                  </div>
                </div>

                <div className="relative flex w-full justify-center items-center">
                  <input value={signupDetails.email} onChange={(e) => setSignupDetails({ ...signupDetails, email: e.target.value })} className=" w-full px-3 py-3  bg-gray-50 outline-none focus:bg-white  rounded-md border shadow-md   border-gray-300 " type="email" placeholder="enter email" />
                </div>

                <div className="relative flex  w-full justify-center items-center gap-3">
                  <input className='p-2 w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md' value={otherDetails.dateOfBirth} onChange={(e) => setOtherDetails({ ...otherDetails, dateOfBirth: e.target.value })} placeholder='DOB' />
                  <input className='p-2 w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md' value={otherDetails.favouriteBook} onChange={(e) => setOtherDetails({ ...otherDetails, favouriteBook: e.target.value })} placeholder='any book' />
                  <input className='p-2 w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md' value={otherDetails.petName} onChange={(e) => setOtherDetails({ ...otherDetails, petName: e.target.value })} placeholder='pet name' />
                </div>
                <div className="relative flex  w-full justify-center items-center gap-3 text-black">
                  <span className='text-green-600  text-[10px] md:text-[12px] text-center'>Enter your Date of Birth</span>
                  <span className='text-green-600  text-[10px] md:text-[12px] text-center'> Enter your favourite book </span>
                  <span className='text-green-600  text-[10px] md:text-[12px] text-center'> Enter your pet name </span>
                </div>

                <div className="relative flex flex-col w-full justify-center items-center">

                  <div className='flex w-full justify-center items-center'>
                    <input value={signupDetails.password} type={`${showPassword ? 'text' : 'password'}`} onChange={(e) => handlePasswordChange(e)} className=" w-full px-3 py-3  bg-gray-50 outline-none focus:bg-white  rounded-md border shadow-md   border-gray-300" placeholder="enter password" />
                    <button onClick={handleShowToggle} className='absolute right-[10px]  px-2 py-1 rounded-md' > {showPassword ? <IoMdEyeOff size={"25px"} /> : <FaEye size={"25px"} />} </button>
                  </div>


                  <div className='flex flex-wrap gap-[10px] items-start justify-start mr-auto'>
                    {passwordErrors.character && <> <span className='text-red-500 text-[12px]'> Include the character </span> </>}
                    {passwordErrors.number && <> <span className='text-red-500 text-[12px]'> Include the number </span> </>}
                    {passwordErrors.specialCharacter && <> <span className='text-red-500 text-[12px] '>  Include the special character </span> </>}
                  </div>

                </div>


              </div>

              <Button _hover={{ bg: "yellow.500" }} cursor={` ${validated ? "pointer" : "not-allowed"} `} isLoading={signupLoading} onClick={handleSignup} bg={"#f5d04c"} p={"5px"} w={"40%"} borderRadius={"10px"} color={"white"} > Signup   </Button>
              <p className='text-blue-400'>already a member ? <Link to={"/login"} className='underline'>login</Link> </p>

            </div>


          </div>


        </div>

      </div>

    </>
  )
}

export default Signup