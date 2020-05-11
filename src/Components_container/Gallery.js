import React from "react";
import { galleryImages } from "./ImageSrc";

const Gallery = () => {
    return (
        <div>

            <div className="container">
                <h1 className="tc navy">Gallery</h1>
                <div className="row mb3">
                    <div className="col-6 center">
                        {
                            galleryImages.dinnerShow.map(image => <img className="w-90 grow pointer" src={image} alt="dinningTable" />
                            )
                        }
                    </div>
                    <p className="col-sm-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et
                        quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et
                        quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et
                        quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                    </p>
                </div>
                <div className="row ">
                    {
                        galleryImages.displayedImage.map(image =>
                            <img className="col-4 grow bw-2 pointer" src={image} alt="view" />
                        )
                    }
                </div>

                <div className="row mt-3">
                    <div className="col-sm-5 w-100 offset-1-l">
                        {
                            galleryImages.poolImage.map(image =>
                                <img className="grow pointer" src={image} alt="view" />
                            )
                        }

                    </div>
                    <p className="col-sm-5 offset-1-l mt4 ph2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et
                        quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et
                        quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Gallery;