import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <div className="container m-auto my-14 md:my-10">
        <div
          ref={counterRef}
          className="data text-[rgb(68,17,81)] font-semibold flex justify-around items-center mb-16 text-center"
        >
          <div className="Clients px-2">
            <h1 className="text-3xl font-bold sm:text-6xl">
              {isVisible && (
                <CountUp
                  data-aos="fade-in"
                  start={0}
                  end={20}
                  duration={3}
                  suffix="+"
                />
              )}
            </h1>
            <h2 className="sm:text-2xl text-gray-600">Happy Clients</h2>
          </div>
          <div className="business">
            <h1 className="text-3xl font-bold sm:text-7xl">
              {isVisible && (
                <CountUp
                  data-aos="fade-in"
                  start={0}
                  end={90}
                  duration={3}
                  suffix="%"
                />
              )}
            </h1>
            <h2 className="sm:text-2xl text-gray-600">Repeat Business</h2>
          </div>
          <div className="rating">
            <h1 className="text-3xl font-bold sm:text-7xl">
              {isVisible && (
                <CountUp
                  data-aos="fade-in"
                  start={0}
                  end={4.5}
                  decimals={1}
                  duration={3}
                  suffix="*"
                />
              )}
            </h1>
            <h2 className="sm:text-2xl text-gray-600">Avg. Ratings</h2>
          </div>
        </div>

        <div className="button flex justify-center">
          <button
            className="flex text-xl px-6 py-2 text-white bg-[#441151] font-semibold rounded-full text-shadow md:py-2 md:px-8 md:text-2xl"
            type="button"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
