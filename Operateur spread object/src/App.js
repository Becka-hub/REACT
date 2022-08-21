import React, { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState({
    city: "",
    state: ""
  });

  const [profile, setProfile] = useState({
    name: "",
    company: {
      employerId:"",
      isManager:false,
    }
  });

 const handleLocation=(e)=>{
   setLocation({
    ...location,
    [e.target.name]:e.target.value
   })
 }

 const handleProfileName=(e)=>{
  setProfile({
   ...profile,
   [e.target.name]:e.target.value
  })
}

const handleProfileEmployerId=(e)=>{
  setProfile({
    ...profile,
    company: {
      ...profile.company,
      [e.target.name]:e.target.value
    }
  })
}

const handleProfileIsManager=(e)=>{
  setProfile({
    ...profile,
    company: {
      ...profile.company,
      [e.target.name]:!profile.company.isManager
    }
  })
}
  return (
    <div className="App">
       <div>City:{location.city}</div>
       <div>State:{location.state}</div>
      <input type="text" placeholder="city" value={location.city} name="city" onChange={handleLocation}/>
      <input type="text" placeholder="state" name="state" onChange={handleLocation} value={location.state} />
      <div>Profile:{JSON.stringify(profile)}</div>
      <input type="text" placeholder="name" name="name" onChange={handleProfileName} value={profile.name} />
      <input type="text" placeholder="employerId" name="employerId" onChange={handleProfileEmployerId} value={profile.company.employerId} />
      <input type="checkbox" name="isManager" value={profile.company.isManager} onChange={handleProfileIsManager}/>
    </div>
  )
}

export default App