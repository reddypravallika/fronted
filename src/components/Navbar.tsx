import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppDispatch } from "../reduxToolkit/Store";
import { useDispatch } from "react-redux";
import { UserDetails } from "../reduxToolkit/reducers/Auth";

const Navbar = () => {
  const dispatch:AppDispatch=useDispatch()
  const user=sessionStorage.getItem("user")
  const token=localStorage.getItem("token")
  const navigate=useNavigate()

  let detail=null
  if(token){
    detail=JSON.parse(token)
  }

  // console.log(detail,"detail")
  // console.log(token,"tokens")

  useEffect(()=>{
    dispatch(UserDetails())
  },[])
 
  const handleLogOut=()=>{
    setTimeout(() => {
      
      localStorage.clear();
      sessionStorage.clear();
      navigate("/")
    }, 1000);
  }
  {console.log(user?.length)}
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BankManagement
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/dashboard">Deposit</NavLink>
              </li>
              <li>
                <NavLink to="/getloan">Get All Loan</NavLink>
              </li>
              <li>
                <NavLink to="/applyloan">Apply Loan</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          
          {user && 
          user?.length>0?<button className="bg-blue-500 hover:bg-blue-700 text-white 
          font-bold py-2 px-4 rounded" onClick={handleLogOut}>
           Logout
           </button>:""
        }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
