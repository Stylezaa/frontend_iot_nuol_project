import React from 'react';
import ProfileControl from './profileControl'
import StatusComponent from './StatusComponent'

export default function BarComponent() {

  //Get Profile {id: "1", name: "default"}
  const [profile, setProfile] = React.useState([]);

  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem('Profile'));

    if (getProfile) {
      setProfile(profileValue);
    }
  };

  // console.log(profile)

  React.useEffect(() => {
    getProfile();
  }, []);
  return (
    <nav className="grid shadow-md px-4 py-2">
      <div className="container mx-auto text-center py-0 my-0 flex gap-x-4 justify-between lg:justify-end">
        <StatusComponent />
        <ProfileControl link="/" title="ໜ້າຫຼັກ" />
      </div>
    </nav>
  );
}