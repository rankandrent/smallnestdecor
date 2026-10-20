export interface Category {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  intro: string;
}

export const categories: Category[] = [
  {
    slug: 'paint-colors',
    name: 'Paint Colors',
    shortName: 'Paint Colors',
    tagline: 'The right shade changes everything',
    image: '/images/categories/paint-colors.svg',
    intro:
      'Paint is the cheapest renovation there is, and for a small apartment it is also the most powerful one. The right color can push walls outward, warm up a north-facing room that never sees the sun, and make a rental-grade box feel like a home you chose on purpose. In this section we break down the colors that actually work in small spaces: warm whites that never turn yellow, greiges that behave in bad light, soft greens and inky blues that somehow make tiny rooms feel calmer instead of smaller. Every guide looks at a color the way you will live with it, in morning light and lamplight, next to wood floors and white trim, in rooms where one wall is also the dining room. We also collect whole-apartment palettes, so instead of five unrelated rooms you get one calm, connected home built from a handful of shades that all get along. If you are standing in the paint aisle feeling overwhelmed, start here.',
  },
  {
    slug: 'small-space-decor',
    name: 'Small Space Decor',
    shortName: 'Small Decor',
    tagline: 'Decorating when every inch counts',
    image: '/images/categories/small-space-decor.svg',
    intro:
      'Decorating a small space is not about owning less style, it is about choosing pieces that earn their footprint. A mirror that bounces light into a dark corner, a rug sized to make a seating area feel generous, curtains hung high so the ceiling reads taller: in a small apartment, decor is a set of quiet visual tricks, and they compound beautifully. This section is our home for those tricks. You will find layout ideas for rooms that have to do two or three jobs at once, scale guides so furniture stops overwhelming the floor plan, and styling formulas you can copy with what you already own. We write for real floor plans, studios, one-bedrooms, and the occasional oddly shaped rental living room, not showroom sets. Expect honest trade-offs, budget-first options, and ideas ordered from a ten-minute rearrange to a weekend project, so you can take the step that matches your Sunday, not someone else\u2019s renovation budget.',
  },
  {
    slug: 'organization-storage',
    name: 'Organization & Storage',
    shortName: 'Organization',
    tagline: 'A place for everything, even here',
    image: '/images/categories/organization-storage.svg',
    intro:
      'In a small home, organization is not a personality trait, it is infrastructure. When the kitchen has four cabinets and the bedroom closet is shared with the water heater, calm comes from systems: zones that match how you actually move through a day, vertical space used all the way to the ceiling, and storage that hides inside furniture you already need. This section collects the systems our readers save most. Under-bed and over-door storage that disappears, tiny pantry setups built from a single shelving unit, entryway drop zones carved out of forty centimeters of wall, and declutter routines sized for one evening instead of one overwhelming weekend. We favor renter-safe, no-drill methods first, label everything honestly by cost and effort, and skip any product that only works in a walk-in closet. If your apartment currently stores things in the oven, you are in exactly the right place, start with the kitchen and entryway guides.',
  },
  {
    slug: 'renter-friendly',
    name: 'Renter-Friendly',
    shortName: 'Renter-Friendly',
    tagline: 'Big changes, zero holes, full deposit',
    image: '/images/categories/renter-friendly.svg',
    intro:
      'Renting does not have to mean living in someone else\u2019s beige decision for three years. Almost everything a homeowner does with a drill, a renter can now do with peel-and-stick, tension, magnets, and patience, and undo in an afternoon when the lease ends. This is our renter headquarters: gallery walls that leave no holes, backsplashes that peel off cleanly, lighting swaps that take ten minutes and a step stool, and window treatments that hang from tension rods instead of brackets. Every idea here is checked against the only rule that matters, will the landlord ever know? We also cover the gray areas honestly: the upgrades most leases quietly allow, the ones worth a quick text to ask about, and how to document your walls with photos on move-in day so your deposit comes home with you. Your security deposit is not a decor budget. Let\u2019s keep it that way while making the place unmistakably yours.',
  },
  {
    slug: 'living-room',
    name: 'Living Room',
    shortName: 'Living Room',
    tagline: 'One room, three jobs, still cosy',
    image: '/images/categories/living-room.svg',
    intro:
      'The small living room is the hardest-working room in the apartment: part lounge, part office, part dining room, part guest room, and it is supposed to look relaxed while doing all of it. The secret is not smaller furniture, it is clearer zones. A rug that defines the seating area, lighting that separates the desk corner from the sofa, and storage that swallows the workday by six o\u2019clock. In this section you will find layouts for the classic small-room shapes, the long narrow rectangle, the square box, the open-plan corner, plus sofa sizing guides, TV wall ideas that do not dominate, and coffee-table alternatives for rooms where a coffee table simply does not fit. We also write about the details that make a small living room feel finished rather than temporary: curtains, cushions with a formula, and art hung at the right height for the ceiling you actually have.',
  },
  {
    slug: 'bedroom',
    name: 'Bedroom',
    shortName: 'Bedroom',
    tagline: 'Small bedrooms that sleep big',
    image: '/images/categories/bedroom.svg',
    intro:
      'A small bedroom asks for very little, really: a bed that feels like a retreat, storage that keeps the calm from becoming clutter, and light you can soften at the end of the day. The rest is editing. This section is devoted to bedrooms where the bed takes most of the floor and the closet takes the rest, which is to say, most apartment bedrooms. You will find under-bed storage systems that actually get used, nightstand alternatives for the twelve inches beside the bed, wardrobe overflow ideas when the closet gives up, and paint and bedding palettes that make a compact room feel restful instead of cramped. We also tackle the shared realities: bedrooms that double as offices, guest corners in studios, and dressing space carved out of a hallway. Small bedrooms are where the small-space rules pay off fastest, because the room has one job, rest, and every idea here protects it.',
  },
  {
    slug: 'kitchen',
    name: 'Kitchen',
    shortName: 'Kitchen',
    tagline: 'Tiny kitchens, serious systems',
    image: '/images/categories/kitchen.svg',
    intro:
      'Nobody chooses a tiny kitchen, but a tiny kitchen can absolutely be chosen, organized, that is, into a room that cooks far above its square footage. The limiting factor is almost never space; it is the counter. Everything in this section is aimed at giving you back a clear work surface: zones for prep, cooking and landing space, vertical storage on walls and cabinet doors, and the inside of every cabinet rethought with risers, rails and turntables. We cover rental-safe upgrades too, peel-and-stick backsplashes, under-cabinet lighting, faucet swaps you can reverse, because small kitchens are usually rented kitchens. Expect real numbers: how much counter a cutting board over the sink buys you, what fits in a fifteen-centimeter gap beside the fridge, and which popular organizers are not worth their drawer space. If your kitchen currently stores the cutting boards in the dish rack, begin with the five-zone guide.',
  },
  {
    slug: 'bathroom',
    name: 'Bathroom',
    shortName: 'Bathroom',
    tagline: 'Spa energy, rental bathroom',
    image: '/images/categories/bathroom.svg',
    intro:
      'The small bathroom is where an apartment shows its age first, and where a few calm, ordered surfaces make the biggest emotional difference, because it is the first room you see every morning. This section is about turning the rental bathroom you have into the quiet one you want, without touching a single tile. Over-toilet storage that looks built-in, shower organization that ends the bottle avalanche, vanity systems for the pedestal-sink problem, and mirrors, lighting and textiles that warm up builder-grade everything. We keep every idea renter-safe and budget-honest, and we test the pretty pictures against real life: humidity, cheap fixtures, and the fact that two people may be sharing one sink. There is also a healthy dose of small-bathroom color here, the shades that make a windowless room feel like morning instead of a cave. Start with storage, finish with a eucalyptus bunch, thank us at 7 a.m.',
  },
];

export const categoryBySlug = (slug: string): Category =>
  categories.find((c) => c.slug === slug) ?? categories[0];
