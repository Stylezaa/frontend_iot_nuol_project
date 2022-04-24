import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BarComponent() {
  const history = useHistory();

  //Get Profile {id: "1", name: "default"}
  const [profile, setProfile] = React.useState([]);

  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem('Profile'));

    if (getProfile) {
      setProfile(profileValue);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Profile');
    history.replace('/');
  };

  React.useEffect(() => {
    getProfile();
  }, []);
  return (
    <nav className="shadow-md px-5 py-2">
      <div className="container mx-auto text-center py-0 my-0 flex gap-x-4 justify-end">
        {/* <h1 className="font-medium">Hello, {profile.name}</h1> */}
        <a
          href="/"
          className="block w-full px-5 py-2 w-24 text-center font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Home
        </a>
        <button
          className="block w-full  px-5 py-2 w-24 text-center font-medium text-white bg-red-600 hover:bg-red-700 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
