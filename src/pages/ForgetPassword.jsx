import React, {  useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex, Input } from '@chakra-ui/react';

import axios from "axios";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import useToast from "../hooks/useToast";

const ForgetPassword = () => {

    const { showSuccess, showError } = useToast();
    const [email, setEmail] = useState("");
    const passRef = useRef();
    const confirmPassRef = useRef();
    const navigate = useNavigate();
    const [otherDetails, setOtherDetails] = useState({
        dateOfBirth: "",
        favouriteBook: "",
        petName: ""
    })

    const handlePasswordChange = async () => {
        try {

            if(!email || !passRef.current.value || !confirmPassRef.current.value || !otherDetails.dateOfBirth || !otherDetails.favouriteBook || !otherDetails.petName){
                showError("All fields are required");
                return
            }

            if (passRef.current.value !== confirmPassRef.current.value) {
                showError("Both password didn't matched")
                return;
            }

            const res = await axios({
                url: `${process.env.REACT_APP_BACKEND_URL}/api/admin/forgot/password`,
                method: "post",
                data: { email, password: passRef.current.value , book : otherDetails.favouriteBook , dob : otherDetails.dateOfBirth , petName : otherDetails.petName}
            })

            const data = res.data;

            if (data.error) {
                showError(data.error);
                console.log(data.error);
                return;
            }

            showSuccess(data.success);

            console.log(data);
            navigate("/login");


        } catch (err) {
            console.log(err.message);
        }
    }

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleShowToggle1 = () => setShowPassword1(!showPassword1);
    const handleShowToggle2 = () => setShowPassword2(!showPassword2);

    return (
        <div className=" borde bg-[#EFF8FF] w-[100vw] h-[100vh] flex justify-center items-center">

            <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center ">

                {/* heading section */}
                <div> <h1 className="text-[29px] mb-2 font-bold text-gray-700"> Forgot your password? </h1> </div>

                {/* form container */}
                <div className="bg-white shadow-md  w-[90%] sm:w-[90%]  md:w-[60%] justify-center items-center flex rounded-[40px]  p-3" >


                    {/* left part for image */}
                    <div className="hidden md:flex w-[45%] rounded-[40px] overflow-hidden justify-center items-center  ">
                        <img className="max-h-[450px]" src="/images/login.jpg" alt="signup-image" />
                    </div>

                    {/* right part for form */}
                    <div className=" rounded-[40px] relative w-[100%] md:w-[55%] flex gap-5   flex-col  items-center p-2 md:p-5">

                        <h1 className=" text-2xl text-gray-700 "> Change Password </h1>

                        <div className="flex  w-full  flex-col gap-4  p-0">
                            <div className=" min-w-[250px] flex flex-col gap-2 justify-center items-center ">

                                <Flex flexDirection={"column"} gap={"15px"} w={"95%"} justifyContent={"center"} alignItems={"center"} >


                                    <Input width={"100%"} value={email} onChange={(e) => setEmail(e.target.value)} type="text" bg={"gray.50"} placeholder='enter admin email' padding={"27px"} className='w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md' />

                                    <span className='font-normal text-[12px] text-center text-green-600'>Please enter these 3 answers so that We can verify that it's you</span>
                                    <div className="relative flex  w-full justify-center items-center gap-3">
                                        <input className=' px-2 py-2 w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md ' value={otherDetails.dateOfBirth} onChange={(e) => setOtherDetails({ ...otherDetails, dateOfBirth: e.target.value })} placeholder='DOB' />
                                        <input className=' px-2 py-2 w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md ' value={otherDetails.favouriteBook} onChange={(e) => setOtherDetails({ ...otherDetails, favouriteBook: e.target.value })} placeholder='any book' />
                                        <input className=' px-2 py-2 w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md ' value={otherDetails.petName} onChange={(e) => setOtherDetails({ ...otherDetails, petName: e.target.value })} placeholder='pet name' />
                                    </div>

                                    <div className=' w-full flex justify-center items-center relative'  >
                                        <Input  ref={passRef} type={showPassword1 ? 'text' : 'password'} bg={"gray.50"} placeholder='enter new password' padding={"27px"} className='w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md' />
                                        <button onClick={handleShowToggle1} className='absolute right-[10px]  px-2 py-1 rounded-md' > {showPassword1 ? <IoMdEyeOff size={"25px"} /> : <FaEye size={"25px"} />} </button>
                                    </div>


                                    <div className='w-full flex justify-center items-center relative  '>
                                        <Input ref={confirmPassRef} type={showPassword2 ? 'text' : 'password'} bg={"gray.50"} placeholder='confirm new password' padding={"27px"} className=' w-full bg-gray-50 outline-none focus:bg-white rounded-md border border-solid border-gray-300 shadow-md' />
                                        <button onClick={handleShowToggle2} className='absolute right-[10px]  px-2 py-1 rounded-md' > {showPassword2 ? <IoMdEyeOff size={"25px"} /> : <FaEye size={"25px"} />} </button>
                                    </div>
                                </Flex>

                            </div>



                        </div>

                        <Button onClick={handlePasswordChange} _hover={{ bg: "yellow.500" }} bg={"#f5d04c"} p={"5px"} w={"40%"} borderRadius={"10px"} color={"white"} > Change    </Button>
                        <p className='text-blue-400'> back to login <Link to={"/login"} className='underline'> login </Link> </p>


                    </div>


                </div>


            </div>


        </div>
    )
}

export default ForgetPassword
