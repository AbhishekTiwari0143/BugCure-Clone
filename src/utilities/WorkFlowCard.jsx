import {
  faComments,
  faRocket,
  faCode,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import "./WorkFlowCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { imageComment } from "../assets/comment-svgrepo-com.svg";

const workflowData = [
  {
    id: 1,
    icon: faComments,
    title: "Discuss",
    description:
      "Firstly, We initiate an in-depth discussion with you to understand your goals, target audience, and content requirements thoroughly. This collaborative phase allows us to gain valuable insights from you, shaping the website's vision and strategy.",
  },
  {
    id: 2,
    icon: faPenRuler,
    title: "Design",
    description:
      "Next, our talented design team takes over to craft captivating wireframes, visuals, and user-friendly interfaces that create an engaging user experience. We pay utmost attention to details, ensuring every element serves a purpose in enhancing the overall user journey.",
  },
  {
    id: 3,
    icon: faCode,
    title: "Develop",
    description:
      "Once the design is approved, our skilled development team steps in to bring those visuals to life. We write clean code, thoroughly test functionalities, and integrate cutting-edge technologies to ensure a seamless and responsive website across all devices.",
  },
  {
    id: 4,
    icon: faRocket,
    title: "Delivery",
    description:
      "At last, Our team takes care of all the technicalities, ensuring a smooth launch while optimizing the website for peak performance and security. We closely monitor the website's performance post-launch and offer ongoing support to address any concerns.",
  },
];

const WorkFlowCard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-16 md:my-15 md:flex-row">
        {workflowData.map((workflow) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={100 * workflow.id}
              key={workflow.id}
              className="card cursor-pointer p-4 text-center workbox-shadow  hover:cursor-Pointer"
            >
              <FontAwesomeIcon
                icon={workflow.icon}
                className="h-16 text-[#5a5353]"
              />
              <h1 className="py-6 text-4xl font-semibold  text-gradient">
                {workflow.title}
              </h1>
              <p className="text-base tracking-wider text-gray-700 sm:text-left">
                {workflow.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkFlowCard;
