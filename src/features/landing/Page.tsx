"use client";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScreenOne from "./screens/screen-one";
import ScreenTwo from "./screens/screen-two";
import ScreenThree from "./screens/screen-three";
import ScreenFour from "./screens/screen-four";

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-linear-to-b from-white to-blue-50">
      <Navbar />

      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />

      <Footer />
    </div>
  );
};

export default LandingPage;
