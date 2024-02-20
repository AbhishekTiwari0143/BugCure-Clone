import BlogsCard from "../../utilities/Blogs/BlogsCard";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="title h-[300px] linearGradientOrange flex flex-col items-center justify-center rounded-b-3xl">
          <h1
            data-aos="fade"
            data-aos-duration={1000}
            className="text-3xl font-semibold text-white text-shadow md:text-6xl text-center"
          >
            Blogs: Format will apply soon!!
          </h1>
        </div>
        <div className="blogs h-full container m-auto grid grid-cols-1 gap-8 my-16 md:grid-cols-3 px-6">
          <BlogsCard />
        </div>
      </section>
    </>
  );
};

export default Blogs;
