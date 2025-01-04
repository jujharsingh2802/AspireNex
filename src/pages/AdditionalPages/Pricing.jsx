import React, { useState } from "react";

function Pricing() {
  const faqs = [
    {
      question: "What is Startup Connect?",
      answer: "Startup Connect is a free platform where users can share blogs, ideas, and connect with like-minded individuals."
    },
    {
      question: "How can I post an ad or blog on Startup Connect?",
      answer: "Simply sign up for an account, go to the dashboard, and create your post with ease. If you want to enbedded your ad as priority ad, you can contact us through Contact us page."
    },
    {
      question: "Is there a fee for using Startup Connect?",
      answer: "No, Startup Connect is completely free to use. If anyone asks for payment, you don't need to comply. Also you can post a complaint at Contact Us page."
    },
    {
      question: "Can I use Startup Connect for commercial purposes?",
      answer: "Yes, you can use it for community-building purposes, but please refrain from any illegal or spam activities."
    },
    {
      question: "Is my data secure on Startup Connect?",
      answer: "Yes, we prioritize your data security. Your information is encrypted and never shared without consent."
    },
    {
      question: "How can I contact Startup Connect for support?",
      answer: "You can reach out to us via the Contact Us page or email me for any assistance."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#9B23E5]">FAQ</h1>
        <p className="text-gray-500 mt-2">Frequently Asked Questions regarding Pricing</p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border ${
        isOpen ? "border-teal-500" : "border-gray-300"
      } rounded-md shadow-sm`}
    >
      <button
        className="w-full flex justify-between  items-center px-4 py-2 text-left bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-[#9B23E5]">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-white">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Pricing;
