const links = ["Explore", "Company", "Support"];

const reviewImgs = [
  {
    id: 1,
    name: "Gabriel Romero",
    image: new URL("../assets/reviews/img-1.png", import.meta.url),
  },
  {
    id: 2,
    name: "Sarena Burton",
    image: new URL("../assets/reviews/img-2.png", import.meta.url),
  },
  {
    id: 3,
    name: "LaDorian Ray",
    image: new URL("../assets/reviews/img-3.png", import.meta.url),
  },
  {
    id: 4,
    name: "Madison Lott",
    image: new URL("../assets/reviews/img-4.png", import.meta.url),
  },
  {
    id: 5,
    name: "Shannon Sutton",
    image: new URL("../assets/reviews/img-5.png", import.meta.url),
  },
];

const appStatsImgs = [
  {
    id: 1,
    name: "@mario.lopez",
    image: new URL("../assets/appStats/img-1.png", import.meta.url),
  },
  {
    id: 2,
    name: "@xuifang",
    image: new URL("../assets/appStats/img-2.png", import.meta.url),
  },
  {
    id: 3,
    name: "@shannon_sutton",
    image: new URL("../assets/appStats/img-3.png", import.meta.url),
  },
];

const appStats = [
  {
    id: 1,
    value: "300",
    description: "creators",
  },
  {
    id: 2,
    value: "12.1k",
    description: "users",
  },
  {
    id: 3,
    value: "9.11k",
    description: "sessions",
  },
];

const features = [
  {
    id: 1,
    name: "Engagement",
    description: "Engage on a deeper level with the fans that matter most",
    icon: new URL("../assets/features/engagement.svg", import.meta.url),
  },
  {
    id: 2,
    name: "Autonomy",
    description: "Full autonomy on when and who you chose to talk",
    icon: new URL("../assets/features/autonomy.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Free",
    description: "No monthly fees or annual subscription fees",
    icon: new URL("../assets/features/free.svg", import.meta.url),
  },
  {
    id: 4,
    name: "Earn",
    description: "Add a new source of income that you can control",
    icon: new URL("../assets/features/earn.svg", import.meta.url),
  },
];

const footerCols = [
  {
    id: 1,
    heading: "About",
    links: ["How it works", "Company", "Help & support"],
  },
  {
    id: 2,
    heading: "For creators",
    links: ["How can i get paid", "Become a creator"],
  },
  {
    id: 3,
    heading: "Learn",
    links: ["Blog", "Careers", "Affiliates"],
  },
  {
    id: 4,
    heading: "Support",
    links: ["Service status", "Cookies policy", "Privacy policy"],
  },
];

const footerSocials = [
  {
    id: 1,
    name: "Meta (formerly facebook)",
    logo: new URL("../assets/socials/facebook.svg", import.meta.url),
  },
  {
    id: 2,
    name: "X (formerly twitter)",
    logo: new URL("../assets/socials/twitter.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Instagram",
    logo: new URL("../assets/socials/instagram.svg", import.meta.url),
  },
];

const pricingCards = [
  {
    mostPopular: false,
    perMonth: false,
    program: "Personal",
    price: "Free",
    subheading: "Explore our product for free",
    bullets: [
      "20 free fantasy reports",
      "Limited access to AI-writer",
      "max 15 hours per month",
      "14 outreach tokens",
    ],
    cta: "Start free",
  },
  {
    primary: true,
    mostPopular: true,
    perMonth: true,
    program: "Professional",
    price: 20,
    subheading: "For the ambitious solo professional",
    bullets: [
      "50 free fantasy reports",
      "Unlimited access to AI-writer",
      "max 35 hours per month",
      "72 outreach tokens",
    ],
    cta: "Start creating",
  },
  {
    mostPopular: false,
    perMonth: true,
    program: "Team",
    price: 699,
    subheading: "Licenses for up to 16 members",
    bullets: [
      "1200 free fantasy reports",
      "Access to AI-writer M2",
      "Unlimited hours per month",
      "435 outreach tokens",
    ],
    cta: "Sign up your team",
  },
];

export {
  links,
  reviewImgs,
  appStatsImgs,
  appStats,
  features,
  footerCols,
  footerSocials,
  pricingCards,
};
