"use client";

import { useEffect, useState } from "react";

const codingSkills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 80 },
  { name: "React", value: 90 },
  { name: "TypeScript", value: 85 },
  { name: "Node.js", value: 85 },
];

const professionalSkills = [
  { name: "Web Development", value: 95 },
  { name: "UI/UX", value: 85 },
  { name: "SEO", value: 70 },
  { name: "Cloud & DevOps", value: 85 },
  { name: "AI Integration", value: 90 },
  { name: "Project Management", value: 80 },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (id && top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${sticky ? "sticky" : ""}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          yoKi.
          <span
            className="animate"
            style={{ "--i": 1 } as React.CSSProperties}
          />
        </a>

        <button
          type="button"
          className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}
          id="menu-icon"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span
            className="animate"
            style={{ "--i": 2 } as React.CSSProperties}
          />
        </button>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            onClick={closeMenu}
          >
            Journey
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>

          <span className="active-nav" />

          <span
            className="animate"
            style={{ "--i": 2 } as React.CSSProperties}
          />
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section className="home" id="home">
          <div className="home-content">
            <h1>
              Hi, I&apos;m <span>Yatharth Zinzuwadia</span>
            </h1>

            <div className="text-animate">
              <h3>Full-Stack AI Developer</h3>
            </div>

            <p>
              Full-stack developer with 2+ years of experience building
              production web applications, serverless APIs, AI-integrated
              platforms, and developer tools. I work across React.js, Next.js,
              Node.js, TypeScript, AWS, databases, CI/CD, and modern AI APIs.
            </p>

            <div className="btn-box">
              <a href="#contact" className="btn">
                Hire me
              </a>

              <a href="#contact" className="btn">
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <div className="home-sci">
            <a
              href="https://github.com/YatharthZinzuwadia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin" />
            </a>

            <a href="mailto:yatharthzinzuwadia@gmail.com" aria-label="Email">
              <i className="bx bx-envelope" />
            </a>
          </div>

          <div className="home-imgHover" />
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <h2 className="heading">
            About <span>Me</span>
          </h2>

          <div className="about-img">
            <img src="/images/bg2.jpg" alt="Yatharth Zinzuwadia" />
            <span className="circle-spin" />
          </div>

          <div className="about-content">
            <h3>Full-Stack AI Developer</h3>

            <p>
              I&apos;m a Software Developer based in Ahmedabad, Gujarat,
              specializing in React.js, Next.js, Node.js, TypeScript, serverless
              architectures, cloud infrastructure, and AI-integrated
              applications. I have worked across e-commerce, SaaS dashboards,
              content platforms, developer tooling, and AI-powered systems.
            </p>

            <p>
              My experience includes designing REST APIs, AWS Lambda functions,
              MongoDB and Firebase applications, vector database integrations,
              CI/CD pipelines, and modern frontend architectures. I also work
              with OpenAI, Gemini, Claude, and open-source AI APIs.
            </p>

            <div className="btn-box btns">
              <a href="#education" className="btn">
                My Journey
              </a>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="education" id="education">
          <h2 className="heading">
            My <span>Journey</span>
          </h2>

          <div className="education-row">
            <div className="education-column">
              <h3 className="title">Experience</h3>

              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-calendar" />
                      Oct 2024 - Present
                    </div>

                    <h3>Software Developer - BSP Technologies</h3>

                    <p>
                      Building and maintaining production web applications using
                      React.js, Next.js, Node.js, TypeScript, MongoDB, Firebase,
                      serverless APIs, AWS Lambda, vector databases, and modern
                      AI integrations.
                    </p>

                    <p>
                      Worked with Vercel, AWS, Jenkins, GitHub Actions, GitLab
                      CI/CD, REST APIs, and scalable application architectures.
                    </p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-calendar" />
                      Apr 2024 - Sep 2024
                    </div>

                    <h3>Software Developer - Clixico SoftTech</h3>

                    <p>
                      Built and maintained internal product websites using C#,
                      SQL, and .NET. Collaborated with senior developers on
                      society-management systems and business applications.
                    </p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-calendar" />
                      Jan 2024 - Apr 2024
                    </div>

                    <h3>Developer | Project Manager - Sapphire Infocom</h3>

                    <p>
                      Coordinated multiple development teams using Agile
                      sprints, conducted code reviews, standardized testing
                      practices, optimized frontend performance, and managed
                      client and development communication across multiple
                      projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-column">
              <h3 className="title">Education</h3>

              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-calendar" />
                      2019 - 2023
                    </div>

                    <h3>Bachelor of Engineering - Information Technology</h3>

                    <p>SAL Educational and Technical Institute.</p>
                  </div>
                </div>
              </div>

              <h3 className="title journey-project-title">Selected Projects</h3>

              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-code-alt" />
                      Full-Stack / AI
                    </div>

                    <h3>NexusHub</h3>

                    <p>
                      Multi-utility developer dashboard with modular
                      architecture built using Next.js, MongoDB, Vercel
                      serverless functions, and AI tooling.
                    </p>

                    <a
                      href="https://nexus-hub-rho.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-code-alt" />
                      Frontend / Animation
                    </div>

                    <h3>Sundown Studio Clone</h3>

                    <p>
                      Highly animated landing page recreation using GSAP,
                      ScrollTrigger, smooth scrolling, responsive layouts, and
                      optimized assets.
                    </p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-mobile-alt" />
                      React Native
                    </div>

                    <h3>Mobile E-Shopping App</h3>

                    <p>
                      React Native e-commerce application with product catalog,
                      cart management, and Firebase authentication for mobile
                      platforms.
                    </p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bx-play-circle" />
                      Full-Stack
                    </div>

                    <h3>Akashic Records</h3>

                    <p>
                      Anime streaming platform with API-powered content,
                      watchlists, search, filtering, and responsive web
                      interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills" id="skills">
          <h2 className="heading">
            My <span>Skills</span>
          </h2>

          <div className="skills-row">
            <div className="skills-column">
              <h3 className="title">Technical Skills</h3>

              <div className="skills-box">
                <div className="skills-content">
                  {codingSkills.map((skill) => (
                    <div className="progress" key={skill.name}>
                      <h3>
                        {skill.name}
                        <span>{skill.value}%</span>
                      </h3>

                      <div className="bar">
                        <span style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="skills-column">
              <h3 className="title">Professional Skills</h3>

              <div className="skills-box">
                <div className="skills-content">
                  {professionalSkills.map((skill) => (
                    <div className="progress" key={skill.name}>
                      <h3>
                        {skill.name}
                        <span>{skill.value}%</span>
                      </h3>

                      <div className="bar">
                        <span style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = "mailto:yatharthzinzuwadia@gmail.com";
            }}
          >
            <div className="input-box">
              <div className="input-field">
                <input type="text" placeholder="Full Name" required />
                <span className="focus" />
              </div>

              <div className="input-field">
                <input type="email" placeholder="Email Address" required />
                <span className="focus" />
              </div>
            </div>

            <div className="input-box">
              <div className="input-field">
                <input type="tel" placeholder="Mobile Number" required />
                <span className="focus" />
              </div>

              <div className="input-field">
                <input type="text" placeholder="Subject" required />
                <span className="focus" />
              </div>
            </div>

            <div className="textarea-field">
              <textarea rows={10} placeholder="Your Message" required />
              <span className="focus" />
            </div>

            <div className="btn-box btns">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2026 by yoKi | All Rights Reserved</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home" aria-label="Back to top">
            <i className="bx bx-chevron-up" />
          </a>
        </div>
      </footer>
    </>
  );
}
