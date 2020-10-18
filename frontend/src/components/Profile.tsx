import React from 'react'
import './Profile.scss';

interface Props {
    name: string;
    img: string;
    description: string;
}

const Profile = ({name, img, description}: Props) => {
    return(
        <div className='profile'>
            <div className='picture'>
                <img src={img} alt="guy"/>
            </div>
            <div className="name">
                {name}
            </div>
            <div className='description'>
                {description}
            </div>
        </div>
    )
}

export default Profile;