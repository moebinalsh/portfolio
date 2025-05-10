import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Get In Touch</h1>
      
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
          I am always open to discussing new projects, research collaborations, or opportunities in the cybersecurity space. Please feel free to reach out to me.
        </p>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-1">Email</h2>
            <a 
              href="mailto:moebinalsh@gmail.com" 
              className="text-blue-300 hover:text-blue-200 transition-colors text-lg"
            >
              moebinalsh@gmail.com
            </a>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-1">LinkedIn</h2>
            <a 
              href="https://www.linkedin.com/in/mohammed-bin-alsheikh/" // Assuming a LinkedIn profile, replace if different or remove
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-300 hover:text-blue-200 transition-colors text-lg"
            >
              linkedin.com/in/mohammed-bin-alsheikh
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-1">GitHub</h2>
            <a 
              href="https://github.com/moebinalsh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-300 hover:text-blue-200 transition-colors text-lg"
            >
              github.com/moebinalsh
            </a>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-10">
          I look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}

export async function generateMetadata() {
    return {
        title: "Contact Me - Mohammed Bin Alsheikh",
        description: "Contact Mohammed Bin Alsheikh for cybersecurity projects, research, or opportunities.",
    };
}

