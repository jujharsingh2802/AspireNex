import React from "react";
import { Button } from "../../components";

function AffiliateProgram() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold dark:text-indigo-500 text-indigo-600">Advertise with Startup Connect</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Showcase your brand to a growing community of startups and entrepreneurs.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Why Advertise with Us?</h2>
        <p className="text-gray-700 dark:text-white leading-7">
          Startup Connect is a thriving platform that connects startups, investors, and innovators. 
          By advertising here, you’ll get unparalleled exposure to a niche audience that’s eager to discover innovative products and services like yours.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-white space-y-3 leading-7">
          <li>Submit your ad details using the form provided.</li>
          <li>Choose from our flexible ad placement options (homepage, blog sections, or custom locations).</li>
          <li>Review and approve your ad before it goes live on Startup Connect.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Ad Placement Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-medium text-indigo-600">Homepage Banner</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Feature your ad prominently on the Startup Connect homepage for maximum visibility.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-medium text-indigo-600">Blog Section</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Place your ad alongside trending blogs to reach readers interested in startups and innovation.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-medium text-indigo-600">Dedicated Ad Space</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get a custom ad spot tailored to your specific audience and goals.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-medium text-indigo-600">Newsletter Features</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Include your ad in our monthly newsletters sent to thousands of Startup Connect users.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-white space-y-3 leading-7">
          <li>Access a highly engaged audience of entrepreneurs and innovators.</li>
          <li>Increase your brand’s visibility and credibility within the startup ecosystem.</li>
          <li>Flexible ad placement options tailored to your budget and goals.</li>
          <li>Real-time analytics to track ad performance.</li>
        </ul>
      </section>

      <section className="text-center bg-indigo-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Ready to Advertise?</h2>
        <p className="text-gray-700 dark:text-[#676565] mb-6">
          Start showcasing your brand to thousands of startups, entrepreneurs, and innovators today.
        </p>
        <Button
          className="bg-indigo-600 text-xl text-white px-6 py-2 shadow hover:bg-indigo-500 transition"
          onClick={() => window.location.href = "/contact-us"}
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
}

export default AffiliateProgram;
