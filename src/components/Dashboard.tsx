import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../reduxToolkit/Store";
import { UserApplyLoans, UserDetails } from "../reduxToolkit/reducers/Auth";
import { ToastContainer, toast } from "react-toastify";
const Dashboard: React.FC = () => {
  const [formData, setFormData] = useState({
    loanType: "",
    loanAmount: 0,
    loanApplyDate: "",
    interestRate: 0,
    loanDuration: "",
    companyName: "",
    designation: "",
    totalExperience: "",
    currentCompany: "",
  });

  const dispatch:AppDispatch=useDispatch()
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangePersonal = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform form submission logic here using the `formData` state.
    
  let user=sessionStorage.getItem("user")
  let userDetails=null
  
  if(user){
    userDetails=JSON.parse(user)
    delete userDetails.password
    delete userDetails.__v
    delete userDetails._id
  }
  const data={...formData,...userDetails}
  console.log(data,"datass")
    console.log(userDetails,"user")
    console.log(data,"data")
    dispatch(UserApplyLoans(data))
    .then((res)=>{
      
      if(res?.payload?.message){
        console.log("run")
    //  window.location.reload()
      }
    })
    // You can send the data to your server or handle it as needed.
  };





  return (
    <div className="max-w-screen-xl mx-auto bg-white p-6 mt-4 rounded-md shadow-md">
      <ToastContainer/>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Loan Application
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-4">
            <label className="block text-gray-700">Loan Type</label>
            <select
              className="w-full border rounded-md py-2 px-3"
              name="loanType"
              onChange={handleChange}
              required
            >
              <option selected disabled>
                Select Loan Type
              </option>
              <option value="Education">Education</option>
              <option value="Personal">Personal/Home loan</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Loan Amount</label>
            <input
              type="number"
              className="w-full border rounded-md py-2 px-3"
              name="loanAmount"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Apply Date Of Loan</label>
            <input
              type="date"
              className="w-full border rounded-md py-2 px-3"
              name="loanApplyDate"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rate Of Interest</label>
            <input
              type="number"
              className="w-full border rounded-md py-2 px-3"
              name="interestRate"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mt-1 text-sm font-medium text-gray-900 dark:text-white">
              Duration Of Loan
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="loanDuration"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose Duration of Loan
              </option>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="firstName"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="lastName"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="companyName"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Designation</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="designation"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Total Experience</label>
            <input
              type="number"
              className="w-full border rounded-md py-2 px-3"
              name="totalExperience"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Current Company</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="currentCompany"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City Name</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="city"
              onChange={handleChangePersonal}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Pin Code</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              name="pinCode"
              onChange={handleChangePersonal}
              required
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Apply for Loan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
