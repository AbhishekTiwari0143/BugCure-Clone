import { useEffect } from "react";

const Terms = () => {
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
            className="text-3xl font-semibold text-white text-shadow text-center px-2 md:text-6xl"
          >
            Terms and Policy : Format will apply soon
          </h1>
        </div>
        <div className="policy container m-auto text-left text-2xl flex flex-col gap-6 my-12 px-6">
          <h1>Terms and Conditions</h1>
          <ul>
            <li>
              <h2>Introduction to Terms and Conditions:</h2>
              <p>
                These Terms and Conditions govern the use of the services
                provided by BugCure Digital through its website and other
                platforms. We reserve the right to make changes to this website
                and its terms and conditions at any time without prior notice.
                By accessing or using our services, you agree to abide by these
                terms and conditions.
              </p>
            </li>
            <li>
              <h2>Effective Date:</h2>
              <p>
                This Agreement is effective from the date you first access our
                services and shall remain in effect until terminated by either
                party.
              </p>
            </li>
            <li>
              <h2>Jurisdiction/ Governing Law:</h2>
              <p>
                This Agreement is governed by and construed in accordance with
                the laws of Government of India. Any disputes arising from or
                related to this Agreement shall be subject to the exclusive
                jurisdiction of the courts of State of India.
              </p>
            </li>
            <li>
              <h2>Limitation of Liability and Warranty Disclaimer</h2>
              <p>
                The Company shall not be liable for any direct or indirect
                damages, including but not limited to, loss of data, revenue, or
                profits, arising from the use of our services. We will not
                accept any liability for failure of services by your internet
                service provider or any other third-party service provider. We
                make no warranties or representations regarding the accuracy,
                reliability, or suitability of our services for any purpose.
              </p>
            </li>
            <li>
              <h2>Rules of Conduct and Website Usage</h2>
              <p>
                Users must not engage in any unlawful, harmful, or abusive
                behavior while using our services. Users must not upload, post,
                or transmit any content that is offensive, defamatory, or
                infringing upon the rights of others.
              </p>
            </li>
          </ul>

          <h1>Privacy Policy</h1>
          <ul>
            <li>
              <h2>Introduction</h2>
              <p>
                Purpose: This Privacy Policy outlines how BugCure (“we,” “our,”
                or “us”) collects, uses, discloses, and protects your personal
                information when you engage with our IT technology and
                consultancy services. Scope: This policy applies to all clients
                and users of our services.
              </p>
            </li>
            <li>
              <h2>Information We Collect</h2>
              <p>
                Personal Information: We may collect the following types of
                personal information: Names, Contact information (email, phone,
                address), Business-related information (company name, job
                title). Financial Information: In certain cases, we may collect
                financial information for billing purposes. Usage Information:
                We collect data about your interactions with our services,
                including Website visits, Communication history, Service usage
                data.
              </p>
            </li>
            <li>
              <h2>How We Use Your Information</h2>
              <p>
                Service Delivery: We use your information to Provide IT
                technology and consultancy services, Communicate with you
                regarding our services. Improvement: We may use your data for
                Service improvement, Analytics, Research.
              </p>
            </li>
            <li>
              <h2>Information Sharing</h2>
              <p>
                Third Parties: We may share your information with trusted
                third-party service providers for specific purposes, such as
                Data processing, Security, Payment processing. Legal
                Obligations: We may disclose your data when required to comply
                with legal obligations or protect our rights.
              </p>
            </li>
            <li>
              <h2>Data Security</h2>
              <p>
                Security Measures: We employ industry-standard security measures
                to protect your data, including encryption, access controls, and
                regular security assessments. Data Breach: In the event of a
                data breach, we will Notify affected parties promptly, Take
                necessary steps to mitigate the breach, Cooperate with
                authorities as required by law.
              </p>
            </li>
            <li>
              <h2>Your Choices</h2>
              <p>
                Access and Correction: You have the right to Access your
                personal information, Correct inaccuracies, Request deletion,
                subject to legal obligations.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Terms;
