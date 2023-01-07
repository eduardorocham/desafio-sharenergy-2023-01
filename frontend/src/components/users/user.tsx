import './user.css';

import { user } from '../../types/user';

type Props = {
    data: user
}

const User = ({data} : Props) => {
    return (
        <div className='user-area'>
            <div className='data'>
                <img src={data.picture.thumbnail} alt='' />
            </div>
            <div className='data'>
                <span>Name:</span>
                {data.name.title} {data.name.first} {data.name.last}
            </div>
            <div className='data'>
                <span>E-mail:</span>
                {data.email}
            </div>
            <div className='data'>
                <span>Username:</span>
                {data.login.username}
            </div>
            <div className='data'>
                <span>Age:</span>
                {data.dob.age}
            </div>
        </div>
    )
}

export default User;