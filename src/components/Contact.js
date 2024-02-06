import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { IoMdMail } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";
const Contact = () => {
  return (
    <div className="flex  w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('Images/bg2.webp')]">
      <div className="rounded-xl  bg-opacity-50 px-16 py-10 shadow-lg lg:backdrop-blur-md max-sm:px-8 mx-5">
        <div className="">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-4xl font-bold">flashes</h1>
          </div>
          <div className="">
            <div className="text-xl font-bold flex items-center justify-center mb-2">
              Welcome to Flashes: Your Hub for Breathtaking Free Stock Photos!
            </div>
            At Flashes, we believe that every moment deserves to be captured and
            shared. Our web application is dedicated to providing you with a
            stunning collection of free stock photos that not only inspire but
            also elevate your creative projects. Whether you're a designer,
            blogger, social media enthusiast, or just someone who appreciates
            beautiful visuals, Flashes has something special for you.
            <div>
              <span className="text-lg font-bold">
                1. Free Downloadable High-Quality Photos:
              </span>
              Dive into a treasure trove of high-resolution images that are not
              only visually appealing but also free to download. We understand
              the importance of having access to quality visuals without
              breaking the bank.
            </div>
            <div>
              <span className="text-lg font-bold">
                3. Community Collaboration:
              </span>
              Join our vibrant community of photographers and enthusiasts! As a
              registered user, you can upload your own photos to share your
              creativity with the world. It's a platform built on the spirit of
              collaboration and mutual appreciation.
            </div>
            <div>
              <span className="text-lg font-bold">
                3.Social Media Integration:
              </span>
              Sharing your favorite finds is easier than ever! Connect your
              Flashes account to your WhatsApp and Facebook profiles to
              effortlessly share the beauty you discover with your friends and
              followers.
            </div>
            <div className="text-xl font-bold">How to Get Started:</div>
            <div>
              <span className="text-lg font-bold">1. Create an Account:</span>
              Sign up to unlock the full potential of Flashes. Registering not
              only allows you to download images but also lets you showcase your
              photography skills to a global audience.
            </div>
            <div>
              <span className="text-lg font-bold">2.Upload Your Photos:</span>
              Ready to contribute? Share your own captivating moments by
              uploading your photos. Join us in building a diverse and dynamic
              collection that caters to the creative needs of users worldwide.
            </div>
            <div>
              <span className="text-lg font-bold">3. Download and Share: </span>
              Find an image that speaks to you? Download it for free! Spread the
              love by sharing your discoveries directly to your WhatsApp and
              Facebook accounts, connecting with your network through the power
              of visuals.
            </div>
            <div className="text-xl font-bold">** Join Flashes Today! **</div>
            Flashes is more than just a platform for stock photos; it's a
            community-driven space where creativity knows no bounds. Join us on
            this visual journey, explore the beauty of the world captured
            through the lens, and share your own flashes of inspiration.
            Together, let's make every moment worth remembering!
          </div>
          <div className="">
            <div className="text-2xl font-bold flex justify-center my-2 ">
              Contact Us
            </div>
            <div className="flex gap-5 justify-center my-2">
              <FaHome size={26}/> <div>Address: Tamluk Srirampur Road, Tamluk, India, 721651</div>
            </div>
            <div className="flex gap-5 justify-center my-2">
              <FaPhoneAlt size={26}/> <div>Mobile: 085973 20562</div>
            </div>
            <div className="flex gap-5 justify-center my-2">
              <IoMdMail size={26}/> <div>Email: rjcreation.official.01@gmail.com</div>
            </div>
            <div className="flex gap-2 justify-center mb-14">
              <Link to="https://www.facebook.com/profile.php?id=100083235107195">
                <FacebookIcon className="rounded-full size-10 hover:size-14"></FacebookIcon>
              </Link>

              {/* <ReactWhatsapp number="9932048377" message="Hello ">
                <WhatsappIcon className="rounded-full size-10 hover:size-14"></WhatsappIcon>
              </ReactWhatsapp> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
