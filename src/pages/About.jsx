import Navbar from "../components/Navbar";
import "../App.css";

const About = () => {
  return (
    <div className="bg-black min-h-screen justify-center ">
      <div className="pt-20 mx-10 sm:mx-20 lg:mx-40 xl:mx-80 2xl:mx-96"><Navbar/></div>
      <img
  src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
  className="mx-auto w-32 rounded-lg shadow-lg mt-10 slide-in-blurred-bottom"
  alt="Avatar" />
     
      <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl pt-10 mx-10 sm:mx-20 lg:mx-30 xl:mx-60 2xl:mx-96 slide-in-blurred-bottom">
      I Create Fashionable Designs
      </h1>
      <div className="text-white mt-25 pb-40 mx-10 sm:mx-20 lg:mx-30 xl:mx-60 2xl:mx-96 slide-in-blurred-bottom-h3">
      
      <h3 className="text-red-colour text-3xl sm:text-4xl mt-10 mb-10 ">About</h3>
      
      
        <p className="pb-5 sm:text-xl">Hi, I'm Inés, a passionate and creative fashion
        designer with a deep love for blending style, elegance, and innovation.
        With a strong background in [mencionar tus áreas de especialización,
        como haute couture, sustainable fashion, etc.], I strive to bring my
        unique vision to life through every piece I create.</p>
         <p className="pb-5 sm:text-xl">### My Journey My
        journey in the world of fashion began [mencionar tu historia personal,
        como tu inspiración inicial, educación en diseño, etc.]. Each step along
        the way has shaped my understanding of the art and craftsmanship that
        goes into creating garments that not only make a statement but also tell
        a story.
        </p><p className="pb-5 sm:text-xl">### Design Philosophy At the core of my design philosophy is
        the belief that fashion is a powerful form of self-expression. I believe
        that every piece of clothing is an opportunity to convey emotions,
        values, and aesthetics. My designs are a reflection of [mencionar tu
        enfoque estético, tus influencias, etc.].</p> <p className="pb-5 md:text-xl">### Vision I envision a world
        where fashion not only captivates the eye but also inspires positive
        change. Through my work, I aim to [mencionar tus objetivos, como
        promoting sustainable fashion, challenging norms, etc.]. I'm excited to
        continue pushing boundaries and exploring new horizons in the realm of
        fashion design. Thank you for taking the time to explore my portfolio.
        Feel free to reach out if you'd like to collaborate or learn more about
        my creative journey. [Contact Information] [Social Media Links]</p>
      </div></div>
      
  
  );
};

export default About;
