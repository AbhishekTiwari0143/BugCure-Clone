import webDevImage from "../assets/Features-images/webDev.webp";
import webApp from "../assets/Features-images/Web&App.webp";
import ECommerce from "../assets/Features-images/ECommerse.webp";
import DMarketing from "../assets/Features-images/DMarketing.webp";

export const Services = [
  {
    id: 1,
    title: "Website Design",
    image: webDevImage,
  },
  {
    id: 2,
    title: "Website & App Development",
    image: webApp,
  },
  {
    id: 3,
    title: "E-Commerce Development",
    image: ECommerce,
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: DMarketing,
  },
];

// Testimonials

import profile1 from "../assets/Testimonials-images/testimonial-profile-1.webp";
import profile2 from "../assets/Testimonials-images/testimonial-profile-2.webp";
import profile3 from "../assets/Testimonials-images/testimonial-profile-3.webp";

export const testimonials = [
  {
    id: 1,
    name: "Akash Deep",
    subtitle: "beatcoffee.in",
    description:
      "BugCure brewed the perfect website for our coffee shop. A delightful collaboration, seamless experience, and increased footfall. Grateful for their expertise!",
    image: profile1,
  },
  {
    id: 2,
    name: "Akash Deep",
    subtitle: "beatcoffee.in",
    description:
      "BugCure transformed my education blog into a captivating online platform. Their expertise and support were invaluable. My readership has soared! Highly recommend their services.",
    image: profile2,
  },
  {
    id: 3,
    name: "Akash Deep",
    subtitle: "beatcoffee.in",
    description:
      "BugCure's digital expertise elevated our business. Impressive service, remarkable results. Highly recommended for a seamless and successful digital journey!",
    image: profile3,
  },
];

//Portfolios
import portfolio1 from "../assets/Clients-images/client-1.webp";
import portfolio2 from "../assets/Clients-images/client-2.webp";
import portfolio3 from "../assets/Clients-images/client-3.webp";
import portfolio4 from "../assets/Clients-images/client-4.webp";
import portfolio5 from "../assets/Clients-images/client-5.webp";

export const portfolio = [
  {
    id: 1,
    image: portfolio1,
    title: "Myiaar International",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Beat Coffee",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Portfolio",
  },
  {
    id: 4,
    image: portfolio5,
    title: "Shop4Smile",
  },
  {
    id: 5,
    image: portfolio4,
    title: "DSK Artist",
  },
];

//Blogs
import tips from "../assets/Blogs-images/tips.png";
import security from "../assets/Blogs-images/cybersecurity.png";
import Importance from "../assets/Blogs-images/importance_of_website_in_business.png";

export const blogs = [
  {
    id: 1,
    to: "10-Proven-Tips-to-Build-an-Impressive-Website",
    image: tips,
    title: "10 Proven Tips to Build an Impressive Website",
    date: "October 12, 2023",
  },
  {
    id: 2,
    image: Importance,
    to: "Importance-of-Website-In-Business:-Power-of-First-Impression",
    title: "Importance of Website In Business: Power of First Impression",
    date: "October 10, 2023",
  },
  {
    id: 3,
    image: security,
    to: "Securing-Businesses:-Importance-Of-Cybersecurity",
    title: "Securing Businesses: Importance Of Cybersecurity",
    date: "October 5, 2023",
  },
];

export default "nice";

export const BlogsSection = [
  {
    id: 1,
    image: tips,
    title: "10 Proven Tips to Build an Impressive Website",
    subtitle: "By Pooja Yadav / October 15, 2023",
    blogTitle: "Introduction",
    blogParagraph:
      "To ensure your website is nothing short of impressive, we’ve compiled 10 proven tips to help you master web design. From professional aesthetics to security measures, these tips will guide you in creating an online presence that stands out. A website is often the first point of contact between your business and potential customers. The design and functionality of your website play a crucial role in creating a lasting impression. So, the following are the tips to make your website stand out:",
  },
];
