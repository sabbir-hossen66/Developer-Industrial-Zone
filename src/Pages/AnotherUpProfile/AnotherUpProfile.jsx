import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

// import { updateProfile } from "firebase/auth";
const AnotherUpProfile = () => {
  const [userName, setUserName] = useState(null)
  const [userUrl, setUserUrl] = useState(null)
  const { user, updatePRf } = useContext(AuthContext)

  const handleUpdated = () => {
    updatePRf(userName, userUrl)
    toast.success('profile is updated & if You want to see Updated thing pls go to userProfile page')
  }

  return (
    <div>
      <Helmet>
        <title>Dev Industry | Updated Profile</title>
      </Helmet>
      <div className="py-8">
        <h2 className="text-center py-4 font-semibold text-3xl text-indigo-500">Here is Updated Profile </h2>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
          <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-2xl">Personal Information</p>
                <p className="text-sm">You Can see Information</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">User Name</label>
                  <input onChange={(e) => setUserName(e.target.value)} id="username" name="name" type="text" placeholder="Username" className="w-full py-2 rounded-md focus:ring focus:ring-opacity-75 0 focus:dark:ring-default-600 dark:border-gray-300" />

                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">photo URL</label>
                  <input onChange={e => setUserUrl(e.target.value)} id="website" name="photoURL" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 0 focus:dark:ring-default-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">User Photo</label>
                  <div className="flex items-center space-x-2">
                    <img src={user.photoURL} alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full " />
                    <button onClick={handleUpdated} type="button" className="px-4 py-2 border rounded-md bg-indigo-500 font-bold text-white">Profile is Updated</button>


                    <ToastContainer />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AnotherUpProfile;