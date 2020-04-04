import React from 'react';
import Special from './Special';
import zuma from '../../utils/img/zuma.png';
import omu from '../../utils/img/omu1.png';
import eat from '../../utils/img/eat.png'

const SpecialOffer = () => {
    return ( 
        <div>
            <div className="md:mt-10">
            <h2 className="text-center lg:text-5xl sm:text-sm font-normal">Special Offers</h2>
            </div>
            <Special pics={eat} alt="image of Zuma Rock" title={'Zuma Restaurant'} />
            <Special pics={omu} alt="image of omu resort" title={'Omu Resort'} />
            <div className="flex justify-center mb-10">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded -mt-10">See More</button>
            </div>
        </div>
     );
}
 
export default SpecialOffer;