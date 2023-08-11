import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-black min-h-screen mx-auto bg-cover pt-10 px-20">
      <Navbar/>
      <h1 className="text-white flex justify-center text-7xl pt-20">
        I desing fashion products
      </h1>
      <h3 className="text-white mt-20 mx-40 text-3xl">About</h3>
      <div className="text-white mt-5 mx-40 pb-40">
        <p className="pb-5">Hi, I'm Inés, a passionate and creative fashion
        designer with a deep love for blending style, elegance, and innovation.
        With a strong background in [mencionar tus áreas de especialización,
        como haute couture, sustainable fashion, etc.], I strive to bring my
        unique vision to life through every piece I create.</p>
         <p className="pb-5">### My Journey My
        journey in the world of fashion began [mencionar tu historia personal,
        como tu inspiración inicial, educación en diseño, etc.]. Each step along
        the way has shaped my understanding of the art and craftsmanship that
        goes into creating garments that not only make a statement but also tell
        a story.
        </p><p className="pb-5">### Design Philosophy At the core of my design philosophy is
        the belief that fashion is a powerful form of self-expression. I believe
        that every piece of clothing is an opportunity to convey emotions,
        values, and aesthetics. My designs are a reflection of [mencionar tu
        enfoque estético, tus influencias, etc.].</p> ### Vision I envision a world
        where fashion not only captivates the eye but also inspires positive
        change. Through my work, I aim to [mencionar tus objetivos, como
        promoting sustainable fashion, challenging norms, etc.]. I'm excited to
        continue pushing boundaries and exploring new horizons in the realm of
        fashion design. Thank you for taking the time to explore my portfolio.
        Feel free to reach out if you'd like to collaborate or learn more about
        my creative journey. [Contact Information] [Social Media Links]
      </div>
    </div>
  );
};

export default About;
