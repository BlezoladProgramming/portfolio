export type ProjectStatus = "In development" | "Paused" | "Source available" | "Learning project";
export type ProjectScreenshot = {
  src: string;
  title: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  label: string;
  kind: string;
  summary: string;
  status: ProjectStatus;
  role: string;
  stack: string[];
  challenge: string;
  approach: string[];
  delivered: string[];
  limitations: string[];
  proof: { label: string; href: string }[];
  image: string | null;
  gallery?: ProjectScreenshot[];
  credit?: string;
  featured: boolean;
};

// Evidence rule: Cinevex images are real owner-supplied screenshots of public interface states.
// No private records, usage statistics, tests or fully working flows are inferred from images.
// OIMS and Mini-B2B screenshots are owner-supplied; sensitive records are redacted before publication.
export const projects: Project[] = [
  {
    slug: "cinevex",
    name: "Cinevex",
    label: "Movie discovery & viewing guide",
    kind: "Movie discovery platform / in development",
    summary: "An online film-and-series discovery experience with search, mood-led browsing, collections and regional viewing guides. The website is public while further development and quality checks continue.",
    status: "In development",
    role: "Full-stack development and ongoing quality work; individual contributions are being documented",
    stack: ["Next.js", "Node.js", "MongoDB"],
    challenge: "Help viewers explore films and series and compare viewing options, while improving the quality and reliability of a complex, evolving product.",
    approach: [
      "Organize multiple discovery journeys: search, explore, mood, catalogue and collections",
      "Design title-detail pages and provider-guide interfaces",
      "Continue accessibility, interaction and production-quality reviews",
    ],
    delivered: [
      "The owner supplied real screenshots from cinevex.net showing the homepage, search, discovery, mood suggestions, TV browsing and collections",
      "Screenshots also show title details, a where-to-watch panel, sign-in UI and a personal-list entry point",
      "A live website link is available; screenshots demonstrate interface states, not independently audited backend functionality",
    ],
    limitations: [
      "Ongoing technical audit and corrections; do not imply complete production verification",
      "Private repository; no public source link",
      "Third-party movie artwork shown inside product screenshots may have separate licensing considerations",
    ],
    proof: [{ label: "Visit Cinevex", href: "https://cinevex.net" }],
    image: "/images/projects/cinevex/home.webp",
    gallery: [
      { src: "/images/projects/cinevex/home.webp", title: "Homepage", alt: "Cinevex homepage with a featured film, discovery pathways and trending titles.", caption: "Featured films, discovery choices and trending titles on the landing page." },
      { src: "/images/projects/cinevex/catalogue.webp", title: "Movie collections", alt: "Cinevex genre rows featuring movie poster cards and horizontal browsing.", caption: "Scroll through genre-specific rows of film artwork and information." },
      { src: "/images/projects/cinevex/movie-detail.webp", title: "Title details", alt: "Film detail page with artwork, metadata and viewing actions.", caption: "A detailed title overview with context and viewing actions." },
      { src: "/images/projects/cinevex/watch-guide.webp", title: "Where to watch", alt: "Provider guide panel showing rent and purchase options by country.", caption: "Country-aware provider cards for renting or buying a selected title." },
      { src: "/images/projects/cinevex/search.webp", title: "Search results", alt: "Search page with query results separated into film and television.", caption: "Film and TV search results organized into separate categories." },
      { src: "/images/projects/cinevex/discover.webp", title: "Discover filters", alt: "Discover page with natural-language entry and configurable viewing preferences.", caption: "Filters for language, mood, available time and streaming preferences." },
      { src: "/images/projects/cinevex/recommendations.webp", title: "Discovery recommendations", alt: "Film and series recommendations with metadata and save or compare actions.", caption: "Discovery results with compare and shortlist entry points." },
      { src: "/images/projects/cinevex/mood.webp", title: "Mood discovery", alt: "Mood selection screen with categories for different viewing preferences.", caption: "Choose a mood to explore a more personal selection of titles." },
      { src: "/images/projects/cinevex/mood-results.webp", title: "Mood recommendations", alt: "Results grid for a selected film-watching mood.", caption: "A results grid for the selected film-watching mood." },
      { src: "/images/projects/cinevex/my-cinevex.webp", title: "Personal space", alt: "My Cinevex page showing the signed-out state for personal lists.", caption: "Signed-out view of saved lists and personal viewing choices." },
      { src: "/images/projects/cinevex/browse.webp", title: "Browse by region", alt: "Catalogue browsing interface organized by region, genre and year.", caption: "Browse the catalogue by region, genre and year." },
      { src: "/images/projects/cinevex/tv-shows.webp", title: "TV shows", alt: "Television browse page showing international titles.", caption: "TV series catalogue with poster art and title metadata." },
      { src: "/images/projects/cinevex/collections.webp", title: "Curated collections", alt: "Featured collections page with curated movie titles and categories.", caption: "Curated collections organized around themes and editorial picks." },
      { src: "/images/projects/cinevex/sign-in.webp", title: "Sign-in interface", alt: "Sign-in page offering Google authentication and email login.", caption: "An account entry point with Google and email sign-in options." },
    ],
    featured: true,
  },
  {
    slug: "mini-b2b-marketplace",
    name: "Mini-B2B Marketplace",
    label: "Buyer, seller and admin workflows",
    kind: "Full-stack marketplace prototype / paused",
    summary: "A full-stack mini B2B marketplace project connecting buyers and sellers through product listings, user accounts, order interfaces and messaging screens. Development is paused; transaction and delivery integrations are not independently verified.",
    status: "Paused",
    role: "Full-stack product development — specific production readiness remains unverified",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe", "WebSockets"],
    challenge: "Bring buyers, sellers and administrators into a connected marketplace experience while designing clear paths from discovering products to managing orders.",
    approach: [
      "Design distinct interfaces for buyer, seller and administrator roles",
      "Structure order screens around visible pending, completed and refunded states",
      "Explore product listing, authentication, messaging and administrative management journeys",
    ],
    delivered: [
      "Owner-supplied local screenshots show buyer, seller and admin dashboards, account creation, login and order status interfaces",
      "Screenshots also show a messaging screen in its empty-conversation state and several design iterations",
      "The reported technology stack includes Stripe and WebSockets; their end-to-end operation has not been verified from these screenshots",
    ],
    limitations: [
      "Project paused; it is not presented as a live marketplace",
      "Order status screens do not prove real purchases, secure escrow custody, payment capture or successful refunds",
      "An empty chat screen does not prove real-time delivery; payment and messaging workflows need source-level testing",
      "Private code; no public repository or live demo is claimed",
    ],
    proof: [],
    image: "/images/projects/mini-b2b-marketplace/market-home.webp",
    gallery: [
      { src: "/images/projects/mini-b2b-marketplace/admin-dashboard.webp", title: "Admin dashboard", alt: "Admin dashboard screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Administration dashboard with management shortcuts and overview tiles." },
      { src: "/images/projects/mini-b2b-marketplace/order-history.webp", title: "Order history", alt: "Order history screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Order list UI showing pending, completed and refunded states." },
      { src: "/images/projects/mini-b2b-marketplace/seller-dashboard.webp", title: "Seller dashboard", alt: "Seller dashboard screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Seller dashboard with products, orders and sales summary." },
      { src: "/images/projects/mini-b2b-marketplace/messages.webp", title: "Messages", alt: "Messages screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Messaging interface in its empty-conversation state." },
      { src: "/images/projects/mini-b2b-marketplace/buyer-dashboard.webp", title: "Buyer dashboard", alt: "Buyer dashboard screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Buyer-facing dashboard showing order overview and shortcuts." },
      { src: "/images/projects/mini-b2b-marketplace/registration.webp", title: "Account registration", alt: "Account registration screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Account creation with buyer and seller options." },
      { src: "/images/projects/mini-b2b-marketplace/login.webp", title: "Sign in", alt: "Sign in screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Email and password sign-in interface." },
      { src: "/images/projects/mini-b2b-marketplace/market-home.webp", title: "Marketplace landing", alt: "Marketplace landing screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Product landing page presenting the marketplace concept and planned capabilities." },
      { src: "/images/projects/mini-b2b-marketplace/admin-empty.webp", title: "Dashboard iteration", alt: "Dashboard iteration screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "An earlier dashboard screen showing an empty quick-actions state." },
      { src: "/images/projects/mini-b2b-marketplace/registration-iteration.webp", title: "Registration iteration", alt: "Registration iteration screenshot from the Mini-B2B Marketplace project; a locally captured interface.", caption: "Registration flow iteration with additional identity-provider option." }
    ],
    featured: true,
  },
  {
    slug: "oims",
    name: "OIMS",
    label: "Online Information Management System",
    kind: "Admin-only institutional records platform / source available",
    summary: "An admin-only Online Information Management System for student records, staff records, department records and IT/SIWES records, with record administration and CSV export controls shown in supplied screenshots.",
    status: "Source available",
    role: "PHP development — precise security and access-control guarantees need testing",
    stack: ["PHP", "HTML", "CSS", "JavaScript"],
    challenge: "Organize institutional information that may otherwise be spread across separate student, staff, department and industrial-training records.",
    approach: [
      "Provide an administrator-facing dashboard and navigation by record category",
      "Design department, student, staff, IT/SIWES and document management screens",
      "Use visible search, editing and CSV export controls in the management interfaces",
    ],
    delivered: [
      "Owner-supplied screenshots show an administrative overview and screens for departments, records, SIWES/IT, students, staff and admin accounts",
      "The screenshots show the application's interface and controls; all personal record rows are hidden in the public portfolio copy",
      "A public PHP source repository exists under the BLEZOLAD GitHub account",
    ],
    limitations: [
      "Admin access restrictions and treatment of sensitive records have not been security audited for this portfolio",
      "Public demos must not contain real student, staff or administrator records",
      "Screenshots establish the visible UI, not independent validation of authentication or export behaviour",
    ],
    proof: [{ label: "View OIMS source", href: "https://github.com/BlezoladProgramming/OIMS" }],
    image: "/images/projects/oims/landing.webp",
    gallery: [
      { src: "/images/projects/oims/admin-login.webp", title: "Admin sign in", alt: "Admin sign in screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Administrator login screen for the information management system." },
      { src: "/images/projects/oims/departments.webp", title: "Departments", alt: "Departments screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Department management with create, search, export and editing controls; private entries concealed." },
      { src: "/images/projects/oims/records.webp", title: "Record management", alt: "Record management screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Records interface with filters and document actions; personal records concealed." },
      { src: "/images/projects/oims/siwes.webp", title: "IT / SIWES", alt: "IT / SIWES screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "IT and SIWES tracking screen; individual student placement information concealed." },
      { src: "/images/projects/oims/admin-accounts.webp", title: "Admin roles", alt: "Admin roles screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Administration account management table; identities concealed." },
      { src: "/images/projects/oims/landing.webp", title: "Public introduction", alt: "Public introduction screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "OIMS introduction page for the institutional record portal." },
      { src: "/images/projects/oims/students.webp", title: "Student dashboard", alt: "Student dashboard screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Student management with edit, search and export controls; personal records concealed." },
      { src: "/images/projects/oims/staff.webp", title: "Staff dashboard", alt: "Staff dashboard screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Staff management interface with profile and export controls; personal records concealed." },
      { src: "/images/projects/oims/overview.webp", title: "Admin overview", alt: "Admin overview screenshot from the OIMS project; sensitive personal data has been hidden.", caption: "Aggregate dashboard showing record categories and a basic reporting chart." }
    ],
    featured: true,
  },
  {
    slug: "blezolad-portfolio",
    name: "BLEZOLAD Portfolio",
    label: "Redesign in progress",
    kind: "Developer website / portfolio",
    summary: "Redesigning a basic one-page developer site into a clearer business website and evidence-led portfolio.",
    status: "In development",
    role: "Design direction, frontend implementation and quality review",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenge: "Replace unsupported project claims, broken images and missing navigation with a trustworthy visitor experience.",
    approach: ["Audit the existing source", "Define content and design tokens", "Build reusable routes and components", "Validate before release"],
    delivered: ["Original source and design blueprint preserved", "Redesigned working-copy implementation underway"],
    limitations: ["Deployment and browser validation still pending", "Do not claim measured performance gains"],
    proof: [{label: "GitHub profile", href: "https://github.com/BlezoladProgramming"}],
    image: null, featured: false,
  },
  {
    slug: "3d-portfolio",
    name: "3D Portfolio Exploration",
    label: "Tutorial adaptation",
    kind: "Learning / front-end exploration",
    summary: "A tutorial-based experiment exploring 3D web presentation; original authorship is not claimed.",
    status: "Learning project",
    role: "Learning exercise and adaptation; original changes still to be identified",
    stack: ["HTML", "CSS", "JavaScript"],
    challenge: "Learn interface and visual interaction techniques through a guided project.",
    approach: ["Follow the tutorial", "Experiment with adaptations", "Document attribution before public promotion"],
    delivered: ["Tutorial-based learning project; not a client case study"],
    limitations: ["Tutorial author and original modifications require confirmation"],
    proof: [], image: null, featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
