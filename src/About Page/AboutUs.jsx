import React, { Fragment } from "react";

const AboutUs = ({ pics }) => {
  return (
    <Fragment>
      <div className="container xl:flex justify-around md:m-20 justify-between">
        <div className="xl:mr-10 md:flex-shrink-0">
          <img
            className="md:w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
            src={pics}
            alt="alpha beach"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <p className="mt-2 text-gray-600">
            Are you bored and need fun places to go? Did you have a stressful
            week and need a cool spot to relax and unwind? You've come to the
            right place!
          </p>
          <p className="mt-2 text-gray-600">
            This handy web app was created to make this task smooth, with a
            large collection of recreation centres to choose from and costumer
            reviews to quickly make informed decisions, you can get right into
            relaxing and having a great time.
          </p>
          <p className="mt-2 text-gray-600">
            So go right ahead! Search through our collection of amazing places
            to find cool spots near you!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
