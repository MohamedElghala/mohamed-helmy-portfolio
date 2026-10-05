export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  metrics: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge: string;
  featured?: boolean;
  status?: "live" | "coming-soon";
  aspectRatio?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mohamed Helmy",
    title: "Creative Technologist & Full-Stack Architect",
    bio: "Engineering high-conversion digital flagships, bespoke e-commerce engines, and cinematic 3D interactive experiences that turn attention into revenue.",
    location: "Cairo, Egypt",
    availability: "Available for Q4 2026 Projects",
    contact: {
      phone: "+201090641737",
      whatsapp: "https://wa.me/201090641737",
      email: "mohamedalghala@gmail.com",
    },
  },

  projects: [
    {
      id: "brasil-chic",
      title: "Brasil Chic Moda & Estilo",
      tagline: "High-Fashion Carioca Storefront • 100% pt-BR",
      category: "Luxury E-Commerce & Next.js 14",
      description:
        "Bespoke Brazilian resortwear flagship blending high-contrast Didone Italian editorial typography with kinetic studio dynamics, difference cursor physics, and native Brazilian checkout utilities (Pix BACEN 5% OFF & Sedex Express).",
      metrics: ["Next.js 14 App Router", "Live on Vercel", "Pix QR 5% OFF", "Difference Cursor"],
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "Fabric Canvas", "Difference Cursor"],
      liveUrl: "https://brazil-fashion-store.vercel.app",
      githubUrl: "https://github.com/MohamedElghala/brazil-fashion-store",
      badge: "Featured Flagship • Live Vercel",
      featured: true,
      status: "live",
    },
    {
      id: "aura-glow-up",
      title: "AURA Glow Up",
      tagline: "High-Conversion Headless Cosmetics & Shatr AI Bot",
      category: "Headless E-Commerce & AI",
      description:
        "Luxury multi-brand beauty storefront featuring top interactive color swatches across 26 collections, psychological strikethrough pricing, and automated Shatr.ai AI sales consultation.",
      metrics: ["Headless API Engine", "Live Multi-Channel", "26 Color Swatches", "AI Sales Bot"],
      techStack: ["Headless Commerce", "Tailwind CSS", "Shatr.ai API", "Psychological Pricing", "JavaScript ESNext"],
      liveUrl: "https://auraglowup.online",
      badge: "Live Omnichannel",
      status: "live",
    },
    {
      id: "solvo-auto",
      title: "SOLVO Auto Accessories",
      tagline: "3D Product Visualization & Fast E-Commerce",
      category: "Automotive & 3D WebGL",
      description:
        "High-performance automotive e-commerce storefront with a custom Three.js 3D viewer for 360-degree alloy wheel customization and frictionless checkout funnel.",
      metrics: ["Three.js 3D Engine", "0.4s Fast Load", "360° Customizer", "High-Converting Checkout"],
      techStack: ["Three.js", "GSAP ScrollTrigger", "WooCommerce Headless", "Tailwind CSS", "PHP"],
      liveUrl: "https://solvo-store.vercel.app",
      badge: "Live Production • 3D WebGL",
      status: "live",
    },
    {
      id: "tourvanto",
      title: "Tourvanto International",
      tagline: "Explore More. Worry Less • European Inbound Tourism",
      category: "Travel & VIP Booking Engine",
      description:
        "Premium excursion booking and VIP transfer platform serving European travelers in Egypt. Eliminates street friction with transparent cash-on-arrival escrow and licensed chauffeurs.",
      metrics: ["Verified Chauffeurs", "Multi-Language UI", "Cash Escrow", "Real-Time Schedule"],
      techStack: ["React", "Node.js", "Express", "Tailwind CSS", "Vercel Edge"],
      liveUrl: "https://tourvanto.vercel.app",
      badge: "Live Platform",
      status: "live",
    },
    {
      id: "raseen",
      title: "Raseen Vault (رَصين)",
      tagline: "Next-Gen Digital Assets & Curated Products Hub",
      category: "Digital Products & Creator Economy",
      description:
        "Proprietary marketplace for curated high-value digital products, design templates, and architecture assets. Engineered with dynamic buyer watermarking to eliminate unauthorized leaks.",
      metrics: ["PostgreSQL / Supabase", "Paymob Live", "Anti-Piracy Watermark", "Mass Payouts"],
      techStack: ["Next.js 15", "PostgreSQL", "Prisma", "Paymob API", "Dynamic PDF-Lib"],
      badge: "Coming Soon • In Development",
      status: "coming-soon",
    },
    {
      id: "ai-content-engine",
      title: "AI Video Commercial Factory",
      tagline: "Autonomous Broadcast-Grade 9:16 Ad Pipeline",
      category: "AI Automation & Creative Tech",
      description:
        "Zero-cost cloud pipeline that autonomously generates viral 9:16 vertical short-form commercials with Egyptian neural voiceover, animated Cairo typography, and Telegram review workflows.",
      metrics: ["1080x1920 60 FPS", "ElevenLabs Neural", "100% Automated", "Zero-Cost Cloud"],
      techStack: ["Python", "FFmpeg", "ElevenLabs API", "Gemini 2.5 Flash", "Telegram Bot API"],
      badge: "Automated Production",
      status: "live",
    },
  ] as Project[],

  services: [
    {
      id: "uiux-design",
      number: "01",
      title: "UI/UX & Interactive Design",
      subtitle: "Bespoke Design Systems & High-Fidelity Prototypes",
      description:
        "Complete design process from wireframing to pixel-perfect Figma components, responsive design tokens, and fluid micro-interactions tailored for your brand aesthetic.",
      deliverables: ["Figma Design System", "Interactive Prototype", "Design Tokens", "Mobile-First Ergonomics"],
      timeline: "1-2 Weeks",
    },
    {
      id: "fullstack-web",
      number: "02",
      title: "Full-Stack Web Engineering",
      subtitle: "Ultra-Fast Next.js 14 Flagships & Web Applications",
      description:
        "Production-grade architectures using Next.js App Router, TypeScript, and modern headless APIs. Optimized for 100/100 Core Web Vitals, SEO indexing, and enterprise scalability.",
      deliverables: ["Next.js 14 Codebase", "API Integration", "Database Setup", "CI/CD & Vercel Deploy"],
      timeline: "2-4 Weeks",
    },
    {
      id: "luxury-ecom",
      number: "03",
      title: "Luxury E-Commerce & CRO",
      subtitle: "Conversion-Engineered Storefronts That Sell",
      description:
        "Custom storefronts engineered to maximize Average Order Value (AOV). Includes dynamic swatches, psychological pricing architecture, frictionless checkout, and pixel tracking.",
      deliverables: ["Custom Storefront", "Payment Gateway (Card/Pix/COD)", "Fast Slide-Over Cart", "CRO Audit"],
      timeline: "2-3 Weeks",
    },
    {
      id: "branding-creatives",
      number: "04",
      title: "Brand Identity & Ad Creatives",
      subtitle: "Visual Marks, Packaging & Social Ad Kits",
      description:
        "High-impact visual identity development: memorable logos, color palettes, typography hierarchy, social ad creatives, and photorealistic 3D product mockups.",
      deliverables: ["Brand Style Guide", "Vector Logo Suite", "Meta / TikTok Ad Templates", "3D Product Mockups"],
      timeline: "1-2 Weeks",
    },
    {
      id: "video-ads",
      number: "05",
      title: "Cinematic 9:16 Video Ads",
      subtitle: "High-Retention Vertical Video Commercials",
      description:
        "Broadcast-grade vertical video production for Reels, TikTok, and Meta Ads. Features authentic voice acting, dynamic kinetic subtitles, and tailored product focal points.",
      deliverables: ["1080x1920 Master Video", "Kinetic Subtitles (Cairo)", "Audio Mastering & SFX", "Variations for Testing"],
      timeline: "3-5 Days",
    },
    {
      id: "ai-automation",
      number: "06",
      title: "AI Systems & Automation",
      subtitle: "Intelligent Bots & Autonomous Content Workflows",
      description:
        "Deploy custom AI sales chatbots, automated publishing pipelines, and CRM webhooks that cut manual overhead and capture leads 24/7.",
      deliverables: ["Sales Chatbot Integration", "Automated Pipelines", "Webhook Connectors", "Admin Dashboard"],
      timeline: "1-2 Weeks",
    },
  ] as Service[],
};
