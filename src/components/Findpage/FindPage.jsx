import React from 'react'
import NavBar from '../Navbar/Navbar'
import Find from './Find';
import alpha from '../../utils/img/alpha.png';
import baracuna from '../../utils/img/baracuna.png'


const FindPage = () => {
    return ( 
        <div>
            <NavBar />
            <Find title={'Alpha Beach'} pics={alpha} />
            <Find title={'Baracuna Beach'} pics={baracuna} />
        </div>
     );
}
 
export default FindPage;