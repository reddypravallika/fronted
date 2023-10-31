import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../reduxToolkit/Store";
import { UserDetails, userWithdraw } from "../reduxToolkit/reducers/Auth";
import { ToastContainer } from "react-toastify";

const DepositAmount = () => {
  const dispatch: AppDispatch = useDispatch();
  const [withdrawAmount, setWithdrawal] = useState("");
const result=useSelector((state:any)=>state.auth)
const user=sessionStorage.getItem("user") ||""
//  console.log(result?.result?.initialDeposit,"res")
  useEffect(() => {
    dispatch(UserDetails());
  }, []);

  

  const handleSubmit = (e:any) => {
    e.preventDefault(); 
    
   let accountNo=""
   if(user){
    accountNo=JSON.parse(user)?.accountNumber
   }
    // console.log( JSON.parse(user)?.accountNumber," JSON.parse(user)?.accountNumbers")
    const data = {
      accountNumber: result?.result?.accountNumber,
      withdrawAmount: withdrawAmount,
    };
    dispatch(userWithdraw(data))
    .then((res)=>{
      console.log(res?.payload,"reessss")
      if(res?.payload?.message){
        console.log("run")
        setWithdrawal(" ")
        window.location.reload()
      }
    })
  };

  console.log(result?.initialDeposit,"{result?.initialDeposits")
  return (
    <>
    <ToastContainer/>
      <div className="text-end px-10 my-4">
        <h2 className="font-medium">Available Balance</h2>
        <div className="text-blue-500 font-bold">
          {result?.result?.initialDeposit}
        </div>
      </div>
      <div className="max-w-screen-sm mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold my-4 text-center">Deposit Amount</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-4">
              <label className="block text-gray-700">Account Type</label>
              <select
                className="w-full border rounded-md py-2 px-3"
                name="accountType"
                value={withdrawAmount}
                onChange={(e) => setWithdrawal(e.target.value)}
                required
              >
                <option selected disabled>
                  Select Account Type
                </option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Deposit Amount</label>
              <input
                type="number"
                className="w-full border rounded-md py-2 px-3"
                name="depositAmount"
                onChange={(e) => setWithdrawal(e.target.value)}
                required
              />
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Deposit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DepositAmount;
