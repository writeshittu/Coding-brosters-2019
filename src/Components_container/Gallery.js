import React from "react";
import { galleryImages } from "./ImageSrc";

const Gallery = () => {
    return (
       <div className="container-fluid">
            <h1 className="tc navy">Gallery</h1>
            <div className="row justify-center mt3">
                {
                galleryImages.displayedImage.map(image =>
                <div className="col-sm-3 ma3 ">
                    <img className="grow pointer" src={image} alt="view" width="350px" />
                </div>
                )
                }

                
            </div>
        </div>
     )
}

export default Gallery;