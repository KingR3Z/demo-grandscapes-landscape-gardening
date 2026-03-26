export const client = {
  // Business Details
  name: "Grandscapes Landscape Gardening",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Banstead.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07931 727660",
  email: "",
  website: "",

  // Location
  address: "Banstead",
  city: "Banstead",
  county: "",
  postcode: "",
  basedIn: "Banstead",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "5",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Matt & Dini", rating: 5, text: "James has completed several jobs for us over the past few years, including our driveway, some patio work around the house and redoing our garden.  We're very pleased with the results and it’s always been a really positive experience working with him.  We’ll definitely be using James again in the future and are more than happy to recommend his services to others.", date: "7 months ago" },
    { name: "Sheila Granger", rating: 5, text: "James has completed various jobs for me over the last few years and I have always been very pleased with the work he has done.  He leaves the site neat and tidy and checks that you are satisfied with the end result.  If you have any gardening requirements I thoroughly recommend getting a quote from James.", date: "2 years ago" },
    { name: "Kelly Miranda", rating: 5, text: "Thank you Kelly", date: "3 years ago" },
    { name: "David Mott", rating: 5, text: "We used Grandscapes for some landscaping work in our garden last summer and were so pleased with the results that we got James back to do some fencing work that needed doing. The work was completed to the highest standard at a very reasonable price, on time, and the site was left clean and tidy. Would thoroughly recommend.", date: "4 years ago", badge: "Local Guide" },
    { name: "Funnie Farmer", rating: 5, text: "Thank you for your review.", date: "6 years ago", badge: "Local Guide" },
    { name: "Wendy Ager", rating: 5, text: "How refreshing....to get a local person round promptly who quotes a reasonable price, then arranges and turns up and does the job as requested without any fuss and leaves your garden/home clean and tidy. Thank you James! We had steps built to access our new log cabin by Grandscapes and extra brickwork, and will def use again", date: "6 years ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Grandscapes Landscape Gardening | Landscaper in Banstead",
    description: "Professional landscaper in Banstead. 5.0-star rated on Google. Call for a free quote.",
  },
};
