const Resume = () => {
  return (
    <section className="page-section">
      <h2>My Resume</h2>
      <p>You can view and download my resume by clicking the button below.</p>
      <a href="/resume.pdf" download="Nikhil_Resume.pdf" className="btn">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;