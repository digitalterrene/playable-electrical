import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaFaceSmile, FaHandshake, FaLightbulb } from "react-icons/fa6";

const features = [
  {
    name: "expertise and innovation",
    description:
      "At Playable Electrical, we believe that every home and business deserves access to safe, efficient, and reliable electrical solutions. With this vision in mind, we've assembled a team of skilled electricians who are not only experts in their field but also deeply passionate about their work. From small residential projects to large-scale industrial installations, our team has the knowledge, experience, and dedication to handle any electrical challenge with confidence and precision.",
    href: "#",
    icon: <FaLightbulb />,
  },
  {
    name: "trust and partnership",
    description:
      "What sets us apart from the competition is our unwavering commitment to our customers. We understand that electrical issues can be stressful and disruptive, which is why we prioritize clear communication, transparent pricing, and personalized service in everything we do. When you choose Playable Electrical, you can trust that you're not just another customer—you're a valued member of our family, and your satisfaction is our ultimate goal.",
    href: "#",
    icon: <FaHandshake />,
  },
  {
    name: " sustainability and community",
    description:
      "But our commitment to excellence doesn't end with our customers. At Playable Electrical, we also prioritize sustainability and environmental responsibility in our work. From utilizing energy-efficient technologies to minimizing waste and reducing our carbon footprint, we're dedicated to doing our part to create a greener, more sustainable future for our community and our planet.",
    href: "#",
    icon: <FaGlobeAfrica />,
  },
  {
    name: "satisfaction and happiness",
    description:
      "As proud members of the Johannesburg community, we take great pride in serving our neighbors and contributing to the growth and prosperity of our city. Whether you're a homeowner, a business owner, or a property manager, you can count on Playable Electrical to deliver top-notch electrical solutions that meet your needs, exceed your expectations, and leave you with a smile on your face.",
    href: "#",
    icon: <FaFaceSmile />,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="about-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl  ">
          <h2 className="text-3xl font-bold text-center tracking-tight text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-center text-gray-300">
            Playable Electrical, your premier choice for top-quality electrical
            services in Johannesburg and the surrounding areas. Founded with a
            passion for excellence and a commitment to customer satisfaction,
            Playable Electrical has quickly become a trusted name in the
            industry, known for our expertise, reliability, and dedication to
            safety.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-center flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex mx-auto h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <span className="text-2xl text-white">{feature.icon}</span>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-center text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
