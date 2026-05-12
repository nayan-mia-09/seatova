import React, { useState } from 'react'
import assets from '../assets/assets'
import {
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  Edit3,
  Save,
} from 'lucide-react'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Nayan Mia',
    image: assets.profile_pic,
    email: 'nayandev4111@gmail.com',
    phone: '+880 1765 7350 65',
    address: {
      line1: 'Sadarpur, Faridpur',
      line2: 'Dhaka, Bangladesh',
    },
    gender: 'Male',
    dob: '2003-03-09',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Top Banner */}
        <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

        {/* Profile Section */}
        <div className="px-6 md:px-10 pb-10 relative">

          {/* Profile Image */}
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <img
              src={userData.image}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover -mt-16"
            />

            <div className="flex-1">
              {isEdit ? (
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="text-2xl md:text-4xl font-bold border-b-2 border-blue-500 outline-none w-full py-2"
                />
              ) : (
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {userData.name}
                </h1>
              )}

              <p className="text-gray-500 mt-2">
                Frontend Developer
              </p>
            </div>

            {/* Edit Button */}
            <div>
              {isEdit ? (
                <button
                  onClick={() => setIsEdit(false)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition-all"
                >
                  <Save size={18} />
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all"
                >
                  <Edit3 size={18} />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h2>

              <div className="space-y-5">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-medium break-all">
                      {userData.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 mt-1" />
                  <div className="w-full">
                    <p className="text-gray-500 text-sm">Phone</p>

                    {isEdit ? (
                      <input
                        type="text"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:border-blue-500"
                      />
                    ) : (
                      <p className="font-medium">{userData.phone}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1" />

                  <div className="w-full">
                    <p className="text-gray-500 text-sm">Address</p>

                    {isEdit ? (
                      <div className="space-y-3 mt-2">
                        <input
                          type="text"
                          value={userData.address.line1}
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                line1: e.target.value,
                              },
                            }))
                          }
                          className="w-full px-4 py-2 border rounded-xl outline-none focus:border-blue-500"
                        />

                        <input
                          type="text"
                          value={userData.address.line2}
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                line2: e.target.value,
                              },
                            }))
                          }
                          className="w-full px-4 py-2 border rounded-xl outline-none focus:border-blue-500"
                        />
                      </div>
                    ) : (
                      <p className="font-medium">
                        {userData.address.line1}
                        <br />
                        {userData.address.line2}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Basic Information
              </h2>

              <div className="space-y-6">

                {/* Gender */}
                <div className="flex items-start gap-4">
                  <User className="text-blue-600 mt-1" />

                  <div className="w-full">
                    <p className="text-gray-500 text-sm">Gender</p>

                    {isEdit ? (
                      <select
                        value={userData.gender}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            gender: e.target.value,
                          }))
                        }
                        className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:border-blue-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    ) : (
                      <p className="font-medium">{userData.gender}</p>
                    )}
                  </div>
                </div>

                {/* Birthday */}
                <div className="flex items-start gap-4">
                  <Calendar className="text-blue-600 mt-1" />

                  <div className="w-full">
                    <p className="text-gray-500 text-sm">Birthday</p>

                    {isEdit ? (
                      <input
                        type="date"
                        value={userData.dob}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            dob: e.target.value,
                          }))
                        }
                        className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:border-blue-500"
                      />
                    ) : (
                      <p className="font-medium">{userData.dob}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyProfile