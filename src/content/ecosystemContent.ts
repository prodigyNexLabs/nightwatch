export type EcosystemModule = {
  id: 'spaces' | 'parking' | 'activity' | 'business' | 'pitstops' | 'cluster' | 'neighbourhood' | 'garage-sale'
  name: string
  shortLabel: string
  purpose: string
  keyCapabilities: string[]
  practicalExample: string
  ecosystemRole: string
}

export const ecosystemModules: EcosystemModule[] = [
  {
    id: 'spaces',
    name: 'Spaces',
    shortLabel: 'Right space, right time',
    purpose:
      'Find and book local venues for work, meetings, creative sessions, or quick drop-ins. Spaces uses practical filters like proximity, Wi-Fi, power, and real-time availability to match you with the right place fast.',
    keyCapabilities: [
      'Discover nearby spaces with filters: Wi-Fi, Power, Parking, Open now.',
      'See pricing and availability upfront. No wasted steps.',
      'Hosts control their listings with draft, active, and paused states.',
    ],
    practicalExample:
      'A freelancer landing in a new neighborhood opens the app, filters for Wi-Fi + Power + Open now, and books a quiet desk in minutes. No phone calls needed.',
    ecosystemRole:
      'Spaces is the anchor module. Discovering a space can lead to finding nearby parking, local activities, and collaboration opportunities with other hosts.',
  },
  {
    id: 'parking',
    name: 'Parking',
    shortLabel: 'Park smarter, arrive calmer',
    purpose:
      'Trusted nearby parking options so arriving at your destination is stress-free. Filtered by what actually matters: coverage, security, EV charging, and real ratings.',
    keyCapabilities: [
      'Practical filters: 24/7, Covered, CCTV, EV, Pickup, and Top rated.',
      'See travel time and cost before you leave.',
      'Results ranked for confidence, not noise.',
    ],
    practicalExample:
      'Running late? Filter for covered parking with EV charging near your destination and reserve it from your phone before you drive.',
    ecosystemRole:
      'Parking removes arrival friction around spaces, local activities, and busy zones where access complexity is high.',
  },
  {
    id: 'activity',
    name: 'Activity',
    shortLabel: 'What\'s happening nearby',
    purpose:
      'Discover what\'s active around you right now: pop-ups, food trucks, workshops, markets, and local events in one feed. No stale listings, just what\'s happening today.',
    keyCapabilities: [
      'Real-time feed of nearby happenings: pop-ups, food trucks, workshops, and temporary activations.',
      'Scheduled events in the same feed. Discover and join without switching apps.',
      'Time-sensitive ranking shows what\'s active now and drops old items fast.',
    ],
    practicalExample:
      'Heading to your coworking spot? Discover a lunchtime food truck wave and an evening pottery workshop, both within walking distance, in one quick scroll.',
    ecosystemRole:
      'Activity adds real-time context to Spaces and Cluster, creating traffic loops that help hosts and local businesses capture same-day demand.',
  },
  {
    id: 'business',
    name: 'Business',
    shortLabel: 'Trust-ready host identity',
    purpose:
      'Your provider profile is the foundation of trust. Set up as an individual host or verified business entity with proper credentials, support contacts, and trust signals.',
    keyCapabilities: [
      'Dual profile model: Individual host and Business entity.',
      'Verification-ready fields: business name, registration, support contact.',
      'Trust quality gates through profile completion and policy acceptance.',
    ],
    practicalExample:
      'A yoga studio owner starts as an individual host, builds a track record, then upgrades to a verified business profile as demand grows.',
    ecosystemRole:
      'Business powers trust across every module. Better identity quality improves booking conversion, collaboration acceptance, and guest confidence.',
  },
  {
    id: 'pitstops',
    name: 'Pitstops',
    shortLabel: 'Quick stops on the go',
    purpose:
      'Roadside essentials for people in transit. Fuel, snacks, supplies, and quick services, found fast without switching between apps.',
    keyCapabilities: [
      'Travel-oriented discovery for fuel, consumables, and quick services.',
      'Fast, low-attention mobile interaction for people on the move.',
      'Positioned for continuity between bookings, events, and destinations.',
    ],
    practicalExample:
      'Driving between two event spots? Find a refuel point and a coffee stop in one quick search, right along your route.',
    ecosystemRole:
      'Pitstops keeps you in the ecosystem during travel-heavy journeys, reducing drop-off between destinations.',
  },
  {
    id: 'cluster',
    name: 'Cluster',
    shortLabel: 'Navigate activity zones',
    purpose:
      'See where things are concentrated. Cluster highlights neighborhoods and areas with the most activity, so you spend less time searching and more time doing.',
    keyCapabilities: [
      'Curated overlays: Tonight picks, Nearby highlights, and trending zones.',
      'Area-based discovery that goes beyond single-listing search.',
      'Perfect for dense areas where browsing individual listings feels overwhelming.',
    ],
    practicalExample:
      'New to a city for the weekend? Open Cluster to see which district is buzzing tonight and jump straight into the best options.',
    ecosystemRole:
      'Cluster acts as a navigation layer across Spaces, Parking, and Activity, steering attention to zones where the best options are concentrated.',
  },
  {
    id: 'neighbourhood',
    name: 'Neighbourhood',
    shortLabel: 'Hosts working together',
    purpose:
      'Nearby hosts can collaborate instead of competing. Send requests, accept invites, link spaces, and offer shared guest benefits. Growing together.',
    keyCapabilities: [
      'Clear lifecycle: Active, Requests, Candidates, and Invites.',
      'Collaboration actions: send requests, accept or decline, invite via QR, link, or SMS.',
      'Linked spaces enable shared guest discounts and coordinated discovery.',
    ],
    practicalExample:
      'A cafe and a nearby photography studio link listings. Guests booking the cafe get a discount at the studio, filling off-peak slots for both.',
    ecosystemRole:
      'Neighbourhood increases local quality and retention by turning nearby hosts into a cooperative network instead of competing, disconnected nodes.',
  },
  {
    id: 'garage-sale',
    name: 'Exchange',
    shortLabel: 'Buy, sell, swap locally',
    purpose:
      'Short-cycle local exchange for society sales, moving-out clearance, and one-time resale. List it fast, sell it local, keep things out of landfill.',
    keyCapabilities: [
      'Multi-mode intent: Buy, Sell, and Swap in one flow.',
      'Optimized for short lifespan listings and clear pickup expectations.',
      'Built for reuse velocity, not long-tail marketplace overhead.',
    ],
    practicalExample:
      'Refreshing your workspace furniture? List old chairs for quick local pickup while browsing swap options two blocks away.',
    ecosystemRole:
      'Exchange keeps inventory circulating locally, reinforcing community participation and repeat engagement around Spaces and Neighbourhood.',
  },
]

export const platformExperiencePoints = [
  {
    title: 'Location-aware by default',
    detail:
      'Every module starts from where you are. Discovery adapts to your surroundings, not generic city-wide feeds.',
  },
  {
    title: 'Filters that speed up decisions',
    detail:
      'Consistent, practical filters across all modules help you decide faster with fewer taps and fewer dead-ends.',
  },
  {
    title: 'Quick actions, minimal friction',
    detail:
      'Accept, book, list, swap. Common actions are lightweight and fast, especially on mobile.',
  },
  {
    title: 'Responsive from 4K to mobile',
    detail:
      'Large screens show richer context while mobile keeps the exact same workflows available in compact, readable form.',
  },
]

export const businessImpactPoints = [
  {
    title: 'Better local discovery',
    detail:
      'More relevant results increase trust and reduce churn from low-quality search outcomes.',
  },
  {
    title: 'Faster host onboarding',
    detail:
      'Structured identity and listing tools reduce setup friction and speed first listing activation.',
  },
  {
    title: 'Collaborative growth',
    detail:
      'Neighbourhood linking converts isolated hosts into cooperative local networks that benefit everyone.',
  },
  {
    title: 'Broader revenue surface',
    detail:
      'Revenue spans rentals, parking, activities, and exchange. Not dependent on a single module.',
  },
]

export const ecosystemFaqs = [
  {
    question: 'What is Crozroad?',
    answer:
      'Crozroad is a local ecosystem app that connects you to nearby spaces, parking, activities, host services, community collaboration, and local exchange, all in one place. Available on iOS and Android.',
  },
  {
    question: 'How does Spaces work?',
    answer:
      'Spaces helps you discover and book local venues using practical filters like Nearby, Wi-Fi, Power, Parking, and Open now, so you find the right place fast without calling around.',
  },
  {
    question: 'What makes Parking different from a regular map search?',
    answer:
      'Parking focuses on trusted, verified options with filters like 24/7 access, Covered, CCTV, EV charging, and real ratings, so you know what you\'re getting before you drive there.',
  },
  {
    question: 'What is Activity?',
    answer:
      'Activity shows you what\'s happening nearby right now: pop-ups, food trucks, workshops, markets, and events in one real-time feed, ranked by what\'s closest and freshest.',
  },
  {
    question: 'How do host profiles work?',
    answer:
      'Hosts can operate as Individual or Business profiles with verification-ready fields, improving trust and credibility across all booking and collaboration flows.',
  },
  {
    question: 'What is Pitstops?',
    answer:
      'Pitstops helps people in transit find quick essentials like fuel, snacks, and supplies without switching apps. Optimized for short stops while you\'re on the move.',
  },
  {
    question: 'How does Cluster help?',
    answer:
      'Cluster highlights high-activity zones and neighborhoods with curated picks like Tonight and Nearby, so you skip the search fatigue in busy areas.',
  },
  {
    question: 'How does Neighbourhood collaboration work?',
    answer:
      'Nearby hosts can send collaboration requests, accept invites via QR/link/SMS, link spaces, and offer shared guest benefits. Growing together instead of competing.',
  },
  {
    question: 'What does Exchange add?',
    answer:
      'Exchange supports Buy, Sell, and Swap for short-cycle local reuse: society sales, moving-out clearance, equipment swaps. List fast, sell local.',
  },
  {
    question: 'Is the app free?',
    answer:
      'Crozroad is free to download and use. Host features and advanced tools may have separate pricing tiers as the platform grows.',
  },
]
