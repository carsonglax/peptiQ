/* ==========================================================
   peptiQ — peptide library + stacks
   Educational reference only. Many peptides below are not
   FDA-approved. Dosing values are protocols reported in the
   published research/clinical literature, not medical advice.
   ========================================================== */

const peptides = [
  {
    name: "BPC-157",
    aka: "Body Protective Compound 157",
    category: "Healing & Recovery",
    color: "#34d399",
    summary: "Pentadecapeptide derived from a gastric protein, studied for tissue repair and gut healing.",
    description:
      "BPC-157 is a synthetic 15-amino-acid peptide derived from a 'body protective compound' isolated from human gastric juice. Preclinical research (mostly rodent) has explored its role in soft-tissue healing — tendons, ligaments, muscle, and the GI lining — and in modulating angiogenesis and nitric-oxide signaling.",
    mechanism: "Upregulates growth-factor receptors (e.g., VEGFR2), enhances nitric-oxide pathways, and promotes fibroblast migration and angiogenesis at injury sites.",
    halfLife: "Short systemic half-life (minutes); local effects extend at injury sites.",
    studied: [
      "Tendon and ligament repair (animal models)",
      "Gastric ulcer and IBD-related healing (animal models)",
      "Muscle fiber regeneration after injury",
      "Possible neuroprotective signaling"
    ],
    risks: [
      "No completed large human clinical trials",
      "Long-term safety in humans is unknown",
      "Not FDA-approved; sold only as a research chemical",
      "Sourcing and purity vary widely outside regulated supply chains"
    ],
    dosing: "Research-cited protocol: 250–500 mcg subcutaneous, 1–2× daily, ideally near the injury site, in 4–6 week cycles. Some literature uses oral dosing for GI work at similar amounts. No validated human dose exists.",
    status: "Not FDA-approved. Placed on FDA's Section 503A bulks 'do not compound' category 2 list in 2023.",
    references: "Sikiric et al. (multiple preclinical reviews); FDA 503A Bulks List."
  },
  {
    name: "TB-500",
    aka: "Thymosin Beta-4 fragment",
    category: "Healing & Recovery",
    color: "#10b981",
    summary: "Synthetic fragment of Thymosin Beta-4 studied for cell migration and tissue repair.",
    description:
      "TB-500 is a synthetic version of the active region of Thymosin Beta-4, a peptide involved in actin regulation and cell migration. Preclinical studies have examined wound healing, cardiac repair after ischemia, and corneal injury.",
    mechanism: "Binds G-actin and influences cytoskeletal dynamics, enabling cell migration to injury; also implicated in angiogenesis and anti-inflammatory signaling.",
    halfLife: "Several hours systemically; tissue binding extends local action.",
    studied: [
      "Skin and corneal wound closure",
      "Cardiac tissue protection after ischemia (animal models)",
      "Hair follicle activation",
      "Anti-inflammatory effects in joint models"
    ],
    risks: [
      "Banned by WADA (S2 class) — prohibited in sport",
      "No approved human therapeutic use",
      "Theoretical pro-angiogenic concern with undiagnosed tumors",
      "Long-term human safety data are absent"
    ],
    dosing: "Research-cited protocol: loading phase 2–2.5 mg subcutaneous twice weekly for 4–6 weeks, then maintenance 2 mg every 1–2 weeks. No validated human dose exists.",
    status: "Not approved by FDA. Prohibited in sport (WADA).",
    references: "Goldstein et al. on TB-4 biology; WADA Prohibited List."
  },
  {
    name: "GHK-Cu",
    aka: "Copper Tripeptide-1",
    category: "Skin & Cosmetic",
    color: "#06b6d4",
    summary: "Copper-binding tripeptide studied for skin remodeling and collagen synthesis.",
    description:
      "GHK is a naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) that binds copper(II) with high affinity. The complex GHK-Cu has been studied for decades in dermatology and wound healing and is widely used in cosmetic skincare.",
    mechanism: "Acts as a copper carrier; modulates genes involved in extracellular-matrix remodeling, antioxidant defense, and DNA repair; stimulates fibroblast collagen and elastin production.",
    halfLife: "Topical action localized; systemic kinetics depend on route.",
    studied: [
      "Improved skin firmness and fine lines",
      "Wound and burn healing (preclinical and small clinical)",
      "Anti-inflammatory and antioxidant signaling",
      "Possible hair growth effects"
    ],
    risks: [
      "Local irritation or contact sensitivity in some users",
      "Injectable use is not FDA-approved",
      "Limited large-scale human clinical trials"
    ],
    dosing: "Topical (cosmetic): 0.05–2% serums or creams once or twice daily. Research injectable: 1–2 mg subcutaneous weekly, or microneedling at 0.1–0.2% solutions.",
    status: "Cosmetic ingredient widely available; injectable form is research-only.",
    references: "Pickart & Margolina reviews on GHK biology."
  },
  {
    name: "KPV",
    aka: "Lysine-Proline-Valine",
    category: "Healing & Recovery",
    color: "#22d3ee",
    summary: "C-terminal tripeptide of α-MSH studied for anti-inflammatory effects in the gut and skin.",
    description:
      "KPV is the C-terminal tripeptide of alpha-melanocyte stimulating hormone (α-MSH). Unlike α-MSH, it lacks pigmentation effects but retains anti-inflammatory activity. Research has focused on inflammatory bowel disease and dermatologic inflammation.",
    mechanism: "Reduces NF-κB signaling and pro-inflammatory cytokine release; may act on melanocortin receptors and intracellular targets within immune cells.",
    halfLife: "Short; oral and topical formulations explored.",
    studied: [
      "Colitis models in animals",
      "Topical anti-inflammatory effects",
      "Reduced cytokine release in cell models"
    ],
    risks: [
      "Limited human data",
      "Not FDA-approved as a drug",
      "Quality varies among research suppliers"
    ],
    dosing: "Research protocols: 200–500 mcg orally or topically, 1–2× daily, often in 4-week cycles.",
    status: "Research peptide; not approved.",
    references: "Luger & Brzoska reviews on melanocortin peptides."
  },
  {
    name: "Ipamorelin",
    aka: "GHRP / Ghrelin mimetic",
    category: "Growth Hormone",
    color: "#a78bfa",
    summary: "Selective growth-hormone secretagogue studied in research for pulsatile GH release.",
    description:
      "Ipamorelin is a synthetic pentapeptide that selectively stimulates GH release via the ghrelin/GHS-R1a receptor in the pituitary. Compared with older GHRPs, it produces minimal cortisol or prolactin elevation in studies.",
    mechanism: "Agonist at the ghrelin receptor (GHS-R1a) in the anterior pituitary, triggering GH release without strongly activating the HPA axis.",
    halfLife: "Approximately 2 hours.",
    studied: [
      "Pulsatile GH release",
      "Indirect IGF-1 elevation",
      "Body-composition support when paired with GHRH analogs"
    ],
    risks: [
      "Possible water retention, joint discomfort, and insulin sensitivity changes with chronic use",
      "Not FDA-approved",
      "Long-term safety in healthy adults is undefined"
    ],
    dosing: "Research-cited protocol: 200–300 mcg subcutaneous, 1–3× daily on an empty stomach. Most common is 300 mcg pre-bed; some protocols also dose post-workout. Pairs synergistically with a GHRH analog (CJC-1295 or Tesamorelin).",
    status: "Not approved. Listed on FDA 503A 'do not compound' category 2.",
    references: "Raun et al., 1998; FDA 503A Bulks List."
  },
  {
    name: "Tesamorelin",
    aka: "TH9507 / Egrifta",
    category: "Growth Hormone",
    color: "#8b5cf6",
    summary: "GHRH analog FDA-approved for HIV-associated lipodystrophy; studied for visceral fat reduction.",
    description:
      "Tesamorelin is a stabilized GHRH analog with an added trans-3-hexenoic acid group for stability. It is FDA-approved (as Egrifta) for reducing excess visceral abdominal fat in HIV-lipodystrophy.",
    mechanism: "Binds GHRH receptors in the anterior pituitary, stimulating endogenous GH and IGF-1 release in a physiologic, pulsatile pattern.",
    halfLife: "About 26–38 minutes after subcutaneous injection.",
    studied: [
      "Visceral adipose tissue reduction",
      "IGF-1 elevation",
      "Lipid profile changes",
      "Cognitive endpoints in older adults (small studies)"
    ],
    risks: [
      "Injection-site reactions",
      "Possible glucose intolerance and joint pain",
      "Caution in active malignancy",
      "Requires medical supervision"
    ],
    dosing: "FDA label (HIV-lipodystrophy): 2 mg subcutaneous once daily at bedtime. Off-label research protocols often use 1–2 mg nightly.",
    status: "FDA-approved (Egrifta) for a specific indication; off-label use is unapproved.",
    references: "Falutz et al., NEJM 2007; Egrifta US prescribing information."
  },
  {
    name: "CJC-1295",
    aka: "GHRH analog (with or without DAC)",
    category: "Growth Hormone",
    color: "#7c3aed",
    summary: "Long-acting GHRH analog studied for sustained GH and IGF-1 elevation.",
    description:
      "CJC-1295 is a modified GHRH analog. The 'DAC' (drug affinity complex) version contains a maleimide group that binds albumin, dramatically extending half-life. The non-DAC form (Mod-GRF 1-29) is short-acting.",
    mechanism: "GHRH receptor agonist in the pituitary; albumin binding (DAC) prolongs systemic exposure.",
    halfLife: "Mod-GRF 1-29: ~30 min. CJC-1295 with DAC: ~6–8 days.",
    studied: [
      "Sustained IGF-1 elevation",
      "Body composition changes in small studies",
      "Synergy with GHRPs like Ipamorelin"
    ],
    risks: [
      "Sustained GH elevation may impair glucose handling",
      "Tingling, flushing, and injection-site reactions",
      "Not FDA-approved; long-term safety unknown"
    ],
    dosing: "Research-cited protocols. With DAC: 1–2 mg subcutaneous once weekly. Without DAC (Mod-GRF 1-29): 100 mcg subcutaneous 2–3× daily, paired with Ipamorelin.",
    status: "Not FDA-approved. Listed on FDA 503A 'do not compound' category 2.",
    references: "Teichman et al., JCEM 2006; FDA 503A Bulks List."
  },
  {
    name: "Sermorelin",
    aka: "GRF 1-29",
    category: "Growth Hormone",
    color: "#6366f1",
    summary: "Truncated GHRH analog historically used in pediatric GH-deficiency diagnostics.",
    description:
      "Sermorelin is the first 29 amino acids of human GHRH. It was previously FDA-approved (as Geref) for GH-deficiency assessment; the brand was discontinued, though compounded versions remain in use.",
    mechanism: "GHRH receptor agonist; promotes physiologic, pulsatile GH release.",
    halfLife: "Roughly 10–20 minutes.",
    studied: [
      "Stimulation of GH and IGF-1 in deficient adults and children",
      "Sleep architecture changes",
      "Body-composition effects in small studies"
    ],
    risks: [
      "Injection-site reactions, flushing, headache",
      "Limited modern long-term safety data",
      "Quality varies among compounding pharmacies"
    ],
    dosing: "Historical labeled use: 0.2–0.3 mg subcutaneous at bedtime. Compounded research/clinical use commonly cites 200–500 mcg subcutaneous nightly.",
    status: "FDA-approved brand discontinued; compounded versions still prescribed.",
    references: "Geref prescribing information (historical)."
  },
  {
    name: "Hexarelin",
    aka: "Examorelin",
    category: "Growth Hormone",
    color: "#5b21b6",
    summary: "Potent GHRP studied for GH release and possible cardiac effects.",
    description:
      "Hexarelin is a synthetic hexapeptide GHRP studied for diagnostic GH testing and, preclinically, for cardioprotective effects, possibly via the CD36 receptor in addition to the ghrelin receptor.",
    mechanism: "Agonist at ghrelin (GHS-R1a) receptors; also binds CD36, implicated in cardiovascular signaling.",
    halfLife: "About 70 minutes.",
    studied: [
      "Robust GH release",
      "Cardioprotection in animal ischemia models",
      "Possible vascular effects"
    ],
    risks: [
      "Greater desensitization than Ipamorelin with chronic use",
      "Possible cortisol/prolactin elevation at higher doses",
      "Not approved for therapeutic use"
    ],
    dosing: "Research-cited protocol: 100 mcg subcutaneous, 1–2× daily. Cycles kept short (4–6 weeks) due to receptor desensitization.",
    status: "Not FDA-approved.",
    references: "Imbimbo et al.; Locatelli et al."
  },
  {
    name: "MK-677",
    aka: "Ibutamoren",
    category: "Growth Hormone",
    color: "#9333ea",
    summary: "Orally active ghrelin-receptor agonist; not technically a peptide but commonly grouped.",
    description:
      "MK-677 is a non-peptide, orally bioavailable growth-hormone secretagogue developed by Merck. It mimics ghrelin at GHS-R1a and produces sustained GH and IGF-1 elevations.",
    mechanism: "Small-molecule agonist at the ghrelin receptor; also stimulates appetite via central pathways.",
    halfLife: "Approximately 4–6 hours; once-daily dosing yields 24-hour effects.",
    studied: [
      "Sustained GH and IGF-1 elevation",
      "Bone density effects in small studies",
      "Sleep and lean-mass changes"
    ],
    risks: [
      "Increased appetite and water retention",
      "Insulin resistance and edema reported",
      "One trial in older adults was halted over heart-failure concerns",
      "Not approved by FDA"
    ],
    dosing: "Research/SARM-market protocol: 10–25 mg orally once daily, typically at night. 10 mg is the most common starting dose; 25 mg is upper end.",
    status: "Investigational; not approved in any indication.",
    references: "Murphy et al.; Nass et al."
  },
  {
    name: "Semaglutide",
    aka: "Ozempic / Wegovy",
    category: "Metabolic & Weight",
    color: "#f59e0b",
    summary: "GLP-1 receptor agonist FDA-approved for type 2 diabetes and chronic weight management.",
    description:
      "Semaglutide is a long-acting GLP-1 receptor agonist approved for type 2 diabetes (Ozempic, Rybelsus) and chronic weight management (Wegovy).",
    mechanism: "Activates GLP-1 receptors in pancreas (glucose-dependent insulin secretion), brain (appetite suppression), and GI tract (slows gastric emptying).",
    halfLife: "Approximately 7 days; once-weekly subcutaneous dosing.",
    studied: [
      "A1c reduction in type 2 diabetes",
      "~15% mean weight reduction in obesity trials",
      "Cardiovascular event reduction (SUSTAIN-6, SELECT)",
      "Reductions in MASLD/MASH markers"
    ],
    risks: [
      "Nausea, vomiting, diarrhea, constipation",
      "Pancreatitis (rare)",
      "Boxed warning for medullary thyroid carcinoma in rodents (MEN2/family history contraindication)",
      "Possible muscle and bone-density loss with rapid weight loss"
    ],
    dosing: "Wegovy (weight): titrate 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg subcutaneous weekly (4 weeks at each step). Ozempic (T2DM): 0.25 mg weekly × 4 weeks → 0.5 mg → up to 2.0 mg weekly. Rybelsus (oral): 3 mg → 7 mg → 14 mg daily.",
    status: "FDA-approved.",
    references: "STEP and SUSTAIN trial programs; FDA labels."
  },
  {
    name: "Tirzepatide",
    aka: "Mounjaro / Zepbound",
    category: "Metabolic & Weight",
    color: "#f97316",
    summary: "Dual GIP/GLP-1 receptor agonist FDA-approved for diabetes and weight management.",
    description:
      "Tirzepatide is a once-weekly synthetic peptide that activates both GIP and GLP-1 receptors. The dual mechanism produces larger weight loss than GLP-1 mono-agonists in head-to-head trials.",
    mechanism: "Dual agonist at the GIP and GLP-1 receptors, enhancing insulin secretion, suppressing glucagon, slowing gastric emptying, and reducing appetite.",
    halfLife: "Approximately 5 days.",
    studied: [
      "A1c reductions exceeding many comparators (SURPASS)",
      "~20% mean body weight reduction in obesity (SURMOUNT)",
      "Improvement in MASH histology in trials",
      "Cardiovascular and renal endpoints under study"
    ],
    risks: [
      "GI side effects (nausea, vomiting, diarrhea)",
      "Pancreatitis risk",
      "Boxed warning for medullary thyroid carcinoma in rodents",
      "Gallbladder events reported"
    ],
    dosing: "Titrate 2.5 mg subcutaneous weekly × 4 weeks → 5 mg → 7.5 → 10 → 12.5 → 15 mg weekly, increasing every 4 weeks as tolerated. Maintenance often 5–15 mg weekly.",
    status: "FDA-approved.",
    references: "SURPASS, SURMOUNT trial programs; FDA labels."
  },
  {
    name: "Retatrutide",
    aka: "LY3437943",
    category: "Metabolic & Weight",
    color: "#ef4444",
    summary: "Investigational triple agonist (GLP-1 / GIP / glucagon) studied for major weight reduction.",
    description:
      "Retatrutide is an investigational once-weekly peptide that activates GLP-1, GIP, and glucagon receptors. Phase 2 data in obesity reported mean weight reductions over 24% at 48 weeks at the highest dose — the largest seen for any pharmacotherapy to date.",
    mechanism: "Triple receptor agonist: GLP-1 (insulin/satiety), GIP (insulin/adipose), and glucagon (energy expenditure and hepatic lipid mobilization).",
    halfLife: "Roughly 6 days; once-weekly dosing.",
    studied: [
      "Phase 2 obesity trial: ~24% weight loss at 48 weeks (12 mg)",
      "Glycemic control in type 2 diabetes",
      "Improvement in hepatic steatosis"
    ],
    risks: [
      "GI side effects, particularly during titration",
      "Heart-rate increases observed",
      "Long-term safety still being characterized",
      "Not yet FDA-approved"
    ],
    dosing: "Phase 2 protocol: stepwise titration 2 → 4 → 8 → 12 mg subcutaneous weekly, 4 weeks per step. Investigational only.",
    status: "Phase 3 trials ongoing as of 2025.",
    references: "Jastreboff et al., NEJM 2023."
  },
  {
    name: "AOD-9604",
    aka: "Anti-Obesity Drug 9604",
    category: "Metabolic & Weight",
    color: "#fb923c",
    summary: "Fragment of human growth hormone studied for fat-loss effects without GH-like growth signaling.",
    description:
      "AOD-9604 is a synthetic peptide modeled on the C-terminal fragment of human growth hormone (residues 176–191), developed to produce GH's lipolytic effects without growth-promoting or insulin-resistance effects.",
    mechanism: "Believed to stimulate lipolysis and inhibit lipogenesis without binding the GH receptor at meaningful levels.",
    halfLife: "Short systemic half-life.",
    studied: [
      "Lipolysis in adipocyte assays",
      "Modest body-fat changes in early human trials",
      "Cartilage and joint research"
    ],
    risks: [
      "Failed to show robust efficacy in late-stage obesity trials",
      "Limited long-term safety data",
      "Not FDA-approved"
    ],
    dosing: "Research-cited protocol: 250–500 mcg subcutaneous once daily, fasted, in 4–12 week cycles.",
    status: "Investigational; failed to gain weight-loss approval.",
    references: "Heffernan et al."
  },
  {
    name: "Semax",
    aka: "ACTH(4-7) analog",
    category: "Cognitive & Nootropic",
    color: "#facc15",
    summary: "Russian-developed neuropeptide studied for cognition, BDNF, and stroke recovery.",
    description:
      "Semax is a synthetic heptapeptide derived from a fragment of ACTH (4-10). Developed in Russia, it is approved there for stroke and cognitive disorders, and is widely studied for BDNF/NGF-related effects.",
    mechanism: "Increases expression of BDNF and NGF; modulates dopaminergic and serotonergic systems; appears to influence enkephalinase activity.",
    halfLife: "Very short systemically; intranasal delivery is standard.",
    studied: [
      "Cognitive performance and attention",
      "Stroke recovery (Russian clinical use)",
      "Neuroprotection in animal models",
      "Reduction of stress markers"
    ],
    risks: [
      "Limited Western clinical data",
      "Not FDA-approved",
      "Long-term safety in healthy users is unknown"
    ],
    dosing: "Research-cited protocol: intranasal 300–600 mcg total per day, split 1–3 doses (e.g., 1 spray = ~50 mcg of 0.1% solution; 3 sprays per nostril × 1–2× daily). 2-week cycles common.",
    status: "Approved in Russia; not approved in the US/EU.",
    references: "Ashmarin et al."
  },
  {
    name: "Selank",
    aka: "Tuftsin analog",
    category: "Cognitive & Nootropic",
    color: "#eab308",
    summary: "Russian-developed anxiolytic peptide studied for anxiety and immune modulation.",
    description:
      "Selank is a synthetic heptapeptide based on the immunomodulatory tetrapeptide tuftsin. It has been studied in Russia for generalized anxiety disorder, with reported absence of sedation or dependence.",
    mechanism: "Modulates serotonergic and GABAergic systems; reported effects on enkephalinase activity and cytokine balance.",
    halfLife: "Short; intranasal route used.",
    studied: [
      "Anxiety reduction (Russian trials)",
      "Cognitive performance under stress",
      "Immune modulation in cell models"
    ],
    risks: [
      "Limited Western clinical evidence",
      "Not FDA-approved",
      "Quality varies among research suppliers"
    ],
    dosing: "Research-cited protocol: intranasal 300–900 mcg total per day, split into 2–3 doses. Common practical dose: 250 mcg per spray, 1 spray per nostril 2–3× daily for 10–14 days.",
    status: "Approved in Russia; not approved in the US/EU.",
    references: "Zozulya et al."
  },
  {
    name: "Cerebrolysin",
    aka: "Porcine brain peptide complex",
    category: "Cognitive & Nootropic",
    color: "#fde047",
    summary: "Mixture of low-molecular-weight peptides used clinically in some countries for stroke and dementia.",
    description:
      "Cerebrolysin is a complex of low-molecular-weight neuropeptides and free amino acids derived from porcine brain. It has been used for decades in parts of Europe and Asia for ischemic stroke, traumatic brain injury, and Alzheimer's disease.",
    mechanism: "Believed to mimic neurotrophic-factor activity, supporting neuronal survival, synaptogenesis, and neuroplasticity.",
    halfLife: "Variable; constituent-dependent.",
    studied: [
      "Acute ischemic stroke recovery",
      "Cognitive scores in vascular dementia and Alzheimer's",
      "Traumatic brain injury rehabilitation"
    ],
    risks: [
      "Anaphylaxis risk in sensitive individuals",
      "Mixed efficacy data in large meta-analyses",
      "Not FDA-approved"
    ],
    dosing: "International clinical use: 5–30 mL IV (or 5 mL IM) once daily for 10–20 day cycles, often repeated 2–4× per year. Dose scales with severity (10 mL/day mild–moderate; 20–30 mL/day stroke or severe disease).",
    status: "Approved in many countries (not the US).",
    references: "CASTA, CARS-2 trials."
  },
  {
    name: "Dihexa",
    aka: "PNB-0408",
    category: "Cognitive & Nootropic",
    color: "#fbbf24",
    summary: "Angiotensin IV-derived peptide reported to be a powerful synaptogenic compound in animals.",
    description:
      "Dihexa is a small peptide derivative of angiotensin IV developed at Washington State University, reported in animal studies to promote synaptogenesis and improve cognition in models of Alzheimer's disease.",
    mechanism: "Believed to potentiate hepatocyte growth factor (HGF) / c-Met signaling, supporting dendritic spine formation.",
    halfLife: "Reportedly orally active; precise human kinetics undefined.",
    studied: [
      "Spatial memory in aged rats",
      "Synaptogenesis in cell models",
      "Recovery in animal models of cognitive decline"
    ],
    risks: [
      "Essentially no human trial data",
      "Pro-growth signaling raises theoretical neoplasia concerns",
      "Not FDA-approved"
    ],
    dosing: "No validated human dose. Animal studies use 1–2 mg/kg orally; some research suppliers cite 8–45 mg/day topically (transdermal) as anecdotal — these are not clinically validated.",
    status: "Research compound only.",
    references: "McCoy et al., 2013."
  },
  {
    name: "Epitalon",
    aka: "Epithalon",
    category: "Longevity",
    color: "#38bdf8",
    summary: "Tetrapeptide studied for telomerase activity and circadian/melatonin signaling.",
    description:
      "Epitalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) developed in Russia from extracts of the pineal gland. Research has explored effects on telomerase expression, melatonin rhythms, and longevity in animal models.",
    mechanism: "Reportedly upregulates telomerase activity in some cell lines; modulates pineal-gland-related hormone rhythms.",
    halfLife: "Short; cyclic use protocols common in research.",
    studied: [
      "Telomerase activity in vitro",
      "Animal lifespan studies (Russia)",
      "Melatonin and cortisol rhythm changes"
    ],
    risks: [
      "Limited modern Western data",
      "Theoretical oncologic concerns from telomerase elevation",
      "Not FDA-approved"
    ],
    dosing: "Russian-cited protocol: 5–10 mg subcutaneous once daily for 10–20 day cycles, 1–2× per year.",
    status: "Not FDA-approved.",
    references: "Khavinson et al."
  },
  {
    name: "MOTS-c",
    aka: "Mitochondrial Open Reading frame of 12S rRNA-c",
    category: "Longevity",
    color: "#0ea5e9",
    summary: "Mitochondria-derived peptide studied for metabolic regulation and exercise mimetics.",
    description:
      "MOTS-c is a 16-amino-acid peptide encoded within mitochondrial DNA. Research suggests it acts as a metabolic regulator with effects on insulin sensitivity, AMPK activation, and exercise capacity in animal models.",
    mechanism: "Activates AMPK signaling; modulates folate–methionine cycling; appears to translocate to the nucleus under stress.",
    halfLife: "Short systemic half-life in studies.",
    studied: [
      "Improved insulin sensitivity in animal models",
      "Endurance and metabolic adaptation",
      "Bone and muscle effects in preclinical work"
    ],
    risks: [
      "No completed large human trials",
      "Long-term safety undefined",
      "Not FDA-approved"
    ],
    dosing: "Research-cited protocol: 5–10 mg subcutaneous 2–3× per week in 4–8 week cycles. No validated human dose.",
    status: "Investigational.",
    references: "Lee et al., Cell Metab 2015."
  },
  {
    name: "SS-31",
    aka: "Elamipretide / Bendavia",
    category: "Longevity",
    color: "#0284c7",
    summary: "Mitochondria-targeted peptide studied for cardiolipin protection and disease applications.",
    description:
      "SS-31 (elamipretide) is a tetrapeptide that selectively localizes to the inner mitochondrial membrane and binds cardiolipin. It has been studied in primary mitochondrial myopathy, heart failure, and dry age-related macular degeneration.",
    mechanism: "Binds cardiolipin, stabilizing electron-transport-chain supercomplexes and reducing reactive-oxygen-species production.",
    halfLife: "Roughly 2–4 hours after subcutaneous injection.",
    studied: [
      "Primary mitochondrial myopathy",
      "Heart failure with reduced ejection fraction",
      "Geographic atrophy / dry AMD",
      "Sarcopenia and aging-related decline"
    ],
    risks: [
      "Injection-site reactions",
      "Mixed clinical-trial outcomes (some Phase 3 misses)",
      "Not yet FDA-approved"
    ],
    dosing: "Clinical-trial protocol: 40 mg subcutaneous once daily.",
    status: "Investigational; not FDA-approved.",
    references: "Stealth Biotherapeutics MMPOWER program."
  },
  {
    name: "Thymosin Alpha-1",
    aka: "Tα1 / Zadaxin",
    category: "Immune",
    color: "#f472b6",
    summary: "Naturally occurring peptide studied for immune modulation; approved abroad for hepatitis.",
    description:
      "Thymosin Alpha-1 is a 28-amino-acid peptide produced by the thymus with broad immunomodulatory activity. It is approved in many countries (as Zadaxin) for chronic hepatitis B and C and as an adjuvant in oncology and infectious disease.",
    mechanism: "Activates Toll-like receptor 9 on dendritic cells and modulates T-cell maturation; influences cytokine balance toward Th1.",
    halfLife: "Approximately 2 hours after subcutaneous injection.",
    studied: [
      "Hepatitis B and C (where approved)",
      "Adjuvant in melanoma and other cancers",
      "Sepsis and severe infection (including COVID-19 trials)",
      "Vaccine response support"
    ],
    risks: [
      "Injection-site reactions",
      "Potential autoimmune reactivation in susceptible patients",
      "Not FDA-approved in the US"
    ],
    dosing: "International labeled use: 1.6 mg subcutaneous twice weekly. Research wellness protocols often cite 1.6 mg subcutaneous daily for 1–2 weeks, then 1.6 mg twice weekly.",
    status: "Approved abroad; investigational in the US.",
    references: "Zadaxin prescribing information (international)."
  },
  {
    name: "LL-37",
    aka: "Cathelicidin",
    category: "Immune",
    color: "#ec4899",
    summary: "Endogenous antimicrobial peptide studied for infection, inflammation, and wound healing.",
    description:
      "LL-37 is the only human cathelicidin, a 37-amino-acid antimicrobial peptide expressed by epithelial and immune cells. It plays roles in pathogen defense, wound healing, and immune modulation.",
    mechanism: "Disrupts microbial membranes; binds LPS; modulates chemokine signaling and angiogenesis.",
    halfLife: "Short systemically; topical and inhaled formulations explored.",
    studied: [
      "Antimicrobial activity against bacteria, viruses, and fungi",
      "Chronic wound and ulcer healing",
      "Possible autoimmune relevance in psoriasis and lupus"
    ],
    risks: [
      "Pro-inflammatory at high concentrations",
      "Implicated in some autoimmune flare biology",
      "Not FDA-approved"
    ],
    dosing: "No validated human dose. Research-supplier protocols cite 100–500 mcg subcutaneous daily for short cycles, but evidence is limited.",
    status: "Research / investigational.",
    references: "Vandamme et al."
  },
  {
    name: "PT-141",
    aka: "Bremelanotide / Vyleesi",
    category: "Sexual Health",
    color: "#fb7185",
    summary: "Melanocortin receptor agonist FDA-approved for hypoactive sexual desire disorder in women.",
    description:
      "PT-141 (bremelanotide) is a synthetic melanocortin receptor agonist derived from Melanotan II without its tanning activity. It is FDA-approved as Vyleesi for premenopausal women with hypoactive sexual desire disorder (HSDD).",
    mechanism: "Agonist at melanocortin receptors (MC4R primarily) in the CNS, influencing sexual arousal pathways.",
    halfLife: "Approximately 2.7 hours.",
    studied: [
      "HSDD in premenopausal women",
      "Erectile function (older trials)",
      "Sexual desire and arousal endpoints"
    ],
    risks: [
      "Nausea (most common)",
      "Transient blood-pressure increases (contraindicated in uncontrolled HTN)",
      "Focal hyperpigmentation with frequent use",
      "Headache and flushing"
    ],
    dosing: "FDA label (Vyleesi): 1.75 mg subcutaneous as needed, at least 45 minutes before anticipated sexual activity. No more than 1 dose per 24 hours and no more than 8 doses per month.",
    status: "FDA-approved (Vyleesi).",
    references: "RECONNECT trials; Vyleesi prescribing information."
  },
  {
    name: "Melanotan II",
    aka: "MT-II",
    category: "Skin & Cosmetic",
    color: "#c084fc",
    summary: "Synthetic melanocortin agonist studied for tanning and sexual response; significant safety concerns.",
    description:
      "Melanotan II is a synthetic analog of α-MSH that activates melanocortin receptors, producing eumelanin synthesis (tanning) and arousal effects. Sold widely as a research chemical despite serious safety warnings from regulators.",
    mechanism: "Non-selective melanocortin receptor agonist (MC1R for pigmentation; MC4R for arousal).",
    halfLife: "Roughly 30–60 minutes.",
    studied: [
      "Skin pigmentation",
      "Sexual arousal effects",
      "Reduced UV exposure required for tanning in trials"
    ],
    risks: [
      "Darkening and growth of moles (melanoma surveillance concern)",
      "Nausea, blood-pressure changes, facial flushing",
      "Reports of priapism",
      "Multiple regulatory warnings; not FDA-approved"
    ],
    dosing: "Research-supplier protocols: 0.25–0.5 mg subcutaneous, 3–5× per week during a loading phase, reducing to 1–2× per week for maintenance. Not validated and not recommended for human use.",
    status: "Not FDA-approved; flagged by regulators worldwide.",
    references: "FDA and MHRA consumer warnings."
  },
  {
    name: "Kisspeptin",
    aka: "Metastin",
    category: "Hormonal",
    color: "#34d399",
    summary: "Master regulator of GnRH neurons; investigational for reproductive endocrinology.",
    description:
      "Kisspeptin is a peptide encoded by the KISS1 gene that potently stimulates GnRH neurons, sitting at the top of the reproductive axis. It is being investigated for HSDD, infertility, and as a diagnostic stimulus.",
    mechanism: "Binds KISS1R (GPR54) on GnRH neurons, triggering LH/FSH release downstream.",
    halfLife: "Very short (minutes); often given by infusion in research.",
    studied: [
      "Hypothalamic amenorrhea diagnostics",
      "Sexual desire and arousal in research",
      "Adjunct in IVF triggering"
    ],
    risks: [
      "Limited long-term safety data",
      "Hormonal effects require clinical supervision",
      "Not FDA-approved as a therapeutic"
    ],
    dosing: "Research protocols use IV bolus 0.24 nmol/kg or continuous infusion in clinical settings. No validated home/OTC dose exists.",
    status: "Investigational.",
    references: "Dhillo et al."
  }
];

/* ---------- Stacks ---------- */
const stacks = [
  {
    name: "Semax + Selank",
    category: "Cognitive Stack",
    color: "#fbbf24",
    components: ["Semax", "Selank"],
    componentColors: ["#facc15", "#eab308"],
    summary: "Russian-developed nootropic pair — Semax for focus and BDNF, Selank for calm without sedation.",
    rationale:
      "These two regulatory peptides were developed at the same Russian institute and are explicitly designed to complement each other. Semax (an ACTH 4-10 fragment) drives BDNF/NGF expression and dopaminergic/serotonergic activity for focus, motivation, and neuroplasticity. Selank (a tuftsin analog) modulates GABA and serotonin to dampen anxiety and rumination without the sedation of benzodiazepines. Used together, the focus-and-motivation effect of Semax is buffered by the anxiolytic effect of Selank — closer to a 'calm alert' state than either peptide alone.",
    effects: [
      "Improved focus, attention, and working memory (Semax-driven)",
      "Reduced anxiety and rumination without sedation (Selank-driven)",
      "Stable mood and stress tolerance throughout the day",
      "Possible neuroprotective synergy via shared regulatory peptide pathways",
      "Reported subjective 'clear-headed calm' instead of stimulant edge"
    ],
    dosing:
      "Common stack protocol: Semax 0.1% intranasal — 2–3 sprays per nostril (≈300–600 mcg total) once in the morning. Selank 0.15% intranasal — 1 spray per nostril (≈250–500 mcg total) 2–3× daily as needed. Cycle 10–14 days on, then break. Some users dose Semax AM only and Selank in afternoon for stress moments.",
    risks: [
      "Limited Western clinical data for either peptide",
      "Quality varies widely among research suppliers",
      "Long-term combination safety is undefined",
      "Possible additive effect on serotonergic signaling — caution if on SSRIs/SNRIs"
    ]
  },
  {
    name: "Tesamorelin + Ipamorelin",
    category: "Growth Hormone Stack",
    color: "#a78bfa",
    components: ["Tesamorelin", "Ipamorelin"],
    componentColors: ["#8b5cf6", "#a78bfa"],
    summary: "GHRH-analog plus selective GHRP — synergistic, more physiologic GH pulses than either peptide alone.",
    rationale:
      "Tesamorelin and Ipamorelin act on two different pituitary receptors. Tesamorelin (a stabilized GHRH analog) binds the GHRH receptor, increasing the amplitude of GH pulses. Ipamorelin (a selective ghrelin/GHS-R1a agonist) binds a separate receptor and amplifies the same pulse. Because they act on parallel pathways, the combined GH release is significantly greater than either alone, while still being pulsatile and physiologic. Ipamorelin's selectivity avoids the cortisol/prolactin elevation of older GHRPs, and Tesamorelin is the most clinically validated GHRH analog (FDA-approved for HIV-lipodystrophy), making this pair more rigorously studied than the more common CJC-1295 + Ipamorelin stack.",
    effects: [
      "Amplified GH and IGF-1 pulses vs. either peptide alone",
      "Visceral abdominal fat reduction (Tesamorelin-driven, FDA-validated for HIV-lipodystrophy)",
      "Improved sleep depth and recovery in some users",
      "Body-composition shifts (less visceral fat, potential lean-mass support) with consistent use",
      "Reported skin and connective-tissue quality improvements anecdotally"
    ],
    dosing:
      "Common research/clinical pairing: Tesamorelin 1–2 mg subcutaneous once nightly, plus Ipamorelin 200–300 mcg subcutaneous once nightly, injected 5–10 minutes apart at bedtime on an empty stomach (no food/carbs for ~2 h before). Cycles of 8–12 weeks on, then break. Inject into the abdomen, rotating sites.",
    risks: [
      "Sustained GH elevation can impair glucose tolerance — monitor fasting glucose/A1c",
      "Water retention, joint discomfort, tingling, injection-site reactions",
      "Tesamorelin is FDA-approved only for HIV-lipodystrophy; off-label use is unapproved",
      "Ipamorelin is on FDA 503A 'do not compound' category 2 — supply chain quality varies",
      "Caution with active malignancy or family history of GH-sensitive cancers"
    ]
  }
];

/* ---------- Vial SVG generators ---------- */
function vialSVG(p, large = false) {
  const liquid = p.color || "#22d3ee";
  const w = large ? 220 : 110;
  const h = large ? 320 : 160;
  const id = (p.name || "x").replace(/[^a-z0-9]/gi, "");
  return `
<svg viewBox="0 0 110 160" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="glass-${id}" x1="0" x2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0.18)"/>
      <stop offset="50%" stop-color="rgba(255,255,255,0.04)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.18)"/>
    </linearGradient>
    <linearGradient id="liq-${id}" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="${liquid}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${liquid}" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="cap-${id}" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#cfd6e0"/>
      <stop offset="100%" stop-color="#6c7480"/>
    </linearGradient>
    <linearGradient id="label-${id}" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e8ecf2"/>
    </linearGradient>
  </defs>
  <rect x="38" y="6" width="34" height="10" rx="2" fill="url(#cap-${id})"/>
  <rect x="34" y="14" width="42" height="14" rx="3" fill="url(#cap-${id})"/>
  <rect x="36" y="16" width="38" height="2" fill="rgba(0,0,0,0.25)"/>
  <rect x="36" y="20" width="38" height="2" fill="rgba(0,0,0,0.25)"/>
  <rect x="28" y="28" width="54" height="118" rx="6" fill="url(#glass-${id})" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
  <rect x="31" y="60" width="48" height="83" rx="4" fill="url(#liq-${id})"/>
  <rect x="31" y="60" width="48" height="3" fill="rgba(255,255,255,0.35)"/>
  <rect x="24" y="78" width="62" height="48" rx="3" fill="url(#label-${id})" stroke="rgba(0,0,0,0.15)"/>
  <rect x="24" y="78" width="62" height="6" fill="${liquid}"/>
  <rect x="24" y="120" width="62" height="6" fill="${liquid}" opacity="0.5"/>
  <text x="55" y="100" text-anchor="middle" font-family="ui-sans-serif,system-ui,-apple-system,Segoe UI" font-size="9" font-weight="700" fill="#0f172a">${p.name}</text>
  <text x="55" y="113" text-anchor="middle" font-family="ui-sans-serif,system-ui" font-size="5.5" fill="#475569">RESEARCH USE</text>
  <rect x="32" y="32" width="6" height="108" rx="3" fill="rgba(255,255,255,0.18)"/>
</svg>`.trim();
}

function stackSVG(stack, large = false) {
  const a = { name: stack.components[0], color: stack.componentColors[0] };
  const b = { name: stack.components[1], color: stack.componentColors[1] };
  const scale = large ? 1.8 : 1;
  return `
<div class="stack-vials" style="display:flex;gap:6px;align-items:flex-end;justify-content:center;transform:scale(${scale});transform-origin:center bottom;">
  <div style="transform:rotate(-6deg);">${vialSVG(a)}</div>
  <div style="transform:rotate(6deg);">${vialSVG(b)}</div>
</div>`;
}

/* ---------- Index page rendering ---------- */
const list = document.getElementById("list");
const search = document.getElementById("search");
const categoryBar = document.getElementById("categories");
const stackList = document.getElementById("stack-list");

let activeCategory = "All";

function getCategories() {
  const set = new Set(peptides.map(p => p.category));
  return ["All", ...Array.from(set)];
}

function renderCategories() {
  if (!categoryBar) return;
  categoryBar.innerHTML = "";
  getCategories().forEach(c => {
    const chip = document.createElement("button");
    chip.className = "chip" + (c === activeCategory ? " active" : "");
    chip.textContent = c;
    chip.onclick = () => {
      activeCategory = c;
      renderCategories();
      applyFilters();
    };
    categoryBar.appendChild(chip);
  });
}

function applyFilters() {
  const q = (search?.value || "").toLowerCase();
  const filtered = peptides.filter(p => {
    const matchesText =
      p.name.toLowerCase().includes(q) ||
      (p.aka || "").toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    return matchesText && matchesCat;
  });
  render(filtered);
}

function render(items) {
  if (!list) return;
  list.innerHTML = "";
  if (items.length === 0) {
    list.innerHTML = `<div class="empty">No peptides match your search.</div>`;
    return;
  }
  items.forEach(p => {
    const realIndex = peptides.indexOf(p);
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--accent", p.color);
    card.innerHTML = `
      <div class="vial-wrap">${vialSVG(p)}</div>
      <div class="card-body">
        <span class="badge">${p.category}</span>
        <h3>${p.name}</h3>
        <p class="aka">${p.aka || ""}</p>
        <p class="summary">${p.summary}</p>
        <button class="view-btn" data-index="${realIndex}">View details →</button>
      </div>
    `;
    card.querySelector(".view-btn").addEventListener("click", () => openPeptide(realIndex));
    list.appendChild(card);
  });
}

function renderStacks() {
  if (!stackList) return;
  stackList.innerHTML = "";
  stacks.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "stack-card";
    card.style.setProperty("--accent", s.color);
    card.innerHTML = `
      <div class="stack-vial-wrap">${stackSVG(s)}</div>
      <div class="card-body">
        <span class="badge">${s.category}</span>
        <h3>${s.name}</h3>
        <p class="summary">${s.summary}</p>
        <div class="stack-tags">
          ${s.components.map((c, idx) => `<span class="tag" style="--tag:${s.componentColors[idx]}">${c}</span>`).join("")}
        </div>
        <button class="view-btn">View stack →</button>
      </div>
    `;
    card.querySelector(".view-btn").addEventListener("click", () => openStack(i));
    stackList.appendChild(card);
  });
}

function openPeptide(i) {
  localStorage.setItem("selected", JSON.stringify({ kind: "peptide", data: peptides[i] }));
  window.location.href = "detail.html";
}

function openStack(i) {
  localStorage.setItem("selected", JSON.stringify({ kind: "stack", data: stacks[i] }));
  window.location.href = "detail.html";
}

if (search) search.addEventListener("input", applyFilters);
if (list) {
  renderCategories();
  applyFilters();
  renderStacks();
}

/* ---------- Detail page rendering ---------- */
function renderDetail() {
  const root = document.getElementById("detail-root");
  if (!root) return;

  // Backward-compatible read: prefer new "selected" payload, fallback to legacy "selectedPeptide"
  let payload = JSON.parse(localStorage.getItem("selected") || "null");
  if (!payload) {
    const legacy = JSON.parse(localStorage.getItem("selectedPeptide") || "null");
    if (legacy) payload = { kind: "peptide", data: legacy };
  }
  if (!payload) {
    root.innerHTML = `<p>No peptide selected. <a href="index.html">Back to library</a></p>`;
    return;
  }

  if (payload.kind === "peptide") {
    renderPeptideDetail(root, payload.data);
  } else if (payload.kind === "stack") {
    renderStackDetail(root, payload.data);
  }
}

function renderPeptideDetail(root, p) {
  root.style.setProperty("--accent", p.color);
  root.innerHTML = `
    <div class="hero-detail">
      <div class="hero-vial">${vialSVG(p, true)}</div>
      <div class="hero-meta">
        <span class="badge">${p.category}</span>
        <h1>${p.name}</h1>
        <p class="aka">${p.aka || ""}</p>
        <p class="lead">${p.summary}</p>
        <div class="quickfacts">
          <div><span class="qf-label">Half-life</span><span class="qf-value">${p.halfLife || "—"}</span></div>
          <div><span class="qf-label">Status</span><span class="qf-value">${p.status || "—"}</span></div>
        </div>
      </div>
    </div>

    <section class="section">
      <h2>Overview</h2>
      <p>${p.description}</p>
    </section>

    <section class="section">
      <h2>Mechanism of action</h2>
      <p>${p.mechanism}</p>
    </section>

    <section class="grid-2">
      <div class="section card-section">
        <h2>Studied effects</h2>
        <ul>${p.studied.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
      <div class="section card-section">
        <h2>Risks &amp; unknowns</h2>
        <ul>${p.risks.map(r => `<li>${r}</li>`).join("")}</ul>
      </div>
    </section>

    <section class="section">
      <h2>Dosing (research / clinical literature)</h2>
      <p>${p.dosing}</p>
      <p class="warn">Educational information only; not medical advice. Many compounds discussed here are not approved for human use and carry unknown risks.</p>
    </section>

    <section class="section">
      <h2>Regulatory status</h2>
      <p>${p.status}</p>
    </section>

    <section class="section">
      <h2>References &amp; sources</h2>
      <p>${p.references}</p>
    </section>
  `;
}

function renderStackDetail(root, s) {
  root.style.setProperty("--accent", s.color);
  root.innerHTML = `
    <div class="hero-detail stack-hero">
      <div class="hero-vial">${stackSVG(s, true)}</div>
      <div class="hero-meta">
        <span class="badge">${s.category}</span>
        <h1>${s.name}</h1>
        <p class="aka">Stack: ${s.components.join(" + ")}</p>
        <p class="lead">${s.summary}</p>
        <div class="stack-tags">
          ${s.components.map((c, idx) => `<span class="tag" style="--tag:${s.componentColors[idx]}">${c}</span>`).join("")}
        </div>
      </div>
    </div>

    <section class="section">
      <h2>Why these two together</h2>
      <p>${s.rationale}</p>
    </section>

    <section class="section">
      <h2>Effects of the stack</h2>
      <ul>${s.effects.map(e => `<li>${e}</li>`).join("")}</ul>
    </section>

    <section class="section">
      <h2>Stack dosing protocol</h2>
      <p>${s.dosing}</p>
      <p class="warn">Educational information only; not medical advice. Combining peptides increases biological complexity and risk; do not act on this information without a qualified clinician.</p>
    </section>

    <section class="section">
      <h2>Risks &amp; considerations</h2>
      <ul>${s.risks.map(r => `<li>${r}</li>`).join("")}</ul>
    </section>
  `;
}

renderDetail();
