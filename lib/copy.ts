export const SITE = "https://trailervegas.com";
export const REPO = "https://github.com/shataken-source/trailervegas";

export const TAGLINE = "Good neighbors. Different ZIP codes.";
export const DESCRIPTOR =
  "A nationwide home base for RVers, starting along I-15.";

export const HEADLINE =
  "The RV community's home base. Built by RVers, not corporations.";
export const SUBHEAD =
  "Find the place. Find the wrench. Find the honest answer. Leave the next person a better map than you had.";

export const FOOTER_PROMISE =
  "Public promise — legal review pending. See the Trust Covenant.";

export const INDEPENDENT =
  "TrailerVegas is an independent project. Not affiliated with any RV manufacturer or platform.";

export const WAITLIST_HEADLINE = "Be first when we launch.";
export const WAITLIST_MICRO =
  "We'll email you when we go live in your corridor. No spam. Unsubscribe anytime. We will never sell your data.";

export const HELP_HEADLINE = "RV down? Get a local who actually works on rigs.";
export const HELP_SUBHEAD =
  "Tell us what's wrong and where you are. We'll connect you with a vetted mobile tech, tow operator, or storage provider near you.";
export const HELP_CONSENT =
  "I agree to be contacted by local service providers. I understand my information may be shared with them to provide quotes.";
export const HELP_THANKS =
  "Got it. We'll connect you with a provider near you shortly. Check your email for a confirmation.";
export const HELP_DISCLAIMER =
  "TrailerVegas is not a repair company, tow company, or insurer. We connect you with independent providers. You hire them. You pay them. You review them.";

export const PROVIDE_HEADLINE = "Get RV service leads. No shared dumps. No spam.";
export const PROVIDE_SUBHEAD =
  "Tell us what you do. We'll send you qualified, consented job requests. You pay only if you want more.";
export const PROVIDE_CONSENT =
  "I agree to be contacted by TrailerVegas about lead opportunities.";
export const PROVIDE_THANKS =
  "Thanks. We'll review your info and reach out within a few days. In the meantime, read our Trust Covenant to see how we handle reviews and rankings.";

export const TRUST_CALLOUT =
  "We're starting as an LLC. We're committing to convert to a community-owned cooperative. The contract is public. Read it.";

export const PROBLEMS = [
  {
    title: "Reviews you can't trust.",
    body: "Parks game the system. Platforms sell placement. Honest reviews get buried.",
  },
  {
    title: "Repairs you can't find.",
    body: "Mobile techs are word-of-mouth. Lead farms sell your number. Nobody shows up.",
  },
  {
    title: "Platforms that sell out.",
    body: "RVillage shut down. Campendium got ruined. The Dyrt hides charges. RV LIFE routes you wrong.",
  },
] as const;

export const BUILDING = [
  {
    title: "Places",
    body: "Verified reviews of RV parks, campgrounds, boondocking spots. Rated on what actually matters.",
  },
  {
    title: "Help",
    body: 'Mobile repair, towing, storage, detailing. Same review system. A "get help now" form that routes to real humans.',
  },
  {
    title: "Answers",
    body: "Coming later. Stack Overflow for RVs.",
  },
  {
    title: "People",
    body: "Coming later. Opt-in. Privacy-first.",
  },
] as const;

export const RIG_TYPES = [
  "Class A",
  "Class B",
  "Class C",
  "Travel Trailer",
  "5th Wheel",
  "Toy Hauler",
  "Campervan",
  "Skoolie",
  "Truck Camper",
  "Other",
] as const;

export const PROBLEM_TYPES = [
  "Engine",
  "Electrical",
  "Plumbing",
  "AC/Heating",
  "Slide-out",
  "Tire",
  "Towing",
  "Storage",
  "Other",
] as const;

export const URGENCY = [
  { value: "emergency", label: "Emergency (need help now)" },
  { value: "scheduled", label: "Scheduled (this week)" },
  { value: "planning", label: "Planning (flexible)" },
] as const;

export const SERVICE_TYPES = [
  "Mobile RV repair",
  "Towing",
  "Storage",
  "Mobile detailing",
  "Inspection",
  "Other",
] as const;

export const CERTIFIED = ["RVIA", "NRVA", "Other", "Not certified"] as const;

export const PRIVACY_TOPICS = [
  "What data we collect (waitlist emails, help form data, provider form data)",
  "How we use it",
  "Who we share it with (service providers, for help requests only)",
  "How to request deletion",
  "Cookies (if any)",
  "Contact for privacy questions",
] as const;

export const TERMS_TOPICS = [
  "TrailerVegas is a directory and routing service, not a service provider.",
  "We are not liable for the work of any provider.",
  "Reviews are user-generated. We moderate for spam and abuse, not for disagreement.",
  "Disclaimers about RV repair, towing, storage, etc.",
  "Limitation of liability.",
  "Governing law.",
] as const;

export const NEVER_SELL = "We will never sell your personal data.";
