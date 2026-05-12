export type BlogSection = {
  heading: string;
  paragraphs: string[];
  pullQuote?: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  intro: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  conclusion: string;
};

export const CHIP_STYLES: Record<string, { bg: string; color: string }> = {
  "SERVICES & CSI": { bg: "#D6F5EF", color: "#0C8074" },
  "SALES & BDC": { bg: "#D6EBF5", color: "#1B6A8A" },
  "AI AUTOMATIONS": { bg: "#E8E4FA", color: "#5A4FC0" },
  "RECENT NEWS": { bg: "#FFF0D4", color: "#9A6200" },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-bdc-is-losing-customers-before-the-workday-even-starts",
    category: "SERVICES & CSI",
    title: "Why Your BDC Loses Customers Before 9 AM",
    excerpt:
      "Late response times are silently costing dealerships leads, deals, and reputation,and most stores don't know it's happening.",
    date: "Jan 2026",
    readTime: "4 min read",
    intro:
      "Most dealership managers assume their BDC is working. The phones are staffed, the leads are being worked, and the voicemails are getting returned. What they don't see is the customer who submitted a lead at 7:43 AM, never heard back before noon, and signed paperwork at a competing store by 2 PM.",
    keyTakeaways: [
      "78% of customers buy from the first dealership to respond,not the one they originally preferred (NADA, 2025)",
      "The average dealership BDC takes 4.2 hours to respond to a web lead submitted after hours",
      "Leads contacted within 5 minutes convert at 8x the rate of leads worked after 30 minutes (Autotrader, 2025)",
      "Over 60% of dealer inquiries arrive outside of standard BDC operating hours",
    ],
    sections: [
      {
        heading: "Why Can't Your BDC Consistently Hit the 5-Minute Response Rule?",
        paragraphs: [
          "Speed-to-lead is the most studied metric in automotive retail, and the data is unambiguous: every minute that passes after a customer submits an inquiry, the probability of contact drops. According to Autotrader's 2025 Digital Retail Study, the difference between a 5-minute response and a 30-minute response is an 8x gap in conversion rate.",
          "The problem is structural. Most BDCs don't start until 9 AM. Most automotive leads,especially for service appointments and sales inquiries,come in between 7 and 9 in the morning, and again between 6 and 9 at night. Your BDC team is clocking out exactly when your customers are coming online.",
          "What happens to those leads? They get batched into the next morning's queue. By then, the customer has already visited three other dealership websites, compared prices, and possibly scheduled an appointment with a competitor who had a chat tool that answered at 8:15 PM.",
        ],
        pullQuote:
          "Every minute that passes after a customer submits an inquiry, the probability of contact drops.",
      },
      {
        heading: "Why Are After-Hours Inquiries Your Highest-Intent Customers?",
        paragraphs: [
          "There's a common misconception that after-hours leads are lower quality,casual browsers who aren't serious yet. The data says the opposite. A customer researching at 9 PM is typically deep in the decision process. They've narrowed down their options, they know what they want, and they're looking for a dealership that makes it easy.",
          "J.D. Power's 2025 U.S. Sales Satisfaction Study found that customers who received a response within one hour of an evening inquiry were significantly more likely to rate their purchase experience highly,and more likely to complete their purchase at that dealership. The customer who reaches out at 8 PM isn't less serious. They're just on a different schedule than your BDC.",
        ],
      },
      {
        heading: "What Is the Hidden Reputation Cost of a Slow BDC Response?",
        paragraphs: [
          "Beyond the lost sale, slow response times are eroding your reputation in ways that are hard to trace. When a customer reaches out and doesn't hear back, they don't always write a negative review,but they stop recommending you. They choose someone else next time. They tell their brother-in-law about how the dealership 'never got back to them.'",
          "Dealerships with consistent sub-30-minute response rates score 12 points higher on Google review sentiment on average, according to a 2025 analysis by DealerSocket. The connection between responsiveness and reputation isn't coincidental,customers correlate how quickly you respond pre-sale with how attentive you'll be post-sale.",
        ],
      },
      {
        heading: "What Do Top-Performing BDCs Do Differently?",
        paragraphs: [
          "The highest-performing BDCs in 2026 share one operational trait: they don't rely on humans to make first contact. AI-powered response tools handle the initial acknowledgment instantly,at any hour,and then pass warm, engaged leads to a human BDC rep during business hours.",
          "This isn't about replacing your BDC team. It's about extending their capacity to cover the hours when customers are most active but your team isn't on the clock. The best BDCs treat their AI layer as a night shift,one that never calls in sick and costs a fraction of what an additional FTE would.",
          "Dealerships that have deployed always-on AI response tools report contact rate improvements of 35–55% within the first 90 days, with the sharpest gains coming from the 6 PM–9 AM window. The leads were always there. The gap was in coverage.",
        ],
      },
    ],
    conclusion:
      "Your BDC isn't failing because your team isn't trying hard enough. It's failing because there's a structural timing gap between when customers reach out and when your team is available to respond. Close that gap,whether through extended BDC hours, AI-assisted first response, or both,and you'll find more deals hiding in your existing lead volume than you'd expect.",
  },

  {
    slug: "the-hidden-cost-of-a-single-missed-csi-call",
    category: "SERVICES & CSI",
    title: "The Hidden Cost of a Single Missed CSI Call",
    excerpt:
      "A missed CSI call isn't just a missed survey,it's a negative review waiting to happen and a customer walking to your competitor.",
    date: "Jan 2026",
    readTime: "3 min read",
    intro:
      "A missed CSI call feels like a small thing. With 600 customers to follow up on every month and a BDC team that's already stretched, one call slipping through the cracks seems insignificant. But that single missed call sets off a chain reaction that costs far more than the survey score.",
    keyTakeaways: [
      "A 1-point drop in CSI score can cost a dealership $15,000–$40,000 in annual OEM bonus payments",
      "Customers who aren't contacted after service are 3x more likely to write a negative review (J.D. Power, 2025)",
      "Only 23% of dealerships achieve a 90%+ CSI contact rate using human-only follow-up",
      "A dissatisfied customer who receives a direct follow-up call is 5x more likely to return for their next service visit",
    ],
    sections: [
      {
        heading: "Why Is the CSI Survey Score the Last Thing to Worry About?",
        paragraphs: [
          "Most dealership managers think of a missed CSI call in terms of a survey that didn't get returned. That's the least of your problems. The real damage begins before the survey ever arrives.",
          "When a customer leaves your service lane with an unresolved concern,a repair they didn't understand, a charge they felt was unclear, a wait time that ran long,they leave with a story. If no one from your store calls to check in, that story gets told to friends, posted online, or quietly filed away as a reason not to return. The CSI survey score is just the symptom. The missed follow-up call is the cause.",
        ],
        pullQuote:
          "The CSI survey score is just the symptom. The missed follow-up call is the cause.",
      },
      {
        heading: "What Does a Single CSI Detractor Actually Cost Your Dealership?",
        paragraphs: [
          "Walk through the math. A service customer spends an average of $600–$800 per visit and visits 1.8 times per year, according to NADA 2025 industry data. Losing that customer to a competitor after one poor experience means losing $1,100–$1,400 in annual service revenue,before accounting for any future vehicle purchase.",
          "Now multiply that across the detractors you're not catching each month. At a typical volume of 800 service customers per month, even a 5% detractor rate means 40 customers per month who had a bad experience. If your contact rate is 60%, you're missing 16 of those detractors every single month. At $1,200 lifetime annual value each, that's nearly $20,000 in recoverable annual revenue slipping away,not from one missed call, but from the cumulative pattern of not reaching the people who needed to hear from you.",
        ],
      },
      {
        heading: "What OEM Bonus Are You Leaving on the Table?",
        paragraphs: [
          "CSI scores directly affect OEM bonus eligibility at most franchises. Toyota, Honda, Ford, GM, and others all tie dealer support programs, marketing co-op dollars, and allocation preferences to CSI performance. A dealership that maintains a top-quartile CSI score can earn $30,000–$80,000+ more per year in OEM incentives than one that sits in the bottom half.",
          "The irony is that many dealers don't lose their CSI bonus because they had bad service interactions,they lose it because they didn't follow up after a mediocre one. A customer who felt lukewarm about their visit can still give you a top-box score if someone calls to check in, answers their lingering question, and makes them feel like they mattered.",
        ],
      },
      {
        heading: "How Do You Prevent the Negative Review That Didn't Have to Happen?",
        paragraphs: [
          "For every 10 customers who have a poor experience, research suggests only 1 will leave a public review,but that 1 is overwhelmingly likely to be negative. What most dealerships don't realize is that a proactive call from the store often prevents that review from ever being written.",
          "A customer who was mildly frustrated by a long wait and got a call saying 'We noticed your visit ran over,we're sorry for the inconvenience, and we'd love to make it right next time' is far less likely to open Google reviews that evening than one who heard nothing. The call doesn't just protect the score. It defuses the frustration.",
        ],
      },
      {
        heading: "Why 90% Contact Rate Is the Threshold That Matters",
        paragraphs: [
          "Industry benchmarking consistently shows a performance cliff at 90% CSI contact rate. Dealerships above that threshold show significantly better CSI scores, OEM bonus attainment, and service customer retention than those below it.",
          "The challenge is that hitting 90%+ with a human team requires calling 7–8 times per customer who doesn't pick up, across different times of day and days of the week. Most BDC advisors call twice. Reaching the threshold consistently requires either massive staffing investment or a tool that can make those persistent, variable-time calls automatically.",
        ],
      },
    ],
    conclusion:
      "No single missed call destroys a dealership. But the pattern of missed calls,of detractors who weren't caught, of lukewarm customers who drifted to a competitor, of OEM bonuses that fell just short,adds up to a number that would shock most general managers. The cost isn't in the call you didn't make. It's in the customer you didn't save.",
  },

  {
    slug: "what-unsold-customers-actually-want-to-hear-and-when",
    category: "SALES & BDC",
    title: "What Unsold Customers Want to Hear (And When)",
    excerpt:
      "Most dealerships follow up too late, too generically, or not at all. Here's what actually moves the needle on unsold desklog re-engagement.",
    date: "Feb 2026",
    readTime: "5 min read",
    intro:
      "Every dealership has an unsold log. Most of them look like a graveyard. The leads came in, sat with a sales consultant, couldn't find the right deal,and then they got a generic template email three days later that they ignored. Here's what actually works.",
    keyTakeaways: [
      "Only 48% of unsold showroom visitors receive any follow-up within 24 hours (Cox Automotive, 2025)",
      "Customers re-engage at 3x the rate when contacted within 72 hours vs. after a week",
      "Personalized follow-up referencing the specific vehicle discussed improves response rate by 64%",
      "Dealerships with structured AI follow-up recover 12–18% of unsold customers on average",
    ],
    sections: [
      {
        heading: "Why Most Follow-Up Fails Before It Starts",
        paragraphs: [
          "The typical unsold follow-up sequence looks like this: a template email the next morning ('Thanks for stopping by,we'd love to earn your business'), a call from the salesperson two days later that goes to voicemail, and then silence. If that sounds familiar, you're not alone,it describes the process at most franchised dealerships in the country.",
          "The problem isn't effort. It's relevance. A customer who came in to look at a specific trim level, asked about financing options on a 60-month term, and had a specific trade-in concern doesn't want a generic 'we'd love your business' email. They want to know that the person or system following up actually knows who they are and what they were looking for.",
        ],
      },
      {
        heading: "Why Does the 72-Hour Window After a Showroom Visit Decide Everything?",
        paragraphs: [
          "Customer decision timelines in automotive retail have compressed significantly. Cox Automotive's 2025 Car Buyer Journey Study found that the median car buyer completes their purchase within 14 days of visiting a dealership,and the first 72 hours are when they're most persuadable.",
          "In the days immediately after a dealership visit, the unsold customer is still comparing. They remember your vehicle, they remember the conversation, and they haven't fully committed to anything else. Contact them with something specific and useful in that window, and you're competing on a level playing field. Wait a week, and you're likely calling a customer who already signed papers somewhere else.",
        ],
        pullQuote:
          "Contact them with something specific and useful in the 72-hour window, and you're competing on a level playing field.",
      },
      {
        heading: "What Do Unsold Customers Actually Want to Hear?",
        paragraphs: [
          "Extensive follow-up testing across dealership groups has identified the messages that consistently generate re-engagement: new trade-in value information, inventory updates on the specific vehicle they looked at, financing alternatives that change the monthly payment, and manager-level outreach that signals they were valued as a customer.",
          "What doesn't work: generic 'we miss you' messages, follow-up that doesn't reference the specific vehicle, and repeated voicemails that say 'just checking in.' Customers can tell within the first sentence whether the person,or AI,following up actually knows their situation.",
        ],
      },
      {
        heading: "What Is the Optimal Follow-Up Cadence for Unsold Showroom Leads?",
        paragraphs: [
          "For unsold customers, the optimal outreach cadence based on industry testing looks like this: a personalized text within 4 hours (acknowledging the visit, referencing the specific vehicle), a phone call the following morning between 9–11 AM, a value-added message on day 3 (trade update, inventory alert, or financing alternative), and a final check-in call on day 7.",
          "After day 7, the re-engagement rate drops sharply. That doesn't mean you stop following up,it means you shift the strategy. Monthly inventory updates and quarterly market value checks keep you in the customer's inbox without being intrusive, and they're what bring the day-30 shopper back when they're finally ready to move.",
        ],
      },
      {
        heading: "What Does the Compounding Math of Unsold Lead Recovery Look Like?",
        paragraphs: [
          "A dealership selling 120 new units per month typically has 300–400 unsold showroom visitors. At a 12% recovery rate, structured AI follow-up converts 36–48 of those visitors into buyers each month who would otherwise have gone elsewhere. At an average front-end gross of $2,800, that's $100,000–$135,000 in monthly gross recovered from leads the store already paid to acquire.",
          "The math is compelling enough that some of the fastest-growing dealer groups have repositioned their unsold follow-up programs as revenue recovery operations,not just a courtesy. When you frame the unsold log as an asset rather than a dead list, the investment in getting the follow-up right starts to look very different.",
        ],
      },
    ],
    conclusion:
      "Unsold customers aren't lost,they're just waiting for a reason to come back. Most of the time, the reason they don't come back isn't price or inventory. It's that the follow-up they received felt generic, impersonal, and late. Fix the timing, personalize the message, and you'll find a meaningful percentage of your monthly sales volume hiding in a list most stores have given up on.",
  },

  {
    slug: "nada-2026-the-5-biggest-themes-for-fixed-ops-and-bdc-leaders",
    category: "RECENT NEWS",
    title: "NADA 2026: 5 Key Themes for Fixed Ops and BDC Leaders",
    excerpt:
      "From AI-driven follow-up to electrification headwinds, here's what dealership operators were talking about on the show floor.",
    date: "Feb 2026",
    readTime: "6 min read",
    intro:
      "The 2026 NADA Show in New Orleans brought together over 22,000 dealership operators, OEM executives, and vendor partners. Between the product demos and keynote sessions, five themes dominated every conversation on the show floor,and every one of them has direct implications for fixed ops and BDC performance in 2026.",
    keyTakeaways: [
      "AI-powered follow-up was the single most discussed technology category at NADA 2026",
      "EV service labor margins are currently 34% lower than comparable ICE vehicle service",
      "72% of dealer principals plan to increase BDC technology investment in the next 12 months (NADA survey, 2026)",
      "Multilingual AI outreach emerged as a top operational priority for stores in high-Hispanic markets",
    ],
    sections: [
      {
        heading: "How Is AI Moving From Pilot to Production at Dealerships?",
        paragraphs: [
          "If NADA 2025 was the year dealers started asking questions about AI, NADA 2026 was the year they started comparing notes on what's working. The conversation shifted from 'should we try this?' to 'which deployment model is actually producing ROI?',and it reflected a maturity in the market that wasn't there 12 months ago.",
          "Vendors across the show floor reported that multi-store dealer groups are now the fastest-growing buyer segment for AI follow-up tools. Where pilot programs once started with a single rooftop, 2026 deployments are increasingly group-wide from day one. The reason is simple: once a group sees the lift at one store, they don't want to wait.",
          "The most common implementation pattern at high-performing stores: AI handles first contact and persistent follow-up, while human BDC advisors are reserved for warm transfers, objection handling, and appointment scheduling. This hybrid model preserves the relationship-building that dealers rightly value while using AI to handle the volume and timing problems that humans can't solve at scale.",
        ],
      },
      {
        heading: "How Are Fixed Ops Adapting to EV Margin Pressure?",
        paragraphs: [
          "Service lane profitability was a recurring theme in fixed ops breakout sessions, and the underlying tension was clear: EV penetration is growing, EV service revenue is significantly lower than ICE revenue, and the transition is happening faster in some markets than dealer groups had planned for.",
          "NADA data presented on the show floor showed that EV service visits generate 34% less labor revenue on average than comparable ICE service visits,fewer fluids, fewer wear items, and significantly less emergency diagnosis revenue. For service directors counting on a traditional mix, the math is getting uncomfortable.",
          "The response among top-performing fixed ops teams isn't panic,it's diversification. Tire and brake revenue, fleet servicing agreements, and AI-powered reactivation of lapsed service customers were all cited as strategic priorities.",
        ],
      },
      {
        heading: "How Are Language Gaps Costing Dealerships Real Money?",
        paragraphs: [
          "In one of the more candid conversations at the show, a GM from a Phoenix-area group described losing a significant portion of their Spanish-speaking service customers,not to a direct competitor, but to an independent shop with a Spanish-speaking service advisor.",
          "This wasn't an outlier. Across markets with significant Hispanic populations,Phoenix, Dallas, Los Angeles, Miami, Houston,dealers reported measurably lower service retention among Spanish-speaking customers despite strong initial sales. Several AI vendors at NADA have now launched bilingual outreach as a standard feature rather than an add-on.",
          "The business case is straightforward. Hispanic consumers represent over 20% of new vehicle purchases nationally and are projected to grow. A service retention gap in this demographic is a revenue compounding problem that gets more expensive every year it's not addressed.",
        ],
      },
      {
        heading: "Why Is First-Party Data the New Competitive Moat for Dealers?",
        paragraphs: [
          "With third-party cookie deprecation now fully underway, the dealers who invested in building rich first-party customer databases are discovering a significant competitive advantage. They know which customers are approaching lease-end, who has high-mileage vehicles approaching major service intervals, and which service customers haven't returned in 18+ months.",
          "The conversation at NADA wasn't just about having the data,it was about activating it. Dealers with CDPs combined with AI outreach tools are running campaigns that would have required a large marketing team to execute manually just two years ago.",
        ],
      },
      {
        heading: "Why Isn't the BDC Talent Problem Going Away?",
        paragraphs: [
          "Across every BDC-focused session at NADA 2026, one concern surfaced repeatedly: finding, training, and retaining BDC staff remains one of the hardest operational challenges in retail automotive. Average BDC advisor tenure is under 18 months, and the cost of turnover is significant.",
          "The strategic response emerging among the fastest-growing dealer groups is to redesign the BDC role around the assumption that AI handles volume and repetitive contact, while humans focus on conversations that require judgment, empathy, and relationship-building. The stores doing this well aren't reducing BDC headcount,they're making their existing teams measurably more effective and dramatically less burned out.",
        ],
      },
    ],
    conclusion:
      "NADA 2026 made one thing clear: the operational gap between dealerships that have embraced AI-assisted follow-up and those that haven't is widening. The themes from this year's show,AI maturity, EV margin pressure, language gaps, data activation, and the BDC talent crunch,all point toward the same solution: systems that extend human capacity without replacing human judgment. The stores investing in that infrastructure now are building a compounding advantage that will be difficult to close in 2027.",
  },

  {
    slug: "multilingual-customers-monolingual-dealerships-the-nada-gap",
    category: "SERVICES & CSI",
    title: "Multilingual Customers vs. Monolingual Dealerships",
    excerpt:
      "A surprising number of dealerships are losing service retention among Spanish-speaking customers simply because no one calls them back in their language.",
    date: "Feb 2026",
    readTime: "4 min read",
    intro:
      "In the Phoenix metro area, 43% of the population speaks Spanish at home. Yet most dealerships in the market run entirely English-language CSI and service follow-up programs. The result is predictable: Spanish-speaking customers go unanswered, unengaged, and eventually take their service business elsewhere.",
    keyTakeaways: [
      "Hispanic consumers represent 20% of new vehicle purchases nationally,and rising (NADA, 2026)",
      "Spanish-speaking customers are 52% less likely to respond to English-only outreach",
      "Dealerships with bilingual AI outreach see 2.1x improvement in service retention among Hispanic customers",
      "Only 11% of U.S. franchised dealerships have bilingual CSI follow-up capability",
    ],
    sections: [
      {
        heading: "What Is the Service Retention Gap Nobody Talks About?",
        paragraphs: [
          "It shows up in the data gradually, which is why most dealer principals miss it. A dealership in a high-Hispanic market will often show strong sales-to-service conversion numbers overall,but when you segment by language preference, a pattern emerges: Spanish-preferring customers who bought a vehicle from you are returning for service at significantly lower rates.",
          "This isn't a quality problem. It isn't a price problem. It's a communication problem. A customer who bought a vehicle from your store but receives all follow-up communication in a language they're not fully comfortable in will, over time, drift toward a service provider who makes them feel understood.",
        ],
        pullQuote:
          "It isn't a quality problem. It isn't a price problem. It's a communication problem.",
      },
      {
        heading: "Why Language Is a Revenue Issue, Not a Courtesy Issue",
        paragraphs: [
          "The business case for bilingual follow-up is straightforward once you run the numbers. A Spanish-speaking service customer retained for three years represents roughly $3,200 in cumulative service revenue. In a high-Hispanic market with 200 such customers per year, the revenue at stake from language-driven attrition is in the hundreds of thousands of dollars annually.",
          "Pew Research data from 2025 shows that 52% of Spanish-dominant adults are less likely to engage with a business that doesn't communicate in Spanish. In a follow-up context, 'engage' means picking up the phone, responding to a text, or returning for a second service visit. This is a significant behavioral driver that directly affects retention.",
        ],
      },
      {
        heading: "What Happens When You Actually Call in Spanish",
        paragraphs: [
          "Dealers who have deployed Spanish-language AI outreach consistently report two things: dramatically higher contact rates among previously unresponsive customers, and expressions of surprise and appreciation from customers who had simply given up expecting to hear from the dealership in their language.",
          "One service director at a Dallas-area Toyota store described it this way: 'We had customers who had bought from us but hadn't come in for service in 18 months. When we started bilingual follow-up, customers said they didn't know we could help them in Spanish. They thought they had to go somewhere else.' The service loyalty was never lost,it was just never activated.",
        ],
      },
      {
        heading: "What Are the Operational Challenges of Going Bilingual?",
        paragraphs: [
          "The reason most dealerships haven't solved this is operational, not strategic. Building a bilingual BDC requires recruiting bilingual staff,which is competitive and expensive,then training them on CSI scripts and dealership-specific knowledge in both languages. In most markets, this is genuinely difficult.",
          "Many dealer groups have tried workarounds: machine-translated emails or relying on the occasional bilingual advisor to make calls as a secondary responsibility. Neither works at scale. Machine-translated emails read as clumsy and impersonal. Secondary responsibilities get deprioritized under volume.",
        ],
      },
      {
        heading: "How AI Closes the Gap Without the Staffing Challenge",
        paragraphs: [
          "AI-powered bilingual outreach solves the operational problem directly. A system that can detect customer language preference and then conduct follow-up in the appropriate language eliminates the staffing dependency entirely.",
          "The detection matters as much as the capability. Effective bilingual AI systems use preference signals rather than demographic assumptions,they're serving the customer's actual communication preference, not guessing based on their surname.",
          "Dealerships that have deployed this approach in high-Hispanic markets are reporting the gains you'd expect: higher CSI contact rates among Spanish-preferring customers, improved survey response rates, and measurably better service retention scores in a segment that was previously invisible to them.",
        ],
      },
    ],
    conclusion:
      "The multilingual gap is one of the most straightforward revenue recovery opportunities in automotive retail today. It's not a complicated problem,it's a resource allocation problem. Dealerships in high-Hispanic markets that activate bilingual AI follow-up aren't just being more inclusive. They're competing for a customer segment that their competitors are systematically failing to serve.",
  },

  {
    slug: "branded-caller-id-the-single-biggest-lever-for-contact-rate",
    category: "AI AUTOMATIONS",
    title: "Branded Caller ID: The Top Lever for Contact Rate",
    excerpt:
      "Contact rates double when customers see the dealership name on their phone. Here's the simple change that separates top performers from the rest.",
    date: "Mar 2026",
    readTime: "3 min read",
    intro:
      "You've got 600 customers to follow up with this month. Your team is making calls. The problem is that nearly half those calls go unanswered,not because customers are unavailable, but because the number calling them shows up as an unknown number or, worse, as 'Spam Risk.' They're declining the call before it gets a chance.",
    keyTakeaways: [
      "Answer rates for calls from unknown numbers are below 20% nationally (Hiya, 2025)",
      "Branded caller ID increases answer rates by 47% on average across dealership deployments",
      "1 in 5 dealership phone calls are being labeled as spam by major carriers (TransUnion, 2025)",
      "Contact rate improvements from branded caller ID typically appear within the first 10 business days",
    ],
    sections: [
      {
        heading: "Why Nobody Is Answering Your Calls",
        paragraphs: [
          "The average American receives 14–20 unknown calls per week. Their response, trained over years of robocalls and telemarketing, is to ignore them. According to Hiya's 2025 State of the Call Report, less than 20% of calls from unrecognized numbers are answered,down from 35% in 2020. The trend is one-directional.",
          "For dealerships running CSI follow-up or service outreach campaigns, this creates a compounding problem. You may be making 600 calls per month but only reaching 250–300 customers because the rest are going to voicemail or being declined on sight. Your contact rate metric reflects this, but the root cause often gets misattributed to list quality, timing, or BDC performance.",
        ],
      },
      {
        heading: "What Is Branded Caller ID and How Does It Work?",
        paragraphs: [
          "Branded caller ID,also called CNAM registration or rich call data,is the ability to display your dealership's name, logo, and call reason on the recipient's phone screen before they answer. Instead of seeing an unknown number, your customer sees 'Metro Toyota Service,CSI Follow-Up' with your logo.",
          "The registration process involves enrolling your outbound phone numbers with the major carriers and analytics platforms so that your identity information is attached to your outgoing calls. Done correctly, it's visible across roughly 80–85% of U.S. mobile devices.",
        ],
        pullQuote:
          "Instead of seeing an unknown number, your customer sees 'Metro Toyota Service' with your logo.",
      },
      {
        heading: "What Is the Spam Label Problem Killing Your Contact Rate?",
        paragraphs: [
          "There's an additional, often unrecognized issue hitting dealership contact rates: spam labeling. When a phone number makes a high volume of outbound calls,as CSI follow-up lines and BDC lines do by definition,carrier analytics algorithms can flag them as likely spam. TransUnion's 2025 analysis found that roughly 1 in 5 dealership outbound calls carries a spam or scam-likely label.",
          "A customer who sees 'Spam Risk' from your service follow-up line isn't going to answer. They're not even going to listen to the voicemail. The call that your BDC advisor spent 90 seconds crafting is being filtered out before it ever has a chance. Branded caller ID, combined with proactive number health monitoring, prevents this.",
        ],
      },
      {
        heading: "How to Activate Branded Caller ID at Your Store",
        paragraphs: [
          "The implementation process has become significantly more straightforward in the past two years. Most dealership phone providers and outreach platforms now offer branded caller ID as a standard configuration option. The basic steps: identify which outbound numbers are used for CSI follow-up and BDC outreach, enroll them through your provider's CNAM registration service, and verify the display information is accurate across major carriers.",
          "The full rollout typically takes 7–14 days. During that period, it's worth running a parallel test: compare answer rates on enrolled numbers vs. unenrolled numbers during the same time windows. The difference is usually visible within the first week.",
        ],
      },
      {
        heading: "What Does a Contact Rate Improvement Actually Translate To?",
        paragraphs: [
          "If your current CSI contact rate is 62% and branded caller ID moves it to 74%, that's not just a metric improvement,it's 72 more customers per month who are hearing from you instead of nothing. At a typical dealership volume of 600 service customers per month, that's 72 additional opportunities to resolve concerns, collect surveys, and retain customers who might otherwise drift away.",
          "The compounding effect is significant. A 12-point contact rate improvement, held consistently over 12 months, translates to 864 additional customer conversations per year. Some prevent negative reviews. Some retain customers who were considering going elsewhere. Some convert detractors into promoters. The revenue impact,in retained service business, recovered OEM bonuses, and avoided reputation damage,typically exceeds the cost of the tool by an order of magnitude.",
          "Branded caller ID isn't glamorous. It doesn't involve sophisticated AI or complex integration. But among all the levers available to improve outreach effectiveness, it's consistently among the highest-impact changes a dealership can make,and the simplest to implement.",
        ],
      },
    ],
    conclusion:
      "Your contact rate problem may not be a BDC performance problem or a timing problem. It may simply be that half your customers are declining your calls because they don't know who's calling. Branded caller ID is a 14-day fix for a problem that's been quietly costing you survey responses, customer retention, and OEM bonus dollars every month. It's worth doing first,because until your calls are actually getting answered, none of your other follow-up improvements matter.",
  },

  {
    slug: "what-is-a-good-csi-score-for-a-dealership",
    category: "SERVICES & CSI",
    title: "What Is a Good CSI Score for a Dealership?",
    excerpt:
      "CSI scores vary by OEM, but the benchmarks that actually protect your bonus payments and Google rating are consistent across brands. Here's what good looks like.",
    date: "Apr 2026",
    readTime: "3 min read",
    intro:
      "If you've ever asked 'what is a good CSI score?' and gotten a vague answer, it's because the honest answer depends on your OEM and what you're optimizing for. But the underlying benchmarks - the numbers that separate dealers losing bonus money from those earning it - are more consistent than most people realize.",
    keyTakeaways: [
      "Most OEMs define 'top performer' as the 75th–90th percentile, not a fixed number",
      "Toyota and Honda typically require 90%+ survey response rates for full bonus eligibility",
      "A 1-point CSI drop can cost $15,000–$40,000 in annual OEM bonus payments",
      "Google rating above 4.7 strongly correlates with CSI scores above the 80th percentile",
    ],
    sections: [
      {
        heading: "What Does a CSI Score Actually Measure?",
        paragraphs: [
          "CSI stands for Customer Satisfaction Index. OEMs use it to measure how satisfied customers are with their sales or service experience at a specific dealership. Scores are typically compiled from post-visit surveys - sent by the OEM, not the dealership - and they directly affect dealer bonus payments, incentive eligibility, and in some cases, vehicle allocation.",
          "The scoring scale varies by manufacturer. Ford uses a 0–10 scale. GM uses a percentage satisfaction format. Toyota and Lexus use a 'completely satisfied' measure as a binary outcome. Honda and Acura track 'top box' scores - the percentage of customers who give the highest possible rating. Comparing raw scores across brands without knowing the methodology will give you the wrong picture.",
        ],
      },
      {
        heading: "What Is a Good CSI Score by OEM?",
        paragraphs: [
          "Rather than fixed numbers, OEMs benchmark dealers against their regional or national average. Here's what 'good' looks like across the major brands: For Toyota and Lexus, a 'completely satisfied' rate above 92% typically places you in the top performance tier. For Ford, a score of 8.5/10 or above on service satisfaction is generally competitive. For GM, a 'satisfied or completely satisfied' rate of 90%+ is the target for bonus eligibility. For Honda and Acura, top-box scores above 85% are competitive in most regions.",
          "The key insight: OEMs don't reward you for being average. Bonus structures are typically tiered - the top 25% of dealers get the full incentive, and scores below the regional median can trigger performance improvement requirements. 'Good' means above the 75th percentile in your region, whatever number that corresponds to in a given quarter.",
        ],
        pullQuote: "OEMs don't reward you for being average - bonus structures are tiered by regional percentile.",
      },
      {
        heading: "What Is the Relationship Between CSI Score and Google Rating?",
        paragraphs: [
          "Your OEM CSI score and your Google rating measure related but different things. OEM CSI surveys reach customers who completed a transaction - a service visit or vehicle purchase. Google reviews capture anyone who had an experience, positive or negative, including customers who felt strongly enough about a bad experience to post publicly without being asked.",
          "In practice, dealerships with CSI scores in the top quartile tend to have Google ratings above 4.6. Dealerships with CSI scores in the bottom quartile tend to cluster around 4.0–4.3. The correlation exists because the underlying driver is the same: whether customers leave feeling resolved or unresolved. Dealers who catch and address dissatisfied customers before the survey - through proactive follow-up - see improvement in both metrics simultaneously.",
        ],
      },
      {
        heading: "What Is the Financial Impact of a CSI Score Drop?",
        paragraphs: [
          "The most concrete number: a 1-point drop in your OEM CSI ranking - moving from the 75th percentile to the 50th, for example - can cost $15,000–$40,000 in annual OEM bonus payments, depending on your brand and volume. For high-volume dealers running 1,000+ repair orders per month, the impact can be higher.",
          "There's also a compounding effect. A lower CSI score reduces eligibility for floor plan incentives, vehicle allocation priority, and co-op advertising support at some OEMs. It also makes recruitment harder - high-performing employees prefer stores with good ratings, and your Google score is often the first thing a candidate checks.",
        ],
      },
      {
        heading: "How Do You Improve CSI Score Consistently?",
        paragraphs: [
          "The single most reliable lever for CSI improvement is contact rate - the percentage of service customers you actually reach for feedback before the OEM survey arrives. A customer who felt their wait was too long, their invoice was confusing, or their advisor was dismissive will file a negative survey if nobody calls. The same customer, reached within 24 hours by someone who acknowledges their concern and offers resolution, frequently gives a higher rating or withdraws the negative response entirely.",
          "Manual BDC follow-up rarely achieves above 30% contact rate at any sustainable volume. Dealers using automated post-service follow-up - calling every repair order customer within 24 hours - consistently achieve 65–75% contact rates, and see CSI score improvements of 15–20 points within 90 days. World Hyundai Matteson went from a 4.0 to a 4.8 Google rating in 8 weeks using this approach.",
        ],
      },
    ],
    conclusion:
      "A good CSI score is one that keeps you in the top quartile of your OEM's regional ranking - which typically means a 'completely satisfied' or 'top box' rate of 88–93% depending on your brand. The number matters less than the percentile. And the most direct path to improving that percentile is ensuring every service customer hears from you before the OEM survey does.",
  },

  {
    slug: "automotive-bdc-contact-rate-benchmarks",
    category: "SALES & BDC",
    title: "Automotive BDC Contact Rate Benchmarks: What Good Looks Like",
    excerpt:
      "Most dealership BDCs reach 15–20% of unsold leads. Top performers using AI follow-up hit 70%. Here's what the benchmarks actually look like - and what drives the gap.",
    date: "May 2026",
    readTime: "4 min read",
    intro:
      "Contact rate is the most important metric in automotive BDC performance - and the most misunderstood. Most BDC managers track it, but few benchmark it against anything meaningful. Here's what the data actually shows about what separates a high-performing BDC from an average one.",
    keyTakeaways: [
      "The average dealership BDC manually contacts 15–20% of unsold showroom customers",
      "Top-performing BDCs using AI outreach average 65–75% contact rate",
      "78% of car buyers choose the first dealership to follow up (NADA, 2025)",
      "41% of automotive leads are mishandled due to missed calls or lapsed follow-up (Foureyes, 2025)",
    ],
    sections: [
      {
        heading: "What Is BDC Contact Rate and Why Does It Matter?",
        paragraphs: [
          "BDC contact rate is the percentage of leads or unsold customers your business development center successfully reaches via phone, text, or email. A 'contact' typically means a live conversation - voicemail left does not count as a contact in most industry definitions.",
          "Contact rate matters because the rest of your follow-up process only works on customers you actually reach. A conversion rate, appointment rate, and close rate are all calculated on contacted customers. A dealership with a 15% contact rate is effectively making all its other metrics look better than they are - because 85% of its potential opportunities never enter the funnel.",
        ],
      },
      {
        heading: "What Is the Average BDC Contact Rate at a Dealership?",
        paragraphs: [
          "Industry data from multiple benchmark studies shows the average dealership BDC manually contacts 15–20% of unsold showroom customers. Some BDC managers report higher - 25–35% - but these figures typically include voicemail as a 'contact' or count multiple attempts to the same customer as separate contacts. Live conversation rates are consistently in the 15–20% range for manual outreach.",
          "Foureyes' 2025 automotive benchmark study found that 41.2% of qualified automotive sales leads were mishandled - including missed calls, unlogged leads, and lapsed follow-up. 14.1% of leads never made it into dealer CRMs at all. These are not edge cases; they are the median experience across the industry.",
        ],
        pullQuote: "41% of automotive leads are mishandled - missed calls, unlogged leads, or no follow-up after day one.",
      },
      {
        heading: "What Does a High BDC Contact Rate Look Like?",
        paragraphs: [
          "Dealerships using AI-powered outbound calling consistently achieve 65–75% contact rate on the same desklog populations that manual BDCs reach at 15–20%. The gap is driven by three factors: timing, volume, and caller ID.",
          "Timing: AI systems can call within 12–24 hours of a showroom visit, before the lead goes cold. Manual BDCs often have a backlog that pushes first contact to day 3 or later, by which point many customers have already decided elsewhere.",
          "Volume: A BDC team of 3–5 people cannot make 500 quality calls per month while also handling inbound traffic, responding to texts, and managing appointment schedules. AI outreach has no volume ceiling.",
          "Caller ID: Unknown numbers are answered less than 20% of the time nationally (Hiya, 2025). AI systems using branded caller ID - displaying the dealership's name - see answer rates 2–3x higher than unregistered numbers.",
        ],
      },
      {
        heading: "How Should You Measure BDC Contact Rate at Your Store?",
        paragraphs: [
          "The right way to calculate contact rate: take the total number of unsold desklogs in a given month, divide by the number you reached via live conversation (not voicemail, not email open, not text send). That's your contact rate.",
          "Most CRMs let you pull this report directly. If yours doesn't separate live contacts from voicemails, you'll need to manually audit a sample. The number that comes back will often surprise BDC managers who thought they were performing at 40–50% - it's almost always lower when counted correctly.",
        ],
      },
      {
        heading: "What Is a Realistic Target for BDC Contact Rate?",
        paragraphs: [
          "For a manual BDC team with 3–5 agents handling 400–600 desklogs per month, a realistic best-case contact rate is 35–40% with disciplined process: immediate outreach within 2 hours of a visit, branded caller ID, and 5+ follow-up attempts per lead. Most stores are not hitting this consistently.",
          "With AI-assisted outreach handling the volume work, 65–75% is achievable and sustainable. The AI handles the initial contact attempt for every lead; your BDC team takes over the moment a live buyer is identified. This is the model that's moving the needle at dealerships where contact rate has historically been the bottleneck.",
          "The math on what that improvement means: a dealership with 500 desklogs per month moving from 20% to 70% contact rate is having 250 additional customer conversations per month. At an industry average close rate of 15–20% on re-engaged leads, that's 37–50 additional sales conversations per month that simply weren't happening before.",
        ],
      },
    ],
    conclusion:
      "The benchmark: 15–20% contact rate is where most dealership BDCs operate. 65–75% is where the top performers are. The gap is not a people problem - your BDC team isn't less skilled than the top performers. It's a volume and timing problem that manual processes can't solve at scale. AI-assisted outreach is what's closing it.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
