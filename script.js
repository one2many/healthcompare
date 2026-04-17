const COUNTRIES = {
  USA: {
    name: "United States", flag: "🇺🇸",
    system: "Mixed public/private (employer plans, ACA marketplace, Medicare, Medicaid)",
    coverage: "~92%",
    gdpHealth: "17%",
    lifeExp: "77 yrs",
    perCapita: "$12,500",
    oop: "Deductibles up to $7,500+/yr; no universal annual income-based cap. Average OOP rose sharply with high-deductible plan growth.",
    mandate: "No mandate; voluntary enrollment",
    gatekeeper: "None — direct specialist access standard; HMO plans may require referrals",
    ltc: "Medicaid covers LTC for low-income only; otherwise private insurance or OOP; no universal LTC programme",
    insurers: "Hundreds of competing private (for-profit & nonprofit) + Medicare & Medicaid (public)",
    priceReg: "Minimal — private negotiation between insurers and providers. IRA 2022 began Medicare price negotiation for selected high-spend drugs. No national price controls.",
    benefitsPackage: "No uniform national benefits package. ACA mandates 10 essential health benefits for marketplace plans only (preventive care, mental health, maternity, prescription drugs, etc.). Employer plans vary widely. Medicare & Medicaid have separate defined benefit sets.",
    pharmCoverage: "No national formulary. Each plan sets its own drug formulary. Medicare Part D for seniors (voluntary enrolment; ~67M beneficiaries). IRA 2022 introduced $35 insulin cap and CMS negotiation for top-spend drugs starting 2026. Generic uptake ~90% of prescriptions by volume.",
    specialPop: "VA (Veterans Affairs) — separate integrated system for ~9M veterans. TRICARE — military active duty & dependants. CHIP — children in families above Medicaid threshold. Indian Health Service (IHS) — federally operated for Native Americans. No single unified system for any group.",
    top10ByDDD: "Atorvastatin, Levothyroxine, Lisinopril, Metformin, Amlodipine, Metoprolol, Albuterol, Losartan, Gabapentin, Omeprazole",
    top10ByRx: "Atorvastatin (115M), Metformin (86M), Levothyroxine (81M), Lisinopril (76M), Amlodipine (69M), Metoprolol (60M), Albuterol (60M), Losartan (56M), Gabapentin (46M), Omeprazole (45M)",
    top10ByCost: "Eliquis ($20.8B), Ozempic ($14.5B), Jardiance ($10.2B), Mounjaro ($8.8B), Xarelto ($7.9B), Trulicity ($7.1B), Entresto ($6.3B), Keytruda ($6.0B), Farxiga ($5.8B), Stelara ($5.4B)",
    costNote: "Medicare Part D + Part B only (~67M beneficiaries); does not cover full US population",
    statinLeader: "Atorvastatin",
    antihypertensive: "Lisinopril (ACE inhibitor dominant)",
    ppiChoice: "Omeprazole",
    uniqueDrug: "Albuterol (bronchodilator top 10); Gabapentin (pain/off-label high use)",
    dataSource: "ClinCalc/MEPS 2023; CMS Medicare Part D Dashboard 2024",
    population: "335M", uninsured: "~8%",
  },
  AUS: {
    name: "Australia", flag: "🇦🇺",
    system: "Universal PBS + Medicare (single national payer + private supplementary)",
    coverage: "~100%",
    gdpHealth: "10%",
    lifeExp: "83 yrs",
    perCapita: "$6,100",
    oop: "PBS co-payment ~AUD $31.60 per script (general); ~AUD $7.70 (concession). Annual Safety Net caps total OOP. Very low burden overall.",
    mandate: "Universal Medicare; PBS formulary covers all residents",
    gatekeeper: "GP referral required for specialist access under Medicare; strong primary care emphasis",
    ltc: "Aged Care Act — subsidised residential and home care; separate funding stream from Medicare",
    insurers: "Medicare (single payer for medical); PBS (single national formulary); private hospital insurance supplementary only",
    priceReg: "Strict PBS price negotiation — government negotiates with manufacturers before PBS listing. Mandatory price reductions when generics enter. Reference pricing in some categories.",
    benefitsPackage: "Comprehensive, nationally defined Medicare Benefits Schedule (MBS) for medical services. PBS defines the reimbursable drug formulary — government negotiates listing and price for each medicine. All residents entitled to the same benefit set. Gaps exist for dental, optical, and some allied health (partially covered via Enhanced Primary Care plans).",
    pharmCoverage: "PBS (Pharmaceutical Benefits Scheme) — government formulary covering ~5,000 medicines. Mandatory economic evaluation (PBAC) before any drug is listed. Generic substitution required unless 'brand substitution not permitted' is specified. Highly effective at controlling costs — highest-spend drug (pembrolizumab) cost government only AUD $685M for ~81K patients.",
    specialPop: "RPBS (Repatriation PBS) — enhanced medicine access for eligible veterans and war widows at concessional co-payment. DVA Gold & White Cards — veteran health access programmes. Aboriginal & Torres Strait Islander health — additional PBS access programmes and ACCHO (community-controlled health) funding. No separate system — all access universal Medicare as well.",
    top10ByDDD: "Rosuvastatin (91), Atorvastatin (81), Perindopril (49), Amlodipine (47), Candesartan (33), Sertraline (32), Telmisartan (31), Escitalopram (29), Metformin (28), Ramipril (24)",
    top10ByRx: "Rosuvastatin (16.3M), Atorvastatin (11.3M), Pantoprazole (11.0M), Esomeprazole (8.0M), Escitalopram (6.6M), Perindopril (6.4M), Sertraline (6.2M), Metformin (6.1M), Cefalexin (5.2M), Amoxicillin (5.0M)",
    top10ByCost: "Pembrolizumab ($685M AUD), Elexacaftor combo ($618M), Ustekinumab ($520M), Dupilumab ($485M), Aflibercept ($476M), Nivolumab ($420M), Semaglutide ($341M), Denosumab ($313M), Upadacitinib ($287M), Apixaban ($283M)",
    costNote: "PBS cost to government AUD, excluding rebates & patient contributions",
    statinLeader: "Rosuvastatin (#1 — unique among peer countries)",
    antihypertensive: "Perindopril (ACE) & Candesartan (ARB)",
    ppiChoice: "Pantoprazole & Esomeprazole",
    uniqueDrug: "Rosuvastatin #1 not atorvastatin; Telmisartan in top 10 DDD",
    dataSource: "Australian Prescriber PBS 2024–25 (PMC12711347); Dept of Health Oct 2025",
    population: "27M", uninsured: "<1%",
  },
  DEU: {
    name: "Germany", flag: "🇩🇪",
    system: "Statutory sickness funds (GKV ~90%) + private PKV (~10%)",
    coverage: "~99.8%",
    gdpHealth: "12.7%",
    lifeExp: "81 yrs",
    perCapita: "$7,500",
    oop: "GKV: capped at 2% of annual household income (1% for chronically ill). Co-payments: €10/quarter for outpatient visits (abolished 2013); €5–10 per prescription. Hospital: €10/day (max 28 days/yr). PKV: varies by plan.",
    mandate: "Mandatory GKV enrollment below income threshold (~€69,300/yr). High earners may opt into PKV.",
    gatekeeper: "No mandatory gatekeeper — direct specialist access allowed. GP-first bonus schemes exist in some Krankenkassen.",
    ltc: "Mandatory Pflegeversicherung (1995) — separate statutory LTC insurance alongside GKV. Covers home and residential care based on care level (1–5).",
    insurers: "~95 competing nonprofit Krankenkassen (GKV) + ~50 private PKV insurers. Annual switching allowed for GKV.",
    priceReg: "AMNOG (2010): all new drugs undergo G-BA benefit assessment within 6 months of launch. GKV-Spitzenverband negotiates reimbursement price from month 7. Reference pricing (Festbetrag) for off-patent drugs. Price freeze through 2026. Mandatory manufacturer rebate 7% (temporarily 12% in 2023).",
    benefitsPackage: "G-BA (Gemeinsamer Bundesausschuss) defines a uniform statutory benefits package for all 73.7M GKV insured. Covers preventive care, inpatient/outpatient care, dental (basic), mental health (GP-referred), prescription drugs on approved formulary, rehabilitation, and sick pay. Non-prescription OTC drugs generally excluded for adults since 2004 reform. PKV plans vary — often more comprehensive.",
    pharmCoverage: "GKV formulary managed by G-BA. AMNOG process evaluates clinical added benefit of new drugs vs. appropriate comparator — determines whether negotiated premium price is justified. Biosimilar substitution actively promoted. Generic substitution mandatory if rebate contract exists (pharmacist must substitute unless brand explicitly specified). Total GKV drug spend ~€50B net/yr after rebates.",
    specialPop: "Civil servants (Beamte) — enrolled in PKV, not GKV; receive Beihilfe (government co-payment subsidy covering ~50–80% of costs). Self-employed above income threshold — may choose PKV. Military (Bundeswehr) — own medical service but integrated into GKV/PKV system. No completely separate system; all citizens access same providers.",
    top10ByDDD: "Ramipril (~87), Candesartan (~72), Pantoprazole (~67), Amlodipine (~63), Atorvastatin (~59), Levothyroxine (~54), Torasemide (~41), Simvastatin (~37), Bisoprolol (~35), Metoprolol (~32)",
    top10ByRx: "Ibuprofen (~17M), Pantoprazole (~16M), Ramipril (~14M), Metformin (~13M), Levothyroxine (~13M), Amlodipine (~12M), Amoxicillin (~11M), Atorvastatin (~11M), Candesartan (~11M), Bisoprolol (~10M)",
    top10ByCost: "Pembrolizumab (~€1.9B), Apixaban (~€0.9B), Semaglutide (~€0.8B), Nivolumab (~€0.7B), Empagliflozin (~€0.7B), Dupilumab (~€0.6B), Ustekinumab (~€0.5B), Lenalidomide (~€0.5B), Adalimumab (~€0.5B), Elexacaftor (~€0.4B)",
    costNote: "GKV net after mandatory rebates — ~20% of gross spend returned as rebates",
    statinLeader: "Atorvastatin (+ Simvastatin still significant)",
    antihypertensive: "Ramipril #1 by DDD (ACE inhibitor strongly preferred)",
    ppiChoice: "Pantoprazole (dominates — lower DDD cost drove early adoption)",
    uniqueDrug: "Torasemide (loop diuretic) in top 10 — virtually unique to Germany",
    dataSource: "Arzneiverordnungsreport AVR 2023; PMC11985566; GKV-Spitzenverband",
    population: "84M", uninsured: "<0.2%",
  },
  NLD: {
    name: "Netherlands", flag: "🇳🇱",
    system: "Regulated private insurance (ZVW) — mandatory private insurers with government-defined basic package",
    coverage: "~100%",
    gdpHealth: "10%",
    lifeExp: "82 yrs",
    perCapita: "$6,800",
    oop: "Annual deductible (eigen risico) ~€385 (2024). Applies to most care except GP visits, maternity, and children under 18. Low-income households receive zorgtoeslag (health insurance subsidy). OOP burden relatively low and predictable.",
    mandate: "Mandatory for all residents — must purchase basic insurance from competing private insurers. Failure to enrol results in automatic assignment and fine.",
    gatekeeper: "Mandatory GP (huisarts) gatekeeper — patients must see GP before any specialist referral. This is the primary cost-control mechanism distinguishing Netherlands from Germany/Switzerland.",
    ltc: "Separate national Wlz (Wet langdurige zorg) scheme — covers nursing home and home care for those with permanent intensive care needs. Separate from ZVW health insurance.",
    insurers: "Competing private nonprofit insurers (cannot deny coverage or vary premium by health status). Risk equalisation fund compensates insurers for sicker pools. Annual switching encouraged.",
    priceReg: "NZa (Dutch Healthcare Authority) regulates maximum prices for most hospital and pharmaceutical care. GVS formulary clusters therapeutically equivalent drugs — reimbursement capped at reference price. Maximum prices set annually via international reference pricing.",
    benefitsPackage: "Government defines the basisverzekering (basic insurance package) — all insurers must offer identical coverage at community-rated premium. Covers GP care, hospital care, specialist care (with GP referral), mental health (basic), dental (children up to 18), maternity, physiotherapy (limited), prescription drugs on GVS formulary. Supplementary (aanvullende) insurance available for dental, physio, glasses etc. — 84% of population hold some supplement.",
    pharmCoverage: "GVS (Geneesmiddelenvergoedingssysteem) — national reimbursable medicines list. Drugs clustered by therapeutic equivalence; reimbursement capped at cluster reference price. Patient pays difference if choosing higher-priced equivalent. Zorginstituut Nederland (ZIN) makes coverage decisions based on efficacy, cost-effectiveness, and necessity. Conditional reimbursement used for innovative medicines while evidence accumulates.",
    specialPop: "No completely separate system. Wlz (long-term care) covers elderly/disabled with intensive needs — managed by separate Zorgkantoren. Asylum seekers — covered under RZA (Regeling Zorg Asielzoekers) separate from ZVW. Military — integrated into standard ZVW; MCD (Military Health Service) for deployed forces. Children under 18 — no deductible; dental included in basic package.",
    top10ByDDD: "Simvastatin (~71), Metoprolol (~62), Omeprazole (~58), Pantoprazole (~47), Atorvastatin (~44), Levothyroxine (~42), Metformin (~38), Amlodipine (~36), Lisinopril (~33), Amoxicillin (~27)",
    top10ByRx: "Simvastatin (~16M), Omeprazole (~14M), Metoprolol (~13M), Pantoprazole (~11M), Levothyroxine (~10M), Metformin (~9.5M), Atorvastatin (~9M), Amlodipine (~8M), Amoxicillin (~7.5M), Lisinopril (~7M)",
    top10ByCost: "Pembrolizumab (~€380M), Nivolumab (~€260M), Apixaban (~€240M), Dupilumab (~€210M), Ustekinumab (~€190M), Semaglutide (~€180M), Elexacaftor (~€160M), Adalimumab (~€150M), Trastuzumab (~€140M), Daratumumab (~€130M)",
    costNote: "ZVW reimbursed cost net of insurer contribution; Zorginstituut Nederland",
    statinLeader: "Simvastatin #1 (Dutch CV guidelines favour simvastatin 40mg as first line)",
    antihypertensive: "Metoprolol (beta-blocker) + Lisinopril (ACE inhibitor)",
    ppiChoice: "Both omeprazole and pantoprazole — both in top 10 DDD",
    uniqueDrug: "Simvastatin still #1 (most countries have shifted to atorvastatin)",
    dataSource: "GIPdatabank.nl (Zorginstituut); PMC6614185; NZa annual reports",
    population: "17.9M", uninsured: "<1%",
  },
  CHE: {
    name: "Switzerland", flag: "🇨🇭",
    system: "Mandatory private insurance (KVG/LAMal) — competing private insurers, government-defined basic package",
    coverage: "~100%",
    gdpHealth: "11.8%",
    lifeExp: "83 yrs",
    perCapita: "$9,700",
    oop: "Deductible (Franchise) CHF 300–2,500/yr (chosen by insured; lower premium for higher deductible) + 10% co-insurance up to CHF 700/yr. Total maximum annual OOP ~CHF 3,200. Highest OOP burden among European systems. High-deductible plans encouraged to reduce moral hazard.",
    mandate: "Mandatory for all residents by federal law (KVG 1996). Non-enrolment results in cantonal authority purchasing on your behalf and billing you.",
    gatekeeper: "No mandatory gatekeeper in standard model. HMO and Hausarzt (GP-first) plan variants offer lower premiums in exchange for gatekeeper requirement. ~50% of insured choose a restricted access plan.",
    ltc: "Supplementary LTC insurance available privately. Basic nursing home costs partially covered under KVG/AHV. Significant OOP cost burden remains — families often contribute substantially to residential care.",
    insurers: "~50+ competing private insurers (nonprofit and for-profit). Premiums community-rated — same premium regardless of health status (unlike income-based GKV). Government provides Prämienverbilligung (premium subsidy) for low-income households.",
    priceReg: "FOPH (BAG) manages the Spezialitätenliste (SL) — list of reimbursable drugs. Prices set via: (1) International reference pricing vs. 9 reference countries; (2) Therapeutic cross-comparison (TQV). Three-year review cycle — prices of 2,700+ drugs reduced average 14% between 2017–2023. No AMNOG-style HTA for new drugs; Swissmedic approves safety/efficacy only.",
    benefitsPackage: "KVG defines the mandatory Leistungskatalog (benefits catalogue) — all insurers must offer identical basic coverage. Covers outpatient & inpatient care, GP & specialist visits, mental health (psychiatrist/GP-referred psychotherapist), maternity, physiotherapy (with prescription), dental (only if disease-linked, e.g. jaw cancer), and SL-listed drugs. Supplementary (Zusatzversicherung) covers private hospital rooms, complementary medicine, dental, extended physio — ~70% hold some supplement.",
    pharmCoverage: "Spezialitätenliste (SL) — FOPH-managed formulary of ~3,300 reimbursable medicines. All SL drugs reimbursed at fixed public price (minus OOP). Generic substitution promoted but pharmacist cannot substitute without prescriber consent — lower generic uptake than Germany. Biosimilars reimbursed but uptake slow. Drug costs in 2023 reached CHF 9.02B — largest single item in basic insurance for first time. No confidential rebates required to be disclosed publicly (unlike Germany's published AMNOG prices).",
    specialPop: "Military (Armee) — own medical service for active personnel; integrated into KVG for routine care. Cantonal variations — cantons negotiate hospital tariffs (TARMED) and subsidise hospital infrastructure. Asylum seekers — covered under cantonal emergency/basic care schemes, not standard KVG. No VA-equivalent or separate civil servant system. High-income earners who can afford PKV-equivalent supplementary coverage gain access to private hospital rooms and faster specialist access — creating a de facto two-tier system.",
    top10ByDDD: "Atorvastatin (~68), Losartan/Valsartan (~62), Metformin (~58), Bisoprolol (~54), Amlodipine (~50), Pantoprazole/Omeprazole (~46), Levothyroxine (~42), Rosuvastatin (~38), Ramipril/Perindopril (~33), SSRIs/Escitalopram (~29)",
    top10ByRx: "Atorvastatin (~4.5M), Pantoprazole (~4.0M), Metformin (~3.6M), Levothyroxine (~3.4M), Amlodipine (~3.1M), Bisoprolol (~2.9M), Ibuprofen (~2.7M), Amoxicillin (~2.4M), Losartan (~2.2M), Rosuvastatin (~2.0M)",
    top10ByCost: "Pembrolizumab (~CHF 420M), Nivolumab (~CHF 280M), Apixaban (~CHF 260M), Dupilumab (~CHF 230M), Elexacaftor (~CHF 200M), Ustekinumab (~CHF 190M), Semaglutide (~CHF 180M), Adalimumab (~CHF 160M), Ibrutinib (~CHF 150M), Daratumumab (~CHF 140M)",
    costNote: "KVG compulsory insurance; public SL prices before confidential rebates",
    statinLeader: "Atorvastatin (surpassed simvastatin ~2019; rosuvastatin rising post-2018 ESC guidelines)",
    antihypertensive: "ARBs dominant (losartan, valsartan, candesartan) — Switzerland uniquely prefers ARBs over ACE inhibitors",
    ppiChoice: "Both pantoprazole and omeprazole used; pantoprazole slightly higher volume",
    uniqueDrug: "ARB-dominant hypertension Rx; SSRIs in top 10 DDD (9% 1-yr AD prescription prevalence)",
    dataSource: "Swiss Tariff Pool / Helsana 2024; FIRE EMR DB; Lipids Health Dis 2025; PMC7610666",
    population: "9M", uninsured: "<1%",
  },
  JPN: {
    name: "Japan", flag: "🇯🇵",
    system: "Social health insurance (SHI) — multiple occupation-based societies + National Health Insurance",
    coverage: "~100%",
    gdpHealth: "10.8%",
    lifeExp: "84 yrs",
    perCapita: "$4,700",
    oop: "30% co-insurance standard for working-age adults (under 70). 20% for children; 10–30% for elderly 70+ depending on income. Monthly high-cost medical expense ceiling (Kōgaku Ryōyō-hi) — cap varies by income band (~¥35,400–¥252,600/month). OOP burden moderate; cap prevents catastrophic exposure.",
    mandate: "Mandatory for all citizens and residents since 1961 (universal health coverage achieved)",
    gatekeeper: "No formal gatekeeper — patients may visit any clinic, GP, or hospital directly. Large hospitals charge an additional fee for patients without a referral (¥5,000–7,700) to encourage GP-first pathways.",
    ltc: "Mandatory Long-Term Care Insurance (Kaigo Hoken) since 2000 — funded by premiums (age 40+) and government. Covers home care, day care, and residential facilities based on care level. Universal; widely regarded as one of the world's most comprehensive LTC systems.",
    insurers: "~1,400 employment-based health insurance societies (Kenpo Kumiai) for large firms; government-managed SHITEI for small firms; NHI for self-employed and elderly; LATE (post-75) system for elderly. Highly fragmented but unified under national fee schedule.",
    priceReg: "Most regulated of all major economies. National fee schedule (shinryo hōshū) revised every 2 years — sets prices for all medical services and drugs. Drug price reductions mandatory: new drugs priced based on similarity to existing treatments; mandatory price cuts after 15 months; market expansion re-pricing when utilisation exceeds forecasts. Pharma companies must accept government-set prices or withdraw from market.",
    benefitsPackage: "Single national standard benefit set — applies to all 125M residents regardless of insurer. Covers outpatient, inpatient, dental, mental health, maternity (partly via lump-sum allowance), prescription drugs, home nursing, and LTC (via separate LTCI). Highly comprehensive in scope but some frontier oncology/rare disease drugs face delayed access vs. USA/EU due to approval and price-setting timelines (known as drug lag). Dental comprehensively covered — unusual among peer countries.",
    pharmCoverage: "National reimbursable drug list updated quarterly. Manufacturers must seek NHI listing separately from regulatory approval (Shōnin). Price set by comparison with similar drugs or foreign prices. Re-pricing (yakka kaitei) occurs every 2 years — prices consistently fall over time, reducing spending on established drugs. Generic substitution promoted since 2007; generics now ~80% by volume. Biosimilar adoption accelerating. Drug lag: some biologics take 1–3 years longer to reach Japan vs. USA.",
    specialPop: "Elderly (75+) — Late-Stage Elderly Medical Care System (Kōki Kōreisha Iryō Seido) from age 75: separate insurance pool with 10% co-pay (income-dependent). Children — co-pay subsidies vary by municipality; many prefectures offer free or near-free care under age 15–18. Self-Defence Forces — own military medical system (JGSDF/JMSDF/JASDF medical corps), separate from civilian SHI but equivalent coverage. Atomic bomb survivors (Hibakusha) — special government medical aid programme covering all treatment costs.",
    top10ByDDD: "Atorvastatin, Amlodipine, Candesartan, Lansoprazole, Metformin, Rosuvastatin, Valsartan, Alogliptin, Levothyroxine, Bisoprolol",
    top10ByRx: "Atorvastatin (largest), Amlodipine, Rosuvastatin, Candesartan, Metformin, Lansoprazole, Valsartan, Bisoprolol, Famotidine, Alogliptin",
    top10ByCost: "Pembrolizumab, Nivolumab, Durvalumab, Atezolizumab, Lenvatinib, Osimertinib, Venetoclax, Bortezomib, Rituximab, Trastuzumab",
    costNote: "NHI programme national fee schedule cost; declining real prices over time",
    statinLeader: "Atorvastatin & Rosuvastatin both high volume",
    antihypertensive: "Candesartan (ARB) and Amlodipine (CCB) dominant",
    ppiChoice: "Lansoprazole (historically dominant PPI in Japan)",
    uniqueDrug: "Alogliptin (DPP-4 inhibitor) in top 10; famotidine (H2 blocker) persists; drug lag vs. Western markets",
    dataSource: "OECD Health Statistics; IQVIA Japan; NHI Ministry of Health data",
    population: "125M", uninsured: "<1%",
  },
  IND: {
    name: "India", flag: "🇮🇳",
    system: "Mixed public/private; PM-JAY for BPL; ESIC for formal workers",
    coverage: "~50% effectively covered",
    gdpHealth: "3%",
    lifeExp: "70 yrs",
    perCapita: "$73",
    oop: "~50–60% of total health spending is out-of-pocket — among the highest ratios globally. Catastrophic health expenditure remains a major cause of household poverty (~55M pushed into poverty annually by health costs).",
    mandate: "No universal mandate. PM-JAY (Ayushman Bharat) targets ~500M BPL households for secondary/tertiary hospitalisation cover. ESIC mandatory for formal sector employees earning ≤₹21K/month.",
    gatekeeper: "No formal gatekeeper. Private specialists accessible directly; public system has referral tiers in theory but poorly enforced. Strong informal private market dominates.",
    ltc: "Minimal state provision. Predominantly family-based. No statutory LTC insurance. National Programme for Health Care of the Elderly (NPHCE) provides limited public geriatric services.",
    insurers: "Government: ESIC (formal workers), CGHS (central govt. employees), PM-JAY/Ayushman Bharat (BPL), state-level schemes. Private: ~30 general insurance companies. Highly fragmented; no risk pooling across schemes.",
    priceReg: "NPPA (National Pharmaceutical Pricing Authority) controls prices of scheduled essential medicines under DPCO (Drug Price Control Order). ~800+ drugs price-controlled. Ceiling prices set at simple average of top-3 brands. Non-scheduled drugs — manufacturers free to set prices (maximum 10% annual increase). Jan Aushadhi Kendras — government generic stores selling at steep discounts.",
    benefitsPackage: "No universal defined benefits package. Public sector: free or near-free care in government hospitals (highly variable quality and availability). PM-JAY: hospitalization cover up to ₹5 lakh (~$6,000)/yr/family for secondary and tertiary care; ~1,929 treatment packages listed. Does not cover outpatient, medicines, diagnostics, or primary care. ESIC: comprehensive cover for employees (outpatient, inpatient, medicines, sick leave, maternity). Private insurance: highly variable; typically hospitalisation-focused; outpatient cover rare and expensive.",
    pharmCoverage: "No national PBS-equivalent formulary. NPPA essential medicine price controls for ~800+ molecules. National List of Essential Medicines (NLEM 2022) — 384 medicines. Jan Aushadhi: ~10,000 stores dispensing generics at 50–90% below market price. PM-BJAY (Pradhan Mantri Bhartiya Janaushadhi Pariyojana) targets affordable generic access. Generic substitution not systematically enforced; brand prescribing dominant in private sector despite regulations. High OOP on medicines (~40% of total OOP health spending).",
    specialPop: "CGHS (Central Government Health Scheme) — comprehensive care for central government employees, pensioners, and dependants (~4M beneficiaries); access to empanelled private hospitals. ESIC (Employees' State Insurance Corporation) — ~143M beneficiaries (formal sector workers ≤₹21K/month); own hospital network + dispensaries. Ex-servicemen (ECHS) — own medical scheme. Tribal/rural populations — National Rural Health Mission (NHM); Accredited Social Health Activists (ASHAs) as community health workers.",
    top10ByDDD: "Metformin, Atorvastatin, Amlodipine, Atenolol, Metoprolol, Omeprazole, Paracetamol, Amoxicillin, Cetirizine, Levothyroxine",
    top10ByRx: "Paracetamol (highest volume), Amoxicillin, Azithromycin, Cetirizine, Metformin, Atorvastatin, Omeprazole, Amlodipine, Atenolol, Pantoprazole",
    top10ByCost: "Limited public data. Cancer biologics, insulin, antiretrovirals, transplant drugs dominate high-cost spend",
    costNote: "No comprehensive national drug spending database; ~50–60% of drug costs are OOP",
    statinLeader: "Atorvastatin (dominant; rosuvastatin growing in urban markets)",
    antihypertensive: "Amlodipine (CCB) and Atenolol (beta-blocker — largely superseded elsewhere)",
    ppiChoice: "Omeprazole & Pantoprazole both common",
    uniqueDrug: "Atenolol (widely used despite reduced use globally); Cetirizine (antihistamine) in top 10",
    dataSource: "IQVIA India; NPPA; WHO Essential Medicines; MoHFW data",
    population: "1.4B", uninsured: "~50%",
  },
};

const ROWS = [
  { section: "System Overview" },
  { key: "system",        label: "System model",         desc: "Financing & insurer structure" },
  { key: "mandate",       label: "Coverage mandate",     desc: "Enrollment requirement" },
  { key: "coverage",      label: "Population covered",   desc: "% with health insurance" },
  { key: "uninsured",     label: "Uninsured rate" },
  { key: "population",    label: "Population" },

  { section: "Key Metrics" },
  { key: "gdpHealth",     label: "Health spend (% GDP)" },
  { key: "perCapita",     label: "Per capita (USD)",     desc: "Annual health spend" },
  { key: "lifeExp",       label: "Life expectancy" },

  { section: "Benefits Package" },
  { key: "benefitsPackage", label: "Benefits package",  desc: "What is covered under basic/public insurance" },

  { section: "Price Regulation" },
  { key: "priceReg",      label: "Drug price regulation", desc: "How drug prices are set & controlled" },

  { section: "Out-of-Pocket Costs" },
  { key: "oop",           label: "OOP structure",        desc: "Patient deductibles, co-pays & caps" },

  { section: "Special Populations" },
  { key: "specialPop",    label: "Special populations",  desc: "Separate schemes or extra protections" },

  { section: "System Design" },
  { key: "insurers",      label: "Insurer structure" },
  { key: "gatekeeper",    label: "GP gatekeeping" },
  { key: "ltc",           label: "Long-term care" },

  { section: "Pharmaceuticals" },
  { key: "pharmCoverage", label: "Pharmaceutical coverage", desc: "Formulary, generic substitution & access" },
  { key: "statinLeader",  label: "Leading statin",       desc: "Most prescribed cholesterol drug" },
  { key: "antihypertensive", label: "Leading antihypertensive", desc: "Most prescribed BP drug" },
  { key: "ppiChoice",     label: "Leading PPI",          desc: "Most prescribed acid suppressor" },
  { key: "uniqueDrug",    label: "Country-specific pattern", desc: "Notable prescribing divergence" },
  { key: "top10ByDDD",    label: "Top 10 by DDD/1k/day", desc: "WHO utilisation metric" },
  { key: "top10ByRx",     label: "Top 10 by prescription count", desc: "Dispensing events" },
  { key: "top10ByCost",   label: "Top 10 by insurer cost", desc: "Government/insurer drug spend" },
  { key: "costNote",      label: "Cost data note",       desc: "Coverage & methodology" },

  { section: "Data Sources" },
  { key: "dataSource",    label: "Primary data source" },
];

const COUNTRY_KEYS = Object.keys(COUNTRIES).filter(k => k !== 'USA');
let selectedCountries = ['DEU', 'NLD', null, null];

function getAvailableOptions(slotIndex) {
  const used = selectedCountries.filter((c, i) => c !== null && i !== slotIndex);
  return COUNTRY_KEYS.filter(k => !used.includes(k));
}

function renderHeader() {
  const row = document.getElementById('headerRow');
  row.innerHTML = '';

  const labelTh = document.createElement('th');
  labelTh.style.cssText = 'width:155px;background:var(--paper);border-bottom:2px solid var(--ink);padding:10px 12px;text-align:left;position:sticky;left:0;z-index:11;';
  labelTh.innerHTML = '<div style="font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3)">Metric</div>';
  row.appendChild(labelTh);

  const usTh = document.createElement('th');
  usTh.className = 'col-us-header';
  usTh.innerHTML = `<div class="country-header-cell">
    <div style="font-size:16px;margin-bottom:3px">${COUNTRIES['USA'].flag}</div>
    <span class="country-name-display">${COUNTRIES['USA'].name}</span>
    <div style="font-size:9px;color:#a8c4e0;margin-top:2px;letter-spacing:.04em">Fixed reference</div>
  </div>`;
  row.appendChild(usTh);

  for (let i = 0; i < 4; i++) {
    const th = document.createElement('th');
    th.style.cssText = 'background:var(--paper);border-bottom:2px solid var(--ink);';
    const sel = selectedCountries[i];
    const available = getAvailableOptions(i);

    if (sel) {
      const cdata = COUNTRIES[sel];
      th.innerHTML = `<div class="country-header-cell" style="padding-bottom:6px">
        <div style="font-size:16px;margin-bottom:3px">${cdata.flag}</div>
        <span class="country-name-display">${cdata.name}</span>
      </div>
      <div class="country-selector-cell" style="padding-top:0">
        <div class="selector-wrapper">
          <select class="country-select" onchange="changeCountry(${i}, this.value)">
            <option value="">— change —</option>
            ${available.map(k => `<option value="${k}"${k===sel?' selected':''}>${COUNTRIES[k].flag} ${COUNTRIES[k].name}</option>`).join('')}
          </select>
          <button class="remove-btn" onclick="removeCountry(${i})" title="Remove column">✕</button>
        </div>
      </div>`;
    } else {
      th.innerHTML = `<div class="country-selector-cell" style="padding:12px 10px">
        <div style="font-size:9px;color:var(--ink3);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">Add country</div>
        <div class="selector-wrapper">
          <select class="country-select" onchange="changeCountry(${i}, this.value)">
            <option value="">Select...</option>
            ${available.map(k => `<option value="${k}">${COUNTRIES[k].flag} ${COUNTRIES[k].name}</option>`).join('')}
          </select>
        </div>
      </div>`;
    }
    row.appendChild(th);
  }
}

function renderBody() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  for (const row of ROWS) {
    if (row.section) {
      const tr = document.createElement('tr');
      tr.className = 'section-row';
      tr.innerHTML = `<td colspan="6">${row.section}</td>`;
      tbody.appendChild(tr);
      continue;
    }

    const tr = document.createElement('tr');
    tr.className = 'data-row';

    const labelTd = document.createElement('td');
    labelTd.className = 'row-label';
    labelTd.innerHTML = `<span class="row-label-inner">${row.label}</span>${row.desc ? `<span class="row-label-desc">${row.desc}</span>` : ''}`;
    tr.appendChild(labelTd);

    const usTd = document.createElement('td');
    usTd.className = 'cell-us';
    usTd.innerHTML = formatCell(COUNTRIES['USA'][row.key], row.key);
    tr.appendChild(usTd);

    for (let i = 0; i < 4; i++) {
      const td = document.createElement('td');
      const sel = selectedCountries[i];
      if (sel) {
        td.className = 'cell-other';
        td.innerHTML = formatCell(COUNTRIES[sel][row.key], row.key);
      } else {
        td.className = 'cell-other cell-empty empty-col';
        td.innerHTML = '—';
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function formatCell(val, key) {
  if (!val) return '<span style="color:var(--ink3);font-size:9px">N/A</span>';

  if (key === 'coverage') {
    const isHigh = val.includes('100') || val.includes('99');
    return `<span class="val-main">${val}</span>${isHigh ? '<br><span class="badge badge-green">universal</span>' : ''}`;
  }
  if (key === 'uninsured') {
    const n = parseFloat(val);
    const isHigh = n >= 5;
    return `<span class="val-main">${val}</span>${isHigh ? '<br><span class="badge badge-red">high</span>' : '<br><span class="badge badge-green">low</span>'}`;
  }
  if (key === 'gdpHealth') {
    const n = parseFloat(val);
    return `<span class="val-main">${val}</span>${n >= 15 ? '<br><span class="badge badge-red">highest</span>' : n <= 4 ? '<br><span class="badge badge-gold">developing</span>' : ''}`;
  }
  if (key === 'oop') {
    const isHigh = val.includes('7,500') || val.includes('50%') || val.includes('60%') || val.includes('3,200');
    const isLow = val.includes('2%') || val.includes('Safety Net') || val.includes('AUD $31') || val.includes('385');
    return `<span style="font-size:10px;line-height:1.55;display:block">${val}</span>${isHigh ? '<span class="badge badge-red">high burden</span>' : isLow ? '<span class="badge badge-green">well protected</span>' : ''}`;
  }
  if (key === 'top10ByDDD' || key === 'top10ByRx' || key === 'top10ByCost') {
    const items = val.split(',').map(s => s.trim()).slice(0, 10);
    return `<ol style="list-style:none;padding:0;margin:0">${items.map((item, i) => `<li style="font-size:9px;padding:2px 0;border-bottom:1px solid var(--rule2);color:${i===0?'var(--ink)':'var(--ink2)'};font-weight:${i===0?'500':'400'}"><span style="color:var(--ink3);width:14px;display:inline-block">${i+1}.</span>${item}</li>`).join('')}</ol>`;
  }
  if (['benefitsPackage','pharmCoverage','specialPop','priceReg'].includes(key)) {
    return `<span style="font-size:10px;line-height:1.6;display:block;color:var(--ink)">${val}</span>`;
  }
  if (val.length > 80) {
    return `<span style="font-size:10px;line-height:1.5;display:block">${val}</span>`;
  }
  return `<span class="val-main">${val}</span>`;
}

function changeCountry(slotIndex, value) {
  selectedCountries[slotIndex] = value || null;
  render();
}

function removeCountry(slotIndex) {
  selectedCountries[slotIndex] = null;
  render();
}

function render() {
  renderHeader();
  renderBody();
}

render();
