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
    slug: "metro-toyota",
    badge: "Case Study",
    title: "Metro Toyota Added $84,000/Month With Lokam's AI Follow-Up",
    meta: [
      { label: "Dealership", value: "Metro Toyota" },
      { label: "Location", value: "Phoenix, AZ" },
      { label: "Deployed", value: "Feb 2024" },
      { label: "Time to Results", value: "60 days" },
    ],
    heroStats: [
      { value: "91%", label: "CSI Contact Rate" },
      { value: "$84K", label: "Monthly Revenue Added" },
      { value: "38", label: "Customers Saved" },
      { value: "4.6★", label: "Google Rating" },
    ],
    quote: {
      text: "\"I was skeptical that an AI could handle a detractor call with empathy. Then I listened to the transcript. Lokam de-escalated a furious customer, collected the full story, and had my service manager calling back within 10 minutes. That customer left us a 5-star review.\"",
      author: "Derek Holt,General Manager, Metro Toyota",
      location: "Phoenix, AZ",
    },
    before: [
      { metric: "CSI Contact Rate", value: "52%" },
      { metric: "Calls Made / Month", value: "~300 of 600" },
      { metric: "At-Risk Detected Early", value: "Rarely" },
      { metric: "Google Rating", value: "3.9 ★" },
      { metric: "OEM CSI Bonus", value: "Missed 4 months straight" },
      { metric: "Advisor Time on Calls", value: "~3 hrs/day" },
    ],
    after: [
      { metric: "CSI Contact Rate", value: "91%" },
      { metric: "Calls Made / Month", value: "620 of 830" },
      { metric: "At-Risk Detected Early", value: "Every time" },
      { metric: "Google Rating", value: "4.6 ★" },
      { metric: "OEM CSI Bonus", value: "Hit every month since" },
      { metric: "Advisor Time on Calls", value: "0 hrs/day" },
    ],
    related: [
      { category: "SALES FOLLOW-UP", dealership: "Sunrise Ford", metric: "+$61k/mo recovered", href: "/case-studies/sunrise-ford" },
      { category: "SERVICE CSI", dealership: "Greenfield Honda", metric: "CSI score: 52 → 94", href: "/case-studies/riverside-honda" },
      { category: "SALES FOLLOW-UP", dealership: "Lakeside Chevrolet", metric: "31 deals closed from walk-outs", href: "/case-studies/capital-auto-group" },
    ],
  },

  {
    slug: "riverside-honda",
    badge: "Case Study",
    title: "Riverside Honda Caught Every At-Risk Customer,and Turned Them Into Repeat Buyers",
    meta: [
      { label: "Dealership", value: "Riverside Honda" },
      { label: "Location", value: "Riverside, CA" },
      { label: "Deployed", value: "Mar 2025" },
      { label: "Time to Results", value: "45 days" },
    ],
    heroStats: [
      { value: "94%", label: "CSI Contact Rate" },
      { value: "+$17K", label: "Monthly Revenue Added" },
      { value: "+11 pts", label: "CSI Score Lift" },
      { value: "4.7★", label: "Google Rating" },
    ],
    quote: {
      text: "\"We were losing customers we didn't even know were unhappy. Lokam started catching them the same day they left the service lane. Within a month, my service director stopped dreading the OEM report,we were actually excited to see the numbers.\"",
      author: "Maria Castillo,General Manager, Riverside Honda",
      location: "Riverside, CA",
    },
    before: [
      { metric: "CSI Contact Rate", value: "58%" },
      { metric: "At-Risk Customers Caught", value: "Occasionally" },
      { metric: "Detractor Follow-Up Speed", value: "3–5 days" },
      { metric: "Google Rating", value: "4.2 ★" },
      { metric: "Monthly Gross Recovered", value: "~$0" },
      { metric: "Advisor Time on CSI Calls", value: "~2 hrs/day" },
    ],
    after: [
      { metric: "CSI Contact Rate", value: "94%" },
      { metric: "At-Risk Customers Caught", value: "Every single one" },
      { metric: "Detractor Follow-Up Speed", value: "Same day" },
      { metric: "Google Rating", value: "4.7 ★" },
      { metric: "Monthly Gross Recovered", value: "+$17,000" },
      { metric: "Advisor Time on CSI Calls", value: "0 hrs/day" },
    ],
    related: [
      { category: "SERVICE CSI", dealership: "Metro Toyota", metric: "+$84k/mo recovered", href: "/case-studies/metro-toyota" },
      { category: "SERVICE CSI", dealership: "Valley Ford", metric: "$4 cost-per-CSI-contact", href: "/case-studies/valley-ford" },
      { category: "SERVICE CSI", dealership: "Pacific Subaru", metric: "NPS: 54 → 66", href: "/case-studies/pacific-subaru" },
    ],
  },

  {
    slug: "valley-ford",
    badge: "Case Study",
    title: "Valley Ford Cut CSI Follow-Up Cost by 90% While Doubling Survey Response Rates",
    meta: [
      { label: "Dealership", value: "Valley Ford" },
      { label: "Location", value: "Phoenix, AZ" },
      { label: "Deployed", value: "May 2025" },
      { label: "Time to Results", value: "60 days" },
    ],
    heroStats: [
      { value: "$4", label: "Cost Per CSI Contact" },
      { value: "90%", label: "Cost Reduction" },
      { value: "2×", label: "Survey Response Rate" },
      { value: "100%", label: "CSI Calls Automated" },
    ],
    quote: {
      text: "\"We were spending $40 per CSI contact and still missing half our customers. Lokam brought that to $4 and we're now reaching more people than ever. Our BDC team is finally focused on the conversations that actually need a human.\"",
      author: "James Whitfield,BDC Director, Valley Ford",
      location: "Phoenix, AZ",
    },
    before: [
      { metric: "Cost Per CSI Contact", value: "$40" },
      { metric: "Survey Response Rate", value: "18%" },
      { metric: "CSI Contact Rate", value: "55%" },
      { metric: "BDC Hours on CSI Calls", value: "~20 hrs/week" },
      { metric: "OEM Score (FoRD)", value: "Below threshold" },
      { metric: "Detractors Resolved", value: "Rarely" },
    ],
    after: [
      { metric: "Cost Per CSI Contact", value: "$4" },
      { metric: "Survey Response Rate", value: "36%" },
      { metric: "CSI Contact Rate", value: "90%" },
      { metric: "BDC Hours on CSI Calls", value: "0 hrs/week" },
      { metric: "OEM Score (Ford)", value: "Above threshold" },
      { metric: "Detractors Resolved", value: "Every flagged case" },
    ],
    related: [
      { category: "SERVICE CSI", dealership: "Metro Toyota", metric: "+$84k/mo recovered", href: "/case-studies/metro-toyota" },
      { category: "SERVICE CSI", dealership: "Riverside Honda", metric: "+$17k/mo & 94% contact rate", href: "/case-studies/riverside-honda" },
      { category: "MULTI-STORE", dealership: "Capital Auto Group", metric: "$31k ROI in 90 days", href: "/case-studies/capital-auto-group" },
    ],
  },

  {
    slug: "sunrise-ford",
    badge: "Case Study",
    title: "Sunrise Ford Closed 31 Walk-Outs in 30 Days,Without Adding a Single Sales Rep",
    meta: [
      { label: "Dealership", value: "Sunrise Ford" },
      { label: "Location", value: "Dallas, TX" },
      { label: "Deployed", value: "Oct 2025" },
      { label: "Time to Results", value: "30 days" },
    ],
    heroStats: [
      { value: "+$61K", label: "Monthly Revenue" },
      { value: "31", label: "Walk-Outs Closed" },
      { value: "68%", label: "Contact Rate" },
      { value: "$1,967", label: "Avg. Front-End Gross" },
    ],
    quote: {
      text: "\"I knew we were leaving money on the table with our unsold log, but I had no idea how much. Thirty-one deals in the first month from customers we'd written off. That's not a tweak,that's a completely different revenue line.\"",
      author: "Terrence Okafor,Sales Director, Sunrise Ford",
      location: "Dallas, TX",
    },
    before: [
      { metric: "Unsold Follow-Up Rate", value: "~30% within 48 hrs" },
      { metric: "Walk-Out Re-Engagement", value: "3–5 per month" },
      { metric: "Contact Rate (Unsold)", value: "38%" },
      { metric: "Monthly Revenue from Unsold", value: "~$6,000" },
      { metric: "Avg. Days to Re-Engage", value: "7–10 days" },
      { metric: "BDC Effort on Unsold Log", value: "~4 hrs/day" },
    ],
    after: [
      { metric: "Unsold Follow-Up Rate", value: "100% within 4 hrs" },
      { metric: "Walk-Out Re-Engagement", value: "31 in first month" },
      { metric: "Contact Rate (Unsold)", value: "68%" },
      { metric: "Monthly Revenue from Unsold", value: "+$61,000" },
      { metric: "Avg. Days to Re-Engage", value: "< 24 hrs" },
      { metric: "BDC Effort on Unsold Log", value: "0 hrs/day" },
    ],
    related: [
      { category: "SALES FOLLOW-UP", dealership: "World Auto Group", metric: "$180k/mo revenue", href: "/case-studies/world-auto-group" },
      { category: "SALES & BDC", dealership: "Capital Auto Group", metric: "$31k ROI in 90 days", href: "/case-studies/capital-auto-group" },
      { category: "SERVICE CSI", dealership: "Metro Toyota", metric: "+$84k/mo recovered", href: "/case-studies/metro-toyota" },
    ],
  },

  {
    slug: "capital-auto-group",
    badge: "Case Study",
    title: "Capital Auto Group Scaled AI Follow-Up Across 3 Rooftops,Zero BDC Headcount Added",
    meta: [
      { label: "Dealership Group", value: "Capital Auto Group" },
      { label: "Location", value: "Atlanta, GA" },
      { label: "Deployed", value: "Jul 2025" },
      { label: "Time to Results", value: "90 days" },
    ],
    heroStats: [
      { value: "$31K", label: "ROI in 90 Days" },
      { value: "3×", label: "Stores Deployed" },
      { value: "0", label: "BDC Headcount Added" },
      { value: "83%", label: "Avg. Contact Rate" },
    ],
    quote: {
      text: "\"Rolling out to three stores at once felt risky, but the onboarding was smooth and the results were visible within weeks. We got a multi-rooftop AI follow-up operation running without hiring a single person. That's the story I keep telling other GMs.\"",
      author: "David Park,COO, Capital Auto Group",
      location: "Atlanta, GA",
    },
    before: [
      { metric: "Avg. Contact Rate (Group)", value: "51%" },
      { metric: "BDC Headcount", value: "11 advisors" },
      { metric: "Follow-Up Consistency", value: "Varies by store" },
      { metric: "Monthly Revenue Recovered", value: "Ad hoc" },
      { metric: "CSI Bonus Hit Rate", value: "1 of 3 stores" },
      { metric: "Time to Deploy Campaigns", value: "Days of manual setup" },
    ],
    after: [
      { metric: "Avg. Contact Rate (Group)", value: "83%" },
      { metric: "BDC Headcount", value: "11 advisors (unchanged)" },
      { metric: "Follow-Up Consistency", value: "Identical across all stores" },
      { metric: "Monthly Revenue Recovered", value: "$31k in first 90 days" },
      { metric: "CSI Bonus Hit Rate", value: "3 of 3 stores" },
      { metric: "Time to Deploy Campaigns", value: "Same-day activation" },
    ],
    related: [
      { category: "SALES FOLLOW-UP", dealership: "Sunrise Ford", metric: "31 walk-outs closed in 30 days", href: "/case-studies/sunrise-ford" },
      { category: "SALES & BDC", dealership: "World Auto Group", metric: "$180k/mo revenue", href: "/case-studies/world-auto-group" },
      { category: "SERVICE CSI", dealership: "Valley Ford", metric: "90% cost reduction on CSI", href: "/case-studies/valley-ford" },
    ],
  },

  {
    slug: "pacific-subaru",
    badge: "Case Study",
    title: "Pacific Subaru Went From Group Middle to Group #1 in NPS,in Under 90 Days",
    meta: [
      { label: "Dealership", value: "Pacific Subaru" },
      { label: "Location", value: "Portland, OR" },
      { label: "Deployed", value: "Aug 2025" },
      { label: "Time to Results", value: "75 days" },
    ],
    heroStats: [
      { value: "+12 pts", label: "NPS Increase" },
      { value: "54 → 66", label: "NPS Score" },
      { value: "#1", label: "In 12-Store Group" },
      { value: "91%", label: "CSI Contact Rate" },
    ],
    quote: {
      text: "\"We had been stuck in the middle of our group's NPS rankings for three years. We tried training, we tried scripts, we tried incentives. Nothing moved the needle like consistent post-service follow-up did. Twelve points in 75 days. I didn't think that was possible.\"",
      author: "Naomi Reyes,Service Director, Pacific Subaru",
      location: "Portland, OR",
    },
    before: [
      { metric: "NPS Score", value: "54" },
      { metric: "Group NPS Ranking", value: "7th of 12" },
      { metric: "CSI Contact Rate", value: "61%" },
      { metric: "Detractor Resolution Rate", value: "22%" },
      { metric: "Branded Caller ID Active", value: "No" },
      { metric: "Post-Service Contact Speed", value: "3–7 days" },
    ],
    after: [
      { metric: "NPS Score", value: "66" },
      { metric: "Group NPS Ranking", value: "#1 of 12" },
      { metric: "CSI Contact Rate", value: "91%" },
      { metric: "Detractor Resolution Rate", value: "78%" },
      { metric: "Branded Caller ID Active", value: "Yes" },
      { metric: "Post-Service Contact Speed", value: "Same day" },
    ],
    related: [
      { category: "SERVICE CSI", dealership: "Riverside Honda", metric: "+$17k/mo & +11pts CSI", href: "/case-studies/riverside-honda" },
      { category: "SERVICE CSI", dealership: "Valley Ford", metric: "2x survey response rate", href: "/case-studies/valley-ford" },
      { category: "SERVICE CSI", dealership: "Metro Toyota", metric: "91% contact rate", href: "/case-studies/metro-toyota" },
    ],
  },

  {
    slug: "world-auto-group",
    badge: "Case Study",
    title: "World Auto Group Turned Unsold Desklog and Service Detractors into $180k/Month",
    meta: [
      { label: "Dealership Group", value: "World Auto Group" },
      { label: "Location", value: "Chicago, IL" },
      { label: "Deployed", value: "Apr 2025" },
      { label: "Time to Results", value: "60 days" },
    ],
    heroStats: [
      { value: "$180K", label: "Monthly Revenue" },
      { value: "4", label: "Rooftops" },
      { value: "15–20", label: "Extra Cars / Month" },
      { value: "87%", label: "Avg. Contact Rate" },
    ],
    quote: {
      text: "\"I backed Lokam because I saw it working at my own stores first. Across four rooftops, we're recovering $180k a month that was just walking out the door. The ROI conversation doesn't take long.\"",
      author: "Scott Falcone,Owner, World Auto Group",
      location: "Chicago, IL",
    },
    before: [
      { metric: "Unsold Recovery Rate", value: "~4% of desklog" },
      { metric: "Avg. Contact Rate (Group)", value: "49%" },
      { metric: "Extra Cars from Follow-Up", value: "3–4 per month" },
      { metric: "Service Detractor Resolution", value: "Inconsistent" },
      { metric: "Monthly Revenue Recovered", value: "~$18,000" },
      { metric: "BDC Spans Across Rooftops", value: "Siloed by store" },
    ],
    after: [
      { metric: "Unsold Recovery Rate", value: "~16% of desklog" },
      { metric: "Avg. Contact Rate (Group)", value: "87%" },
      { metric: "Extra Cars from Follow-Up", value: "15–20 per month" },
      { metric: "Service Detractor Resolution", value: "Every flagged customer" },
      { metric: "Monthly Revenue Recovered", value: "$180,000" },
      { metric: "BDC Spans Across Rooftops", value: "Unified AI layer" },
    ],
    related: [
      { category: "SALES & BDC", dealership: "Capital Auto Group", metric: "$31k ROI, 3 rooftops", href: "/case-studies/capital-auto-group" },
      { category: "SALES FOLLOW-UP", dealership: "Sunrise Ford", metric: "31 walk-outs closed", href: "/case-studies/sunrise-ford" },
      { category: "SERVICE CSI", dealership: "Metro Toyota", metric: "+$84k/mo recovered", href: "/case-studies/metro-toyota" },
    ],
  },
];

export function getStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
