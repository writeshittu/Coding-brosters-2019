import React from 'react';
import Gallery from './Gallery';
import gallery from '../../utils/img/gallery.jpeg';
import gallery3 from '../../utils/img/gallery3.jpeg'

const GalleryPage = () => {
    return ( 
        <div>
            <div className="mt-10 ">
            <h2 className="text-center text-5xl sm:text-sm font-normal">Gallery</h2>
            </div>
            <Gallery pics={gallery} />
            <Gallery  pics={gallery3} />
           
        </div>
     );
}
 
export default GalleryPage;