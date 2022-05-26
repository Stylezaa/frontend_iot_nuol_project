import React from 'react';
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
    <nav className="grid gap-4 grid-cols-2 lg:block shadow-md px-4 py-2">
      <a href="/" className="lg:hidden bg-blue-500 flex shadow-md justify-center items-center text-white px-2 rounded-sm">ໜ້າຫຼັກ</a>
      <div className="container mx-auto text-center py-0 my-0 flex gap-x-4 justify-end">
        <ProfileControl link="/" title="ໜ້າຫຼັກ" />
      </div>
    </nav>
  );
}