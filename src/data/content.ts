import { FeatureItem, StepItem, SolutionSegment, TestimonialItem, TeamMember } from '../types';

export const STATISTICS = [
  {
    value: "95%",
    label: "of MSMEs collapse before their 5th year",
    subtext: "Driven by cash flow leaks, rogue supplier pricing, and unorganized purchase documentation.",
    icon: "AlertTriangle"
  },
  {
    value: "40%",
    label: "of women-owned SMEs receive <1% of public contracts",
    subtext: "Opaque procurement barriers and manual red tape systematically exclude qualified diverse suppliers.",
    icon: "Users"
  },
  {
    value: "₦32T+",
    label: "Nigeria's annual procurement market volume",
    subtext: "Accounts for over 18% of national GDP, yet over 70% remains run on paper receipts and fragmented WhatsApp chats.",
    icon: "TrendingUp"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "parsing",
    title: "Smart Communication Parsing",
    shortDesc: "Automatically extracts orders, quotes, and delivery dates from emails and WhatsApp.",
    fullDesc: "No more scrolling through hundreds of chaotic WhatsApp messages, voice notes, or forwarded PDF price lists. Jara's local language AI extracts item quantities, negotiated unit rates in Naira (₦), and promised delivery dates with 99.4% precision.",
    iconName: "MessageSquareText",
    highlight: "99.4% Parsing Accuracy across Nigerian Pidgin & English",
    mockupType: "whatsapp"
  },
  {
    id: "po-gen",
    title: "Automated PO Generation",
    shortDesc: "Creates purchase orders instantly—no more manual data entry or Excel discrepancies.",
    fullDesc: "Converts negotiated WhatsApp price agreements into binding, standardized digital Purchase Orders in under 2 seconds. Automatically checks for price inflation against historical market averages in Lagos, Abuja, Kano, and Port Harcourt.",
    iconName: "FileCheck",
    highlight: "Instant 3-Way Matching & PDF Generation",
    mockupType: "po"
  },
  {
    id: "stock-monitor",
    title: "Real-time Stock Monitoring",
    shortDesc: "Tracks inventory and auto-generates replenishment orders before stockouts hurt revenue.",
    fullDesc: "Connects directly with warehouse stock logs, store POS points, and retail shelves. When inventory dips beneath dynamic safety thresholds, Jara drafts reorder proposals to your top-rated local distributors.",
    iconName: "BarChart3",
    highlight: "Smart Reorder Triggers & Lead-Time Forecasts",
    mockupType: "inventory"
  },
  {
    id: "audit-trail",
    title: "Transparency & Audit Trails",
    shortDesc: "Flags irregularities and builds tamper-proof records for every transaction.",
    fullDesc: "Eliminates phantom vendor kickbacks, duplicate invoices, and off-book deals. Every quotation, approval timestamp, dispatch log, and delivery receipt is cryptographically sealed for friction-free statutory compliance.",
    iconName: "ShieldCheck",
    highlight: "100% Tamper-Proof Cryptographic Ledger",
    mockupType: "audit"
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Connect",
    description: "Link your company email and vendor WhatsApp lines—Jara begins ingesting and parsing communication instantly without disrupting how your suppliers already work.",
    detailPoints: [
      "Zero app install needed for suppliers (they keep using WhatsApp)",
      "Multi-inbox support for Gmail, Outlook, and corporate domains",
      "End-to-end encrypted integration with secure API tunnels"
    ],
    iconName: "PlugZap",
    previewLabel: "Instant Channel Sync"
  },
  {
    number: "02",
    title: "Automate",
    description: "Jara automatically extracts SKU items, compares quotes against market benchmarks, generates standardized POs, and schedules delivery follow-ups.",
    detailPoints: [
      "Auto-detects discounts, delivery timelines, and payment terms",
      "Highlights price discrepancies exceeding 5% market average",
      "One-click managerial approval workflows via mobile"
    ],
    iconName: "Cpu",
    previewLabel: "Intelligent Workflow Engine"
  },
  {
    number: "03",
    title: "Optimize",
    description: "Access real-time executive dashboards on category spend, vendor reliability scores, volume discount opportunities, and working capital savings.",
    detailPoints: [
      "Actionable recommendations for bulk order consolidation",
      "Supplier scorecards based on on-time delivery & price stability",
      "Seamless export to QuickBooks, SAP, Sage, and Excel"
    ],
    iconName: "LineChart",
    previewLabel: "Predictive Analytics & Savings"
  }
];

export const SOLUTIONS_SEGMENTS: SolutionSegment[] = [
  {
    id: "informal-traders",
    title: "Informal Traders & Market Vendors",
    targetAudience: "Balogun, Alaba, Ariaria, and Bodija market traders",
    tagline: "Voice-to-Order & WhatsApp simplicity without expensive software",
    painPoint: "Struggles with lost paper notebooks, inaccurate handwritten receipts, and missed payments from credit buyers.",
    jaraSolution: "Simple WhatsApp bot that transcribes voice notes in Yoruba, Hausa, Igbo, or Pidgin into clean ledger receipts and instant SMS invoices.",
    keyFeatures: [
      "Voice note voice-to-PO transcription",
      "WhatsApp automated price confirmation",
      "Offline-ready SMS transaction confirmations",
      "Quick Daily Sales & Purchase Ledger"
    ],
    metric: "4.5 hrs/wk",
    metricLabel: "Saved on manual receipt bookkeeping",
    iconName: "ShoppingBag"
  },
  {
    id: "small-retailers",
    title: "Small Retailers & Supermarkets",
    targetAudience: "Neighborhood supermarkets, pharmacy chains, and boutique stores",
    tagline: "Prevent stockouts and stop overpaying distributor middlemen",
    painPoint: "Frequent fast-moving product stockouts, unorganized distributor invoices, and lack of real-time price intelligence across fast-moving consumer goods.",
    jaraSolution: "Automated replenishment alerts connected to trusted FMCG distributors with live price benchmarking across major open markets.",
    keyFeatures: [
      "Automated low-stock reorder triggers",
      "Multi-distributor price comparison",
      "Expiry date tracking & clearance alerts",
      "Vendor delivery SLA tracking"
    ],
    metric: "28%",
    metricLabel: "Reduction in out-of-stock lost revenue",
    iconName: "Store"
  },
  {
    id: "medium-businesses",
    title: "Growing SMEs & Manufacturers",
    targetAudience: "Food processors, construction subcontractors, and logistics fleets",
    tagline: "Centralize multi-channel procurement and cut 60% of processing overhead",
    painPoint: "Procurement manager overwhelmed with 30+ supplier email threads, informal phone agreements, and duplicate payment vouchers.",
    jaraSolution: "Unified vendor communication inbox with hierarchical approval permissions, automated 3-way invoice matching, and budget caps.",
    keyFeatures: [
      "Multi-tiered approval chains (Manager -> CFO)",
      "Automated 3-way matching (PO vs Goods Received Note vs Invoice)",
      "Supplier scorecards & on-time rating index",
      "ERP integration with QuickBooks & Xero"
    ],
    metric: "62%",
    metricLabel: "Faster purchase order approval cycle",
    iconName: "Building2"
  },
  {
    id: "large-conglomerates",
    title: "Large Conglomerates & Multinationals",
    targetAudience: "Enterprise FMCG, telcos, banks, and industrial manufacturing groups",
    tagline: "Enterprise compliance, vendor risk intelligence, and spend analytics",
    painPoint: "High procurement leakage, compliance bottlenecks, opaque Tier-2 supplier networks, and slow SAP/Oracle requisition processing.",
    jaraSolution: "Enterprise-grade AI layer operating on top of existing ERPs to monitor spend anomalies, automate RFQ dispatch, and ensure full regulatory compliance.",
    keyFeatures: [
      "AI-driven spend categorization & tail-spend cleanup",
      "Automated RFQ bidding portal with anonymized scoring",
      "Real-time fraud & collusion anomaly detection",
      "Custom connectors for SAP S/4HANA & Oracle Cloud"
    ],
    metric: "₦420M+",
    metricLabel: "Average annual enterprise leakage prevented",
    iconName: "Building"
  },
  {
    id: "government-agencies",
    title: "Government Ministries & Parastatals",
    targetAudience: "State procurement boards, federal MDAs, and public infrastructure bureaus",
    tagline: "Complete transparency, open contracting compliance, and anti-corruption auditability",
    painPoint: "Public perception of corruption, manual tender processing delays, and difficulty tracking contract execution milestones across states.",
    jaraSolution: "Open Contracting Data Standard (OCDS) compliant portal with immutable blockchain-verified audit trails and transparent tender evaluation.",
    keyFeatures: [
      "OCDS compliant public portal generation",
      "Immutable cryptographic transaction logs",
      "Automated affirmative action tracking (women & SME quotas)",
      "Milestone-based disbursement authorization"
    ],
    metric: "100%",
    metricLabel: "Tamper-proof statutory audit readiness",
    iconName: "Landmark"
  }
];

export const WHY_JARA_PILLARS = [
  {
    id: "african-first",
    title: "African First",
    headline: "Built specifically for Nigerian realities",
    description: "Unlike Western software that requires rigid desktop software and US Dollar cards, Jara is native to WhatsApp, priced in Naira, mobile-first, and resilient to low-bandwidth environments.",
    icon: "Compass",
    badges: ["Naira (₦) Native", "WhatsApp Integrated", "Low-Bandwidth Optimized"]
  },
  {
    id: "ai-powered",
    title: "AI-Powered Intelligence",
    headline: "Deep contextual learning that understands our commerce",
    description: "Our proprietary LLM models are trained on African trade patterns, informal market terminology, local packaging units (e.g. 'derica', 'paint bucket', 'carton'), and price nuances.",
    icon: "Sparkles",
    badges: ["Local Dialect Parsing", "Anomaly Flagging", "Predictive Reordering"]
  },
  {
    id: "trust-transparency",
    title: "Trust & Transparency",
    headline: "Eliminating ghost vendors and duplicate invoices",
    description: "Every price quote, authorization timestamp, and delivery sign-off is logged with cryptographic hashes. Eliminate kickbacks, internal leakage, and off-record inflation permanently.",
    icon: "ShieldAlert",
    badges: ["Cryptographic Audit Log", "Anti-Fraud Radar", "3-Way Verification"]
  },
  {
    id: "inclusive-scale",
    title: "Radically Inclusive",
    headline: "From market stalls to federal ministries",
    description: "We bridge the massive divide between informal suppliers who live on WhatsApp and enterprise buyers who need ERP compliance, bringing millions of SMEs into the formal supply chain.",
    icon: "Layers",
    badges: ["SME Friendly", "Enterprise ERP Ready", "Public OCDS Standard"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Chidi Okafor",
    role: "Head of Supply Chain & Logistics",
    company: "Prime Atlantic Beverages Ltd",
    location: "Ikeja, Lagos",
    quote: "Jara transformed how we manage our 140+ regional packaging suppliers. We used to spend 18 hours every week chasing WhatsApp quotations and cross-referencing Excel sheets. With Jara, PO creation takes 30 seconds and our price variance dropped to zero.",
    metric: "65%",
    metricLabel: "Reduction in PO cycle time",
    avatarBg: "bg-[#0A4A4A]",
    sector: "Enterprise"
  },
  {
    id: "2",
    name: "Amina Bello",
    role: "Managing Director",
    company: "Dantata Agro & Grains Processing",
    location: "Kano & Kaduna",
    quote: "Finally, a procurement technology built by people who understand Nigerian commerce. Our raw grain suppliers in Dawanau market only use WhatsApp voice notes. Jara parses those voice notes directly into official purchase orders without requiring farmers to learn new software.",
    metric: "₦18.4M",
    metricLabel: "Saved in first 90 days of rollout",
    avatarBg: "bg-[#D4A747]",
    sector: "Agro"
  },
  {
    id: "3",
    name: "Folashade Adebayo",
    role: "Chief Executive Officer",
    company: "Medix Healthcare & Retail Pharmacy",
    location: "Victoria Island & Lekki, Lagos",
    quote: "Managing inventory for 12 pharmacy outlets was a constant nightmare of stockouts and phantom distributor markups. Jara's real-time stock monitor and automated price comparison saved us from overpaying on essential medications.",
    metric: "99.8%",
    metricLabel: "Inventory on-shelf availability",
    avatarBg: "bg-[#8BA888]",
    sector: "Retail"
  },
  {
    id: "4",
    name: "Engr. Babatunde Sanusi",
    role: "Director of Procurement",
    company: "Apex Infra & Civil Engineering",
    location: "Abuja FCT",
    quote: "On government and large private infrastructure projects, auditability is everything. Jara provides an unalterable paper trail for every ton of rebar and bag of cement purchased. Our external auditors were stunned by the transparency.",
    metric: "100%",
    metricLabel: "Audit compliance score",
    avatarBg: "bg-[#C77D4A]",
    sector: "Enterprise"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Kelechi Nwosu",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Ex-McKinsey Supply Chain Practice lead & Stanford AI graduate. Over 12 years advising African conglomerates and manufacturing giants on procurement digitalization.",
    background: "Stanford University • Ex-McKinsey • Lagos Business School",
    avatarColor: "from-[#0A4A4A] to-[#135E5E]"
  },
  {
    name: "Zainab Al-Hassan",
    role: "Co-Founder & Chief Technology Officer",
    bio: "Former Lead NLP & Machine Learning Engineer at Google AI Research and Paystack. Specialized in low-resource African dialect language modeling and distributed systems.",
    background: "Imperial College London • Ex-Google AI • Ex-Paystack",
    avatarColor: "from-[#D4A747] to-[#B58A2B]"
  },
  {
    name: "Oluwaseun Adeleke",
    role: "Head of Product & African Trade Systems",
    bio: "10+ years scaling B2B marketplace infrastructure across West Africa (TradeDepot, Jumia). Deep domain expertise in open market informal supply logistics.",
    background: "Covenant University • Ex-TradeDepot • Ex-Jumia B2B",
    avatarColor: "from-[#8BA888] to-[#0A4A4A]"
  },
  {
    name: "Dr. Ifeoma Ekwueme",
    role: "Chief Compliance & Governance Officer",
    bio: "Former Senior Advisor to the Bureau of Public Procurement (BPP) and World Bank Open Contracting Consultant for Sub-Saharan Africa.",
    background: "Harvard Kennedy School • Ex-BPP Advisor • World Bank",
    avatarColor: "from-[#C77D4A] to-[#8BA888]"
  }
];

export const SAMPLE_SIMULATOR_CHATS = [
  {
    id: "msg1",
    vendor: "Alhaji Musa (Dawanau Grains Kano)",
    platform: "WhatsApp",
    time: "Today, 10:14 AM",
    rawText: "Good morning Alhaji. As we discussed, I can supply 250 bags of White Maize (50kg) at ₦44,500 per bag instead of ₦48,000 if payment is within 7 days. Delivery to your Ikeja warehouse is scheduled for Thursday 4pm. Driver number is 08032918844.",
    extracted: {
      item: "White Maize (50kg Bag)",
      quantity: "250 bags",
      unitPrice: "₦44,500",
      standardMarketRate: "₦48,000",
      totalAmount: "₦11,125,000",
      savings: "₦875,000 (7.3% saved)",
      deliveryDate: "Thursday, 4:00 PM",
      deliveryLocation: "Ikeja Warehouse, Lagos",
      terms: "Net-7 Days Payment",
      riskScore: "Low (Verified Vendor)"
    }
  },
  {
    id: "msg2",
    vendor: "Chukwudi Plastics & Packaging Ltd (Trade Fair)",
    platform: "WhatsApp",
    time: "Yesterday, 3:45 PM",
    rawText: "Oga, the 5,000 pcs 500ml HDPE juice bottles with tamper caps will be ₦165 each. Total na ₦825,000. We can do dispatch tomorrow once you send PO. Delivery fee is ₦35,000.",
    extracted: {
      item: "500ml HDPE Bottles + Tamper Caps",
      quantity: "5,000 units",
      unitPrice: "₦165",
      standardMarketRate: "₦185",
      totalAmount: "₦860,000 (incl. delivery)",
      savings: "₦100,000 (10.8% saved)",
      deliveryDate: "Tomorrow morning",
      deliveryLocation: "Customer Plant",
      terms: "PO Confirmation Required",
      riskScore: "Low (Established Supplier)"
    }
  },
  {
    id: "msg3",
    vendor: "Bayo Electricals & Cables (Alaba Intl)",
    platform: "Email",
    time: "Today, 8:20 AM",
    rawText: "Dear Procurement Team, Re: Quotation for 40 coils of 2.5mm Coleman Pure Copper Cable. Our special contract rate is ₦58,000 per coil. Total: ₦2,320,000. Note that market price is rising next week. Delivery in 48hrs upon LPO approval.",
    extracted: {
      item: "2.5mm Coleman Pure Copper Cable",
      quantity: "40 coils",
      unitPrice: "₦58,000",
      standardMarketRate: "₦64,500",
      totalAmount: "₦2,320,000",
      savings: "₦260,000 (10.1% saved)",
      deliveryDate: "Within 48 hours",
      deliveryLocation: "Site A - Lekki Phase 1",
      terms: "LPO Approval",
      riskScore: "Verified Genuine Supplier"
    }
  }
];
