import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";

const EMAIL = "info@miningconsultants.com.au";

const services = [
  {
    tag: "Network",
    title: "Site connectivity",
    body: "Private LTE, point-to-point links, mesh coverage across the pit and Wi-Fi for the camp. We design for the dead spots, the haul road and the wet season.",
  },
  {
    tag: "Security",
    title: "OT and IT security",
    body: "Separate the plant network from the office network, plan patching around shutdowns, and align controls to IEC 62443.",
  },
  {
    tag: "Data",
    title: "Operational data",
    body: "Bring dispatch, fleet, geology and blast records into one place that planners and supervisors can both trust.",
  },
  {
    tag: "Apps",
    title: "Site mobile apps",
    body: "Stocktakes, deliveries, stock transfers and blast usage captured on a phone. The app works offline and syncs when the crew is back in range.",
  },
  {
    tag: "Infrastructure",
    title: "Servers, cloud and backup",
    body: "Infrastructure that copes with slow links and long distances from the nearest data centre, with recovery plans tested before you need them.",
  },
  {
    tag: "Advisory",
    title: "Vendor and project assurance",
    body: "Independent advice when you choose a fleet management, ERP or SCADA vendor, and a second pair of eyes during delivery.",
  },
];

const steps = [
  {
    title: "Walk the site",
    body: "We visit, talk to the crews and the control room, and see how the systems are really used.",
  },
  {
    title: "Map what runs where",
    body: "A clear picture of networks, controllers, servers and data flows, including the ones nobody documented.",
  },
  {
    title: "Fix in stages",
    body: "Small changes timed to shutdowns and shift patterns, each one reviewed for safety before it goes live.",
  },
  {
    title: "Hand over and stay on call",
    body: "Your team gets the documents and the training. We stay available when something needs a second opinion.",
  },
];

const realities = [
  {
    term: "Links drop.",
    body: "Pits, shafts and ridgelines cut the signal, so systems have to keep working offline.",
  },
  {
    term: "Shutdowns set the calendar.",
    body: "Changes land in planned windows, never on a Tuesday afternoon in the middle of production.",
  },
  {
    term: "Old and new share a site.",
    body: "A 20-year-old controller sits beside a new telemetry stack, and both have to keep running.",
  },
  {
    term: "Safety comes first.",
    body: "Every change gets a risk review before it touches anything that moves, blasts or hauls.",
  },
];

export default function Home() {
  return (
    <>
      <header className="top">
        <div className="wrap">
          <a
            className="brand"
            href="#top"
            aria-label="Mining Consultants, back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
              <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
              <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
              <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
            </svg>
            Mining Consultants
          </a>
          <nav className="nav" aria-label="Main">
            <a className="hide-sm" href="#services">
              Services
            </a>
            <a className="hide-sm" href="#approach">
              Approach
            </a>
            <a className="hide-sm" href="#sites">
              Site realities
            </a>
            <a className="btn" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Technology consulting for mine sites.</h1>
              <p className="lede">
                We help mining operators plan, secure and run the systems behind
                the pit and the plant: site networks, operational data, and the
                apps crews use every shift.
              </p>
              <div className="actions">
                <a className="btn" href="#contact">
                  Talk to us
                </a>
                <a className="btn ghost" href="#services">
                  See services
                </a>
              </div>
              <p className="mono env">
                Open cut · Underground · Processing · Exploration camps
              </p>
            </div>

            <figure className="core">
              <svg
                viewBox="0 0 600 320"
                role="img"
                aria-label="Cross-section of a drill hole passing through topsoil, overburden, oxide, an ore zone and fresh rock, with a depth scale in metres."
              >
                <path
                  className="b1"
                  d="M64,44 C190,34 320,54 440,44 S550,40 600,46 L600,320 L64,320 Z"
                />
                <path
                  className="b2"
                  d="M64,78 C190,70 320,90 440,80 S550,76 600,82 L600,320 L64,320 Z"
                />
                <path
                  className="b3"
                  d="M64,150 C190,160 320,140 440,152 S550,156 600,150 L600,320 L64,320 Z"
                />
                <path
                  className="b4"
                  d="M64,205 C190,198 320,214 440,204 S550,200 600,206 L600,320 L64,320 Z"
                />
                <path
                  className="b5"
                  d="M64,258 C190,266 320,250 440,260 S550,262 600,256 L600,320 L64,320 Z"
                />

                <rect x="327" y="14" width="6" height="306" fill="var(--fg)" />
                <path d="M319 14 H341 L330 2 Z" fill="var(--fg)" />

                <g stroke="var(--muted)" strokeWidth="1">
                  <line x1="2" y1="44" x2="60" y2="44" />
                  <line x1="2" y1="124" x2="60" y2="124" />
                  <line x1="2" y1="204" x2="60" y2="204" />
                  <line x1="2" y1="284" x2="60" y2="284" />
                </g>
                <text className="scale" x="2" y="38">
                  0 m
                </text>
                <text className="scale" x="2" y="118">
                  50 m
                </text>
                <text className="scale" x="2" y="198">
                  100 m
                </text>
                <text className="scale" x="2" y="278">
                  150 m
                </text>

                <text x="346" y="67" fill="var(--t1)">
                  TOPSOIL
                </text>
                <text x="346" y="120" fill="var(--t2)">
                  OVERBURDEN
                </text>
                <text x="346" y="182" fill="var(--t3)">
                  OXIDE
                </text>
                <text x="346" y="236" fill="var(--t4)" fontWeight="500">
                  ORE ZONE
                </text>
                <text x="346" y="293" fill="var(--t5)">
                  FRESH ROCK
                </text>
              </svg>
              <figcaption className="mono">
                Drill hole section. Illustrative only.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="services" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <p className="mono">Services</p>
              <h2>What we do for operators and project teams.</h2>
            </div>
            <div className="svc-grid">
              {services.map((s) => (
                <article className="svc" key={s.title}>
                  <p className="mono">{s.tag}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="approach">
          <div className="wrap">
            <div className="section-head">
              <p className="mono">Approach</p>
              <h2>We start on site and work in stages.</h2>
            </div>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="sites">
          <div className="wrap diff">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="mono">Site realities</p>
              <h2>Mine sites break the usual IT assumptions.</h2>
            </div>
            <dl>
              {realities.map((r) => (
                <div className="row" key={r.term}>
                  <dt>{r.term}</dt>
                  <dd>{r.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap contact-layout">
            <div className="contact-grid">
              <p className="mono">Contact</p>
              <h2>Planning a site project, or inheriting a tangle of systems?</h2>
              <p>
                Tell us about the site, the commodity and what is not working.
                We reply within two business days.
              </p>
              <div className="email-row">
                <span className="email">{EMAIL}</span>
                <CopyEmail email={EMAIL} />
                <a className="btn" href={`mailto:${EMAIL}`}>
                  Email us
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <p className="mono">Mining Consultants</p>
          <p className="mono">Mining technology support</p>
        </div>
      </footer>
    </>
  );
}
