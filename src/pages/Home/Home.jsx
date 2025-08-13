import React from 'react';

const Home = () => {
    return (
        <div>
           <section id="home" className="min-h-screen flex items-center justify-center bg-blue-200">
        <h1 className="text-4xl">Home Section</h1>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-green-200">
        <h1 className="text-4xl">About Section</h1>
      </section>
        </div>
    );
};

export default Home;