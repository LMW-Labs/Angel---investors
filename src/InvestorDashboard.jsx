import { useState } from "react";

const investors = [
  {
    name: "Sovereign's Capital",
    type: "Fund",
    url: "https://sovereignscapital.com",
    location: "Atlanta, GA (US + SE Asia)",
    stage: "Seed, Series A",
    sector: "B2B/B2C Software, HealthTech, Consumer Tech",
    checkSize: "$300K – $4M",
    notes: "Explicitly faith-driven. Invested in 'House of David' (The Chosen team). Deep operator network. Lead rounds when operator experience aligns. Strong fit for AI consumer app.",
    source: "faithdriveninvestor.org / sovereignscapital.com",
    score: 9,
    tag: "TOP MATCH",
  },
  {
    name: "Eagle Venture Fund",
    type: "Fund",
    url: "https://eagleventurefund.com",
    location: "Dallas, TX & Zurich, Switzerland",
    stage: "Seed, Series A",
    sector: "SaaS, FinTech, High-Impact Tech",
    checkSize: "N/A (public)",
    notes: "Faith-driven with mandate on human flourishing. 7yr track record. Rigorous 3-stage diligence. Strong cultural/spiritual integration in portfolio companies.",
    source: "faithdriveninvestor.org/eagle-venture",
    score: 8,
    tag: "STRONG FIT",
  },
  {
    name: "Beyond Angels / Beyond Capital Funds",
    type: "Angel Network + Fund",
    url: "https://beyondangels.org",
    location: "Midwest (national reach)",
    stage: "Pre-Seed, Seed",
    sector: "Faith-driven for-profit startups",
    checkSize: "$6.5M+ deployed to 18 startups",
    notes: "Invests in faith-driven founders for market returns + cultural impact. Partners with DBU, Cedarville. Annual Lion's Den DFW pitch event.",
    source: "dallasinnovates.com / faithdriveninvestor.org",
    score: 9,
    tag: "TOP MATCH",
  },
  {
    name: "Lion's Den DFW",
    type: "Pitch Event / Angel Group",
    url: "https://lionsdendfwpitch.com",
    location: "Dallas, TX",
    stage: "Pre-Seed, Seed",
    sector: "Faith-mission companies across sectors",
    checkSize: "$35M+ deployed since 2016",
    notes: "Annual pitch event for faith investors + entrepreneurs. Apply to pitch. Run by Vip Vipperman (Eagle Venture Fund).",
    source: "dallasinnovates.com",
    score: 8,
    tag: "APPLY NOW",
  },
  {
    name: "Ambassadors Impact Network (AIN)",
    type: "Angel Network",
    url: "https://faithdriveninvestor.org/angel-networks",
    location: "Dallas-Fort Worth, TX",
    stage: "Early Stage (Angel)",
    sector: "Faith-driven companies advancing the Gospel",
    checkSize: "Individual angel checks",
    notes: "501(c)(6) network. Shares due diligence across members. Great for building a faith-aligned cap table with multiple smaller angels.",
    source: "faithdriveninvestor.org/angel-networks",
    score: 7,
    tag: "STRONG FIT",
  },
  {
    name: "Praxis",
    type: "Accelerator / Community",
    url: "https://praxislabs.org",
    location: "New York, NY (remote-friendly)",
    stage: "Pre-Seed, Seed",
    sector: "Redemptive entrepreneurship, culture-shaping ventures",
    checkSize: "Program-based",
    notes: "High-touch accelerator for faith-driven founders. Strong alumni network. FaithFeedAI aligns with their 'renewing culture' thesis.",
    source: "faithdriveninvestor.org/accelerator-programs",
    score: 8,
    tag: "APPLY NOW",
  },
  {
    name: "CanaGlobal",
    type: "Accelerator",
    url: "https://canaglobal.com",
    location: "US (remote)",
    stage: "Pre-Seed",
    sector: "Faith-based, 7 mountains of influence",
    checkSize: "Accelerator model",
    notes: "8-12 week bootcamp for faith-founded startups. Focuses on early revenue. Media/entertainment mountain aligns well with FaithFeedAI.",
    source: "faithdriveninvestor.org/accelerator-programs",
    score: 7,
    tag: "STRONG FIT",
  },
  {
    name: "Connie Chan (Andreessen Horowitz)",
    type: "Individual GP / VC",
    url: "https://a16z.com/author/connie-chan",
    location: "Menlo Park, CA",
    stage: "Series A",
    sector: "Consumer apps, faith tech, community platforms",
    checkSize: "Series A+",
    notes: "Led Glorify's $40M a16z round. Has publicly tracked faith-tech space for years. Not pre-seed but relationship worth building now.",
    source: "techcrunch.com / CBN News",
    score: 6,
    tag: "FUTURE TARGET",
  },
  {
    name: "Science Inc. (Mike Jones / Peter Pham)",
    type: "Venture Studio / Fund",
    url: "https://scienceinc.com",
    location: "Los Angeles, CA",
    stage: "Seed, Series A",
    sector: "Consumer apps, digital media, social platforms",
    checkSize: "N/A (public)",
    notes: "Backed Pray.com. Mike Jones stated faith tech is a sound investment. Consumer app thesis fits FaithFeedAI.",
    source: "labusinessjournal.com",
    score: 6,
    tag: "WARM OUTREACH",
  },
  {
    name: "Contrary Capital",
    type: "Venture Fund",
    url: "https://contrary.com",
    location: "US (distributed)",
    stage: "Pre-Seed, Seed",
    sector: "Consumer tech, community apps",
    checkSize: "Seed-stage checks",
    notes: "Backed Hallow (Catholic meditation app). Not faith-exclusive but demonstrated comfort with faith-adjacent consumer apps.",
    source: "Bloomberg / News24",
    score: 6,
    tag: "WARM OUTREACH",
  },
  {
    name: "True Ventures",
    type: "Venture Fund",
    url: "https://trueventures.com",
    location: "San Francisco, CA",
    stage: "Seed, Series A",
    sector: "Consumer AI, software",
    checkSize: "Seed to Series A",
    notes: "Led $14M Series A for Bible Chat (AI-enabled Christian support app). Active in faith + AI intersection. Good fit given FaithFeedAI's AI layer.",
    source: "globalprivatecapital.org",
    score: 7,
    tag: "STRONG FIT",
  },
  {
    name: "Triangle Impact Network",
    type: "Angel Network",
    url: "https://faithdriveninvestor.org/angel-networks",
    location: "North Carolina",
    stage: "Early Stage",
    sector: "Faith-driven impact ventures",
    checkSize: "Angel-size (membership-based)",
    notes: "Member network for faith-driven ventures. Smaller checks. Good for Southeast founders seeking regional warm leads.",
    source: "faithdriveninvestor.org/angel-networks",
    score: 6,
    tag: "REGIONAL LEAD",
  },
  {
    name: "Christian Venture Capital (CVC)",
    type: "VC Firm",
    url: "https://christianvc.com",
    location: "US (global focus)",
    stage: "Pre-Seed to Series A",
    sector: "Christian tech, faith-based consumer platforms",
    checkSize: "$100K minimum",
    notes: "Explicitly Christian VC. Consults from concept to pre-seed. Can broker warm introductions. Accepts submissions on website.",
    source: "christianvc.com",
    score: 7,
    tag: "STRONG FIT",
  },
  {
    name: "Greylock Partners",
    type: "Venture Fund",
    url: "https://greylock.com",
    location: "Menlo Park, CA",
    stage: "Seed, Series A+",
    sector: "Consumer, enterprise, AI/software",
    checkSize: "Seed to Series A",
    notes: "Backed Pray.com. General consumer/AI fund with faith app history. Cold outreach unless warm intro available.",
    source: "Bloomberg",
    score: 5,
    tag: "LONG SHOT",
  },
];

const tagColors = {
  "TOP MATCH": { bg: "#1a3a1a", text: "#4ade80", border: "#166534" },
  "STRONG FIT": { bg: "#1e2a3a", text: "#60a5fa", border: "#1e40af" },
  "APPLY NOW": { bg: "#3a2a0a", text: "#fbbf24", border: "#92400e" },
  "WARM OUTREACH": { bg: "#2a1a2a", text: "#c084fc", border: "#6b21a8" },
  "FUTURE TARGET": { bg: "#2a1a1a", text: "#f87171", border: "#991b1b" },
  "REGIONAL LEAD": { bg: "#1a2a2a", text: "#34d399", border: "#065f46" },
  "LONG SHOT": { bg: "#1a1a1a", text: "#9ca3af", border: "#374151" },
};

const allTags = ["ALL", ...Object.keys(tagColors)];

export default function InvestorDashboard() {
  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("score");
  const [expanded, setExpanded] = useState(null);

  const filtered = investors
    .filter((i) => filter === "ALL" || i.tag === filter)
    .sort((a, b) =>
      sort === "score" ? b.score - a.score : a.name.localeCompare(b.name)
    );

  function copyCSV() {
    const header = "Name,Type,URL,Location,Stage,Sector,Check Size,Notes,Source,Score,Tag";
    const rows = investors.map((i) =>
      [i.name, i.type, i.url, i.location, i.stage, i.sector, i.checkSize,
        `"${i.notes.replace(/"/g, "'")}"`, i.source, i.score, i.tag].join(",")
    );
    navigator.clipboard.writeText([header, ...rows].join("\n"));
    alert("CSV copied!");
  }

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0a0a0f", minHeight: "100vh", color: "#e8e0d0" }}>
      <div style={{ background: "linear-gradient(135deg, #0f0f1a, #1a0f0f, #0f1a0f)", borderBottom: "1px solid #2a2a3a", padding: "40px 32px 32px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#6b7280", textTransform: "uppercase", marginBottom: "12px" }}>FaithFeedAI · Investor Intelligence</div>
        <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: "normal", margin: "0 0 8px", color: "#f0e8d8" }}>Faith-Tech Investor Directory</h1>
        <p style={{ fontSize: "15px", color: "#9ca3af", margin: "0 0 24px" }}>{investors.length} investors · Pre-seed to Series A · Scored for fit</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button onClick={copyCSV} style={{ background: "#1a3a1a", color: "#4ade80", border: "1px solid #166534", padding: "8px 20px", fontSize: "13px", cursor: "pointer", fontFamily: "monospace" }}>↓ COPY CSV</button>
          <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ background: "#1a1a2a", color: "#9ca3af", border: "1px solid #2a2a3a", padding: "8px 16px", fontSize: "13px", fontFamily: "monospace" }}>
            <option value="score">Sort: Fit Score ↓</option>
            <option value="name">Sort: Name A–Z</option>
          </select>
        </div>
      </div>

      <div style={{ padding: "16px 32px", borderBottom: "1px solid #1a1a2a", display: "flex", gap: "8px", flexWrap: "wrap", background: "#0d0d18" }}>
        <span style={{ fontSize: "11px", color: "#6b7280", letterSpacing: "2px", marginRight: "4px" }}>FILTER:</span>
        {allTags.map((tag) => {
          const colors = tag === "ALL" ? { bg: "#1a1a2a", text: "#9ca3af", border: "#2a2a3a" } : tagColors[tag];
          const active = filter === tag;
          return (
            <button key={tag} onClick={() => setFilter(tag)} style={{ background: active ? colors.bg : "transparent", color: active ? colors.text : "#4b5563", border: `1px solid ${active ? colors.border : "#2a2a3a"}`, padding: "4px 12px", fontSize: "11px", cursor: "pointer", letterSpacing: "1px", fontFamily: "monospace" }}>
              {tag}
            </button>
          );
        })}
      </div>

      <div style={{ padding: "24px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {filtered.map((inv, i) => {
            const tagColor = tagColors[inv.tag];
            const isOpen = expanded === inv.name;
            return (
              <div key={inv.name}>
                <div onClick={() => setExpanded(isOpen ? null : inv.name)} style={{ display: "grid", gridTemplateColumns: "40px 1fr 120px 50px", gap: "0 16px", padding: "14px 16px", background: isOpen ? "#13131f" : "#0f0f18", borderLeft: isOpen ? `3px solid ${tagColor.text}` : "3px solid transparent", cursor: "pointer", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", color: "#374151", fontFamily: "monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div style={{ fontSize: "15px", color: "#f0e8d8", marginBottom: "2px" }}>{inv.name}</div>
                    <div style={{ fontSize: "11px", color: "#6b7280" }}>{inv.type}</div>
                  </div>
                  <span style={{ fontSize: "10px", color: tagColor.text, background: tagColor.bg, border: `1px solid ${tagColor.border}`, padding: "3px 8px", fontFamily: "monospace" }}>{inv.tag}</span>
                  <span style={{ fontSize: "14px", color: tagColor.text, fontFamily: "monospace" }}>{inv.score}/10</span>
                </div>
                {isOpen && (
                  <div style={{ background: "#0d0d16", borderLeft: `3px solid ${tagColor.text}`, padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 32px" }}>
                    <div><div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "2px", marginBottom: "4px" }}>WEBSITE</div><a href={inv.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: tagColor.text, textDecoration: "none" }}>{inv.url} ↗</a></div>
                    <div><div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "2px", marginBottom: "4px" }}>CHECK SIZE</div><span style={{ fontSize: "13px", color: "#e8e0d0" }}>{inv.checkSize}</span></div>
                    <div style={{ gridColumn: "1/-1" }}><div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "2px", marginBottom: "6px" }}>THESIS FIT</div><p style={{ fontSize: "13px", color: "#c0b8a8", margin: 0, lineHeight: 1.6 }}>{inv.notes}</p></div>
                    <div><div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "2px", marginBottom: "4px" }}>LOCATION</div><span style={{ fontSize: "13px", color: "#9ca3af" }}>{inv.location}</span></div>
                    <div><div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "2px", marginBottom: "4px" }}>STAGE</div><span style={{ fontSize: "13px", color: "#9ca3af" }}>{inv.stage}</span></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
    }
