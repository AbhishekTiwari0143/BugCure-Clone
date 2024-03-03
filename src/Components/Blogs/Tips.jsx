import { useNavigate } from "react-router-dom";
import { BlogsSection } from "../../assets/text";
import { useEffect } from "react";

const Tips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigation = useNavigate();
  {
    console.log(BlogsSection[0]);
  }
  const data = BlogsSection[0];
  return (
    <>
      <section className="blogsSection grid place-items-center px-4 my-8 md:px-28">
        <div className="container m-auto">
          <img src={data.image} alt="image" className="md:w-full" />
          <div className="title text-left text-2xl font-bold text-purple-900 md:text-4xl">
            <h1 className="">&quot;{data.title}&quot;</h1>
            <p className="text-sm text-orange-600 md:text-xl">
              {data.subtitle}
            </p>
          </div>
          <div className="Introduction text-2xl mt-8 mb-6 grid gap-4">
            <h1 className="font-semibold">{data.blogTitle}</h1>
            <p className="text-base">{data.blogParagraph}</p>
            <p></p>
          </div>
          <div className="paragraphs grid gap-4">
            {data.KeyPoints.map((point) => {
              return (
                <div key={point.id} className="grid gap-4">
                  <h1 className="text-2xl">{point.title}</h1>
                  <p className="text-base leading-5 font-normal tracking-wide">
                    {point.descriptioin}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="conclusion my-6">
            <h1 className="text-2xl font-semibold text-left mb-4">
              {data.Conclusion.title}
            </h1>
            <p>{data.Conclusion.paragraph}</p>
          </div>
          <button
            className="previous container m-auto w-full text-2xl px-4 py-2 text-white bg-orange-600 rounded-3xl"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
};

export default Tips;
