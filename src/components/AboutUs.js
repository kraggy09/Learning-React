import { Outlet } from "react-router-dom";
const AboutUs = () => {
  return (
    <div>
      <h1>This is AboutUs Page!</h1>
      <p>
        This is a dummy text to check whether the app is working fine or not
      </p>
      <Outlet />
    </div>
  );
};

export default AboutUs;
