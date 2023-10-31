import React from 'react';
import moment from "moment"
const Profile: React.FC = () => {
    let userDetail: any = sessionStorage.getItem("user");

    if (userDetail) {
        userDetail = JSON.parse(userDetail);
    }

    

    return (
        <>
            {userDetail && (
               
                <div className="p-4 bg-gray-100">
                <div className="max-w-md mx-auto bg-white rounded p-8">
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Name:</label>
                            <p className="text-gray-800">{userDetail.name}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Username:</label>
                            <p className="text-gray-800">{userDetail.username}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Email:</label>
                            <p className="text-gray-800">{userDetail.email}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Date of Birth:</label>
                            <p className="text-gray-800">{userDetail.dob}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Address:</label>
                            <p className="text-gray-800">{userDetail.address}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">State:</label>
                            <p className="text-gray-800">{userDetail.state}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Country:</label>
                            <p className="text-gray-800">{userDetail.country}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Account Number:</label>
                            <p className="text-gray-800">{userDetail.accountNumber}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Account Type:</label>
                            <p className="text-gray-800">{userDetail.accountType}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">User Type:</label>
                            <p className="text-gray-800">{userDetail.userType}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Created At:</label>
                            <p className="text-gray-800">{moment(userDetail.createdA).format("DD-MM-YYYY")}</p>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 font-semibold">Updated At:</label>
                            <p className="text-gray-800">{moment(userDetail.updatedAt).format("DD-MM-YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default Profile;
