import React from "react";
import ReactDOM from "react-dom/client";
import {
  Cpu,
  Car,
  Monitor,
  RadioTower,
  FlaskConical,
  Layers3,
  ChartNoAxesCombined,
  Calendar,
  Code2,
  Network,
  Clock3,
  ExternalLink,
  LockKeyhole,
} from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import "./index.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <div className="section-heading">
          <p>İLETİŞİM</p>

          <h2>Benimle İletişime Geçin</h2>

          <span className="section-description">
            Yeni projeler, iş birlikleri veya teknik konular hakkında
            benimle iletişime geçebilirsiniz.
          </span>
        </div>

        <div className="contact-cards">

          <a
            href="mailto:colakfat@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
                <FaEnvelope />
            </div>
            <h3>Email</h3>
            <span>colakfat@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/fatih-%C3%A7olak/?locale=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
                <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <span>linkedin.com/in/fatih</span>
          </a>

          <a
            href="https://github.com/colakfat"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
                <FaGithub />
            </div>
            <h3>GitHub</h3>
            <span>github.com/colakfat</span>
          </a>

        </div>

        <div className="contact-button">

          <a href="mailto:colakfat@gmail.com">
            Bana E-posta Gönder
          </a>

        </div>

        <footer className="footer">

          <p>© 2026 Fatih Çolak</p>

          <span>All Rights Reserved</span>

        </footer>

      </div>

    </section>
  );
}

export default Contact;

function Projects() {
  const projects = [
    {
      title: "CAN Analyzer Pro",
      status: "Open Source",
      statusType: "open",
      description:
        "Vector XL, PEAK, Kvaser ve UT146 adaptörlerini tek arayüzde destekleyen CAN Bus analiz ve test uygulaması. Gerçek zamanlı mesaj izleme, gönderme, filtreleme, cycle time hesaplama ve loglama özellikleri sunar.",
      technologies: [
        "C#",
        ".NET",
        "WinForms",
        "CAN Bus",
        "Vector XL",
      ],
      github: "https://github.com/colakfat/CAN-Analyzer-Pro",
    },
    {
      title: "UART Terminal Pro",
      status: "Open Source",
      statusType: "open",
      description:
        "UART, RS232 ve USB-Serial haberleşmeleri için geliştirilmiş masaüstü terminal uygulaması. Komut gönderme, gelen verileri izleme, bağlantı yönetimi ve loglama özellikleri içerir.",
      technologies: [
        "C#",
        ".NET",
        "WinForms",
        "Serial Port",
        "UART",
      ],
      github: "https://github.com/colakfat/UART-Terminal-Pro",
    },
    {
      title: "UT245 Voltage Measurement",
      status: "Private",
      statusType: "private",
      description:
        "STM32 tabanlı 40 kanallı gerilim ölçüm kartı ve masaüstü kontrol yazılımı. Kalibrasyon, offset ayarı, UART ve CAN haberleşmesi ile hassas ölçüm süreçlerini destekler.",
      technologies: [
        "STM32",
        "Embedded C",
        "FreeRTOS",
        "C#",
        "CAN Bus",
      ],
      github: null,
    },
    {
      title: "Test Automation System",
      status: "Private",
      statusType: "private",
      description:
        "Otomotiv elektronik kartları için test senaryolarını, laboratuvar cihazlarını, ölçüm sonuçlarını ve raporlamayı tek merkezden yöneten üretim test otomasyonu çözümü.",
      technologies: [
        "C#",
        "SQL",
        "Instrument Control",
        "Automation",
      ],
      github: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-heading">
          <p>Projeler</p>

          <h2>Geliştirdiğim Projeler</h2>

          <span className="section-description">
            Gömülü sistemler, haberleşme ve test otomasyonu alanlarında
            geliştirdiğim mühendislik projeleri.
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-info-card" key={project.title}>
              <div className="project-info-header">
                <div className="project-title">
                  <span
                    className={`project-status-dot ${project.statusType}`}
                  />

                  <h3>{project.title}</h3>
                </div>

                <span
                  className={`project-status ${project.statusType}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}

                <a href="#contact">
                  Proje Hakkında →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const technologyStack = [
    "C",
    "C++",
    "C#",
    "Python",
    ".NET",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "STM32",
    "ESP32",
    "FreeRTOS",
    "CAN Bus",
    "UART",
    "SPI",
    "I²C",
    "TCP/IP",
    "Modbus RTU",
    "GitHub",
    "Visual Studio",
    "VS Code",
    "STM32CubeIDE",
    "ESP-IDF",
    "SQL",
    "JSON",
    "Vector",
    "PEAK",
    "Kvaser",
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading">
          <p>Yetenekler</p>
          <h2>Kullandığım Teknolojiler</h2>

          <span className="section-description">
            Gömülü sistemlerden masaüstü uygulamalarına kadar aktif olarak
            kullandığım teknolojiler.
          </span>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <div className="skill-card-icon">
              <Cpu />
            </div>

            <div className="skill-card-content">
              <h3>Embedded Software</h3>

              <ul>
                <li>STM32</li>
                <li>ESP32</li>
                <li>FreeRTOS</li>
                <li>HAL Drivers</li>
                <li>Bootloader</li>
                <li>ADC / DMA</li>
                <li>SPI / I²C / UART</li>
              </ul>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-icon">
              <Monitor />
            </div>

            <div className="skill-card-content">
              <h3>Desktop Development</h3>

              <ul>
                <li>C#</li>
                <li>.NET Framework / Core</li>
                <li>WinForms</li>
                <li>WPF</li>
                <li>Python</li>
                <li>REST API</li>
              </ul>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-icon">
              <RadioTower />
            </div>

            <div className="skill-card-content">
              <h3>Communication</h3>

              <ul>
                <li>CAN Bus</li>
                <li>UART / RS232</li>
                <li>TCP/IP</li>
                <li>UDP</li>
                <li>SPI</li>
                <li>I²C</li>
                <li>Modbus RTU</li>
              </ul>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-icon">
              <FlaskConical />
            </div>

            <div className="skill-card-content">
              <h3>Test Automation</h3>

              <ul>
                <li>CAN Analyzer Pro</li>
                <li>UART Terminal Pro</li>
                <li>Production Test Systems</li>
                <li>Logging & Analysis</li>
                <li>Calibration</li>
                <li>Reporting</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="technology-stack">
          <div className="technology-stack-title">
            <Layers3 />
            <h3>Teknoloji Yığınım</h3>
          </div>

          <div className="technology-tags">
            {technologyStack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((previousValue) => !previousValue);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Fatih <span>Çolak</span>
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Menüyü aç veya kapat"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "navbar navbar-open" : "navbar"}>
          <a href="#home" onClick={closeMenu}>Ana Sayfa</a>
          <a href="#about" onClick={closeMenu}>Hakkımda</a>
          <a href="#skills" onClick={closeMenu}>Yetenekler</a>
          <a href="#projects" onClick={closeMenu}>Projeler</a>
          <a href="#contact" onClick={closeMenu}>İletişim</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Merhaba, Ben</p>


          <h1 className="hero-title">Fatih <span>Çolak</span></h1>
          <h2 className="hero-subtitle">Embedded Software Engineer</h2>
          <p className="hero-tech">Automotive Test Systems • CAN Bus • Test Automation</p>
          <p className="hero-description">Otomotiv test sistemleri ve embedded yazılım çözümleri geliştiriyorum. <br />CAN Bus analiz araçları, test otomasyonu yazılımları ve gömülü sistem projeleri tasarlayarak üretim ve Ar-Ge süreçlerinin daha hızlı, güvenilir ve verimli yürütülmesine katkı sağlıyorum.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">Projecelerimi İncele</a>
            <a href="/cv.pdf" className="secondary-button" target="_blank" rel="noopener noreferrer">CV İndir</a>
            
          </div>        
          
        </div>
        <div className="hero-projects">
          <article className="featured-project-card">
            <div className="featured-project-image">
              <img
                src="/can-analyzer-pro.png"
                alt="CAN Analyzer Pro uygulama ekranı"
              />
            </div>

            <div className="featured-project-content">
              <h3>CAN Analyzer Pro</h3>

              <p className="project-category">
                CAN Bus Analiz ve Test Aracı
              </p>

              <p className="project-description">
                Çoklu CAN adaptörü desteği ile mesaj izleme, gönderme,
                filtreleme ve loglama özellikleri sunan profesyonel bir araç.
              </p>

              <div className="project-technologies">
                <span>C#</span>
                <span>.NET WinForms</span>
                <span>CAN</span>
                <span>Vector</span>
                <span>PEAK</span>
                <span>Kvaser</span>
              </div>

              <a
                href="https://github.com/colakfat/CAN-Analyzer-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Projeyi İncele <span>→</span>
              </a>
            </div>
          </article>
        </div>

      </div>

    </section>
  )
}
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading">
          <p>Hakkımda</p>
          <h2>Beni Yakından Tanıyın</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Ben Kimim?</h3>

            <p>
              Otomotiv elektronik kartları için test sistemleri tasarlayan,
              gömülü yazılımlar ve masaüstü mühendislik uygulamaları geliştiren
              bir Test Sistem Tasarım Mühendisiyim.
            </p>

            <p>
              C, C#, Python, STM32 ve ESP32 teknolojileriyle; CAN Bus, UART,
              TCP/IP ve farklı haberleşme protokollerini kullanan çözümler
              geliştiriyorum.
            </p>

            <p>
              Amacım, üretim ve Ar-Ge süreçlerini daha hızlı, güvenilir ve
              sürdürülebilir hale getiren mühendislik araçları oluşturmaktır.
            </p>
          </div>

          <div className="about-right">

            <div className="expertise-grid">

              <article className="expertise-card">
                <div className="expertise-icon"><Cpu size={42} strokeWidth={2}/></div>

                <h4>Embedded Software</h4>

                <p>STM32, ESP32, C, FreeRTOS</p>
              </article>

              <article className="expertise-card">
                <div className="expertise-icon"><Car size={42}/></div>

                <h4>Automotive Test</h4>

                <p>CAN Bus, UDS, Production Test</p>
              </article>

              <article className="expertise-card">
                <div className="expertise-icon"><Monitor size={42}/></div>

                <h4>Desktop Apps</h4>

                <p>C#, .NET WinForms, Python</p>
              </article>

              <article className="expertise-card">
                <div className="expertise-icon"> <ChartNoAxesCombined size={42}/></div>

                <h4>Automation</h4>

                <p>Logging, Analysis, Reports</p>
              </article>

            </div>

            <div className="about-stats">

              <div className="stat-item">
                  <h3>5+</h3>
                  <span>Yıl Deneyim</span>
                  <p>Embedded Software</p>
              </div>

              <div className="stat-item">
                  <h3>10+</h3>
                  <span>Tamamlanan Proje</span>
                  <p>Test Sistemleri</p>
              </div>

              <div className="stat-item">
                  <h3>4</h3>
                  <span>CAN Adaptörü</span>
                  <p>Vector • PEAK • Kvaser • UT146</p>
              </div>

              <div className="stat-item">
                  <h3>1000+</h3>
                  <span>Saat Test & Analiz</span>
                  <p>Gerçek Zamanlı Testler</p>
              </div>

            </div>




          </div>

        </div>
      </div>
    </section>
  );
}
function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Hero/>
        <About/>
        <Skills />
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);