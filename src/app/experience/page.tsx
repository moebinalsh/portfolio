import React from 'react';

// This is a placeholder for the actual resume data
// In a real application, this would be fetched or parsed from a file
const resumeData = {
  fullName: "Mohammed Bin-Alsheikh",
  title: "Cyber Security/Cloud Engineer & Architect",
  contact: {
    phone: "(734) 219-2187",
    email: "moebinalsh@gmail.com",
    location: "Dearborn, United States",
  },
  profile: "Cyber Security/ cloud Engineer with over 7 years of experience in cloud infrastructure, DevOps, penetration testing, cloud security, and vulnerability assessment. Expertise in testing WAFs and cloud environments, secure coding practices, and risk analysis. Proven ability to lead complex security projects, collaborate with cross-functional teams, and implement innovative strategies to mitigate emerging threats.",
  employmentHistory: [
    {
      role: "Cyber Security Engineer & Architect",
      company: "Salla E-commerce Platform",
      period: "September 2024 — Present",
      responsibilities: [
        "Led and mentored a team of security engineers, providing guidance on best practices, incident response, and security architecture.",
        "Managed and optimized Cloudflare Web Application Firewall (WAF), DNS, and Zero Trust configurations to enhance security posture and mitigate threats.",
        "Oversaw AWS Cloud Security initiatives, ensuring secure cloud infrastructure and compliance with best practices.",
        "Administered and maintained Graylog for centralized log management, real-time monitoring, and incident response.",
        "Defended against daily cyberattacks by identifying, mitigating, and escalating threats as necessary.",
        "Built and managed a SIEM (Security Information and Event Management) solution compliant with PCI DSS standards to ensure regulatory compliance and improve threat detection.",
        "Regularly conducted penetration testing on new APIs, services, and tools to identify vulnerabilities and improve system security.",
        "Developed automation tools to streamline security processes and enhance incident response efficiency.",
        "Created and implemented threat detection alerts integrated with PagerDuty for real-time incident management and faster response times.",
        "Managed the bug bounty program through Intigity, collaborating with ethical hackers to identify and fix vulnerabilities.",
        "Led the transition to Infrastructure as Code (IaC) using Terraform for automating and managing Cloudflare WAF and DNS rule configurations."
      ],
    },
    {
      role: "Information Security Engineer & Architect",
      company: "Rocket Companies",
      period: "January 2022 — September 2024",
      responsibilities: [
        "Managed the security posture of 53 AWS accounts, 15 GCP projects, and 30 Azure subscriptions, ensuring compliance with best practices, regulatory standards, and organizational security policies across multi-cloud environments.",
        "Led the integration and optimization of Prisma Cloud to enforce cloud security controls, conduct continuous monitoring, and automate vulnerability detection, enhancing visibility and reducing risks across AWS, GCP, and Azure environments.",
        "Developed and implemented cloud security frameworks to ensure consistent identity management, access controls, and threat prevention measures, safeguarding critical assets and achieving operational efficiency across a complex, multi-cloud infrastructure.",
        "Conducted Red Team operations and penetration tests on on-premises and cloud resources, including WAF and cloud penetration testing.",
        "Developed and maintained cloud security standards, including the implementation of security alerting (Prisma) for AWS and Azure.",
        "Guided development teams in secure coding practices and architecture design.",
        "Created automation and custom tools for cloud security.",
        "CI/CD pipelines for automated deployment and code security scanning.",
        "Led remediation projects for vulnerabilities like Log4j and TLS 1.2 across cloud instances and containers.",
        "Collaborated with multiple teams to deliver secure, scalable solutions and ensure compliance with security policies."
      ],
    },
    {
      role: "Systems/SysOps Engineer",
      company: "Rocket Companies",
      period: "January 2021 — January 2022", // Corrected based on resume text (Present was likely a typo for the previous role)
      responsibilities: [
        "Conducted penetration tests and security assessments on Windows and Linux servers.",
        "Designed and implemented secure architectures for data integration projects.",
        "Managed IAM roles and permissions, ensuring secure access to cloud resources.",
        "Deployed and secured Docker containers and Kubernetes clusters for various services.",
        "Executed cloud cost-saving strategies, resulting in annual savings of $6.2 million."
      ],
    },
    {
      role: "Penetration Tester/ Cloud security Consultant",
      company: "MBA Tech Solutions",
      period: "January 2017 — Present",
      responsibilities: [
        "Performed penetration tests on systems, networks, and applications to uncover vulnerabilities.",
        "Engaged in bug bounty programs, discovering and responsibly disclosing critical vulnerabilities.",
        "Created custom Python tools for penetration testing, including web crawlers, file finders, and port scanners."
      ],
    },
  ],
  education: [
    {
      degree: "Bachelors in information technology engineering",
      institution: "Charter University, USA",
      graduation: "May 2021",
    },
    {
      degree: "Bachelors in Cloud computing and Solutions",
      institution: "Purdue Global University, USA",
      graduation: "June 2025",
    },
  ],
  skills: [
    "Linux", "Vulnerability Assessments", "Secure Coding", "Vulnerability Management", "DevOps", "Bash (Scripting Language)",
    "Metasploit", "BurpSuite", "Nmap", "BloodHound", "Wireshark", "Responder", "Cloudflare", "Terraform", "Docker",
    "Single Sign-On (SSO)", "Ansible", "Microsoft Windows", "Amazon Web Services", "Azure", "Google Cloud Platform (GCP)",
    "Python (Programming Language)", "Kubernetes", "Jenkins", "ServiceNow", "Qualys", "Prisma Cloud", "Risk Analysis",
    "Agile Software Development", "Circleci", "Github", "Splunk", "Graylog"
  ],
  courses: [
    { name: "Certified SAFe Scrum Master", issuer: "SAFE", date: "May 2023" },
    { name: "Certified Kubernetes Administrator", issuer: "Udemy", date: "June 2022" },
    { name: "Docker Certified Associate", issuer: "Udemy", date: "December 2022" },
    { name: "AWS Solutions Architect", issuer: "Udemy", date: "July 2021" },
  ],
  projects: [
    {
      name: "Log4j Remediation",
      description: "Identified and remediated 640 cloud resources, ensuring updates to non-vulnerable Java versions."
    },
    {
      name: "AWS EC2 Vulnerability Management",
      description: "Implemented security agents, patched 31,000 high critical vulnerabilities, managed SSO roles, and disabled S3 public access on 80 AWS accounts."
    },
    {
      name: "AWX Automated Vulnerability Management",
      description: "Set up AWX (Ansible Tower), created playbooks, and automated cloud instance patching."
    }
  ]
};

const ExperiencePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Professional Experience & Qualifications</h1>

      {/* Profile Section */}
      <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Profile</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{resumeData.profile}</p>
      </section>

      {/* Employment History Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">Employment History</h2>
        <div className="space-y-10">
          {resumeData.employmentHistory.map((job, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-100">{job.role}</h3>
              <p className="text-lg text-blue-300 mb-1">{job.company}</p>
              <p className="text-sm text-gray-500 mb-4">{job.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-400">Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-600 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>
      
      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
              <p className="text-md text-blue-300 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses/Certifications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">Certifications & Courses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.courses.map((course, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-100">{course.name}</h3>
              <p className="text-md text-blue-300 mb-1">{course.issuer}</p>
              <p className="text-sm text-gray-500">{course.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">Key Projects</h2>
        <div className="space-y-8">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-2">{project.name}</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExperiencePage;

