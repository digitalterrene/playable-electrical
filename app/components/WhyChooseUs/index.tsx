const incentives = [
  {
    name: "Expertise and Experience",
    imageSrc: "./assets/why-choose-us/Expertise and Experience.png",
    description: "Years of industry experience and specialized expertise.",
  },
  {
    name: "Reliability and Trustworthiness",
    imageSrc: "./assets/why-choose-us/Reliability and Trustworthiness.png",
    description:
      "Clear communication, honesty, and transparency in every interaction.",
  },
  {
    name: "Commitment to Safety",
    imageSrc: "./assets/why-choose-us/Commitment to Safety.png",
    description: "Highest safety standards upheld in every project.",
  },
  {
    name: "Quality Workmanship",
    imageSrc: "./assets/why-choose-us/Quality Workmanship.png",
    description:
      "Uncompromising commitment to quality materials and techniques.",
  },
  {
    name: "Personalized Service",
    imageSrc: "./assets/why-choose-us/Personalized Service.png",
    description:
      "Tailored solutions to meet your unique needs and preferences.",
  },
  {
    name: "24/7 Emergency Support",
    imageSrc: "./assets/why-choose-us/27 Emergency Support.png",
    description:
      "Prompt response and resolution to electrical emergencies, day or night.",
  },
  {
    name: "Affordable Pricing",
    imageSrc: "./assets/why-choose-us/Affordable Pricing.png",
    description: "Competitive pricing without sacrificing quality.",
  },
  {
    name: "Sustainability Focus",
    imageSrc: "./assets/why-choose-us/Sustainability Focus.png",
    description:
      "Commitment to eco-friendly practices and energy-efficient solutions.",
  },
  {
    name: "Customer Satisfaction Guarantee",
    imageSrc: "./assets/why-choose-us/Customer Satisfaction Guarantee.png",
    description: "Your satisfaction is our priority, backed by our guarantee.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white" id="why-choose-us">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto text-center  max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-gray-500">
              At Playable Electrical, we understand that choosing the right
              electrical service provider is crucial for the safety, efficiency,
              and longevity of your electrical systems. Here's why we stand out
              from the competition. When you choose Playable Electrical, you're
              choosing reliability and trustworthiness. We prioritize clear
              communication, honesty, and transparency in everything we do,
              ensuring that you feel confident and informed every step of the
              way.
            </p>
            <p className="mt-4 text-gray-500"></p>
            <p className="mt-4 text-gray-500">
              Safety is our top priority, and we go above and beyond to ensure
              that every installation, repair, and inspection meets the highest
              safety standards. You can rest easy knowing that your property is
              in safe hands with our team. At Playable Electrical, we understand
              that every project is unique, and we tailor our services to meet
              your specific needs and preferences. Whether you're looking for a
              simple repair or a complex installation, we take the time to
              understand your requirements and deliver solutions that exceed
              your expectations.
            </p>
            <p className="mt-4 text-gray-500"></p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="sm:flex justify-center bg-blue-50 rounded-xl p-6 items-center   lg:block"
              >
                <div className="sm:flex-shrink-0  ">
                  <img
                    className="h-16 w-16 mx-auto"
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-blue-600">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
