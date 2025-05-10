import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-1 flex justify-center">
            <Image 
              src="/profile-photo.png"
              alt="Mohammed Bin Alsheikh" 
              width={200} 
              height={200} 
              className="rounded-full shadow-lg"
              priority
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-3">Mohammed Bin Alsheikh</h2>
            <p className="text-xl text-gray-400 mb-6">Cybersecurity Engineer & Architect</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              A highly dedicated and results-oriented Cybersecurity professional with over 7 years of comprehensive experience spanning cloud infrastructure security, DevOps methodologies, penetration testing, and advanced vulnerability assessment. My expertise lies in architecting and implementing robust security solutions, particularly in testing Web Application Firewalls (WAFs) and securing complex cloud environments.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about secure coding practices, meticulous risk analysis, and leading multifaceted security projects. I thrive in collaborative environments, working closely with cross-functional teams to devise and execute innovative strategies that effectively mitigate emerging cyber threats and safeguard critical digital assets.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Mission & Vision</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            My mission is to leverage cutting-edge technology and in-depth research to create a safer digital world. I am committed to developing proactive defense mechanisms and automated security systems that can anticipate and neutralize threats before they impact organizations. I aim to be at the forefront of cybersecurity innovation, contributing to best practices and shaping the future of digital protection.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I envision a future where robust security is seamlessly integrated into every aspect of technology, empowering businesses and individuals to operate with confidence and trust. Through continuous learning, research, and the development of advanced security tools, I strive to make this vision a reality.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[            
              "Cloud Security (AWS, Azure, GCP)",
              "Security Architecture & Design",
              "Penetration Testing & Red Teaming",
              "Vulnerability Management",
              "DevSecOps & Secure SDLC",
              "Incident Response & Threat Hunting",
              "SIEM & Log Management (Graylog, Splunk)",
              "WAF & Network Security (Cloudflare)",
              "Infrastructure as Code (Terraform, Ansible)",
              "Secure Coding Practices",
              "Risk Analysis & Compliance (PCI DSS)",
              "Automation & Scripting (Python, Bash)"
            ].map((skill) => (
              <div key={skill} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-gray-200 text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}

