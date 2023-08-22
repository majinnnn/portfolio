import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Inspirations from "../src/components/Inspirations";
import Remarks from "../src/components/Remarks";
import ColorContext from "../src/context/colorContext";
import Layouts from "../src/layouts/Layouts";
const Work = dynamic(() => import("../src/components/Work"), {
  ssr: false,
});
const IndexImageOverlay = () => {
  const { changeColor } = useContext(ColorContext);
  useEffect(() => {
    changeColor("green");
  }, []);

  return (
    <Layouts light bodyCls={"light dark-header fullscreenbgimage"}>
      {/* Back To Home Ends [ONLY MOBILE] */}
      {/* Home Section Starts */}
      <Home />
      {/* Home Section Ends */}
      {/* About Section Starts */}
      <About />
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <Work />
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <Contact />
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      <Blog />
      {/* Blog Section Ends */}
      {/* Inspirations Section Starts */}
      <Inspirations />
      {/* Inspirations Section Ends */}
      {/* Remarks Section Starts */}
      <Remarks />
      {/* Remarks Section Ends */}
      
    </Layouts>
  );
};
export default IndexImageOverlay;
