import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg">
          This application provides an interactive interface to explore and
          analyze car performance data. Users can browse through various car
          models, compare their specifications, and save their favorites.
        </p>
      </div>
    </div>
  );
};

export default About;
