import React, { useState } from 'react'

const SuccessPage = ({authProp}) => {
    const [userData, setUserData] = useState();
  return (
    <div className='success-container'>
        <h3 className='normal-h3'>{userData?.name}</h3>
        <p className='normal-para'>You have Sign Up successfully! Now you can register for events.</p>
        <p className='normal-para'>You'll be redirected to Events page. If you've not redirected yet <span>Click Here</span></p>
    </div>
  )
}

export default SuccessPage