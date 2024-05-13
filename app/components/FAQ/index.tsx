"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
const faq = [
  {
    question: "What types of electrical services do you offer?",
    answer:
      "At Playable Electrical, we offer a wide range of electrical services to meet the needs of both residential and industrial clients. Our services include but are not limited to electrical installations, repairs, maintenance, inspections, upgrades, and emergency support.",
  },
  {
    question: "Are your electricians licensed and certified?",
    answer:
      "Yes, all our electricians are fully licensed and certified professionals with extensive training and experience in the field. We ensure that our team stays up-to-date with the latest industry standards and regulations to deliver safe and compliant electrical solutions.",
  },
  {
    question: "Do you provide emergency electrical services?",
    answer:
      "Absolutely. Our team is available 24/7 to handle any electrical emergencies that may arise. Whether it's a power outage, a faulty connection, or any other urgent issue, you can count on us to respond promptly and resolve the problem efficiently.",
  },
  {
    question: "How quickly can you respond to emergency calls?",
    answer:
      "We understand that electrical emergencies require immediate attention, which is why we strive to respond to emergency calls as quickly as possible. Our goal is to have a team member on-site within the shortest possible time frame to assess the situation and implement necessary repairs or solutions.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve clients throughout Johannesburg and the surrounding areas in Gauteng, South Africa. Whether you're located in the heart of the city or in a nearby suburb, you can rely on Playable Electrical for top-quality electrical services tailored to your specific needs.",
  },
  {
    question: "Do you offer free consultations or quotes?",
    answer:
      "Yes, we offer free consultations and quotes to all prospective clients. Our team will assess your electrical needs, discuss your requirements, and provide you with a detailed estimate of the cost and timeline for the project. We believe in transparency and want to ensure that you have all the information you need to make informed decisions about your electrical services.",
  },
];

export default function FAQ() {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Your questions, answered
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Answers to the most frequently asked questions.
          </p>
        </div>

        <div className="max-w-2xl text-center space-y-3 mx-auto">
          {faq?.map(({ question, answer }, i) => (
            <Disclosure key={i}>
              <Disclosure.Button className="py-2 px-6 rounded-lg hover:bg-[#6759FF] hover:text-white border-[#6759FF]/30 w-full border shadow-lg">
                {question}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                {answer}
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
