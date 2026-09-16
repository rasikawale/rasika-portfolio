import { useEffect, useState } from 'react'
import {
  Award,
  BrainCircuit,
  Briefcase,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'






const profile = {
  name: 'Rasika Arvind Wale',
  title: 'Computer Science Student | AI/ML Enthusiast | Python Developer',
  intro:
    'I build practical, real-world solutions using AI, Machine Learning, data analytics and modern software technologies.',
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
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python', 'SQL', 'Core Java', 'Advanced Java', 'Data Structures'],
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    items: ['Machine Learning', 'AI Integration', 'Model Optimization', 'Model Deployment', 'Data Processing Pipelines'],
  },
  {
    title: 'Technologies',
    icon: Cpu,
    items: ['VS Code', 'GitHub', 'MySQL', 'PostgreSQL', 'AI/ML Tools'],
  },
  {
    title: 'Web Development',
    icon: Sparkles,
    items: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'PHP', 'Bootstrap'],
  },
]

const projects = [
  {
    title: 'Farmer Buyers Produce Management System',
    description:
      'A web-based platform connecting farmers directly with buyers, with product listing, order management, user authentication and an admin dashboard for transparent agricultural trading.',
    tech: ['Laravel', 'PHP', 'PostgreSQL', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Skin Cancer Detection Using Deep Learning',
    description:
      'A deep learning project using TensorFlow and Keras to classify skin cancer images as Benign or Malignant, backed by a Flask web app for real-time prediction.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'SQLite'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'NCC Management System',
    description:
      'A system for managing NCC cadet records, attendance, event operations and reporting, with a dashboard for admin monitoring and data management.',
    tech: ['Laravel', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    demo: '#',
  },
]

const timelineItems = [
  {
    title: 'AI/ML Intern',
    period: 'Nov 2025 – Dec 2025',
    text: 'Worked at Pravara Infotech, Sangamner, supporting dataset preprocessing, exploratory data analysis, model building, and dashboard reporting for AI and machine learning workflows.',
  },
  {
    title: 'Technical Workshops',
    period: '2025',
    text: 'Completed practical learning in Generative AI and model-building workflows through the NxtWave workshop focused on hands-on AI application development.',
  },
  {
    title: 'Problem Solving',
    period: '2025',
    text: 'Solved 25+ problems on LeetCode and HackerRank, strengthening algorithmic and coding fundamentals alongside project work.',
  },
  {
    title: 'Academic Performance',
    period: '2023 – 2026',
    text: 'Achieved a CGPA of 9.56 in Bachelor of Computer Science and maintained strong academic performance in science education.',
  },
]

const education = [
  {
    degree: 'Bachelor of Computer Science (BCS)',
    college: 'Sangamner College, Sangamner, India',
    period: 'Jun 2023 – May 2026',
    coursework: ['Data Structures', 'Object-Oriented Programming', 'Machine Learning', 'Database Management Systems', 'Web Development', 'AI Integration'],
  },
  {
    degree: 'HSC - Science',
    college: 'Shramik Junior College, Sangamner, India',
    period: 'Jun 2022 – May 2023',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'Scientific Problem Solving'],
  },
  
]

const certifications = [
  {
    name: 'NxtWave Workshop - Build Own Generative AI Model',
    provider: 'NxtWave',
    year: '2025',
    file: '/certificates/NEXT.pdf'
  },
  {
    name: 'Design and Build the TaskBot',
    provider: 'INfosys Springboard',
    year: '2025',
    file: '/certificates/TASK.pdf'
  },
  {
    name: 'GenAI Job Simulation Program',
    provider: 'Forage',
    year: '2025',
    file: '/certificates/data analytics.pdf'
  },
  {
    name: 'Introduction to the Line Finder and Ultrasonic Sensor',
    provider: 'Infosys Springboard',
    year: '2025',
    file: '/certificates/sensor.pdf'
  },
  {
    name: 'Mini Challenge-Garbage Moving Robot',
    provider: 'Infosys Springboard',
    year: '2025',
    file: '/certificates/mini.pdf'
  }
];
function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = 'home'
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 140) current = section.id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#home" className="brand-wrap" aria-label="Home">
  <span className="brand-badge">
    <img src="/profile.jpeg" alt="Rasika Wale" />
  </span>
  <span className="brand-text">RASIKA</span>
</a>

          <nav className="desktop-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={`mailto:${profile.email}`} className="mail-pill" aria-label="Email">
            <Mail size={12} />
          </a>

          <button type="button" className="mobile-toggle" aria-label="Toggle menu" onClick={() => setNavOpen((open) => !open)}>
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {navOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className={`mobile-nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section section-shell">
          <div className="hero-inner reveal">
            <div className="hero-copy">
              <p className="eyebrow">software DEVELOPER</p>
              <p className="eyebrow">AI / ML DEVELOPER</p>
              <h1>
                <span>Rasika</span>
                <span>Arvind</span>
                <span className="accent">Wale</span>
              </h1>
              <p className="subtitle">{profile.intro}</p>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="About Me" title="Engineering solutions with curiosity and purpose." />
            <div className="reveal about-grid">
              <div className="panel">
            <p>
    I am an M.Sc. Computer Science student with a strong interest in
    Data Analytics, Full-Stack Software Development, and emerging
    technologies. I enjoy building practical, user-focused applications
    and turning ideas into solutions for real-world problems.
</p>

<p>
    My focus is on developing my skills in SQL, Excel, Power BI, Python,
    and modern full-stack technologies while gaining hands-on experience
    through projects. I am passionate about learning, building, and
    continuously improving my technical skills.
</p>
              </div>

              <div className="stats-grid">
                <StatCard icon={GraduationCap} label="Current" value="Computer Engineering" />
                <StatCard icon={BrainCircuit} label="Interests" value="AI, ML, Python,PHP,JAVA " />
                <StatCard icon={Briefcase} label="Goal" value="Build products" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Skills" title="Technologies I build with." />
            <div className="reveal skill-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon
                return (
                  <div key={group.title} className="skill-card">
                    <div className="skill-header">
                      <div className="skill-icon"><Icon size={20} /></div>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="chip-row">
                      {group.items.map((item) => <span key={item} className="chip">{item}</span>)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Projects" title="Selected work and product thinking." />
            <div className="reveal project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-head">
                    <span className="project-label">Featured Project</span>
                    <ExternalLink size={17} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.tech.map((item) => <span key={item} className="chip">{item}</span>)}
                  </div>
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer"><Globe size={16} /> GitHub</a>
                    {/* <a href={project.demo} target="_blank" rel="noreferrer" className="primary"><ExternalLink size={16} /> Live Demo</a> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Experience" title="Learning through work, practice and competition." />
            <div className="timeline reveal">
              {timelineItems.map((item) => (
                <div key={item.title} className="timeline-item">
                  <div className="dot" />
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Education" title="Academic foundation." />
            <div className="reveal edu-stack">
              {education.map((item) => (
                <div key={item.degree} className="edu-card panel">
                  <div className="edu-head">
                    <div>
                      <p className="timeline-period">{item.period}</p>
                      <h3>{item.degree}</h3>
                      <p>{item.college}</p>
                    </div>
                    <span className="mini-badge">Relevant coursework</span>
                  </div>
                  <div className="chip-row">
                    {item.coursework.map((course) => <span key={course} className="chip">{course}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Certifications" title="Learning milestones." />
            <div className="reveal cert-grid">
              {certifications.map((cert) => (
                <a
  key={cert.name}
  href={cert.file}
  target="_blank"
  rel="noopener noreferrer"
  className="cert-card"
>
  <div className="cert-icon">
    <Award size={20} />
  </div>

  <h3>{cert.name}</h3>
  <p>{cert.provider}</p>
  <span>{cert.year}</span>

  <small>View Certificate →</small>
</a>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section-shell content-section">
          <div className="inner-section">
            <div className="reveal resume-box panel">
              <div className="resume-icon"><FileText size={28} /></div>
              <h2>Download My Resume</h2>
              <p>A concise summary of my academic journey, skills, and project experience.</p>
              <div className="resume-actions">
                <a href={profile.resumeViewer} target="_blank" rel="noreferrer" className="secondary-link"><FileText size={18} /> View Resume</a>
                <a href={profile.resume} download className="primary-link"><Download size={18} /> Download Resume</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell content-section">
          <div className="inner-section">
            <SectionHeading eyebrow="Contact" title="Let’s connect and build something meaningful." />
            <div className="reveal contact-grid">
              <div className="panel contact-card">
                <h3>Get in touch</h3>
                <div className="contact-list">
                  <div><Mail size={18} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
                  <div><BriefcaseBusiness size={18} /> <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></div>
                  <div><Globe size={18} /> <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></div>
                </div>
              </div>

              <form className="panel contact-form">
                <div className="field-row">
                  <label>
                    Name
                    <input type="text" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" placeholder="your@email.com" />
                  </label>
                </div>
                <label>
                  Message
                  <textarea rows="6" placeholder="Write a brief message..." />
                </label>
                <button type="submit"><Send size={16} /> Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 Rasika Arvind Wale</p>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="stat-card panel">
      <div className="stat-icon"><Icon size={20} /></div>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
  )
}

export default App
