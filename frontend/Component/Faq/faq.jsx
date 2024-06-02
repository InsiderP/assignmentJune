"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Importing the icon from react-icons

const faqs = [
  {
    question: "What is OneLot?",
    answer:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
  {
    question: "What kind of financing does OneLot do?",
    answer:
      "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
  },
  {
    question: "Is OneLot a bank?",
    answer:
      "No, OneLot is not a bank. Instead, we assess it based on the dealer’s creditworthiness to ensure a beneficial partnership with us.",
  },
  {
    question: "Can I have several OneLot loans out at once?",
    answer:
      "Yes, it is possible. We understand that a dealer's needs can be multifaceted, so as long as the cumulative loan amount doesn't exceed the approved credit limit and the dealer maintains a strong repayment record, multiple loans are feasible.",
  },
  {
    question: "What is OneLot?",
    answer:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
  {
    question: "What kind of financing does OneLot do?",
    answer:
      "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
  },
  {
    question: "Is OneLot a bank?",
    answer:
      "No, OneLot is not a bank. Instead, we assess it based on the dealer’s creditworthiness to ensure a beneficial partnership with us.",
  },
  {
    question: "Can I have several OneLot loans out at once?",
    answer:
      "Yes, it is possible. We understand that a dealer's needs can be multifaceted, so as long as the cumulative loan amount doesn't exceed the approved credit limit and the dealer maintains a strong repayment record, multiple loans are feasible.",
  },
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  return (
    <div>
      <button
        className={`w-full flex justify-between items-center py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ${
          isOpen ? "rounded-t-lg" : ""
        }`}
        type="button"
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
      >
        <div className="flex items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="flex-shrink-0 mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
          </svg>
          {faq.question}
        </div>
        <FaChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="py-5 px-5 dark:bg-gray-900 last:rounded-b-lg">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="bg-gray-50 px-8 py-20 text-gray-500">
      <p className="text-4xl font-extrabold mb-8 text-center text-black">
        Frequently asked questions
      </p>
      <div
        className="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg sm:w-1/2 mx-auto border-0"
        data-testid="flowbite-accordion"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
