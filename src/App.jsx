import React from "react";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

const profile = {
  name: "Raju Chinnam",
  title: "Senior Mobile Engineer & AI Specialist",
  email: "rajuchjobs@gmail.com",
  github: "https://github.com/Kanakarajuchinnam",
  resumeLabel: "Resume PDF available on request",
  summary:
    "Senior Mobile and AI Backend Engineer with 10+ years of experience building scalable iOS and cross-platform applications with Swift, SwiftUI, Kotlin, and modern reactive frameworks. Recently focused on AI-powered mobile experiences using LLMs, prompt engineering, Google Vertex AI, Python/FastAPI, and cloud deployment.",
};

const stats = [
  { value: "10+", label: "Years in mobile engineering" },
  { value: "5", label: "Enterprise domains shipped" },
  { value: "AI", label: "LLM, RAG, Vertex AI, CoreML" },
];

const expertise = [
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    items: ["Swift", "SwiftUI", "UIKit", "Objective-C", "Kotlin", "Combine", "RxSwift"],
  },
  {
    icon: Code2,
    title: "Architecture",
    items: ["MVVM + Clean", "Coordinator", "SDUI", "Modular SDKs", "Protocol-Oriented Design"],
  },
  {
    icon: Bot,
    title: "AI / ML",
    items: ["OpenAI APIs", "Google Vertex AI", "RAG", "Prompt Engineering", "CoreML", "Ollama"],
  },
  {
    icon: Cloud,
    title: "Backend & Cloud",
    items: ["Python", "FastAPI", "REST", "GraphQL", "Docker", "GCP", "AWS"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    items: ["OAuth 2.0", "Azure AD", "MFA", "SSL Pinning", "MDM", "Token Auth"],
  },
  {
    icon: TestTube2,
    title: "Testing & Delivery",
    items: ["XCTest", "XCUITest", "Fastlane", "Jenkins", "GitLab CI", "App Store Releases"],
  },
];

const featuredWork = [
  {
    company: "Capital One",
    role: "Mobile & AI Backend Engineer",
    period: "Sep 2024 - Present",
    link: "https://apps.apple.com/us/app/capital-one-creditwise/id1008234539",
    product: "CreditWise",
    summary:
      "Built scalable SwiftUI and SDUI experiences, AI-powered credit coaching, Python/FastAPI services, RAG pipelines, and Vertex AI recommendation workflows for personalized financial insights.",
    highlights: ["LLM-powered credit coaching", "BFF + server-driven UI", "Docker and Cloud Run deployment"],
  },
  {
    company: "T-Mobile",
    role: "Senior iOS Engineer",
    period: "Jan 2021 - Aug 2024",
    product: "Retail and ASDK mobile platforms",
    summary:
      "Modernized enterprise iOS SDKs and app experiences with SwiftUI, Combine, OAuth 2.0, Azure AD, MFA, Intune MAM compliance, and modular Swift Package architecture.",
    highlights: ["OAuth modernization", "Objective-C to Swift migration", "Reusable enterprise SDKs"],
  },
  {
    company: "E*TRADE Financial",
    role: "iOS Engineer",
    period: "Apr 2020 - Dec 2020",
    link: "https://apps.apple.com/us/app/e-trade-invest-trade-save/id313259740",
    product: "Trading and investing app",
    summary:
      "Delivered secure financial mobile features, dark mode, accessibility improvements, real-time market experiences, and cross-platform migration support with React Native.",
    highlights: ["Secure fintech workflows", "Dark Mode and accessibility", "Fastlane and TestFlight delivery"],
  },
  {
    company: "Pearson",
    role: "Mobile Application Developer",
    period: "Dec 2018 - Feb 2020",
    link: "https://itunes.apple.com/us/app/revel-by-pearson/id1088745696?mt=8",
    product: "Revel by Pearson",
    summary:
      "Led mobile development for education experiences using Swift, RxSwift, REST APIs, SQLite, AWS Lambda, DynamoDB, LaunchDarkly, and quarterly App Store releases.",
    highlights: ["Offline and synced learning", "AWS-backed integrations", "Feature flags and A/B testing"],
  },
];

const experience = [
  "Designed enterprise iOS apps for HP secure printing using Swift, Objective-C, Core Location, BLE, MDM, APNs, AirPrint, and CI/CD.",
  "Built early-career Swift applications at Sparity with REST integrations, Cocoa Touch, third-party SDKs, Git workflows, and App Store delivery.",
  "Collaborated across product, design, backend, QA, and security teams in Agile environments for regulated mobile platforms.",
];

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="Raju Chinnam portfolio home">
          RC
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="hero" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Mobile architecture, AI systems, and fintech delivery
          </p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email Raju
            </a>
            <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
              <ArrowUpRight size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
        <aside className="signal-panel" aria-label="Career snapshot">
          <div className="availability">Open to Mobile and AI engineering roles</div>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">Profile</p>
          <h2 id="about-title">Engineering leader for mobile products with AI at the core.</h2>
        </div>
        <p>
          Raju brings deep iOS delivery experience across financial services, telecom, education, and
          enterprise device workflows. His recent work combines SwiftUI, server-driven UI,
          Python/FastAPI, RAG pipelines, MCP experiments, and Vertex AI-backed recommendation systems
          to make mobile products more adaptive and explainable.
        </p>
      </section>

      <section id="expertise" className="section" aria-labelledby="expertise-title">
        <div className="section-heading">
          <p className="section-kicker">Expertise</p>
          <h2 id="expertise-title">Hands-on across app, architecture, AI, and release systems.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map(({ icon: Icon, title, items }) => (
            <article className="skill-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-kicker">Featured Work</p>
          <h2 id="work-title">Enterprise apps and AI-enabled mobile platforms.</h2>
        </div>
        <div className="work-grid">
          {featuredWork.map((work) => (
            <article className="work-card" key={`${work.company}-${work.product}`}>
              <div className="card-topline">
                <BriefcaseBusiness size={22} aria-hidden="true" />
                <span>{work.period}</span>
              </div>
              <h3>{work.company}</h3>
              <p className="role">{work.role}</p>
              <p className="product">{work.product}</p>
              <p>{work.summary}</p>
              <div className="chips">
                {work.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              {work.link && (
                <a className="text-link" href={work.link} target="_blank" rel="noreferrer">
                  View app
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section career" aria-labelledby="career-title">
        <div>
          <p className="section-kicker">Career Impact</p>
          <h2 id="career-title">Built for regulated, high-scale, user-centered products.</h2>
        </div>
        <div className="impact-list">
          {experience.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section education" aria-labelledby="education-title">
        <GraduationCap size={28} aria-hidden="true" />
        <div>
          <p className="section-kicker">Education</p>
          <h2 id="education-title">Master of Science in Electrical Engineering</h2>
          <p>San Francisco Bay University, Dec 2015</p>
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Let’s talk about mobile platforms, SwiftUI, and AI product systems.</h2>
          <p>
            For Mobile engineering, iOS architecture, and AI backend opportunities, reach Raju by
            email.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
            <Cpu size={18} aria-hidden="true" />
            View GitHub
          </a>
          <p>{profile.resumeLabel}</p>
        </div>
      </section>
      <Analytics />
    </main>
  );
}

export default App;
