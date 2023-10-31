import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserGetLoan } from '../reduxToolkit/reducers/Auth';
import { AppDispatch } from '../reduxToolkit/Store';
import moment from 'moment';

interface LoanData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
    loanType: string;
    loanAmount: number;
    loanDuration: number;
    loanApplyDate: string;
    branchName: string;
    accountNumber: string;
    ifsc: string;
    course: string;
    courseFee: number;
    annualIncome: number;
    experience: number;
    totalExperience: number;
    companyName: string;
    designation: string;
    fatherName: string;
    fatherOccupation: string;
    rateOfInterest: number;
}

const Getloan = () => {
    const dispatch: AppDispatch = useDispatch();
    const result = useSelector((state: any) => state.auth);
    console.log(result, "result");

    useEffect(() => {
        dispatch(UserGetLoan());
    }, []);

    return (
        <>

        <div className='w-[80%] mx-auto'></div>
                <h1 className='text-center my-2 font-medium'>All Loans</h1>
            <div className="overflow-x-auto">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                State
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pin Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Loan Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Loan Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Loan Duration
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Loan Apply Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Account Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                IFSC
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Fee
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Annual Income
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Experience
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Experience
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Designation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Father Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Father Occupation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rate of Interest
                            </th>
                        </tr>
                    </thead>
                    <tbody>



                    {Array.isArray(result.result) ? (
                            result.result.map((data: LoanData, index: number) => (
                                <tr
                    
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                                        : ''
                                }
                            >
                                  
                                <td className="px-6 py-4">{data?.firstName}</td>
                                <td className="px-6 py-4">{data?.lastName}</td>
                                <td className="px-6 py-4">{data?.address}</td>
                                <td className="px-6 py-4">{data?.city}</td>
                                <td className="px-6 py-4">{data?.state}</td>
                                <td className="px-6 py-4">{data?.country}</td>
                                <td className="px-6 py-4">{data?.pinCode}</td>
                                <td className="px-6 py-4">{data?.loanType}</td>
                                <td className="px-6 py-4">{data?.loanAmount}</td>
                                <td className="px-6 py-4">{data?.loanDuration}</td>
                                <td className="px-6 py-4">{moment(data?.loanApplyDate).format("DD-MM-YYYY")}</td>
                                <td className="px-6 py-4">{data?.branchName}</td>
                                <td className="px-6 py-4">{data?.accountNumber}</td>
                                <td className="px-6 py-4">{data?.ifsc}</td>
                                <td className="px-6 py-4">{data?.course}</td>
                                <td className="px-6 py-4">{data?.courseFee}</td>
                                <td className="px-6 py-4">{data?.annualIncome}</td>
                                <td className="px-6 py-4">{data?.experience}</td>
                                <td className="px-6 py-4">{data?.totalExperience}</td>
                                <td className="px-6 py-4">{data?.companyName}</td>
                                <td className="px-6 py-4">{data?.designation}</td>
                                <td className="px-6 py-4">{data?.fatherName}</td>
                                <td className="px-6 py-4">{data?.fatherOccupation}</td>
                                <td className="px-6 py-4">{data?.rateOfInterest}</td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Loading...</td>
                            </tr>
                        )}
                   
                    </tbody>
                        </table>
            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Getloan;
