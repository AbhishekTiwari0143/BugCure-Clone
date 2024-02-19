import { blogs } from "../assets/text";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BlogsCard = () => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-delay={blog.id * 100}
            data-aos-duration={1500}
            key={blog.id}
            className="card relative box-shadow rounded-md my-8"
          >
            <img src={blog.image} alt="image" className="rounded-t-md" />

            <div className="info p-4 h-40 flex flex-col justify-between">
              {console.log(blog.to)}
              <Link to={`/blogs/${blog.to}`}>
                <h1 className="text-2xl font-bold text-[#441151] hover:text-black cursor-pointer">
                  &quot;{blog.title}&quot;
                </h1>
              </Link>

              <div className="data flex items-center gap-2 text-orange-600 font-medium">
                <FontAwesomeIcon icon={faClock} />
                <p>{blog.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsCard;
