// const Resume = () => {
//   return (
//     <section className="page-section">
//       <h2>My Resume</h2>
//       <p>You can view and download my resume by clicking the button below.</p>
//       <a href="https://drive.google.com/uc?export=download&id=1N62rCT6DiniegBKkIg2ha-zZ4Anqq9i2
// " download="Nikhil_Resume.pdf" className="btn">
//         Download Resume
//       </a>
//       <a href="https://drive.google.com/file/d/1N62rCT6DiniegBKkIg2ha-zZ4Anqq9i2/view?pli=1" className="btn">
//         View Resume
//       </a>
//     </section>
//   );
// };

// export default Resume;

const Resume = () => {
  return (
    <section className="page-section">
      <h2>My Resume</h2>
      <p>You can view and download my resume by clicking the button below.</p>

      <a
        href="https://drive.google.com/uc?export=download&id=1N62rCT6DiniegBKkIg2ha-zZ4Anqq9i2"
        download="Nikhil_Resume.pdf"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>

      <a
        href="https://drive.google.com/file/d/1N62rCT6DiniegBKkIg2ha-zZ4Anqq9i2/view?pli=1"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
};

export default Resume;
