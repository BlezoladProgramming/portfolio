export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  problem: string;
  deliverables: string[];
  note: string;
};
export const services: Service[] = [
  {
    slug: "fullstack", number: "01", title: "Full-stack web application development",
    summary: "Custom web apps with interfaces, backend logic, APIs and data working together.",
    problem: "You have an idea that needs accounts, dashboards, forms, a database or other connected features—not just a landing page.",
    deliverables: ["Frontend pages and user flows", "Backend APIs and validation", "Database integration", "Testing and deployment guidance"],
    note: "Payments, hosting, email and other external providers depend on project scope and approved integrations.",
  },
  {
    slug: "websites", number: "02", title: "Website development & redesign",
    summary: "Responsive business websites and thoughtful redesigns of sites that need improvement.",
    problem: "You need an online presence that looks credible, loads well and is easy for people to use.",
    deliverables: ["Responsive website pages", "Clear site navigation", "Modern layout and interactions", "SEO and accessibility foundations"],
    note: "Content, hosting, domain ownership and third-party services are agreed before implementation.",
  },
  {
    slug: "frontend", number: "03", title: "Frontend development",
    summary: "Interactive user interfaces with React, Next.js and modern web technologies.",
    problem: "Your product needs better pages, components, mobile experiences or frontend integration.",
    deliverables: ["React and Next.js components", "Responsive layouts", "Interactive forms and flows", "API-connected interfaces"],
    note: "I confirm available designs, API contracts and browser support during scoping.",
  },
  {
    slug: "backend", number: "04", title: "Backend development & APIs",
    summary: "Build and connect the server-side features behind your application.",
    problem: "Your app needs reliable server logic, endpoints, databases, authentication or integration work.",
    deliverables: ["API endpoints", "Database models and queries", "Authentication flows where scoped", "Validation and error handling"],
    note: "Security properties are reviewed and tested for the actual scope, not promised without evidence.",
  },
  {
    slug: "maintenance", number: "05", title: "Debugging, fixes & maintenance",
    summary: "Investigate bugs, repair broken features and improve existing website code.",
    problem: "Your software has an error, a slow or confusing flow, or something that stopped working.",
    deliverables: ["Issue investigation", "Focused bug fixes", "Regression testing", "Code cleanup and upgrades"],
    note: "Ongoing maintenance and response times are agreed separately.",
  },
];