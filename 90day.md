# Lokam AI — 90-Day SEO Content Roadmap

**Publish cadence:** 1 article per week | **Total:** 13 articles
**Author byline on all:** Muhammed Saleeq, Co-founder & CEO, Lokam
**Primary goal:** Own the "dealership AI follow-up" topic cluster before well-funded competitors (Numa, ScaleVoice, Mia) publish at scale.

---

## Content Architecture

Three phases, each building on the last:

- **Phase 1 (Weeks 1-4): Benchmarks and Foundations** — Publish the data nobody else has. Create the reference posts that all future articles (and competitors) will cite.
- **Phase 2 (Weeks 5-9): Technical Depth** — Own the specific problems dealers search for. These are the articles that convert.
- **Phase 3 (Weeks 10-13): Commercial and Comparison** — Capture decision-stage searches. Link the full cluster together.

**Internal linking architecture:**
Each article links up to the most relevant service page AND links laterally to at least one other article in the cluster. Service pages link back down to relevant articles. This hub-and-spoke structure is what builds topical authority — not individual articles.

```
Homepage
├── /ai-voice-agent-dealership (hub)
│   ├── Week 4: How AI Voice Agents Work
│   └── Week 8: Real-Time Sentiment Detection
├── /csi-follow-up-automation (hub)
│   ├── Week 2: How to Improve CSI Scores
│   ├── Week 5: CSI Score Impact on OEM Incentives
│   └── Week 6: Handle Negative Surveys Before Submission
├── /unsold-lead-recovery-software (hub)
│   ├── Week 3: Why 85% of Leads Never Get Called
│   └── Week 9: Dealership Lead Reactivation
├── /dealership-bdc-software (hub)
│   ├── Week 1: BDC Contact Rate Benchmarks
│   ├── Week 7: AI BDC vs Traditional
│   └── Week 13: High-Performing BDC in 2026
└── /integrations (hub)
    ├── Week 10: CDK Integration for AI Follow-Up
    └── Week 11: Dealership Follow-Up Process
```

---

## Phase 1 — Benchmarks and Foundations (Weeks 1-4)

---

### Week 1: Dealership BDC Contact Rate Benchmarks

**Target keyword:** `automotive BDC contact rate benchmarks`
**Secondary keywords:** dealership BDC performance metrics, BDC follow-up rate, car dealership contact rate average

**Search intent:** Informational — BDC directors and GMs researching whether their contact rate is normal or below average. High research intent, no strong vendor pages own this topic.

**Difficulty:** Easy (2/10). No authoritative source exists for this data. NADA and Cox Automotive publish broad automotive data but not BDC-specific contact rate benchmarks. This is a white space Lokam can own permanently by publishing first-party data.

**Business value:** Critical. This is Lokam's most important content asset. It:
- Creates a citable statistic that other publications, AI systems, and future Lokam posts reference
- Positions Lokam as the authoritative source on the metric that defines its core value proposition (70% vs 15%)
- Ranks for queries dealers type before they realize they have a follow-up problem

**Article structure:**
1. Answer first: state the benchmark numbers immediately (15-20% manual BDC industry average, 70% with AI — sourced from Lokam's network)
2. Methodology disclosure: how the data was collected, dealer count, time period, anonymization approach
3. Breakdown by use case: repair order follow-up vs unsold desklog vs inbound lead response
4. What causes low contact rates: timing gaps, manual capacity, caller ID, time-of-day patterns
5. How dealers in the top quartile differ operationally
6. FAQ section

**Internal linking strategy:**
- Link to: `/dealership-bdc-software` (primary), `/ai-voice-agent-dealership`, `/unsold-lead-recovery-software`
- This article should be linked from all four service pages as the benchmark source
- Future articles in this cluster should cite this post when referencing the 15% baseline

**Schema opportunities:**
- `Article` with `author.sameAs` (Saleeq's LinkedIn)
- `FAQPage` for the FAQ section
- `Dataset` schema (Schema.org/Dataset) — appropriate for benchmark/statistical content, increases AI citation likelihood significantly

**CTA:** Mid-funnel — "See how Lokam's contact rate compares to your current BDC. Calculate your ROI →" (link to `/roi-calculator`)

**Semantic entities to include:**
- Named entities: NADA, CDK Global, Dealertrack, VinSolutions, J.D. Power, Cox Automotive
- Concepts: repair order, desklog, unsold showroom traffic, BDC staffing, contact window, caller ID, voicemail detection
- Metrics: contact rate, response time, first-call resolution, escalation rate
- Do NOT include: generic AI statistics, non-automotive benchmarks

---

### Week 2: How to Improve Dealership CSI Scores

**Target keyword:** `how to improve dealership CSI scores`
**Secondary keywords:** increase CSI score car dealership, dealership customer satisfaction index improvement, CSI score tips

**Search intent:** Informational — high search volume. Service managers, fixed ops directors, dealer principals researching after a CSI score drop or OEM warning. SERP is dominated by "tips" articles from Invoca, Kenect, Autosoft — all offering software but writing generic content. Opportunity: write the most operationally specific version of this post.

**Difficulty:** Medium (5/10). Established competitors rank here but none have first-party outcome data. Lokam's World Hyundai case study (4.0 to 4.8 in 8 weeks) is a differentiator no other post can replicate.

**Business value:** High. The highest-volume informational query in Lokam's topical cluster. Dealers searching this are already in the problem-aware stage — one step from commercial intent.

**Article structure:**
1. Answer first: the single most impactful change (first-contact timing — call within 24 hours)
2. Why CSI scores actually drop: the gap between the service visit and the survey (detractors submit surveys before anyone calls them)
3. The mechanics of OEM CSI measurement: survey windows, weighting, what counts
4. 5 operational changes ranked by impact (not by ease)
5. Case study: World Hyundai — 4.0 to 4.8, 8 weeks, specific mechanics (how Lokam caught 180 detractors before surveys)
6. What most dealerships get wrong about CSI improvement (counterintuitive: more advisors doesn't fix timing)
7. FAQ

**Internal linking strategy:**
- Link to: `/csi-follow-up-automation` (primary CTA), `/ai-voice-agent-dealership`
- Link to Week 1 article (cite the 15% manual contact rate as why timing fails)
- Link to Week 5 article (OEM incentives) when it's published
- Add link to `/case-studies` for World Hyundai

**Schema opportunities:**
- `HowTo` schema (structured as numbered steps for the 5 operational changes)
- `FAQPage`
- `BlogPosting` with `mentions` referencing World Hyundai (Organization entity)

**CTA:** Hard CTA — "See how Lokam catches detractors before the OEM survey. Book a demo →" (link to Calendly). Secondary: "Read the World Hyundai case study →"

**Semantic entities to include:**
- Named entities: J.D. Power, OEM (manufacturer-specific: Hyundai, CDK, Reynolds & Reynolds), World Hyundai Matteson
- Concepts: repair order, service advisor, detractor, OEM survey window, service drive, follow-up timing, escalation, Net Promoter Score
- Metrics: CSI score scale, survey response rate, contact window, detractor threshold
- People: reference Teri Bisbikis (World Hyundai GM) by name and title — this is the E-E-A-T differentiator

---

### Week 3: Why 85% of Unsold Showroom Leads Never Get Called Back

**Target keyword:** `unsold showroom leads follow-up` / `dealership unsold lead recovery`
**Secondary keywords:** car dealership unsold leads, desklog follow-up, showroom traffic follow-up

**Search intent:** Problem-aware informational. Dealer principals and sales managers who sense they're losing deals but haven't identified follow-up failure as the cause. Low competition SERP — mostly thin blog posts from DealerPerformance.ai and AutomotiveAI.

**Difficulty:** Easy (3/10). Nobody publishes specific data here. Lokam's desklog coverage data + the NADA "78% buy from first to follow up" stat are the authority anchors no competitor has.

**Business value:** High. This is the entry point for Lokam's unsold lead recovery product. The article's job is to make the problem undeniable before presenting the solution.

**Article structure:**
1. Answer first: the NADA stat (78% buy from first dealer to call) + the operational reality (BDCs reach ~15% of desklogs within 24 hours)
2. Why the math is worse than it looks: explain desklog volume vs BDC capacity. A store doing 300 desklogs/month with a 3-person BDC cannot physically follow up on all of them
3. The 3-day window: after 72 hours, contact rates drop below 10% and buyers have typically visited a competitor
4. What BDCs actually prioritize (inbound leads, hot prospects) and what falls through
5. Why email follow-up fails as a substitute (20-35% open rate, no conversation, no urgency detection)
6. What a 70% contact rate changes: revenue model (recover 15-20 additional deals/month at $2,800 gross)
7. FAQ

**Internal linking strategy:**
- Link to: `/unsold-lead-recovery-software` (primary), `/dealership-bdc-software`
- Link to Week 1 for the 15% contact rate benchmark
- Future: link to Week 9 (lead reactivation) when published

**Schema opportunities:**
- `BlogPosting` with `citation` referencing the NADA 2025 research
- `FAQPage`
- `StatisticalVariable` or `Dataset` — for the desklog coverage analysis

**CTA:** Hard CTA — "Calculate how many deals your dealership could recover. ROI Calculator →" Secondary: "See how Lokam covers 100% of your desklogs. Book a demo →"

**Semantic entities to include:**
- Named entities: NADA (National Automobile Dealers Association), CDK Global, Cox Automotive
- Concepts: desklog, showroom visit, follow-up window, BDC capacity, contact rate, voicemail drop, unsold traffic, hot lead, desk manager
- Statistics: 78% NADA stat, 15% manual contact rate (cite Week 1), $2,800 average front/back gross, 72-hour window
- Do NOT cite competitors by name in this article — it's a problem-definition piece, not a comparison

---

### Week 4: How AI Voice Agents Work for Automotive Dealerships

**Target keyword:** `AI voice agent automotive dealerships how it works`
**Secondary keywords:** dealership AI phone calls, how AI voice calling works, automated voice calls car dealership

**Search intent:** Informational — early-stage buyers who've heard about AI voice agents and want to understand the technology before evaluating vendors. Also strong GEO target: this is the type of "explain X" query that ChatGPT and Perplexity answer directly.

**Difficulty:** Medium (5/10). Competitors (Toma, Numa, STELLA) have pages on this topic but most are shallow marketing copy. A technically credible, first-person explanation from a founder who built the infrastructure is substantially stronger.

**Business value:** Medium-High. Primary function is entity building and AI citation. Secondary function is top-of-funnel — builds trust before buyers evaluate vendors.

**Article structure:**
1. Answer first: explain in 100 words what an AI voice agent does in a dealership context (outbound call, natural conversation, sentiment detection, escalation)
2. Technical stack: what the voice infrastructure looks like (ASR, NLU, TTS, telephony layer, caller ID routing) — explained at an operator level, not an engineer level
3. How real-time sentiment detection works: what signals the AI listens for, how it classifies detractors vs satisfied customers vs ready buyers
4. How DMS integration works: read-only pull from CDK/Dealertrack/VinSolutions, what data is accessed, how calls are triggered
5. What happens when the AI detects a problem: escalation mechanics, transcript delivery, notification timing
6. What AI voice agents cannot do (important for credibility): they don't replace inbound call handling, can't negotiate price, aren't suitable for complex complaint resolution
7. Branded caller ID: why this matters for contact rate (difference between 20% and 70% answer rate)
8. FAQ

**Internal linking strategy:**
- Link to: `/ai-voice-agent-dealership` (primary), `/integrations`, `/csi-follow-up-automation`, `/unsold-lead-recovery-software`
- Link to Week 1 for the contact rate data
- This article should be referenced from the AI voice agent service page as the technical explainer

**Schema opportunities:**
- `TechArticle` (subtype of Article, signals technical authority to Google)
- `FAQPage`
- `HowTo` for the "how escalation works" section

**CTA:** Soft CTA — "See Lokam's AI voice agent in a live demo →" (Calendly)

**Semantic entities to include:**
- Named: CDK Global, Dealertrack, VinSolutions, TEKION, Twilio (telephony infrastructure reference), OpenAI/Whisper (ASR reference acceptable as general tech context)
- Technical concepts: automatic speech recognition (ASR), natural language understanding (NLU), text-to-speech (TTS), PSTN, SIP trunk, sentiment analysis, intent classification
- Dealership concepts: repair order, desklog, service advisor, service manager, BDC, caller ID, DMS
- People: Muhammed Saleeq should write this in first person ("When we built Lokam's calling infrastructure...") — this is the E-E-A-T signal that no competitor can replicate

---

## Phase 2 — Technical Depth (Weeks 5-9)

---

### Week 5: CSI Score Impact on OEM Incentives

**Target keyword:** `CSI score OEM incentives dealers` / `how CSI scores affect dealer incentives`
**Secondary keywords:** OEM holdback CSI, dealer incentive programs customer satisfaction, CSI score financial impact dealership

**Search intent:** Informational/commercial investigation. Dealer principals who understand CSI matters but haven't quantified the financial exposure. This is a query that precedes a purchase decision — they're calculating the ROI of investing in CSI improvement.

**Difficulty:** Easy-Medium (4/10). Specific topic with few authoritative sources. OEM documentation is scattered across manufacturer portals. A consolidated, manufacturer-specific breakdown is a genuine content gap.

**Business value:** High. Dealers who understand the financial stakes of CSI don't need to be convinced that follow-up matters — they need a solution. This article closes the gap between problem awareness and vendor evaluation.

**Article structure:**
1. Answer first: CSI scores affect dealer incentives, certification status, allocation priority, and in some cases floorplan financing rates — across all major OEMs
2. Manufacturer-by-manufacturer breakdown: Hyundai, Toyota, Ford, GM, Honda — how each weights CSI, what the thresholds are, what the financial exposure is per point
3. The survey window problem: OEM surveys typically go out 3-10 days post-service — if a detractor submits before you call them, you cannot retroactively fix that score
4. How dealers in the top CSI quartile manage the survey window differently
5. The compounding effect: allocation priority means top-CSI dealers get more of the high-demand models, which drives revenue independent of the incentive dollars
6. Rough financial model: a 5-point CSI improvement at a dealer doing 1,000 ROs/month — what does that unlock in incentives + allocation?
7. FAQ

**Internal linking strategy:**
- Link to: `/csi-follow-up-automation` (primary), `/ai-voice-agent-dealership`
- Link back to Week 2 (CSI improvement guide) as foundational reading
- Link to `/case-studies` (World Hyundai outcome)

**Schema opportunities:**
- `BlogPosting` with `about` referencing OEM programs (Hyundai, Toyota, Ford as named entities)
- `FAQPage`
- `Table` markup opportunities — OEM-by-OEM breakdown is structured data

**CTA:** Hard CTA — "Protect your CSI score before the OEM survey arrives. Book a demo →" Secondary: "Use the ROI Calculator to model your incentive exposure →"

**Semantic entities to include:**
- OEM brands: Hyundai, Toyota, Ford, General Motors, Honda, Stellantis — name them specifically
- Programs: Genesis Rewards, Toyota Dealer Standards, Ford Standards for Excellence — specific program names add E-E-A-T
- Concepts: holdback, dealer incentive, floorplan financing, allocation, CSI survey window, OEM certification
- People: include a quote or reference to a dealer who has navigated OEM CSI pressure (anonymized case if needed)

---

### Week 6: How to Handle Negative CSI Surveys Before They're Submitted

**Target keyword:** `how to prevent negative CSI surveys dealership` / `catch detractors before OEM survey`
**Secondary keywords:** dealership detractor management, service recovery automotive, unhappy customer car dealership

**Search intent:** Problem-aware — highly commercial intent. Service managers who have experienced a bad CSI quarter and are actively looking for a process or tool. The window between "customer leaves unhappy" and "survey gets submitted" is exactly Lokam's core value proposition.

**Difficulty:** Easy (3/10). Very specific query, few strong competitors. This is a search that strongly implies purchase intent.

**Business value:** High. Closest to a direct sales article without being a sales page. Readers of this article are actively managing a CSI problem.

**Article structure:**
1. Answer first: the window is typically 3-10 days depending on OEM. Within that window, a proactive call that resolves the complaint converts detractors at a measurable rate — data from Lokam's network here.
2. How OEM survey timing works: when surveys are sent, who receives them, response rate patterns
3. Identifying detractors before they submit: signals in service interactions (complaint at the counter, technician notes, RO flags, service time overruns) vs AI detection during follow-up calls
4. The service recovery call: what to say, what authority the caller needs (service manager vs advisor), what the call accomplishes vs what it can't
5. What Lokam's escalation data shows: percentage of flagged detractors who are recoverable with a same-day manager callback vs those who are not
6. Process for dealers without AI: a manual triage process for high-risk ROs
7. Why volume makes manual triage fail above 200 ROs/month
8. FAQ

**Internal linking strategy:**
- Link to: `/csi-follow-up-automation` (primary)
- Link to Week 2 (CSI improvement) and Week 5 (OEM incentives)
- Link to `/case-studies` (World Hyundai — the 180 detractors caught example)

**Schema opportunities:**
- `HowTo` (the service recovery call process)
- `FAQPage`
- `BlogPosting` with `citation` referencing Lokam's own network data (first-party source)

**CTA:** Hard CTA — "Catch detractors before the survey arrives. See how Lokam works →" (Calendly or `/csi-follow-up-automation`)

**Semantic entities to include:**
- Concepts: detractor, Net Promoter Score, survey window, service recovery, RO flag, tech notes, service advisor, service drive, OEM escalation
- Named: J.D. Power (surveys methodology), Hyundai, specific OEM survey timing where known
- Process terms: same-day callback, transcript, manager escalation, resolution confirmation
- Data: include Lokam's recovery rate for escalated detractors — this is the E-E-A-T differentiator

---

### Week 7: AI BDC vs Traditional BDC — What's the Actual Difference?

**Target keyword:** `AI BDC vs traditional BDC` / `automotive BDC software comparison AI`
**Secondary keywords:** AI-powered automotive BDC, replace BDC with AI, car dealership BDC automation

**Search intent:** Commercial investigation. BDC directors, GMs, and dealer principals evaluating whether to change their BDC model. High conversion potential — readers are actively comparing options.

**Difficulty:** Medium (5/10). Volie, BDC.AI, and DealerSync rank for BDC software queries. None have published a direct, data-backed AI vs manual comparison.

**Business value:** High. This is the article that sits one step above the BDC service page in the funnel. Readers who finish it should be ready to book a demo.

**Article structure:**
1. Answer first: a comparison table — 8 metrics, AI vs traditional BDC, no fluff
2. The contact rate gap: why AI achieves 70% and manual BDC averages 15-20% (not a technology argument — an operational capacity argument)
3. What AI cannot do that a BDC rep can: complex objection handling, negotiation, relationship-based follow-up — be honest here, credibility requires it
4. The handoff model: where AI ends and BDC begins (AI handles first-contact volume, BDC handles warm escalations)
5. Staff redeployment: what happens to BDC headcount when AI takes the outbound volume (most dealers see BDC productivity increase, not reduction)
6. Cost comparison: what traditional BDC staff costs at 3 FTEs vs AI at Lokam's pricing model (directional, not specific dollar figures unless accurate)
7. Implementation timeline comparison
8. FAQ

**Internal linking strategy:**
- Link to: `/dealership-bdc-software` (primary), `/ai-voice-agent-dealership`
- Link to Week 1 (contact rate benchmarks) for the 15% baseline
- Link to Week 4 (how AI voice agents work) for technical context
- Link to `/integrations` for the DMS angle

**Schema opportunities:**
- `BlogPosting` with `about` referencing both AI BDC software and traditional BDC as concepts
- `FAQPage`
- `Table` for the comparison section

**CTA:** Hard CTA — "See Lokam's AI BDC in action. Book a 30-minute demo →"

**Semantic entities to include:**
- Named: Volie (mention as a category reference, not a negative comparison), CDK Global, VinSolutions, DealerSocket
- Concepts: BDC staffing, outbound call volume, contact rate, escalation, desklog coverage, first-contact timing, warm transfer, cost per contact
- People: "BDC director" and "GM" as the personas evaluating this decision — write for both simultaneously

---

### Week 8: Real-Time Sentiment Detection in Dealership AI Calls

**Target keyword:** `real-time sentiment detection AI calls` / `sentiment analysis automotive customer calls`
**Secondary keywords:** AI sentiment detection dealership, voice AI customer satisfaction detection, real-time NLP dealership

**Search intent:** Informational/technical. AI-curious dealer operators and IT directors who want to understand the technology inside AI voice agents. Also a strong GEO target — "how does real-time sentiment detection work" is exactly what AI engines answer.

**Difficulty:** Easy (2/10). No automotive-specific technical content on this topic. Lokam has genuine first-party knowledge of how this works that no generic AI company has.

**Business value:** Medium. Primary purpose is E-E-A-T signaling and GEO citation. Secondary purpose is differentiating Lokam's technology from competitors who use simpler IVR or keyword-matching approaches.

**Article structure:**
1. Answer first: real-time sentiment detection listens for specific acoustic and linguistic signals during a conversation — tone of voice, specific complaint language, pauses, escalating language — and classifies the caller's emotional state within seconds
2. How it differs from post-call sentiment analysis: real-time detection acts on the signal during the conversation, not 24 hours later in a reporting dashboard
3. The signals Lokam listens for: (explain at a category level — complaint language, negative comparisons, tone shifts) — founder-voice here: "When we built this, we found that..."
4. What happens when a negative signal is detected: escalation mechanics, timing (within the call vs immediately after), transcript delivery
5. False positive management: how the model avoids flagging minor friction (a long hold time comment) vs genuine dissatisfaction signals
6. Multilingual sentiment: what changes when the call is in Spanish
7. What sentiment detection cannot do: it doesn't predict future behavior, can't quantify severity, doesn't replace a human judgment call
8. FAQ

**Internal linking strategy:**
- Link to: `/ai-voice-agent-dealership` (primary), `/csi-follow-up-automation`
- Link to Week 4 (how AI voice agents work) as foundational context
- This article should be linked from the AI voice agent service page as the technical depth resource

**Schema opportunities:**
- `TechArticle`
- `FAQPage`
- `BlogPosting` with `author` having `sameAs` to Saleeq's LinkedIn and `worksFor` Lokam — E-E-A-T critical here

**CTA:** Soft CTA — "See sentiment detection in a live Lokam demo →"

**Semantic entities to include:**
- Technical: natural language processing (NLP), acoustic analysis, tone detection, speech act classification, transformer models, Whisper (OpenAI ASR), sentiment polarity
- Dealership: repair order, service complaint, detractor, BDC escalation, service manager notification
- Named: Stanford NLP Group (credibility reference for sentiment analysis research), Google Cloud Natural Language (context for what's available vs what Lokam built)
- Saleeq's voice: "We trained the model on [X type of conversations]..." — first-person technical credibility is the differentiator

---

### Week 9: Dealership Lead Reactivation: How to Recover Cold Showroom Traffic

**Target keyword:** `dealership lead reactivation` / `how to reactivate cold showroom leads`
**Secondary keywords:** car dealership cold lead recovery, reactivate old desklog leads, unsold showroom traffic reactivation

**Search intent:** Commercial investigation. Sales managers who have a backlog of old desklogs (30-180 days) and want to know if they're recoverable. AutomotiveAI and DealerPerformance.ai rank here with thin content.

**Difficulty:** Easy (3/10). Specific, low competition, clear commercial intent.

**Business value:** High. Addresses a specific pain point that's distinct from the primary "within 24 hours" unsold lead pitch — it reaches dealers who have missed the window but still have inventory of old leads.

**Article structure:**
1. Answer first: leads 30-90 days old are recoverable at a meaningful rate; leads over 120 days are typically bought elsewhere but worth one AI contact attempt
2. The decay curve: contact rate and conversion rate by days-since-visit (30 days, 60 days, 90 days, 120+ days) — use Lokam's data
3. Why old desklogs are worth working: most dealers never contacted them properly the first time — this isn't a cold lead, it's a lead that was never properly followed up
4. The reactivation message: what works for a 90-day-old desklog (specific inventory references, market condition angle, "still thinking about it?" framing)
5. What doesn't work: generic re-engagement messages, email-only reactivation, calls with no context
6. The 3-bucket system: sort desklogs into "still in market" / "bought elsewhere" / "uncertain" and work each differently
7. How to run a reactivation campaign vs ongoing follow-up — the operational difference
8. FAQ

**Internal linking strategy:**
- Link to: `/unsold-lead-recovery-software` (primary), `/dealership-bdc-software`
- Link to Week 3 (why leads never get called) and Week 7 (AI vs traditional BDC)
- Link to `/roi-calculator` with a specific reactivation frame

**Schema opportunities:**
- `HowTo` for the 3-bucket system
- `FAQPage`
- `BlogPosting` with first-party decay curve data cited

**CTA:** Hard CTA — "Run a reactivation campaign on your existing desklogs. Book a demo →" Secondary: "Calculate reactivation ROI →"

**Semantic entities to include:**
- Concepts: desklog, unsold showroom traffic, contact window decay, CRM tagging, market conditions, inventory availability, trade-in value
- Named: CDK Global, VinSolutions (where the desklogs live), NADA (market conditions data)
- Specific: 78% NADA stat again (buyers who choose first to follow up) — reinforce the core fact across the cluster

---

## Phase 3 — Commercial and Comparison (Weeks 10-13)

---

### Week 10: CDK Global Integration for AI Follow-Up

**Target keyword:** `CDK Global AI integration dealership` / `CDK DMS AI follow-up integration`
**Secondary keywords:** CDK Global API dealership software, CDK integration automotive AI, CDK compatible follow-up software

**Search intent:** Commercial investigation — highly specific. Dealers who are on CDK and evaluating AI tools need to know if the integration works before anything else. This is a gating question that kills or advances vendor conversations.

**Difficulty:** Easy (2/10). No one publishes technical documentation targeting dealers (not developers) about CDK integrations for AI follow-up.

**Business value:** Medium-High. Targets CDK dealers specifically (CDK has ~15,000 dealer clients). Ranks for a very specific query that implies active evaluation.

**Article structure:**
1. Answer first: Lokam integrates natively with CDK Global — what data it reads, how the connection is set up, what the dealer needs to do vs what Lokam handles
2. What CDK data Lokam reads: repair order status, closed RO notification, customer contact details, appointment records — what's accessed vs what's not (financial records, deal data are not accessed)
3. How the CDK connection is structured: API vs Authenticom/DealerVault data layer — explain at a dealer IT level, not a developer level
4. Setup process: what the dealer's CDK admin needs to configure, typical timeline, who handles the integration work (Lokam's team)
5. Same breakdown for Dealertrack, VinSolutions, and TEKION (shorter sections — this is a CDK-focused article but the others are valuable secondaries)
6. What DMS write-back would enable (currently on roadmap): what data could be pushed back to CDK from call outcomes
7. FAQ

**Internal linking strategy:**
- Link to: `/integrations` (primary), `/ai-voice-agent-dealership`, `/dealership-bdc-software`
- Link to Week 4 (how AI voice agents work) for the broader context
- The integrations page should link back to this article as "DMS integration deep dive"

**Schema opportunities:**
- `TechArticle`
- `FAQPage`
- `BlogPosting` with `about` mentioning CDK Global as a named entity with `sameAs` to CDK's Wikipedia/official URL

**CTA:** Hard CTA — "Running CDK? See how Lokam connects. Book a demo →"

**Semantic entities to include:**
- Named: CDK Global (CDK Layered Applications, CDK AppXchange), Dealertrack (Cox Automotive), VinSolutions, TEKION, Reynolds & Reynolds (ERA-IGNITE), Authenticom, DealerVault
- Technical: API, data layer, read-only access, DMS schema, repair order fields, customer master record
- Compliance: mention data access permissions and what Lokam does NOT access — privacy credibility signal

---

### Week 11: How to Build a Dealership Follow-Up Process That Actually Runs

**Target keyword:** `dealership follow-up process` / `automotive lead follow-up best practices`
**Secondary keywords:** car dealership BDC follow-up system, dealership customer follow-up SOP, how to structure dealership outreach

**Search intent:** Informational/commercial investigation — operations-focused. GMs and BDC directors building or rebuilding a follow-up process from scratch. Broad funnel entry that touches all of Lokam's products.

**Difficulty:** Medium (5/10). CRM companies (DriveCentric, Fullpath) rank here without keyword-specific pages. A dedicated, operationally specific guide can outrank them.

**Business value:** High. Broad reach — touches every segment Lokam serves. Can link to all four service pages legitimately.

**Article structure:**
1. Answer first: a follow-up process that runs requires defined trigger events (RO close, showroom departure, inbound lead), defined timing windows (24 hours maximum), assigned ownership, and a contact rate measurement system
2. The four trigger types and their timing requirements: service RO close, unsold showroom visit, inbound internet lead, service appointment reminder
3. The contact rate measurement problem: most dealers don't know their actual contact rate — how to calculate it from DMS data
4. BDC capacity model: how many outbound contacts one BDC rep can handle per day (with math) — and where the capacity gap opens
5. What to do when BDC capacity is the constraint vs when it's a process problem
6. How the handoff between AI first-contact and human escalation should work
7. The measurement dashboard: 5 metrics every follow-up process needs (contact rate, first-contact time, escalation rate, resolution rate, conversion rate by follow-up timing)
8. FAQ

**Internal linking strategy:**
- Link to all four service pages: `/ai-voice-agent-dealership`, `/csi-follow-up-automation`, `/unsold-lead-recovery-software`, `/dealership-bdc-software`
- Link to Week 1 (contact rate benchmarks) as the measurement reference
- Link to Week 7 (AI vs traditional BDC) for the capacity model context
- This article is the cluster hub that links everything together — it should be in the blog sidebar/featured section

**Schema opportunities:**
- `HowTo` (numbered process steps)
- `FAQPage`
- `BlogPosting` with `mentions` for CDK, VinSolutions (measurement tools)

**CTA:** Soft CTA — "Download the follow-up process checklist →" (lead magnet opportunity) or "See how Lokam automates the high-volume outreach step. Book a demo →"

**Semantic entities to include:**
- Process concepts: SOP, trigger event, contact window, escalation path, warm transfer, CRM task, outbound cadence
- Metrics: contact rate, response time, first-call resolution, BDC capacity, rep productivity
- Named: CDK, VinSolutions, DealerSocket (as the systems where data lives), NADA (benchmarks source)
- People: write as "experienced dealer operators know that..." to signal practitioner knowledge without fabricating specific quotes

---

### Week 12: Service Retention at Car Dealerships — Why Most Customers Don't Come Back

**Target keyword:** `car dealership service retention` / `automotive service retention strategies`
**Secondary keywords:** dealer customer retention fixed ops, why customers don't return for service, service absorption rate dealership

**Search intent:** Informational/commercial. Fixed ops directors and dealer principals examining why their service retention numbers are declining. The CSI connection is the angle Lokam owns — most retention content focuses on pricing and convenience, not follow-up failure.

**Difficulty:** Medium (5/10). Broad topic with established content from Reynolds & Reynolds, DealerSocket, and industry consultants. Differentiator: Lokam's angle (retention = first call after the visit) is distinct from most advice (pricing, hours, loyalty programs).

**Business value:** Medium-High. Broader funnel than the CSI articles — reaches dealers who haven't yet identified follow-up as the retention lever.

**Article structure:**
1. Answer first: the single most impactful retention factor is whether the customer feels heard after their service visit — and most don't, because the follow-up call never happens
2. The retention math: what percentage of a dealer's service business comes from returning vs new customers, and what it costs to acquire a new service customer vs retain an existing one
3. The CSI-retention link: data showing that customers who gave a high CSI score return at X% rate vs detractors
4. Why pricing and hours aren't the main retention problem (most customers who don't return don't cite inconvenience — they cite feeling ignored after a problem)
5. The follow-up gap: a customer who had a bad experience and got a proactive call resolving it is MORE likely to return than a customer who had a good experience and heard nothing
6. Service absorption rate: what it is, what it funds, why fixed ops directors care about retention at a financial level
7. What high-retention service departments do differently
8. FAQ

**Internal linking strategy:**
- Link to: `/csi-follow-up-automation` (primary), `/ai-voice-agent-dealership`
- Link to Week 2 (CSI improvement) and Week 6 (catching detractors)
- Link to `/case-studies`

**Schema opportunities:**
- `BlogPosting`
- `FAQPage`
- `StatisticalVariable` for the retention rate data

**CTA:** Mid-funnel — "See how Lokam turns at-risk customers into returning ones. Book a demo →"

**Semantic entities to include:**
- Concepts: service absorption rate, fixed ops gross, RO count, customer lifetime value (CLV), warranty work vs customer-pay, service drive capacity
- Named: Reynolds & Reynolds, CDK (as the systems tracking retention), J.D. Power (service retention research)
- Financial framing: service absorption, parts and service gross, customer-pay RO value — this is the language fixed ops directors use

---

### Week 13: The High-Performing Dealership BDC in 2026 — What Sets Them Apart

**Target keyword:** `dealership BDC strategy 2026` / `high performing automotive BDC`
**Secondary keywords:** BDC best practices car dealership, automotive BDC manager guide, how to improve dealership BDC performance

**Search intent:** Commercial investigation. BDC directors and GMs researching best practices after underperformance. End of the roadmap — this is the cluster anchor that ties all previous content together and demonstrates Lokam's topical authority to both Google and readers.

**Difficulty:** Medium (5/10). Dealer Synergy and a few training consultants publish BDC content. None have AI-specific operational data from inside dealerships.

**Business value:** High. Targets the exact decision-maker who buys Lokam (BDC director + GM combination). High topical authority signal — a comprehensive "state of the BDC" post tells Google this blog owns the topic.

**Article structure:**
1. Answer first: high-performing BDCs in 2026 differ from average BDCs on one metric more than any other — contact rate within 24 hours. Everything else (script quality, follow-up frequency, CRM hygiene) is secondary to getting the first call out
2. The data: top-quartile BDC contact rates vs bottom-quartile (cite Week 1 benchmarks)
3. What changed in 2025-2026: AI volume handling changed the capacity math — teams that adopted AI for outbound contact are now running with the same headcount but covering 5-6x more desklogs
4. The three operational separators: (1) trigger timing, (2) contact rate measurement, (3) warm escalation speed
5. What high-performing BDC managers track daily that average managers don't (specific metrics: contact rate by follow-up timing bucket, escalation rate, resolution time)
6. Technology stack at high-performing stores: DMS-native triggers, AI outbound, CRM for escalation tracking — no spreadsheets, no manual exports
7. How to audit your current BDC: a 5-question self-assessment
8. FAQ

**Internal linking strategy:**
- Link to all four service pages
- Link to Week 1 (benchmarks — this is the data foundation), Week 7 (AI vs traditional BDC), Week 4 (how AI voice works)
- Link to `/roi-calculator`
- This is the article that should get the most internal links from other articles in the cluster — it's the "state of the BDC" reference post

**Schema opportunities:**
- `BlogPosting` with `datePublished` 2026 — freshness signal
- `FAQPage`
- `Dataset` reference to the Week 1 benchmarks article

**CTA:** Hard CTA — "See how Lokam's AI gives your BDC the contact rate of a team 3x its size. Book a demo →"

**Semantic entities to include:**
- Named: NADA (for BDC training resources reference), Digital Dealer (conference reference signals topical presence), DealerRefresh (community credibility)
- People: Muhammed Saleeq in first person — "Across the dealerships we work with, we see that..."
- Concepts: contact rate, desklog coverage, escalation speed, CRM hygiene, outbound volume capacity, AI-assisted BDC, warm transfer
- Metrics: all benchmarks from Week 1 — contact rate, first-contact timing, escalation rate, conversion rate
- Competitors: can briefly mention Numa, ScaleVoice as "other AI tools entering the space" without negative framing — signals topical awareness

---

## Publication and Optimization Checklist

### Before Publishing Each Article
- [ ] Answer appears in first 150 words (AI overview/PAWC optimization)
- [ ] Minimum 3 named entities with full name on first mention
- [ ] Minimum 2 statistics with source cited inline
- [ ] Author byline: "By Muhammed Saleeq, Co-founder & CEO, Lokam" with LinkedIn link
- [ ] Internal links to at least 1 service page and 1 other blog article
- [ ] FAQPage schema added with minimum 4 questions
- [ ] `datePublished` and `dateModified` set in BlogPosting schema
- [ ] Meta description 150-160 chars, leads with the core claim
- [ ] OG image created (1200x630)
- [ ] Article added to `/llms.txt` within 7 days of publish

### After Publishing Each Article
- [ ] Submit URL in Google Search Console for indexing
- [ ] Share on Saleeq's LinkedIn with first-person commentary (not just a link)
- [ ] Update internal links from previously published articles to include this one
- [ ] Update service page to link to the new article if topically relevant

---

## Topical Authority Map at Week 13

By the end of 13 weeks, Lokam's blog covers:

| Topic Cluster | Articles | Target |
|---|---|---|
| CSI follow-up | Weeks 2, 5, 6, 12 | Service directors, fixed ops |
| BDC operations | Weeks 1, 7, 11, 13 | BDC directors, GMs |
| Unsold lead recovery | Weeks 3, 9 | Sales managers, dealer principals |
| AI voice technology | Weeks 4, 8 | Technical evaluators, AI-curious operators |
| Integrations | Week 10 | IT contacts, CDK dealers |

Google's topical authority model rewards sites that cover a topic comprehensively. At Week 13, Lokam's blog demonstrates comprehensive coverage of dealership follow-up automation — making it the default reference site Google surfaces for this topic cluster.
