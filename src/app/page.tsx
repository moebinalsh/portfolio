import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16">
        <Image 
          src="/profile-photo.png" // Placeholder - will need to move image to public folder
          alt="Mohammed Bin Alsheikh" 
          width={150} 
          height={150} 
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Mohammed Bin Alsheikh</h1>
        <p className="text-xl text-gray-400 mb-8">Cybersecurity Engineer & Architect</p>
        <p className="max-w-2xl mx-auto mb-8">
          Highly skilled and dedicated Cybersecurity Engineer and Architect with a passion for developing robust security solutions and conducting impactful research. Proven ability to design, implement, and manage complex security infrastructures.
        </p>
        <a 
          href="/contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          Get In Touch
        </a>
      </section>

      <section id="about-short" className="py-16 bg-gray-800 rounded-lg px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          I am a forward-thinking cybersecurity professional with extensive experience in threat modeling, security architecture design, penetration testing, and incident response. My goal is to leverage cutting-edge technologies and research to protect critical assets and contribute to a safer digital world. I am particularly interested in automated security systems and proactive defense strategies. This portfolio showcases my journey, expertise, and contributions to the field.
        </p>
         <div className="text-center mt-8">
          <a 
            href="/about" 
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Learn More About Me &rarr;
          </a>
        </div>
      </section>

      {/* Placeholder for featured research/tools */}
      <section id="featured-work" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Latest Research</h3>
            <p className="text-gray-400 mb-4">Automated Secrets Detection in CI/CD Pipelines.</p>
            <a href="/research" className="text-blue-400 hover:text-blue-300 font-semibold">View Research &rarr;</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Security Tools</h3>
            <p className="text-gray-400 mb-4">Explore a collection of security-focused tools I have developed.</p>
            <a href="/tools" className="text-blue-400 hover:text-blue-300 font-semibold">Explore Tools &rarr;</a>
          </div>
        </div>
      </section>

    </div>
  );
}

