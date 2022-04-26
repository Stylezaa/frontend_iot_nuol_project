import React from 'react';
// import { useHistory } from 'react-router-dom';
// import logout from '../../Functions/Logout'
import ProfileControl from './profileControl'

export default function BarComponent() {

  //Get Profile {id: "1", name: "default"}
  const [profile, setProfile] = React.useState([]);

  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem('Profile'));

    if (getProfile) {
      setProfile(profileValue);
    }
  };

  console.log(profile)

  React.useEffect(() => {
    getProfile();
  }, []);
  return (
    <nav className="shadow-md px-5 py-2">
      <div className="container mx-auto text-center py-0 my-0 flex gap-x-4 justify-end">
        <ProfileControl link="/" title="Home" />
      </div>
    </nav>
  );
}
