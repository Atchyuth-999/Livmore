export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  imageUrl: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Apartments' | 'Villas' | 'Living Rooms' | 'Kitchens' | 'Bedrooms' | 'Turnkey';
  location: string;
  area: string;
  completionYear: string;
  imageUrl: string;
  additionalImages: string[];
  summary: string;
  clientBrief: string;
  designHighlights: string[];
  materialsPalette: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  residence: string;
  city: string;
  quote: string;
  projectType: string;
  verificationBadge: string;
}

export const CITIES_SERVED = [
  'Mumbai',
  'Bengaluru',
  'Delhi NCR (Gurugram & South Delhi)',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Kolkata',
  'Other / Emerging Enclaves'
];

export const PROPERTY_TYPES = [
  '3 BHK Luxury Apartment',
  '4+ BHK Luxury Apartment',
  'Sky Penthouse',
  'Independent Villa / Bungalow',
  'Duplex Residence',
  'Vacation / Heritage Home'
];

export const BUDGET_RANGES = [
  '₹25 Lakhs – ₹50 Lakhs (Single Floor / Renovation)',
  '₹50 Lakhs – ₹1 Crore (Complete Home Interiors)',
  '₹1 Crore – ₹2.5 Crores (Premium Luxury Residence)',
  '₹2.5 Crores+ (Ultra-Luxury Penthouse / Villa Estate)'
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'complete-home',
    title: 'Complete Home Interiors',
    tag: 'End-to-End',
    shortDesc: 'Comprehensive interior architecture from bare shell to final handover with curated bespoke styling.',
    fullDesc: 'A cohesive design journey encompassing spatial planning, structural civil alterations, electrical schematics, custom millwork, curated furniture, and art curation tailored exclusively to your family’s rhythm.',
    deliverables: [
      'Comprehensive 2D spatial layouts & mood boards',
      'Civil modifications & false ceiling design',
      'Integrated electrical, automation & HVAC planning',
      'Custom millwork, wall panelling & surface finishes',
      'White-glove styling and turnkey handover'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    tag: 'Culinary Architecture',
    shortDesc: 'Ergonomic, high-performance luxury kitchens combining German hardware with Italian stone finishes.',
    fullDesc: 'Engineered for both heavy-duty Indian culinary requirements and seamless modern hosting. We incorporate antimicrobial quartz or Calacatta waterfall surfaces, Blum or Hettich motorized hardware, and discreet appliance integration.',
    deliverables: [
      'Ergonomic workflow & triangle optimization',
      'Marine-grade HDHMR & birch ply carcass',
      'Anti-fingerprint acrylic and fluted veneer shutters',
      'Concealed ducted chimney & pull-out pantries',
      'Under-cabinet architectural task lighting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'living-room',
    title: 'Living Room Interiors',
    tag: 'Entertaining & Salon',
    shortDesc: 'Sophisticated social spaces styled with architectural statement walls, acoustic treatment, and bespoke seating.',
    fullDesc: 'Crafting the focal conversation center of your residence. Balanced proportions, Italian marble wall features, imported boucle and top-grain leather upholstery, and ambient lighting orchestrations designed for evening gatherings.',
    deliverables: [
      'Custom seating layouts & accent lounge armchairs',
      'Bookmatched Italian marble and veneer feature walls',
      'Concealed audio-visual integration',
      'Curated rugs in pure New Zealand wool and silk',
      'Sculptural brass and hand-blown glass lighting fixtures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bedroom-interiors',
    title: 'Bedroom Interiors',
    tag: 'Private Sanctuaries',
    shortDesc: 'Serene, acoustic-buffered private suites with walk-in wardrobes and layered ambient illumination.',
    fullDesc: 'Bedrooms envisioned as tranquil retreats from the metropolitan pulse. We integrate padded headboard walls, velvet-lined walk-in closets with sensor illumination, and soft organic linen drapery.',
    deliverables: [
      'Bespoke upholstered beds & integrated nightstands',
      'Walk-in wardrobes with tinted fluted glass fronts',
      'Acoustic wall panelling & blackout drapery systems',
      'Private reading alcoves & dressing vanity units',
      'Multi-scene warm dimming lighting controls'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    tag: 'Architectural Optimization',
    shortDesc: 'Mathematical spatial optimization to maximize natural ventilation, light corridors, and seamless circulation.',
    fullDesc: 'Our architects re-examine apartment floor plates to dissolve dead corridors, optimize sightlines toward scenic views, and create purposeful zones for privacy, family interaction, and discreet domestic staff circulation.',
    deliverables: [
      'Micro-circulation analysis & sightline mapping',
      'Vastu-compliant architectural recalibrations',
      'Zoning for multigenerational living requirements',
      'Structural review with certified civil engineers',
      'Detailed scale CAD floor plans and sections'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lighting-design',
    title: 'Lighting Design',
    tag: 'Atmosphere & Fixtures',
    shortDesc: 'Multi-layered architectural lighting schemes that sculpt mood from morning clarity to warm evening repose.',
    fullDesc: 'Light defines emotion in a luxury home. We design anti-glare recessed downlights, warm perimeter cove details (2700K–3000K), artistic focal highlights for art pieces, and custom statement dining pendants.',
    deliverables: [
      'Lux-level calculation and illumination schematics',
      'Magnetic track systems and trimless architectural fixtures',
      'Smart lighting integration (Casambi / Lutron / KNX)',
      'Sculptural decorative fixtures sourced from European ateliers',
      'External terrace and balcony lighting design'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'furniture-decor',
    title: 'Furniture and Décor',
    tag: 'Curated Furnishings',
    shortDesc: 'Custom handcrafted furniture, limited-edition accessories, and original artworks curated for your aesthetic.',
    fullDesc: 'Collaborating with premier woodworking ateliers and international design houses to source or custom-manufacture tables, credenzas, mirrors, and objets d’art scaled precisely to your rooms.',
    deliverables: [
      'Custom millwork & bespoke joinery drawings',
      'Direct sourcing of premium upholstery fabrics & leathers',
      'Art advisory and bespoke framing solutions',
      'Custom artisanal rugs and hand-woven throws',
      'Planters, sculptural vessels and tabletop styling'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'turnkey-solutions',
    title: 'Turnkey Interior Solutions',
    tag: 'Single-Point Accountability',
    shortDesc: 'End-to-end execution, civil works, procurement, quality inspections, and milestone-backed delivery.',
    fullDesc: 'Experience complete peace of mind. A dedicated Senior Project Director oversees on-site civil engineers, carpentry leads, and MEP contractors. You receive weekly progress reports and guaranteed completion dates.',
    deliverables: [
      'Single-point contract and fixed commercial pricing',
      'Comprehensive on-site site supervision & weekly logs',
      '7-stage rigorous quality auditing protocol',
      'Vendor management and warranty documentation',
      'Deep cleaning, sanitization, and key handover ceremony'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'worli-sea-penthouse',
    title: 'The Sky Residence at Worli Sea Face',
    category: 'Apartments',
    location: 'Worli, Mumbai',
    area: '6,400 sq.ft. Duplex',
    completionYear: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A panoramic duplex penthouse framed by the Arabian Sea, featuring warm travertine floors and fluted champagne gold accents.',
    clientBrief: 'The client desired a sophisticated sanctuary for family living and high-level corporate hosting that celebrated the expansive coastal vista without visual clutter.',
    designHighlights: [
      'Continuous 18-meter living salon with unobstructed sea views',
      'Double-height foyer featuring a 4-meter custom brass light sculpture',
      'Discreet service corridors separating culinary staff from private living quarters',
      'Full acoustic insulation for the master bedroom suite'
    ],
    materialsPalette: [
      'Navona Roman Travertine',
      'Brushed Champagne Brass',
      'Smoked European White Oak',
      'Italian Boucle Upholstery'
    ]
  },
  {
    id: 'jubilee-hills-villa',
    title: 'Villa Tranquility at Jubilee Hills',
    category: 'Villas',
    location: 'Jubilee Hills, Hyderabad',
    area: '10,200 sq.ft. Independent Villa',
    completionYear: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A sprawling contemporary villa integrating internal courtyards, natural basalt water features, and expansive double-height volumes.',
    clientBrief: 'A multigenerational home requiring distinct private sanctuaries for three generations, anchored by a dramatic central family pavilion.',
    designHighlights: [
      'Indoor-outdoor transition with thermal-break sliding glass walls',
      'Cantilevered timber staircase with concealed ambient lighting',
      'Private spa pavilion and temperature-controlled wine cellar',
      'Custom teak millwork handcrafted by master carpenters'
    ],
    materialsPalette: [
      'Black Basalt & Calacatta Viola',
      'Quarter-Cut Teak Wood',
      'Antiqued Gunmetal Hardware',
      'Raw Silk Wallcoverings'
    ]
  },
  {
    id: 'camellias-salon',
    title: 'Contemporary Living Salon at The Camellias',
    category: 'Living Rooms',
    location: 'Golf Course Road, Gurugram',
    area: '1,800 sq.ft. Salon Suite',
    completionYear: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'An editorial living salon in shades of warm ivory and charcoal, anchored by bookmatched Statuario marble and bespoke seating.',
    clientBrief: 'Create an intimate yet commanding conversation salon that displays the client’s collection of modern Indian contemporary art.',
    designHighlights: [
      'Custom curved 5-meter sofa wrapped in Belgian linen',
      'Low-glare magnetic museum lighting calibrated to artwork lumens',
      'Integrated hidden bar with motorized pocket doors',
      'Hand-tufted silk-wool gradient area rug'
    ],
    materialsPalette: [
      'Bookmatched Statuario Marble',
      'Charcoal Stained Oak',
      'Belgian Textured Linen',
      'Polished Bronze Trim'
    ]
  },
  {
    id: 'indiranagar-kitchen',
    title: 'The Culinary Studio Residence',
    category: 'Kitchens',
    location: 'Indiranagar, Bengaluru',
    area: '650 sq.ft. Kitchen & Breakfast Bar',
    completionYear: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A precision culinary space featuring a monolithic quartzite waterfall island and custom matte charcoal cabinetry.',
    clientBrief: 'A professional chef and tech founder wanted a kitchen equipped for masterclass culinary work that opens into an airy breakfast lounge.',
    designHighlights: [
      'Dual-zone preparation with dry display kitchen and wet heavy-cooking pantry',
      'Motorized Blum servo-drive drawers with walnut interior dividers',
      'Integrated induction cooktop flush with the quartzite surface',
      'Bespoke counter stools in caramel saddle leather'
    ],
    materialsPalette: [
      'Taj Mahal Quartzite',
      'Matte Super-Opaque Charcoal Laminate',
      'Natural Fluted Ash Wood',
      'Brushed Amber Brass'
    ]
  },
  {
    id: 'sadashivanagar-suite',
    title: 'The Master Sanctuary Suite',
    category: 'Bedrooms',
    location: 'Sadashivanagar, Bengaluru',
    area: '1,200 sq.ft. Master Wing',
    completionYear: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A tranquil master wing featuring fluted acoustic oak paneling, a private reading balcony, and a marble ensuite bathroom.',
    clientBrief: 'A quiet haven of serenity with sensory warmth, blackout circadian lighting, and custom walk-in dressing storage.',
    designHighlights: [
      'Floating platform bed with continuous integrated timber ledge',
      'Walk-in dressing suite with fluted smoked glass doors and warm internal LEDs',
      'Direct balcony access through double-glazed acoustic French doors',
      'Private beverage bar and vanity dressing area'
    ],
    materialsPalette: [
      'Natural Fluted White Oak',
      'Oatmeal Textured Boucle',
      'Crema Marfil Polished Marble',
      'Brushed Satin Nickel'
    ]
  },
  {
    id: 'boat-club-turnkey',
    title: 'Turnkey Heritage Residence',
    category: 'Turnkey',
    location: 'Boat Club Road, Chennai',
    area: '8,800 sq.ft. Complete Estate',
    completionYear: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A comprehensive turnkey transformation blending tropical modernism with classical South Indian craftsmanship.',
    clientBrief: 'A full turnkey redesign delivered within 9 months for an NRI family returning to Chennai, requiring complete end-to-end management.',
    designHighlights: [
      'Preservation of antique brass pillars integrated with minimalist stone architraves',
      'Turnkey handover delivered on schedule with zero owner site stress',
      'Full home automation controlling HVAC, blinds, and multi-room audio',
      'Landscaped rooftop garden pavilion with sea breeze orientation'
    ],
    materialsPalette: [
      'Honed Jaisalmer Yellow Stone',
      'Solid Reclaimed Teak',
      'Verdigris Patina Copper',
      'Handwoven Chettinad Cottons'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Rajesh & Malini Singhania',
    residence: 'The Sky Duplex, Worli',
    city: 'Mumbai',
    projectType: 'Turnkey Penthouse Interior',
    verificationBadge: 'Verified Homeowner',
    quote: 'LivMore Luxury brought an extraordinary level of architectural refinement to our duplex. The team managed every millwork detail and stone selection with complete transparency. Living here feels like being inside an editorial publication that is genuinely warm and functional.'
  },
  {
    id: 'test-2',
    clientName: 'Dr. Arvind & Priya Kothari',
    residence: 'Villa Magnolia, Jubilee Hills',
    city: 'Hyderabad',
    projectType: 'Independent Villa Architecture',
    verificationBadge: 'Verified Homeowner',
    quote: 'Designing a 10,000 sq.ft. multigenerational home is notoriously complex. LivMore delivered flawless space planning, honoring our parents’ preference for tranquility while providing our children with vibrant contemporary zones. Their zero-delay execution was exemplary.'
  },
  {
    id: 'test-3',
    clientName: 'Siddharth & Ananya Nambiar',
    residence: 'The Camellias, Golf Course Road',
    city: 'Gurugram',
    projectType: 'Living Salon & Culinary Suite',
    verificationBadge: 'Verified Homeowner',
    quote: 'From our initial consultation in their studio to the final handover ceremony, LivMore Luxury operated with the precision of a high-end European design house. The lighting schemes and custom stone waterfall island in our kitchen are conversational masterworks.'
  }
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Personalized Interior Design',
    desc: 'Every layout and finish is drawn bespoke to your lifestyle, daily routines, and aesthetic sensibilities. We never replicate templates.'
  },
  {
    number: '02',
    title: 'Functional Space Planning',
    desc: 'Architectural mathematics that balance natural light corridors, ergonomic furniture scale, and effortless circulation throughout your home.'
  },
  {
    number: '03',
    title: 'Quality Materials & Finishes',
    desc: 'Hand-selected European veneers, calibrated natural marbles, marine-grade substrates, and certified non-toxic architectural coatings.'
  },
  {
    number: '04',
    title: 'Transparent Communication',
    desc: 'Detailed itemized bill of quantities (BOQ), milestone-linked payments, and weekly photo-documented construction updates.'
  },
  {
    number: '05',
    title: 'Attention to Detail',
    desc: 'Obsession with hairline shadow gaps, millwork grain continuity, flush-fitting hardware, and cohesive color temperature alignment.'
  },
  {
    number: '06',
    title: 'Professional Project Execution',
    desc: 'Experienced on-site civil engineers, stringent 7-point quality audits, and guaranteed timeline commitments backed by contract.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Requirement Analysis',
    duration: 'Week 1',
    summary: 'In-depth lifestyle briefing, spatial walk-through, vastu alignment, and budgetary structuring to define your personal project charter.'
  },
  {
    step: '02',
    title: 'Design Concept & Planning',
    duration: 'Weeks 2–4',
    summary: 'Comprehensive 2D architectural layouts, 3D photorealistic visualisations, lighting schematics, and spatial circulation optimization.'
  },
  {
    step: '03',
    title: 'Material Selection & Finalization',
    duration: 'Weeks 5–6',
    summary: 'Hands-on tactile curation at our design studio—reviewing marble slabs, veneer flitches, metal finishes, and bespoke fabrics in person.'
  },
  {
    step: '04',
    title: 'Execution & Handover',
    duration: 'Weeks 7–16',
    summary: 'On-site civil execution, modular assembly, MEP integration, multi-stage quality checks, deep clean, and white-glove turnkey handover.'
  }
];
