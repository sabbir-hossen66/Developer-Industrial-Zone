import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Profile = () => {
  const { user } = useContext(AuthContext)



  const handleUpdateProfile = () => {
    toast.success('Profile Uptaded!')
  }

  return (
    <div>
      <Helmet>
        <title>Dev Indsutry | Profile</title>
      </Helmet>
      <h2 data-aos="zoom-out" className="text-3xl font-bold text-blue-600 text-center py-8">Wow ! You Can See Your Profile</h2>

      <div data-aos="zoom-in" className="shadow-xl  py-8 lg:w-2/6 mx-auto rounded">
        <div className=" w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className="rounded-full" src={user.photoURL} />
        </div>
        <div className=" lg:w-96 mx-auto pt-6 ">

          <label className="input input-bordered border-2 border-blue-600  shadow-md flex items-center mb-2 gap-2">
            <div className="font-bold">
              {user.displayName}
            </div>
            <input type="text" className="grow" placeholder="" />
          </label>


          <label className="input input-bordered border-2 border-blue-600  shadow-md flex items-center gap-2">
            <div className="font-bold">
              {user.email}
            </div>
            <input type="text" className="grow" placeholder="" />
          </label>
          <label className="input input-bordered border-2 mt-2 border-blue-600  shadow-md flex items-center gap-2 overflow-x-scroll h-20">
            <div className="font-bold ">
              {user?.photoURL}
            </div>
            <input type="text" className="grow" placeholder="" />
          </label>

          <button onClick={handleUpdateProfile} className="bg-blue-500 hover:bg-fuchsia-600 text-white font-bold py-2 w-full mt-6 none rounded">
            Update Profile
          </button>

        </div>
      </div>
      <ToastContainer
        position="top-right"
        reverseOrder={false}

      />

    </div >
  );
};

export default Profile;