"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

export interface Translations {
  nav: {
    brandSub: string;
    works: string;
    services: string;
    about: string;
    contact: string;
    bookProject: string;
    langToggle: string;
  };
  hero: {
    badge: string;
    location: string;
    firstName: string;
    lastName: string;
    role: string;
    description: string;
    exploreBtn: string;
    bookBtn: string;
    portalEntering: string;
    metrics: {
      flagships: { value: string; label: string };
      physics: { value: string; label: string };
      videoAds: { value: string; label: string };
      vitals: { value: string; label: string };
    };
  };
  bento: {
    sectionBadge: string;
    heading: string;
    subheading: string;
    curatedIndex: string;
    deploymentCount: string;
    liveBadge: string;
    previewBadge: string;
    launchBtn: string;
    blueprintBtn: string;
    inquireBtn: string;
    brasilMockup: {
      tag: string;
      discount: string;
      price: string;
      installments: string;
      tickerLabel: string;
      tickerText: string;
    };
    cortexMockup: {
      title: string;
      subtitle: string;
      badge1: string;
      badge2: string;
      viewBlueprintBtn: string;
    };
  };
  servicesSection: {
    sectionBadge: string;
    heading: string;
    subheading: string;
    requestScopeBtn: string;
    turnaroundLabel: string;
    inquireBtn: string;
  };
  aboutSection: {
    sectionBadge: string;
    heading: string;
    p1: string;
    p2: string;
    tenets: {
      zeroBloat: { title: string; desc: string };
      tactilePhysics: { title: string; desc: string };
      conversionFirst: { title: string; desc: string };
    };
    card: {
      title: string;
      subtitle: string;
      baseLocationLabel: string;
      baseLocationVal: string;
      frameworkLabel: string;
      frameworkVal: string;
      directContactLabel: string;
      inquiriesLabel: string;
    };
  };
  footer: {
    calloutBadge: string;
    calloutHeading: string;
    calloutSub: string;
    bookBtn: string;
    copyEmailBtn: string;
    copiedToast: string;
    allRights: string;
    cairoTimeLabel: string;
    backToTop: string;
  };
  drawer: {
    title: string;
    subtitle: string;
    serviceLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    sendBtn: string;
    closeBtn: string;
    orDirect: string;
    directWhatsApp: string;
  };
  blueprint: {
    badge: string;
    title: string;
    subtitle: string;
    confidentialNotice: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillar1: {
      num: string;
      title: string;
      tagline: string;
      points: string[];
    };
    pillar2: {
      num: string;
      title: string;
      tagline: string;
      points: string[];
    };
    pillar3: {
      num: string;
      title: string;
      tagline: string;
      points: string[];
    };
    pillar4: {
      num: string;
      title: string;
      tagline: string;
      points: string[];
    };
    qualityTitle: string;
    qualityPoints: { title: string; desc: string }[];
    metricsTitle: string;
    metrics: { value: string; label: string; desc: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };
  projects: Record<
    string,
    {
      title: string;
      tagline: string;
      category: string;
      description: string;
      metrics: string[];
    }
  >;
  servicesList: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      deliverables: string[];
      timeline: string;
    }
  >;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      brandSub: "Digital Flagships",
      works: "Selected Works",
      services: "Services",
      about: "Philosophy",
      contact: "Contact",
      bookProject: "Book a Project",
      langToggle: "العربية",
    },
    hero: {
      badge: "Available for Q4 2026 Contracts",
      location: "Cairo, EG",
      firstName: "Mohamed",
      lastName: "Helmy",
      role: "Creative Technologist & Full-Stack Architect",
      description:
        "Engineering high-conversion digital flagships, bespoke luxury e-commerce platforms, and cinematic 3D web experiences that elevate brands and drive measurable business growth.",
      exploreBtn: "Explore Selected Works",
      bookBtn: "Book a Project Consultation",
      portalEntering: "Entering The Portfolio",
      metrics: {
        flagships: { value: "06", label: "Bespoke Deployments" },
        physics: { value: "3D", label: "WebGL Shader Physics" },
        videoAds: { value: "9:16", label: "Autonomous Video Engine" },
        vitals: { value: "99+", label: "Core Web Vitals & CRO" },
      },
    },
    bento: {
      sectionBadge: "Selected Works",
      heading: "Featured Flagships & Digital Universes",
      subheading:
        "Each storefront architected with its own distinct visual identity, bespoke typography, and dedicated conversion mechanics.",
      curatedIndex: "Curated Index",
      deploymentCount: "06 Bespoke Deployments",
      liveBadge: "Live Deployment",
      previewBadge: "Architecture Preview",
      launchBtn: "Launch Live",
      blueprintBtn: "View Architecture Blueprint",
      inquireBtn: "Inquire Blueprint",
      brasilMockup: {
        tag: "RESORT 2026 • 100% LINHO PURO",
        discount: "5% OFF no Pix",
        price: "R$ 219,90",
        installments: "ou 12x de R$ 18,32 sem juros",
        tickerLabel: "MARQUEE TICKER:",
        tickerText: "COLEÇÃO CARIOCA 2026 • LINHO PURO BRASILEIRO • ALGODÃO PIMA • ENVIO EXPRESSO SEDEX",
      },
      cortexMockup: {
        title: "Autonomous 9:16 Video Ad Pipeline",
        subtitle: "Cognitive Narrative Engine • Specular Lighting • Neural Audio Cadence",
        badge1: "Enterprise Cloud Pipeline",
        badge2: "Zero Motion Distortion",
        viewBlueprintBtn: "Inspect Architecture Blueprint",
      },
    },
    servicesSection: {
      sectionBadge: "Services & Scope",
      heading: "Bespoke Digital Capabilities",
      subheading:
        "Tailored client engagements with zero generic templates. Every engagement focuses strictly on speed, conversion, and undeniable brand authority.",
      requestScopeBtn: "Request Custom Scope",
      turnaroundLabel: "Estimated Turnaround",
      inquireBtn: "Inquire Now",
    },
    aboutSection: {
      sectionBadge: "Engineering Philosophy",
      heading: "Bridging High-Fashion Aesthetics with High-Performance Code",
      p1: "I operate at the intersection of creative direction and technical systems engineering. In an era where 90% of web projects rely on bloated generic templates, I craft bespoke digital flagships built on Next.js App Router, modern Three.js WebGL physics, and strategic conversion mechanics.",
      p2: "Every project I architect—from international fashion storefronts to automotive 3D customizers and automated content engines—is designed to eliminate friction, maximize Average Order Value, and leave a permanent imprint on the user.",
      tenets: {
        zeroBloat: {
          title: "Zero Bloat",
          desc: "Clean semantic code, minimal bundle sizes, and sub-second load times.",
        },
        tactilePhysics: {
          title: "Tactile Physics",
          desc: "Smooth 60 FPS interactions, magnetic curves, and specular lighting.",
        },
        conversionFirst: {
          title: "Conversion First",
          desc: "Every button, color swatch, and headline engineered to generate sales.",
        },
      },
      card: {
        title: "Mohamed Helmy",
        subtitle: "Creative Technologist & Architect",
        baseLocationLabel: "Base Location",
        baseLocationVal: "Cairo, Egypt (UTC+3)",
        frameworkLabel: "Primary Framework",
        frameworkVal: "Next.js 14 / TypeScript",
        directContactLabel: "Direct Contact",
        inquiriesLabel: "Official Inquiries",
      },
    },
    footer: {
      calloutBadge: "Have a Project in Mind?",
      calloutHeading: "Let's Build Something Unforgettable.",
      calloutSub: "Direct developer-to-client consultation. Fast response on WhatsApp and prompt turnarounds.",
      bookBtn: "Book Consultation",
      copyEmailBtn: "Copy Email",
      copiedToast: "Email Copied!",
      allRights: "© 2026 Mohamed Helmy. All rights reserved.",
      cairoTimeLabel: "Cairo, EG:",
      backToTop: "Back to Top",
    },
    drawer: {
      title: "Direct Client Consultation",
      subtitle: "Connect directly with Mohamed Helmy via WhatsApp or Email for bespoke flagships and custom systems.",
      serviceLabel: "Select Area of Inquiry",
      notesLabel: "Project Scope & Vision (Optional)",
      notesPlaceholder: "Briefly outline your brand, timeline, and deliverables...",
      sendBtn: "Launch WhatsApp Discussion",
      closeBtn: "Close",
      orDirect: "Or connect directly via:",
      directWhatsApp: "WhatsApp Direct",
    },
    blueprint: {
      badge: "Proprietary Systems Architecture",
      title: "Autonomous Content & Video Engineering Mechanism",
      subtitle: "High-level architectural blueprint detailing our end-to-end cognitive narrative, motion physics, and automated cloud synthesis pipeline.",
      confidentialNotice: "Enterprise Execution Architecture: Designed to deliver broadcast-grade commercial output and measurable ROAS lift without human latency.",
      pillarsTitle: "The 4-Pillar Autonomous Mechanism",
      pillarsSubtitle: "How our pipeline orchestrates attention, retention, and conversion from initial asset ingestion to final master render.",
      pillar1: {
        num: "01",
        title: "Cognitive Narrative & Hook Engineering",
        tagline: "Psychological Pattern Interruption (0.0s – 2.5s)",
        points: [
          "Micro-retention hook architecture crafted to arrest feed-scrolling within the initial 150 milliseconds.",
          "Dynamic cognitive pacing: balancing curiosity loops with immediate value clarity.",
          "Natural linguistic syntax structured for authentic commercial persuasion and audience resonance.",
        ],
      },
      pillar2: {
        num: "02",
        title: "Generative Motion Dynamics & Specular Lighting",
        tagline: "Cinematic Physics Simulation (Zero Uncanny Distortion)",
        points: [
          "Ray-traced specular reflection mapping: liquid perfumes, vehicle alloys, and luxury fabrics reflect true environmental radiance.",
          "Kinetic camera trajectory engineering: orbital sweeping, micro-macro lens shifts, and depth-of-field rack focusing.",
          "Temporal consistency matrix ensuring 100% stable geometry across consecutive generative cuts.",
        ],
      },
      pillar3: {
        num: "03",
        title: "Neural Acoustic Cadence & Spatial Foley",
        tagline: "High-Fidelity Humanized Voice Acting & Audio Mastering",
        points: [
          "Humanized acoustic vocal synthesis: subtle micro-pauses, breath mechanics, and natural emotive cadences.",
          "Multi-layered tactile Foley SFX: bottle unboxing, glass clinks, engine revs, and organic fabric rustling.",
          "Dynamic EQ mastering specifically calibrated for punchy playback on mobile phone loudspeakers.",
        ],
      },
      pillar4: {
        num: "04",
        title: "Autonomous Cloud Pipeline & Orchestration",
        tagline: "Trigger-to-Master Render with Zero Manual Overhead",
        points: [
          "Event-driven cloud pipeline: automated scene assembly, kinetic subtitle burn-in, and bitrate-optimized encoding.",
          "Rigorous automated QA validation checking color gamut, contrast compliance, and 9:16 safe zones.",
          "Instant delivery to multi-channel staging ready for immediate Meta Ads & Reels deployment.",
        ],
      },
      qualityTitle: "Enterprise Quality Assurance Matrix",
      qualityPoints: [
        {
          title: "Zero Motion Distortion",
          desc: "Eliminates morphing artifacts and unnatural jitter through strict temporal keyframe constraints.",
        },
        {
          title: "Brand Color Fidelity",
          desc: "Maintains exact hexadecimal brand colors and accurate product packaging geometries.",
        },
        {
          title: "Thumb-Stop Retention",
          desc: "Constructed specifically to optimize Average Watch Time (AWT) and conversion CTR on vertical social feeds.",
        },
      ],
      metricsTitle: "Validated Performance Multipliers",
      metrics: [
        { value: "+42%", label: "Average Watch Time", desc: "Sustained view-through rate across 15-20s video montages" },
        { value: "3.8x", label: "Thumb-Stop Rate", desc: "Immediate engagement lift compared to static studio photography" },
        { value: "0ms", label: "Human Latency", desc: "Automated event triggers eliminate manual editing bottlenecks" },
      ],
      ctaTitle: "Ready to Implement an Autonomous Engine for Your Brand?",
      ctaSub: "Schedule a direct technical consultation with Mohamed Helmy to architect a custom pipeline tailored to your commercial catalog.",
      ctaBtn: "Book Pipeline Consultation",
    },
    projects: {
      "brasil-chic": {
        title: "Brasil Chic Moda & Estilo",
        tagline: "High-Fashion Carioca Storefront • 100% pt-BR",
        category: "Luxury E-Commerce & Next.js 14",
        description:
          "Bespoke Brazilian resortwear flagship blending high-contrast Didone Italian editorial typography with kinetic studio dynamics, difference cursor physics, and native Brazilian checkout utilities (Pix BACEN 5% OFF & Sedex Express).",
        metrics: ["Next.js 14 App Router", "Live on Vercel", "Pix QR 5% OFF", "Difference Cursor"],
      },
      "aura-glow-up": {
        title: "AURA Glow Up",
        tagline: "High-Conversion Headless Cosmetics & Shatr AI Bot",
        category: "Headless E-Commerce & AI",
        description:
          "Luxury multi-brand beauty storefront featuring top interactive color swatches across 26 collections, psychological strikethrough pricing, and automated Shatr.ai AI sales consultation.",
        metrics: ["Headless API Engine", "Live Multi-Channel", "26 Color Swatches", "AI Sales Bot"],
      },
      "solvo-auto": {
        title: "SOLVO Auto Accessories",
        tagline: "3D Product Visualization & Fast E-Commerce",
        category: "Automotive & 3D WebGL",
        description:
          "High-performance automotive e-commerce storefront with a custom Three.js 3D viewer for 360-degree alloy wheel customization and frictionless checkout funnel.",
        metrics: ["Three.js 3D Engine", "0.4s Fast Load", "360° Customizer", "High-Converting Checkout"],
      },
      tourvanto: {
        title: "Tourvanto International",
        tagline: "Explore More. Worry Less • European Inbound Tourism",
        category: "Travel & VIP Booking Engine",
        description:
          "Premium excursion booking and VIP transfer platform serving European travelers in Egypt. Eliminates street friction with transparent cash-on-arrival escrow and licensed chauffeurs.",
        metrics: ["Verified Chauffeurs", "Multi-Language UI", "Cash Escrow", "Real-Time Schedule"],
      },
      raseen: {
        title: "Raseen Vault (رَصين)",
        tagline: "Next-Gen Digital Assets & Curated Products Hub",
        category: "Digital Products & Creator Economy",
        description:
          "Proprietary marketplace for curated high-value digital products, design templates, and architecture assets. Engineered with dynamic buyer watermarking to eliminate unauthorized leaks.",
        metrics: ["PostgreSQL / Supabase", "Paymob Live", "Anti-Piracy Watermark", "Mass Payouts"],
      },
      "ai-content-engine": {
        title: "Cortex AI & Automation Systems",
        tagline: "Enterprise AI Platform & Autonomous Video Pipeline",
        category: "AI Engineering & Automation",
        description:
          "High-performance enterprise architecture for autonomous 9:16 commercial video production and cognitive narrative engineering. Generates broadcast-grade motion dynamics, neural voice acting, and high-retention marketing assets with zero manual friction.",
        metrics: ["Autonomous Pipelines", "Cognitive Narrative", "Neural Voice Cadence", "Broadcast 9:16"],
      },
    },
    servicesList: {
      "uiux-design": {
        title: "UI/UX & Interactive Design",
        subtitle: "Bespoke Design Systems & High-Fidelity Prototypes",
        description:
          "Complete design process from wireframing to pixel-perfect Figma components, responsive design tokens, and fluid micro-interactions tailored for your brand aesthetic.",
        deliverables: ["Figma Design System", "Interactive Prototype", "Design Tokens", "Mobile-First Ergonomics"],
        timeline: "1-2 Weeks",
      },
      "fullstack-web": {
        title: "Full-Stack Web Engineering",
        subtitle: "Ultra-Fast Next.js 14 Flagships & Web Applications",
        description:
          "Production-grade architectures using Next.js App Router, TypeScript, and modern headless APIs. Optimized for 100/100 Core Web Vitals, SEO indexing, and enterprise scalability.",
        deliverables: ["Next.js 14 Codebase", "API Integration", "Database Setup", "CI/CD & Vercel Deploy"],
        timeline: "2-4 Weeks",
      },
      "luxury-ecom": {
        title: "Luxury E-Commerce & CRO",
        subtitle: "Conversion-Engineered Storefronts That Sell",
        description:
          "Custom storefronts engineered to maximize Average Order Value (AOV). Includes dynamic swatches, psychological pricing architecture, frictionless checkout, and pixel tracking.",
        deliverables: ["Custom Storefront", "Payment Gateway (Card/Pix/COD)", "Fast Slide-Over Cart", "CRO Audit"],
        timeline: "2-3 Weeks",
      },
      "branding-creatives": {
        title: "Brand Identity & Ad Creatives",
        subtitle: "Visual Marks, Packaging & Social Ad Kits",
        description:
          "High-impact visual identity development: memorable logos, color palettes, typography hierarchy, social ad creatives, and photorealistic 3D product mockups.",
        deliverables: ["Brand Style Guide", "Vector Logo Suite", "Meta / TikTok Ad Templates", "3D Product Mockups"],
        timeline: "1-2 Weeks",
      },
      "video-ads": {
        title: "Cinematic 9:16 Video Ads",
        subtitle: "High-Retention Vertical Video Commercials",
        description:
          "Broadcast-grade vertical video production for Reels, TikTok, and Meta Ads. Features authentic voice acting, dynamic kinetic subtitles, and tailored product focal points.",
        deliverables: ["1080x1920 Master Video", "Kinetic Subtitles (Cairo)", "Audio Mastering & SFX", "Variations for Testing"],
        timeline: "3-5 Days",
      },
      "ai-automation": {
        title: "AI Systems & Automation",
        subtitle: "Intelligent Bots & Autonomous Content Workflows",
        description:
          "Deploy custom AI sales chatbots, automated publishing pipelines, and CRM webhooks that cut manual overhead and capture leads 24/7.",
        deliverables: ["Sales Chatbot Integration", "Automated Pipelines", "Webhook Connectors", "Admin Dashboard"],
        timeline: "1-2 Weeks",
      },
    },
  },
  ar: {
    nav: {
      brandSub: "واجهات ومنصات رقمية متقدمة",
      works: "الأعمال المختارة",
      services: "الخدمات والحلول",
      about: "الرؤية الهندسية",
      contact: "التواصل والاستشارة",
      bookProject: "احجز مشروعك",
      langToggle: "English",
    },
    hero: {
      badge: "متاح لعقود الربع الرابع 2026",
      location: "القاهرة، مصر",
      firstName: "محمد",
      lastName: "حلمي",
      role: "مهندس واجهات وأنظمة رقمية متقدمة • مصمم ومطور معماري",
      description:
        "هندسة واجهات رقمية سينمائية ثلاثية الأبعاد، ومتاجر تجارة إلكترونية فائقة الفخامة ومحسنة لمعدلات التحويل، وأنظمة ذكاء اصطناعي وأتمتة تصنع نمواً حقيقياً وملموساً لعلامتك التجارية.",
      exploreBtn: "استكشف الأعمال المختارة",
      bookBtn: "حجز استشارة مشروع فورية",
      portalEntering: "جاري الدخول إلى البورتفوليو",
      metrics: {
        flagships: { value: "06", label: "مشاريع ومنصات حية" },
        physics: { value: "3D", label: "شيدرز وفيزياء تفاعلية" },
        videoAds: { value: "9:16", label: "محرك إنتاج فيديو مؤتمت" },
        vitals: { value: "99+", label: "سرعة وأداء فائق (CRO)" },
      },
    },
    bento: {
      sectionBadge: "الأعمال المختارة",
      heading: "المشاريع الكبرى والواجهات الرقمية المخصصة",
      subheading:
        "كل متجر ومنصة تم بناؤها بهوية بصرية مستقلة، وخطوط طباعية حصرية، وهندسة تحويل مدروسة نفسياً لتحقيق أعلى عائد مبيعات.",
      curatedIndex: "فهرس الأعمال",
      deploymentCount: "06 منصات منشورة حية",
      liveBadge: "منشور ومتاح أونلاين",
      previewBadge: "معاينة البنية الهندسية",
      launchBtn: "معاينة المنصة الحية",
      blueprintBtn: "استعراض آلية وهندسة العمل",
      inquireBtn: "استفسار عن النظام",
      brasilMockup: {
        tag: "مجموعة ريزورت 2026 • كتان برازيلي نقي 100%",
        discount: "خصم 5% مع Pix",
        price: "219,90 ريال برازيلي",
        installments: "أو 12 قسط بدون فوائد",
        tickerLabel: "شريط إخباري متحرك:",
        tickerText: "مجموعة كاريوكا 2026 • كتان طبيعي فاخر • قطن بيما ناعم • شحن فوري سريع عبر SEDEX",
      },
      cortexMockup: {
        title: "خط إنتاج الفيديو الإعلاني 9:16 المؤتمت",
        subtitle: "هندسة السرد المعرفي • محاكاة الإضاءة والحركة الواقعية • التردد الصوتي البشري",
        badge1: "بنية سحابية مؤتمتة للمؤسسات",
        badge2: "صفر تشوه بصري حركي",
        viewBlueprintBtn: "فحص مخطط وهندسة النظام",
      },
    },
    servicesSection: {
      sectionBadge: "الخدمات والحلول",
      heading: "قدرات وحلول رقمية متقدمة",
      subheading:
        "مشاريع مصممة خصيصاً بدون أي قوالب مسبقة جاهزة. كل مرحلة تركز بشكل صارم على السرعة القصوى، وزيادة معدل التحويل، وترسيخ هيبة علامتك التجارية.",
      requestScopeBtn: "طلب نطاق عمل مخصص",
      turnaroundLabel: "المدة الزمنية المتوقعة",
      inquireBtn: "احجز هذه الخدمة",
    },
    aboutSection: {
      sectionBadge: "فلسفة الهندسة والتنفيذ",
      heading: "الدمج بين فخامة التصميم العالمي ونقاء الكود البرمجي فائق السرعة",
      p1: "أعمل عند نقطة التلاقي بين الإخراج الإبداعي الراقي وهندسة النظم التقنية. في عصر تعتمد فيه 90% من المواقع على قوالب جاهزة ومستهلكة، أقوم ببناء منصات رقمية حصرية تعتمد على معمارية Next.js App Router، وفيزياء Three.js WebGL التفاعلية، واستراتيجيات التحويل النفسي المدروسة.",
      p2: "كل مشروع أقوم بتطويره — من منصات الموضة العالمية إلى عارض قطع السيارات ثلاثي الأبعاد وخطوط الإنتاج المؤتمتة — مصمم لإلغاء أي عوائق أمام المستخدم، ومضاعفة متوسط قيمة الطلب (AOV)، وترك أثر دائم لا يُنسى.",
      tenets: {
        zeroBloat: {
          title: "كود نظيف تماماً",
          desc: "بنية برمجية معيارية، وحجم ملفات فائق الصغر، وسرعة تحميل في أجزاء من الثانية.",
        },
        tactilePhysics: {
          title: "فيزياء ولمس تفاعلي",
          desc: "حركة ناعمة بمعدل 60 إطاراً في الثانية، ومنحنيات انسيابية وإضاءة سينمائية.",
        },
        conversionFirst: {
          title: "الأولوية للمبيعات والتحويل",
          desc: "كل زر، وعينة لون، وعنوان رئيسي مصمم وموزون نفسياً لزيادة العائد المالي.",
        },
      },
      card: {
        title: "محمد حلمي",
        subtitle: "مهندس واجهات وأنظمة رقمية متقدمة",
        baseLocationLabel: "المقر الرئيسي",
        baseLocationVal: "القاهرة، مصر (UTC+3)",
        frameworkLabel: "بيئة التطوير الأساسية",
        frameworkVal: "Next.js 14 / TypeScript",
        directContactLabel: "التواصل المباشر",
        inquiriesLabel: "البريد الإلكتروني الرسمي",
      },
    },
    footer: {
      calloutBadge: "هل لديك رؤية أو مشروع تريد تحقيقه؟",
      calloutHeading: "دعنا نبني معاً عملاً رقمياً استثنائياً.",
      calloutSub: "استشارة مباشرة من المطور للعميل بدون وسطاء. استجابة سريعة عبر واتساب وتنفيذ دقيق في الموعد.",
      bookBtn: "حجز استشارة فورية",
      copyEmailBtn: "نسخ البريد الإلكتروني",
      copiedToast: "تم نسخ البريد بنجاح!",
      allRights: "© 2026 محمد حلمي. جميع الحقوق محفوظة.",
      cairoTimeLabel: "توقيت القاهرة:",
      backToTop: "العودة للأعلى",
    },
    drawer: {
      title: "استشارة وحجز مشروع مباشر",
      subtitle: "تواصل مباشرة مع المهندس محمد حلمي عبر واتساب أو البريد لمناقشة بناء منصتك الرقمية أو نظامك المؤتمت.",
      serviceLabel: "حدد مجال أو نوع المشروع",
      notesLabel: "نبذة عن رؤية ونطاق المشروع (اختياري)",
      notesPlaceholder: "اكتب بإيجاز عن علامتك التجارية، والمدة المطلوبة، وأهم الأهداف...",
      sendBtn: "فتح المحادثة على واتساب الآن",
      closeBtn: "إغلاق",
      orDirect: "أو تواصل مباشرة عبر:",
      directWhatsApp: "محادثة واتساب مباشرة",
    },
    blueprint: {
      badge: "هندسة الأنظمة والآليات التشغيلية",
      title: "آلية عمل وهندسة إنتاج الفيديو والمحتوى المؤتمت",
      subtitle: "مخطط هيكلي رفيع المستوى يوضح معمارية السرد المعرفي، والفيزياء الحركية، ومنظومة التوليد السحابي المؤتمتة بالكامل بدون أي تأخير يدوي.",
      confidentialNotice: "معمارية تنفيذية مخصصة للمؤسسات: تهدف إلى تقديم إعلانات سينمائية بمستوى البث التلفزيوني ومضاعفة العائد الإعلاني ROAS دون الحاجة لمونتاج يدوي تقليدي.",
      pillarsTitle: "الأركان الأربعة لمنظومة العمل المؤتمتة",
      pillarsSubtitle: "كيف تدير بنيتنا التحتية عناصر الانتباه، والاحتفاظ بالمشاهد، والتحويل من لحظة إدخال أصول المنتج حتى الرندر النهائي للماستر.",
      pillar1: {
        num: "01",
        title: "هندسة الخطاف الإعلاني والسرد المعرفي",
        tagline: "كسر النمط النفسي واحتجاز الانتباه (0.0 ثانية – 2.5 ثانية)",
        points: [
          "هندسة متطورة لخطاف الثواني الأولى مصممة لإيقاف تمرير شاشات السوشيال ميديا خلال أول 150 مللي ثانية.",
          "إيقاع سردي مدروس يحقق التوازن بين إثارة الفضول النفسي والإعلان المباشر عن القيمة الحقيقية للمنتج.",
          "صياغة لغوية طبيعية تركز على الدوافع النفسية للشراء وبناء الثقة الفورية لدى الجمهور المستهدف.",
        ],
      },
      pillar2: {
        num: "02",
        title: "المحاكاة البصرية الحركية وفيزياء الإضاءة",
        tagline: "محاكاة فيزيائية واقعية للضوء والحركة (منع التشوه البصري تماماً)",
        points: [
          "تتبع أشعة وانعكاسات ضوئية حقيقية: سوائل العطور، وسبائك السيارات، وخامات الأقمشة الفاخرة تعكس بيئة واقعية 100%.",
          "هندسة مسارات الكاميرا السينمائية: حركات دوران مدارية، وتدرجات عدسة ماكرو دقيقة، وتغيير تركيز سينمائي سلس (Rack Focus).",
          "مصفوفة ثبات زمني هندسية تضمن ثبات أشكال وأبعاد المنتج عبر جميع اللقطات والقصات المتتالية دون أي تشوه.",
        ],
      },
      pillar3: {
        num: "03",
        title: "الهندسة الصوتية الترددية والإيقاع البشري",
        tagline: "أداء صوتي بشري فائق الواقعية وماسترينغ استوديو متخصص",
        points: [
          "أداء صوتي معالج بنبرة بشرية طبيعية: فترات تنفس دقيقة، وإيقاع عاطفي تفاعلي بدون أي جمود روبوتي.",
          "مؤثرات صوتية لمسية متعددة الطبقات (Foley): فتح العلب الفاخرة، رنين الزجاج، حركة السوائل، ونعومة الأقمشة.",
          "هندسة ماسترينغ صوتي مخصصة ومضبوطة للوضوح التام عند الاستماع عبر مكبرات الصوت المدمجة في الهواتف المحمولة.",
        ],
      },
      pillar4: {
        num: "04",
        title: "الأتمتة السحابية المتكاملة وإدارة التدفق",
        tagline: "من إشارة البدء إلى الفيديو الماستر النهائي بدون تدخل بشري بطيء",
        points: [
          "بنية تحتية سحابية موجهة بالأحداث: تجميع تلقائي للمشاهد، وحرق العناوين الحركية، وضبط معدل البت (Bitrate).",
          "فحص آلي صارم لضمان الجودة والتأكد من مطابقة الألوان ومناطق الأمان المخصصة لشاشات الجوال 9:16.",
          "تصدير فوري جاهز للنشر المباشر على منصات ميتا وتيك توك لتحقيق أقصى استجابة إعلانية.",
        ],
      },
      qualityTitle: "مصفوفة ضبط الجودة الصارمة للمؤسسات",
      qualityPoints: [
        {
          title: "منع التشوه الحركي تماماً",
          desc: "القضاء التام على التشوهات البصرية والارتعاش غير الطبيعي عبر ضوابط هندسية صارمة للقطات.",
        },
        {
          title: "دقة ومطابقة ألوان العلامة التجارية",
          desc: "الحفاظ على درجات الألوان الرسمية للبراند وتفاصيل العبوات بدقة متناهية مطابقة للواقع.",
        },
        {
          title: "رفع معدل الاحتفاظ والتحويل",
          desc: "تصميم مدروس خصيصاً لرفع متوسط وقت المشاهدة (Watch Time) ومعدل النقر إلى الشراء (CTR).",
        },
      ],
      metricsTitle: "نتائج ومضاعفات الأداء المُحققة",
      metrics: [
        { value: "+42%", label: "متوسط وقت المشاهدة", desc: "استمرار المشاهدة عبر مونتاج إعلاني سريع مدته 15-20 ثانية" },
        { value: "3.8x", label: "معدل إيقاف التمرير", desc: "تفاعل فوري مضاعف مقارنة بالصور الثابتة التقليدية" },
        { value: "0ms", label: "تأخير بشري يدوي", desc: "الأتمتة تلغي عنق الزجاجة التقليدي للمونتاج والتعديلات اليدوية" },
      ],
      ctaTitle: "هل تريد بناء وتطبيق نظام مؤتمت مخصص لعلامتك التجارية؟",
      ctaSub: "احجز جلسة استشارية هندسية مباشرة مع المهندس محمد حلمي لتصميم خط إنتاج مؤتمت مخصص لكتالوج منتجاتك.",
      ctaBtn: "حجز استشارة لنظام الأتمتة",
    },
    projects: {
      "brasil-chic": {
        title: "Brasil Chic Moda & Estilo",
        tagline: "متجر أزياء ريزورت برازيلي فاخر • بالبرتغالية 100%",
        category: "تجارة إلكترونية فاخرة & Next.js 14",
        description:
          "واجهة متجر كاريوكا صُممت بخط Didone الإيطالي التحريري الفاخر، وحركة مؤشر تفاعلي عاكس، مع دعم كامل لأدوات الدفع البرازيلية الرسمية مثل Pix بخصم 5% والشحن السريع Sedex.",
        metrics: ["Next.js 14 App Router", "منشور على Vercel", "خصم 5% Pix QR", "مؤشر فيزيائي عاكس"],
      },
      "aura-glow-up": {
        title: "AURA Glow Up",
        tagline: "منصة تجارة إلكترونية تجميلية ذكية مع بوت مبيعات الذكاء الاصطناعي",
        category: "تجارة إلكترونية بدون رأس & AI",
        description:
          "متجر جمال ومستحضرات تجميل فاخر متعدد العلامات التجارية مع مصفوفة عينات ألوان تفاعلية عبر 26 مجموعة، واستراتيجية التسعير النفسي للشطب، وأتمتة مبيعات ذكية عبر الذكاء الاصطناعي.",
        metrics: ["محرك Headless API", "ربط متعدد القنوات", "26 مصفوفة ألوان", "بوت مبيعات ذكي"],
      },
      "solvo-auto": {
        title: "SOLVO Auto Accessories",
        tagline: "عرض منتجات 3D تفاعلي وتجارة إلكترونية فائقة السرعة",
        category: "قطاع السيارات & 3D WebGL",
        description:
          "متجر عالي الأداء لقطاع كماليات السيارات مزود بمحرك Three.js لعرض وتخصيص جنوط السيارات بزاوية 360 درجة مع مسار شراء سريع وخالٍ من أي تعقيد.",
        metrics: ["محرك Three.js 3D", "تحميل في 0.4 ثانية", "تخصيص 360 درجة", "مسار تحويل سريع"],
      },
      tourvanto: {
        title: "Tourvanto International",
        tagline: "استكشف مصر بأمان ورفاهية • منصة حجز سياحية أوروبية",
        category: "السياحة والسفر & محرك حجز VIP",
        description:
          "منصة حجز رحلات سياحية ويخوت وانتقالات VIP للسياح الأوروبيين الوافدين إلى مصر، تقضي على استغلال الأسعار من خلال نظام ضمان الدفع عند الوصول وسائقين معتمدين ومرخصين.",
        metrics: ["سائقون معتمدون", "واجهة متعددة اللغات", "دفع آمن عند الوصول", "جدولة لحظية"],
      },
      raseen: {
        title: "Raseen Vault (رَصين)",
        tagline: "منصة توزيع المنتجات والملفات الرقمية السحابية وقوالب التصميم",
        category: "المنتجات الرقمية واقتصاد المبدعين",
        description:
          "سوق رقمي مخصص للمنتجات الرقمية عالية القيمة وقوالب الهندسة المعمارية والتصميم، مزود بنظام حماية وعلامة مائية ديناميكية مخصصة لكل مشترٍ لمنع التسريب والقرصنة.",
        metrics: ["قاعدة بيانات Supabase", "بوابة Paymob حية", "علامة مائية مضادة للقرصنة", "دفع تلقائي"],
      },
      "ai-content-engine": {
        title: "Cortex AI & Automation Systems",
        tagline: "منصة هندسة الذكاء الاصطناعي وخطوط الإنتاج السحابية المؤتمتة",
        category: "هندسة الذكاء الاصطناعي والأتمتة",
        description:
          "بنية تحتية متقدمة للمؤسسات لإنتاج الفيديو الإعلاني 9:16 المؤتمت وهندسة السرد المعرفي. تدمج المحاكاة الحركية الواقعية، والأداء الصوتي البشري، وإنتاج إعلانات عالية التحويل بدون أي تدخل بشري بطيء.",
        metrics: ["خطوط إنتاج مؤتمتة", "هندسة السرد المعرفي", "أداء صوتي بشري", "فيديو إعلاني 9:16"],
      },
    },
    servicesList: {
      "uiux-design": {
        title: "تصميم واجهات وتجارب المستخدم التفاعلية",
        subtitle: "أنظمة تصميم حصرية ونماذج أولية فائقة الدقة",
        description:
          "منهجية تصميم متكاملة تبدأ من التخطيط الهيكلي وصولاً إلى مكونات فيغما بالبكسل، مع رموز تصميم متجاوبة وتفاعلات حركية انسيابية تعكس فخامة علامتك.",
        deliverables: ["نظام تصميم فيغما متكامل", "نموذج تفاعلي حي", "رموز وألوان النظام", "تصميم مخصص للجوال أولاً"],
        timeline: "1-2 أسبوع",
      },
      "fullstack-web": {
        title: "هندسة وتطوير الويب المتكامل (Full-Stack)",
        subtitle: "منصات ومواقع فائقة السرعة بمعمارية Next.js 14",
        description:
          "بنية برمجية معتمدة على أحدث معايير Next.js App Router و TypeScript وواجهات API السحابية. محسنة بنسبة 100% لمؤشرات أداء الويب الأساسية وسرعة محركات البحث والتوسع المستقبلي.",
        deliverables: ["كود Next.js 14 نظيف", "ربط واجهات API", "إعداد قواعد البيانات", "نشر مباشر عبر Vercel"],
        timeline: "2-4 أسابيع",
      },
      "luxury-ecom": {
        title: "متاجر التجارة الإلكترونية الفاخرة وهندسة التحويل (CRO)",
        subtitle: "متاجر مصممة ومبنية لمضاعفة المبيعات وقيمة الطلب",
        description:
          "واجهات متاجر مخصصة لرفع متوسط قيمة الطلب (AOV). تشمل عينات ألوان ديناميكية، وهندسة التسعير النفسي، وسلة شراء سريعة منزلقة، وتتبع دقيق للبيانات.",
        deliverables: ["واجهة متجر مخصصة", "بوابات دفع (بطاقات/تقسيط/دفع عند الاستلام)", "سلة شراء منزلقة فائقة السرعة", "تدقيق تحسين التحويل"],
        timeline: "2-3 أسابيع",
      },
      "branding-creatives": {
        title: "الهوية البصرية والمواد الإعلانية الإبداعية",
        subtitle: "شعارات بصرية مميزة، وتغليف، وتصاميم إعلانية",
        description:
          "تطوير هوية بصرية مؤثرة لا تُنسى: شعارات احترافية، ومصفوفات ألوان متناسقة، وتسلسل طباعي جذاب، ومجسمات منتجات ثلاثية الأبعاد واقعية للميتا وتيك توك.",
        deliverables: ["دليل الهوية البصرية", "حزمة الشعارات الموجهة", "قوالب إعلانات ميتا وتيك توك", "نماذج منتجات 3D واقعية"],
        timeline: "1-2 أسبوع",
      },
      "video-ads": {
        title: "الفيديو الإعلاني السينمائي 9:16",
        subtitle: "إعلانات رأسية فائقة الاحتفاظ لشاشات ريلز وتيك توك",
        description:
          "إنتاج فيديو إعلاني رأسي بمستوى البث التلفزيوني لمنصات ريلز وتيك توك وميتا أدز. يتميز بأداء صوتي طبيعي جذاب، وعناوين حركية كينيتك، وتسليط ضوء واقعي على زوايا المنتج.",
        deliverables: ["فيديو ماستر 1080x1920", "عناوين حركية بخط Cairo", "ماسترينغ صوتي ومؤثرات Foley", "نسخ متعددة لاختبار A/B"],
        timeline: "3-5 أيام",
      },
      "ai-automation": {
        title: "أنظمة الذكاء الاصطناعي والأتمتة السحابية",
        subtitle: "بوتات محادثة ذكية وتدفقات عمل مؤتمتة بدون تدخل بشري",
        description:
          "نشر بوتات محادثة ذكية للمبيعات وخدمة العملاء، وخطوط إنتاج ونشر مؤتمتة، وربط خطافات الويب (Webhooks) لإلغاء العمل اليدوي وجمع واستقطاب العملاء على مدار 24 ساعة.",
        deliverables: ["بوت مبيعات ذكي مدمج", "خطوط إنتاج مؤتمتة", "روابط Webhook تكاملية", "لوحة تحكم إدارية"],
        timeline: "1-2 أسبوع",
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("mh_portfolio_lang") as Language | null;
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mh_portfolio_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  };

  const isRTL = language === "ar";
  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
