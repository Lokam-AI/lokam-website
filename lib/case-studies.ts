export type CaseStudy = {
  slug: string;
  badge: string;
  title: string;
  meta: { label: string; value: string }[];
  heroStats: { value: string; label: string }[];
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
    title: "How World Hyundai Service Raised Their Google Reviews from 4.0 to 4.8 in 8 Weeks and Recovered $410K in Customer Lifetime Revenue",
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
    quote: {
      text: "\"The immediate awareness of how many mildly unsatisfied customers and truly unsatisfied customers we had in our service lane was eye-opening. And our Google review score went from 4.0 to 4.8 in a matter of weeks. Lokam helped us get in front of the issues before the customer completes the CSI survey. This also helps us with retention as well!\"",
      author: "Shvone Hicks,Service Manager, World Hyundai",
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
    quote: {
      text: "\"We knew that we should see an increase in deals if the time was spent on the info we received from the agent, and we were not disappointed. I believe without the discipline Lokam's alerts created around dialing, we would never have sold 38 cars in 2 months.\"",
      author: "Terri Bisbikis,General Sales Manager, World Hyundai",
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
    ],
  },
];

export function getStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
