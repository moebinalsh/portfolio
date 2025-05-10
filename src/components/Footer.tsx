const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Mohammed Bin Alsheikh. All rights reserved.</p>
        <p>Cybersecurity Engineer & Architect</p>
      </div>
    </footer>
  );
};

export default Footer;
