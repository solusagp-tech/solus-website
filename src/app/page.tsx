import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { LogoMark } from "@/components/logo-mark";

const DISCIPLINES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4.4-4.4" />
      </svg>
    ),
    title: "SEO & GEO",
    body: "Ranking in Google and in the AI answer engines patients are starting to ask instead. Technical fixes, local landing pages, and structured content built to be cited by AI Overviews, ChatGPT, and Perplexity — not just crawled.",
    tags: ["SEO", "Google visibility", "Reputation management", "Review requests"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8">
        <path d="M4 19V7M12 19V4M20 19v-9" />
      </svg>
    ),
    title: "Paid Media",
    body: "Meta and Google campaigns built around procedure economics, not vanity metrics. We optimize toward cost per booked consult — the number that actually shows up on your P&L.",
    tags: ["Google Ads", "Meta Ads"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
    title: "Web, CRM & Reporting",
    body: "A site built to convert visits into booked consults, a CRM that follows up so no lead goes cold, and a monthly report written in plain language — tied to bookings and revenue, not a screenshot of impressions.",
    tags: ["CRM", "Automated follow-up", "Appointment reminders", "Lead nurturing", "Social presence", "Reporting"],
  },
];

const WHY_ITEMS = [
  {
    title: "Built for one industry",
    body: "Every recommendation is shaped by med spa economics — average ticket, membership models, seasonal demand — not a generic playbook.",
  },
  {
    title: "One team, one calendar",
    body: "SEO, paid, and web decisions get made together in the same room — not across three separate Slack channels.",
  },
  {
    title: "Reporting you can read",
    body: "Plain-language monthly reports tied to bookings and revenue — not raw traffic charts you have to interpret yourself.",
  },
  {
    title: "Direct access",
    body: "You work with the people actually doing the work, not an account manager relaying messages back and forth.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-card">
              <div className="hero-copy">
                <p className="eyebrow">The agency built solely for medical aesthetics</p>
                <h1 className="hero-heading">
                  <span className="tone-a">One industry.</span>
                  <span className="tone-b">One team.</span>
                  <span className="tone-a">Med spas,</span>
                  <span className="tone-b">exclusively.</span>
                </h1>
                <p className="hero-sub">
                  Solus handles SEO/GEO, paid media, and web/reporting for aesthetic practices under one roof — so
                  nothing slips through the gaps between vendors who&apos;ve never once talked to each other.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn btn-primary">
                    Start a conversation
                  </a>
                  <a href="#disciplines" className="btn btn-text">
                    See what we do <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="hero-diagram" aria-hidden="true">
                <svg className="hero-leaf" viewBox="0 0 280 340" preserveAspectRatio="xMidYMid meet">
                  <path d="M140 20 C60 40 20 110 20 150 C20 220 75 270 140 276 V20 Z" fill="var(--sage)" />
                  <path d="M140 20 C220 40 260 110 260 150 C260 220 205 270 140 276 V20 Z" fill="var(--forest)" />
                  <line x1="140" y1="20" x2="140" y2="276" stroke="var(--ivory)" strokeWidth="3" />
                  <line
                    x1="140"
                    y1="276"
                    x2="140"
                    y2="320"
                    stroke="var(--ivory)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="disciplines" id="disciplines">
          <div className="wrap">
            <p className="eyebrow">What we run</p>
            <h2>Three disciplines. One calendar.</h2>

            <div className="discipline-grid">
              {DISCIPLINES.map((d) => (
                <article className="discipline-card" key={d.title}>
                  <div className="discipline-icon" aria-hidden="true">
                    {d.icon}
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <ul className="tag-list">
                    {d.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why" id="why">
          <div className="wrap why-grid">
            <div className="why-copy">
              <p className="eyebrow">Why Solus</p>
              <h2>An agency that treats your calendar like its own.</h2>
              <p>
                Most med spas juggle an SEO freelancer, an ad agency, and a web developer who&apos;ve never met each
                other. Solus runs all three under one roof, one calendar, and one point of contact — so nothing gets
                lost in the handoff.
              </p>
            </div>

            <ul className="why-checklist">
              {WHY_ITEMS.map((item) => (
                <li key={item.title}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2" aria-hidden="true">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Get in touch</p>
              <h2>Tell us about your practice.</h2>
              <p>Based in Tampa, FL — working with med spas nationwide.</p>
              <a className="contact-email" href="mailto:solusagp@gmail.com">
                solusagp@gmail.com
              </a>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a href="#top" className="logo" aria-label="Solus — home">
            <LogoMark width={22} height={28} />
            <span className="logo-word">SOLUS</span>
          </a>
          <p className="footer-tagline">Aesthetic Growth Partners · Tampa, FL</p>
          <a className="footer-email" href="mailto:solusagp@gmail.com">
            solusagp@gmail.com
          </a>
          <p className="footer-copy">© 2026 Solus Aesthetic Growth Partners.</p>
        </div>
      </footer>
    </>
  );
}
