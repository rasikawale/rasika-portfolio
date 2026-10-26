import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import './App.css'

const profile = {
  name: 'Rasika Wale',
  title: 'Data Analyst | Software Developer',
  intro:
    'I turn data into meaningful insights and build practical digital solutions using modern technologies.',
  email: 'rasika.wale05@gmail.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/in/rasika-wale-3930452b5',
  resume: '/resume.pdf',
  resumeViewer: '/resume-viewer.html',
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Data Analytics',
    icon: BarChart3,
    description: 'Turning raw information into clean, interpretable insights for decisions and reporting.',
    items: ['Excel', 'SQL', 'PostgreSQL', 'Power BI', 'Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Visualization', 'Statistics'],
  },
  {
    title: 'Development',
    icon: Code2,
    description: 'Building practical interfaces and backend systems that solve real user problems.',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Laravel', 'Python', 'Git and GitHub'],
  },
]

const projects = [
  {
    title: 'Farmer Buyers Produce Management System',
    category: 'Agriculture & Marketplace',
    problem:
      'Small agricultural transactions often lacked visibility, structured coordination, and a direct digital marketplace.',
    solution:
      'Built a web platform for product listing, buyer-farmer coordination, order handling, authentication, and admin oversight.',
    features: ['Product listing', 'Order management', 'User login flow', 'Admin dashboard'],
    tech: ['Laravel', 'PHP', 'PostgreSQL', 'JavaScript', 'Bootstrap'],
    github: null,
    demo: null,
    visual: 'agri',
    image: '/farm-project.jpg',
  },
  {
    title: 'Skin Cancer Detection Using Deep Learning',
    category: 'AI & Healthcare',
    problem:
      'Image-based medical screening required a more accessible and faster decision-support workflow.',
    solution:
      'Developed a deep learning model and a Flask-based prediction interface for classifying skin lesions.',
    features: ['Image classification', 'Deep learning model', 'Prediction UI', 'Healthcare-focused workflow'],
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'SQLite'],
    github: null,
    demo: null,
    visual: 'ai',
    image: '/cancer.png',
  },
  {
    title: 'NCC Management System',
    category: 'Operations & Records',
    problem:
      'Managing cadet records, attendance, and event activities depended on disconnected or manual processes.',
    solution:
      'Created a management dashboard to organize records, monitor participation, and simplify administrative reporting.',
    features: ['Cadet records', 'Attendance tracking', 'Event operations', 'Dashboard reporting'],
    tech: ['Laravel', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    github: null,
    demo: null,
    visual: 'ncc',
    image: '/ncc-project.png',
  },
  {
    title: 'House Price Prediction Using Python ML',
    category: 'Machine Learning & Prediction',
    problem:
      'Estimating property value accurately is often difficult because prices depend on multiple interacting factors like location, size, and property condition.',
    solution:
      'Developed a machine learning model to predict house prices using structured housing data and key predictive features.',
    features: ['Feature engineering', 'Price estimation model', 'Data analysis workflow', 'Prediction-focused ML pipeline'],
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
    github: null,
    demo: null,
    visual: 'ai',
    image: '/home.png',
  },
]

const experience = [
  {
    title: 'AI/ML Intern',
    period: 'Nov 2025 – Dec 2025',
    organization: 'Pravara Infotech, Sangamner',
    text: 'Supportive internship exposure in data preparation, exploratory analysis, model building, and report-oriented workflow creation for AI and ML tasks.',
  },
  {
    title: 'Workshop Learning',
    period: '2025',
    organization: 'NxtWave',
    text: 'Hands-on learning focused on generative AI fundamentals and practical model-building workflows.',
  },
  {
    title: 'Problem Solving Practice',
    period: '2025',
    organization: 'LeetCode / HackerRank',
    text: 'Strengthened coding fundamentals and analytical thinking through regular algorithm and problem-solving practice.',
  },
  {
    title: 'Academic Performance',
    period: '2023 – 2026',
    organization: 'Bachelor of Computer Science',
    text: 'Maintained a strong academic record while building a foundation in software engineering, databases, and data-oriented learning.',
  },
]

const education = [
  {
    degree: 'M.Sc. Computer Science',
    institution: 'School of Information Technology, Indira University, Pune, India',
    period: '2026 – Present',
    status: 'Ongoing',
    coursework: ['MongoDB', 'DAA', 'Artificial Intelligence', 'Data Analytics', 'Advanced Programming'],
    score: 'In progress',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    institution: 'Sangamner College, Sangamner, India',
    period: 'Jun 2023 – May 2026',
    status: 'Completed',
    coursework: ['Data Structures', 'OOP', 'Machine Learning', 'DBMS', 'Web Development', 'AI Integration'],
    score: '91.15% / CGPA 9.56',
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Shramik Junior College, Sangamner',
    period: '2021 – 2023',
    status: 'Completed',
    coursework: ['Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Sanskrit'],
    score: '70.83%',
  },
  {
    degree: 'SSC (Secondary School Certificate)',
    institution: 'M.R.D Malpani Vidhyalaya, Sangamner',
    period: '2019 – 2021',
    status: 'Completed',
    coursework: ['English', 'Marathi', 'Hindi', 'Sanskrit', 'Social Science', 'Science'],
    score: '84.40%',
  },
]

const certifications = [
  {
    name: 'SRH-Student Research Competition',
    provider: 'Sangamner College',
    year: '2026',
    file: '/certificates/SRH.pdf',
  },
  {
    name: 'NxtWave Workshop - Build Own Generative AI Model',
    provider: 'NxtWave',
    year: '2025',
    file: '/certificates/NEXT.pdf',
  },
  {
    name: 'Design and Build the TaskBot',
    provider: 'Infosys Springboard',
    year: '2025',
    file: '/certificates/TASK.pdf',
  },
  {
    name: 'Magic Bus Youth Employability & Digital Skills Program',
    provider: 'Magic Bus India Foundation',
    year: '2026',
    file: '/certificates/Magic.pdf',
  },
  {
    name: 'GenAI Job Simulation Program',
    provider: 'Forage',
    year: '2025',
    file: '/certificates/data analytics.pdf',
  },
  {
    name: 'Introduction to the Line Finder and Ultrasonic Sensor',
    provider: 'Infosys Springboard',
    year: '2025',
    file: '/certificates/sensor.pdf',
  },
  {
    name: 'Mini Challenge - Garbage Moving Robot',
    provider: 'Infosys Springboard',
    year: '2025',
    file: '/certificates/mini.pdf',
  },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const updateActiveSection = () => {
      let current = 'home'
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 140) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#home" className="brand-wrap" aria-label="Home">
            <span className="brand-name">Rasika Wale</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href={`mailto:${profile.email}`} className="mail-pill" aria-label="Email Rasika Wale">
            <Mail size={13} />
          </a>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className={`mobile-nav ${navOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section section-shell">
          <div className="hero-inner reveal">
            <div className="hero-copy">
              <p className="eyebrow">HELLO, WORLD! I'M</p>
              <h1>Rasika Wale</h1>
              <p className="role-line">Data Analyst | Software Developer</p>
              <p className="subtitle">{profile.intro}</p>

              <ul className="hero-highlights" aria-label="Highlights">
                <li>Computer Science Graduate</li>
                <li>Data Analytics Enthusiast</li>
                <li>Software Development Projects</li>
              </ul>

              <div className="hero-actions">
                <a href="#projects" className="primary-btn">
                  Explore My Projects <ArrowRight size={18} />
                </a>
                <a href={profile.resume} download className="secondary-btn">
                  Download Resume <Download size={18} />
                </a>
                <a href="#contact" className="tertiary-btn">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Rasika Wale portrait and technology badges">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="orb orb-one" aria-hidden="true" />
              <div className="orb orb-two" aria-hidden="true" />

              <div className="portrait-shell">
                <img src="/profile.jpeg" alt="Rasika Wale portrait" />
              </div>

              <div className="floating-badge badge-python">Python</div>
              <div className="floating-badge badge-sql">SQL</div>
              <div className="floating-badge badge-powerbi">Power BI</div>
              <div className="floating-badge badge-laravel">Laravel</div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="About" title="Curious builder with a strong interest in data and digital problem solving." />
            <div className="reveal about-grid">
              <div className="panel about-card">
                <p>
                  I am a Computer Science graduate with a deep interest in data analytics, software
                  development, and practical technology solutions. My academic and project work has
                  helped me build a strong foundation in problem solving, structured thinking, and hands-on
                  learning.
                </p>
                <p>
                  I enjoy exploring how data can support better decisions and how software can turn ideas
                  into helpful digital products. I am especially interested in learning through projects,
                  refining real-world workflows, and creating solutions that are useful, maintainable, and
                  meaningful.
                </p>
              </div>

              <div className="info-stack">
                <div className="panel info-card">
                  <span className="info-label">Profile</span>
                  <h3>Data-focused developer with a learning mindset</h3>
                  <p>
                    Computer Science graduate exploring analytics, software engineering, and practical digital
                    product development.
                  </p>
                </div>

                <div className="panel info-card education-summary">
                  <span className="info-label">Education</span>
                  <ul>
                    <li>
                      <strong>M.Sc. Computer Science</strong>
                      <span>Ongoing</span>
                    </li>
                    <li>
                      <strong>B.C.S.</strong>
                      <span>Completed</span>
                    </li>
                    <li>
                      <strong>HSC</strong>
                      <span>Completed</span>
                    </li>
                    <li>
                      <strong>SSC</strong>
                      <span>Completed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Skills" title="Core tools for analytics, development, and practical delivery." />
            <div className="reveal skill-groups">
              {skillGroups.map(({ title, icon: Icon, description, items }) => (
                <div key={title} className="panel skill-card">
                  <div className="skill-header">
                    <div className="skill-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>

                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Projects" title="Selected work that reflects problem-solving, technical learning, and product thinking." />
            <div className="reveal projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <div className={`project-visual ${project.visual}`} aria-hidden="true">
                    {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : null}
                    <span>{project.category}</span>
                  </div>

                  <div className="project-body">
                    <div className="project-meta">
                      <span className="mini-pill">{project.category}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <div className="project-copy">
                      <p>
                        <strong>Problem:</strong> {project.problem}
                      </p>
                      <p>
                        <strong>Solution:</strong> {project.solution}
                      </p>
                    </div>

                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="tech-row">
                      {project.tech.map((item) => (
                        <span key={item} className="tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Globe size={16} /> GitHub
                        </a>
                      ) : (
                        <span className="ghost-button">Repository pending</span>
                      )}

                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      ) : (
                        <span className="ghost-button">Demo pending</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Experience" title="Hands-on learning, internships, and continuous technical practice." />
            <div className="reveal timeline">
              {experience.map((item) => (
                <div key={item.title} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Education" title="Academic path and current focus." />
            <div className="reveal edu-grid">
              {education.map((item) => (
                <article key={item.degree} className="panel edu-card">
                  <div className="edu-topline">
                    <span className={`status-badge ${item.status === 'Ongoing' ? 'ongoing' : 'completed'}`}>
                      {item.status}
                    </span>
                    <span className="period-label">{item.period}</span>
                  </div>

                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <p className="period-label">{item.score}</p>

                  <div className="tech-row">
                    {item.coursework.map((course) => (
                      <span key={course} className="tech-badge">
                        {course}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Certifications" title="Certifications and skill-building milestones." />
            <div className="reveal cert-grid">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.file}
                  className="cert-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cert-icon">
                    <Award size={18} />
                  </div>
                  <h3>{cert.name}</h3>
                  <p>{cert.provider}</p>
                  <span>{cert.year}</span>
                  <small>View certificate</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Contact" title="Let&apos;s Build Something Meaningful." />
            <div className="reveal contact-grid">
              <div className="panel contact-card">
                <h3>Connect with me</h3>
                <div className="contact-list">
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={18} />
                    <span>{profile.email}</span>
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <BriefcaseBusiness size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Globe size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="panel contact-card message-card">
                <h3>Collaboration</h3>
                <p>
                  I&apos;m open to internship opportunities, collaborative projects, and meaningful work where data,
                  design, and development come together to solve real problems.
                </p>
                <div className="contact-cta">
                  <a href={`mailto:${profile.email}`} className="primary-btn">
                    Start a Conversation <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Rasika Wale</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="reveal section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default App
