import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserRegister } from "../reduxToolkit/reducers/Auth";
import { AppDispatch } from "../reduxToolkit/Store";
interface FormErrors {
  name?: string;
  contact?: string;
  initialDeposit?: number | String;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    address: "",
    country: "",
    state: "",
    city:"",
    pinCode:"",
    email: "",
    phone: "",

    dob: "",
    accountType: "",
    branchName: "",
    initialDeposit: "",
    proofType: "",
    proofNo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch:AppDispatch=useDispatch()
  const navigate: any = useNavigate();
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors: FormErrors = {};

    if (formData.phone.length !== 10) {
      errors.contact = "Please enter 10 digit number.";
    }

    if (!formData.name.match(/^[A-Za-z ]+$/)) {
      errors.name = "Name should contain only alphabets and spaces.";
    }
    if (Number(formData.initialDeposit) < 0) {
      errors.initialDeposit = "Deposit amount is geater than 0";
    }

    return errors;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    setErrors(validateForm());
    setIsSubmit(true);
  };

  console.log(errors, "error");
  console.log(Object.keys(errors).length, "length");
  useEffect(() => {
    // Calculate age based on DOB
    const dob = new Date(formData.dob);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    // Check age to identify citizen status
    let citizenStatus = "";
    if (age >= 60) {
      citizenStatus = "Senior Citizen";
    } else if (age >= 18) {
      citizenStatus = "Citizen";
    } else {
      citizenStatus = "Minor";
    }

    // Log age and citizen status
    console.log(`Age: ${age} years`);
    console.log(`citizenStatus: ${citizenStatus} `);

    if (Object.keys(errors).length === 0 && isSubmit) {
      dispatch(UserRegister(formData))
      .then((res)=>{
        if(res?.payload?.token){
          console.log("run")
          navigate("/dashboard");
        }
      })    
  }
  }, [errors]);

  return (
    <div className="max-w-screen-md mx-auto bg-white p-6 rounded-md shadow-md mt-5">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        User Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
            {errors && <p className="text-red-600 text-xs">{errors?.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select an Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="country"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose a country
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select an State
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="state"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose a State
              </option>
              <option value="US">Andhra Pradesh</option>
              <option value="CA">Utter Pradesh</option>
              <option value="FR">Karnataka</option>
              <option value="DE">Tamilnadu</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700">
              City Name
            </label>
            <input
              type="text"
              id="text"
              name="cityName"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="contact"
              name="phone"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
            {errors && (
              <p className="text-red-600 text-xs">{errors?.contact}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Account Type
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="accountType"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose a Account Type
              </option>
              <option value="saving">Saving</option>
              <option value="current">Current </option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="branchName" className="block text-gray-700">
              Branch Name
            </label>
            <input
              type="text"
              id="branchName"
              name="branchName"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="initialDeposit" className="block text-gray-700">
              Initial Deposit
            </label>
            <input
              type="number"
              id="initialDeposit"
              name="initialDeposit"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
            {errors && (
              <p className="text-red-600 text-xs">{errors?.initialDeposit}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Proof Type
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="proofType"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose a Proof Type
              </option>
              <option value="aadharCard">Aadhar Card</option>
              <option value="pancard">Pancard </option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="proofNo" className="block text-gray-700">
              Proof Number
            </label>
            <input
              type="text"
              id="proofNo"
              name="proofNo"
              className="w-full border rounded-md py-2 px-3"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
