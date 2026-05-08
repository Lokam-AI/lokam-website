export type CaseStudy = {
  slug: string;
  badge: string;
  title: string;
  meta: { label: string; value: string }[];
  heroStats: { value: string; label: string }[];
  challengeSolution?: {
    challenge: { intro: string; points: string[] };
    solution: { intro: string; points: string[] };
  };
  timeline?: {
    heading: string;
    events: { day: string; title: string; description: string }[];
  };
  quote: { text: string; author: string; location: string };
  before: { metric: string; value: string }[];
  after: { metric: string; value: string }[];
  related: { category: string; dealership: string; metric: string; href: string }[];
};

export const CHIP: Record<string, { bg: string; color: string }> = {
  "SALES FOLLOW-UP": { bg: "#D6EBF5", color: "#1B6A8A" },
  "SERVICE CSI": { bg: "#D6F5EF", color: "#0C8074" },
  "SALES & BDC": { bg: "#D6EBF5", color: "#1B6A8A" },
  "MULTI-STORE": { bg: "#FFF0D4", color: "#9A6200" },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "world-hyundai",
    badge: "Case Study",
    title: "How World Hyundai Service Raised Its Google Reviews from 4.0 to 4.8 in 8 Weeks",
    meta: [
      { label: "Dealership", value: "World Hyundai" },
      { label: "Location", value: "Matteson, IL" },
      { label: "Monthly RO's", value: "~1,100" },
      { label: "Time to Results", value: "8 weeks" },
    ],
    heroStats: [
      { value: "4.8★", label: "Google Rating (from 4.0)" },
      { value: "$410K", label: "Lifetime Revenue Recovered" },
      { value: "180", label: "At-Risk Customers Caught" },
      { value: "+20 pts", label: "CSI Score Increase" },
    ],
    challengeSolution: {
      challenge: {
        intro: "World Hyundai's service department was handling over 1,100 repair orders per month with a team of 8 advisors.",
        points: [
          "Manual CSI follow-up calls were supposed to happen within 48 hours — in practice, less than 30% were ever made.",
          "When customers had bad experiences, the dealership often found out weeks later through a 1-star Google review or an OEM survey they could no longer influence.",
          "GM Sheri Sevik estimated they were losing 60–70 at-risk customers per month to competitors, compounding into ~$250K in lost lifetime value.",
          "Service advisors were manually dialing during peak write-up hours — the worst possible time to make quality follow-up calls.",
        ],
      },
      solution: {
        intro: "World Hyundai deployed Lokam's Voice AI follow-up platform for service, integrated directly with their DMS.",
        points: [
          "AI calls every customer within 24 hours post-service and captures their honest feedback.",
          "Detractors instantly escalated to the service manager with full transcripts.",
          "Promoters automatically sent Google review links via SMS.",
          "70% contact rate: Branded caller ID with World Hyundai's name, text follow-up for customers who missed the call, and 3-layer spam filtration.",
          "Bilingual (English & Spanish) matching to customer preferences.",
        ],
      },
    },
    quote: {
      text: "\"The immediate awareness of how many mildly unsatisfied customers and truly unsatisfied customers we had in our service lane was eye-opening. And our Google review score went from 4.0 to 4.8 in a matter of weeks. Lokam helped us get in front of the issues before the customer completes the CSI survey. This also helps us with retention as well!\"",
      author: "Shvone Hicks, Service Manager, World Hyundai",
      location: "Matteson, IL",
    },
    before: [
      { metric: "CSI Follow-Up Rate", value: "< 30% within 48 hrs" },
      { metric: "At-Risk Detection", value: "Weeks later via 1-star review" },
      { metric: "Customers Lost / Month", value: "60–70 to competitors" },
      { metric: "Estimated Monthly LTV Loss", value: "~$250K" },
      { metric: "Google Rating", value: "4.0 ★" },
      { metric: "Advisor Follow-Up Method", value: "Manual during peak write-up hours" },
    ],
    after: [
      { metric: "CSI Follow-Up Rate", value: "100% within 24 hrs" },
      { metric: "At-Risk Detection", value: "Same day with full transcript" },
      { metric: "At-Risk Customers Caught", value: "180 in 8 weeks" },
      { metric: "Lifetime Revenue Recovered", value: "$410,000" },
      { metric: "Google Rating", value: "4.8 ★" },
      { metric: "BDC Hours Saved", value: "100 hrs ($3,000 savings)" },
    ],
    related: [
      { category: "SALES FOLLOW-UP", dealership: "World Hyundai", metric: "38 additional cars sold", href: "/case-studies/world-hyundai-sales" },
      { category: "SERVICE CSI", dealership: "World Kia", metric: "$320K lifetime revenue recovered", href: "/case-studies/world-kia" },
      { category: "SALES FOLLOW-UP", dealership: "World Kia", metric: "34 additional cars sold", href: "/case-studies/world-kia-sales" },
    ],
  },

  {
    slug: "world-hyundai-sales",
    badge: "Case Study",
    title: "How World Hyundai Sold 38 Additional Cars from Unsold Visitors in 8 Weeks",
    meta: [
      { label: "Dealership", value: "World Hyundai" },
      { label: "Location", value: "Matteson, IL" },
      { label: "Monthly Unsold Traffic", value: "~650" },
      { label: "Time to Results", value: "8 weeks" },
    ],
    heroStats: [
      { value: "38", label: "Additional Cars Sold" },
      { value: "~$90K", label: "Gross Profit Added" },
      { value: "67%", label: "Contact Rate" },
      { value: "335", label: "Opportunities Escalated" },
    ],
    challengeSolution: {
      challenge: {
        intro: "World Hyundai had an average of 650 unsold showroom visitors per month.",
        points: [
          "Before Lokam, follow-up was occurring with customers that were highly likely to return anyway — the real lost opportunities were going untouched.",
          "The team knew the unsold desklog was an incredible opportunity, but the lack of one or two full-time qualified managers to make the calls was the friction.",
          "General Sales Manager Teri Bisbikis estimated they were allowing 25 deals a month to buy elsewhere.",
        ],
      },
      solution: {
        intro: "World Hyundai deployed Lokam's Voice AI follow-up platform for calling unsold visitors, integrated directly with their CRM.",
        points: [
          "Empathetic AI calls every customer within 24 hours of a showroom visit.",
          "Has an honest conversation and identifies the primary objections holding them back.",
          "Filters high-intent prospects and alerts the sales team for recovery.",
          "Instead of battling with shoppers, the sales team filters high-intent leads and closes deals.",
        ],
      },
    },
    quote: {
      text: "\"We knew that we should see an increase in deals if the time was spent on the info we received from the agent, and we were not disappointed. I believe without the discipline Lokam's alerts created around dialling, we would never have sold 38 cars in 2 months.\"",
      author: "Terri Bisbikis, General Sales Manager, World Hyundai",
      location: "Matteson, IL",
    },
    before: [
      { metric: "Follow-Up Focus", value: "Customers likely to return anyway" },
      { metric: "Deals Lost Monthly", value: "~25 to competitors" },
      { metric: "Dedicated Follow-Up Managers", value: "None" },
      { metric: "Unsold Desklog Coverage", value: "Inconsistent" },
      { metric: "Contact Rate", value: "Low / ad hoc" },
      { metric: "BDC Cost / Month", value: "~$4,000" },
    ],
    after: [
      { metric: "Follow-Up Focus", value: "100% of unsold visitors within 24 hrs" },
      { metric: "Additional Cars Sold", value: "38 in 8 weeks" },
      { metric: "Opportunities Escalated", value: "335 high-intent leads" },
      { metric: "Unsold Desklog Coverage", value: "Fully automated + smart escalation" },
      { metric: "Contact Rate", value: "67%" },
      { metric: "BDC Cost Savings", value: "$8,000 ($4,000/mo)" },
    ],
    related: [
      { category: "SERVICE CSI", dealership: "World Hyundai", metric: "$410K lifetime revenue recovered", href: "/case-studies/world-hyundai" },
      { category: "SERVICE CSI", dealership: "World Kia", metric: "$320K lifetime revenue recovered", href: "/case-studies/world-kia" },
      { category: "SALES FOLLOW-UP", dealership: "World Kia", metric: "34 additional cars sold", href: "/case-studies/world-kia-sales" },
    ],
  },

  {
    slug: "world-kia",
    badge: "Case Study",
    title: "How World Kia Raised Their Google Reviews from 4.1 to 4.8 in 8 Weeks and Recovered $320K in Customer Lifetime Value",
    meta: [
      { label: "Dealership", value: "World Kia" },
      { label: "Location", value: "Joliet, IL" },
      { label: "Monthly RO's", value: "~1,200" },
      { label: "Time to Results", value: "8 weeks" },
    ],
    heroStats: [
      { value: "4.8★", label: "Google Rating (from 4.1)" },
      { value: "$320K", label: "Lifetime Revenue Recovered" },
      { value: "160", label: "At-Risk Customers Caught" },
      { value: "+20 pts", label: "CSI Score Increase" },
    ],
    challengeSolution: {
      challenge: {
        intro: "World Kia's service department was handling over 1,200 repair orders per month — with no reliable way to catch unhappy customers before they churned.",
        points: [
          "Manual CSI follow-up surveys were sent to customers, which had a less than 15% response rate.",
          "When customers had bad experiences, the dealership often found out weeks later through a 1-star Google review or an OEM survey.",
          "Customer Service Manager Erica Rocco estimated they were losing 70–80 at-risk customers per month to competitors, compounding into ~$150K in lost lifetime value.",
        ],
      },
      solution: {
        intro: "World Kia deployed Lokam's Voice AI follow-up platform for service, integrated directly with their DMS.",
        points: [
          "AI calls every customer within 24 hours post-service and captures their honest feedback.",
          "Detractors instantly escalated to the service manager with full transcripts — before the OEM survey hits their inbox.",
          "Promoters automatically sent Google review links via SMS.",
          "70% contact rate: Branded caller ID with World Kia's name, SMS follow-up for missed calls, and 3-layer spam filtration.",
          "Bilingual (English & Spanish) matching to customer preferences.",
        ],
      },
    },
    quote: {
      text: "\"The number of detractors helps me deflect the negative feedback that may happen on a Kia survey by allowing me to address it before the survey is in the email.\"",
      author: "Erica Rocco, Customer Service Manager, World Kia Joliet",
      location: "Joliet, IL",
    },
    before: [
      { metric: "CSI Follow-Up Rate", value: "< 30% within 48 hrs" },
      { metric: "At-Risk Detection", value: "Weeks later via 1-star review" },
      { metric: "Detractor Interception", value: "None — surveys sent before issues resolved" },
      { metric: "Estimated Monthly LTV Loss", value: "~$200K" },
      { metric: "Google Rating", value: "4.1 ★" },
      { metric: "BDC Follow-Up Hours", value: "~100 hrs/month manual calls" },
    ],
    after: [
      { metric: "CSI Follow-Up Rate", value: "100% within 24 hrs" },
      { metric: "At-Risk Detection", value: "Same day — before Kia survey is sent" },
      { metric: "At-Risk Customers Caught", value: "160 in 8 weeks (2,400 ROs)" },
      { metric: "Lifetime Revenue Recovered", value: "$320,000 ($2,000/detractor)" },
      { metric: "Google Rating", value: "4.8 ★" },
      { metric: "BDC Cost Savings", value: "$3,000 (100 hrs saved)" },
    ],
    related: [
      { category: "SERVICE CSI", dealership: "World Hyundai", metric: "$410K lifetime revenue recovered", href: "/case-studies/world-hyundai" },
      { category: "SALES FOLLOW-UP", dealership: "World Hyundai", metric: "38 additional cars sold", href: "/case-studies/world-hyundai-sales" },
      { category: "SALES FOLLOW-UP", dealership: "World Kia", metric: "34 additional cars sold", href: "/case-studies/world-kia-sales" },
    ],
  },

  {
    slug: "world-kia-sales",
    badge: "Case Study",
    title: "How World Kia Sold 34 Additional Cars from Unsold Visitors in 8 Weeks",
    meta: [
      { label: "Dealership", value: "World Kia" },
      { label: "Location", value: "Joliet, IL" },
      { label: "Monthly Unsold Traffic", value: "~700" },
      { label: "Time to Results", value: "8 weeks" },
    ],
    heroStats: [
      { value: "34", label: "Additional Cars Sold" },
      { value: "~$80K", label: "Gross Profit Added" },
      { value: "65%", label: "Contact Rate" },
      { value: "285", label: "Opportunities Escalated" },
    ],
    challengeSolution: {
      challenge: {
        intro: "World Kia had an average of 700 unsold showroom visitors per month — with no systematic follow-up to bring them back.",
        points: [
          "Before Lokam, follow-up was only happening with customers who were already likely to return — the easy ones.",
          "With a mix of English and Spanish-speaking customers, the lack of qualified bilingual managers to make calls was the friction point.",
          "General Sales Manager Camille Wright estimated they were allowing ~20 deals a month to go to competitors with no outreach.",
        ],
      },
      solution: {
        intro: "World Kia deployed Lokam's Voice AI follow-up platform for unsold visitors, integrated directly with their CRM.",
        points: [
          "Empathetic AI calls every unsold visitor within 24 hours of their showroom visit.",
          "Has an honest conversation and identifies the primary objections holding them back.",
          "Filters high-intent prospects and instantly alerts the sales team for recovery.",
          "Bilingual (English & Spanish) — matching each customer's language preference automatically.",
        ],
      },
    },
    quote: {
      text: "\"Prior to having Lokam, follow-up on unsold traffic was not being executed at the rate it should have been. The alerts pushed us toward working on it as it should have. So we are now selling 18 more cars a month.\"",
      author: "Camille Wright, General Sales Manager, World Kia",
      location: "Joliet, IL",
    },
    before: [
      { metric: "Follow-Up Focus", value: "Customers likely to return anyway" },
      { metric: "Deals Lost Monthly", value: "~20 to competitors" },
      { metric: "Bilingual Coverage", value: "No qualified managers available" },
      { metric: "Unsold Desklog Coverage", value: "Inconsistent" },
      { metric: "Contact Rate", value: "Low / ad hoc" },
      { metric: "BDC Cost / Month", value: "~$4,000" },
    ],
    after: [
      { metric: "Follow-Up Focus", value: "100% of unsold visitors within 24 hrs" },
      { metric: "Additional Cars Sold", value: "34 in 8 weeks" },
      { metric: "Opportunities Escalated", value: "285 high-intent leads" },
      { metric: "Unsold Desklog Coverage", value: "Fully automated + smart escalation" },
      { metric: "Contact Rate", value: "65%" },
      { metric: "BDC Cost Savings", value: "$8,000 ($4,000/mo)" },
    ],
    related: [
      { category: "SERVICE CSI", dealership: "World Kia", metric: "$320K lifetime revenue recovered", href: "/case-studies/world-kia" },
      { category: "SALES FOLLOW-UP", dealership: "World Hyundai", metric: "38 additional cars sold", href: "/case-studies/world-hyundai-sales" },
      { category: "SERVICE CSI", dealership: "World Hyundai", metric: "$410K lifetime revenue recovered", href: "/case-studies/world-hyundai" },
    ],
  },
];

export function getStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
