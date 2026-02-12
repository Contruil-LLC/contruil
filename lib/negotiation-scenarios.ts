export type ScenarioId =
  | "salary"
  | "business-deal"
  | "vendor-client"
  | "conflict"
  | "everyday";

export interface Scenario {
  id: ScenarioId;
  title: string;
  shortDescription: string;
  setup: string;
  tips: string[];
  otherPartyName: string;
  systemPrompt: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: "salary",
    title: "Salary / Job Offer Negotiation",
    shortDescription: "Practice negotiating compensation with a hiring manager.",
    setup:
      "You've received a job offer for $75,000. You've researched and know the market rate is $85,000–$90,000 for this role. The hiring manager (Alex) has extended the offer and is waiting for your response.",
    tips: [
      "Lead with value—mention what you'll bring to the team",
      "Use data: 'Based on my research, the market rate for this role is...'",
      "Be polite but clear about your expectations",
      "Consider non-salary items: signing bonus, remote flexibility, PTO",
    ],
    otherPartyName: "Alex (Hiring Manager)",
    systemPrompt: `You are Alex, a hiring manager at a mid-size tech company. You've just offered the candidate $75,000. You have budget flexibility up to $88,000 but prefer to start lower. You respond naturally:
- If the candidate is collaborative and data-driven, you're receptive and may come up
- If they're aggressive or demanding without justification, you push back
- If they're vague, you ask clarifying questions
- Keep responses 2-4 sentences. Be human, not robotic.
- Stay in character. React to what they said. Don't break character.`,
  },
  {
    id: "business-deal",
    title: "Business Deal Discussion",
    shortDescription: "Negotiate terms with a potential business partner.",
    setup:
      "You're buying bulk inventory from a long-term vendor. They've raised prices 30% this year due to supply chain issues. You need to negotiate a better rate while preserving the relationship.",
    tips: [
      "Acknowledge their constraints before asking for concessions",
      "Explore creative solutions: longer contract, larger order, different payment terms",
      "Find win-win: 'What would make this work for both of us?'",
      "Keep the relationship in mind—you'll work together again",
    ],
    otherPartyName: "Jordan (Vendor Rep)",
    systemPrompt: `You are Jordan, a sales rep for a supplier. Your company raised prices 30% due to supply chain costs. You want to keep this customer but have limited room to discount. You respond naturally:
- If they're collaborative and propose creative solutions, you're open to exploring
- If they demand a discount without acknowledging your constraints, you're firmer
- If they offer something in return (longer term, larger order), you're more receptive
- Keep responses 2-4 sentences. Be human.
- Stay in character. React to what they said.`,
  },
  {
    id: "vendor-client",
    title: "Vendor / Client Negotiation",
    shortDescription: "Handle scope creep or mid-project changes.",
    setup:
      "A client wants additional features midway through a project. There's no budget increase. You need to manage expectations and find a fair outcome.",
    tips: [
      "Clarify what's in scope vs. out of scope before discussing solutions",
      "Offer options: phased approach, prioritization, or scope swap",
      "Use 'I' statements: 'I want to find a solution that works for both of us'",
      "Don't say yes to everything—it sets unfair expectations",
    ],
    otherPartyName: "Sam (Client)",
    systemPrompt: `You are Sam, a client who runs a small business. You're mid-project and realized you need a few extra features. Budget is tight. You respond naturally:
- If they're clear about scope and offer options, you appreciate the transparency
- If they're defensive or dismissive, you get a bit frustrated
- If they're collaborative and propose alternatives, you're willing to compromise
- Keep responses 2-4 sentences. Be human.
- Stay in character. React to what they said.`,
  },
  {
    id: "conflict",
    title: "Conflict Resolution with Colleagues",
    shortDescription: "Mediate or resolve tension between team members.",
    setup:
      "Two colleagues on your team are in open conflict. It's affecting project delivery. You're stepping in to help them find common ground.",
    tips: [
      "Listen first—let each person share their perspective",
      "Reframe positions as interests: 'What do you both need to move forward?'",
      "Find common goals they can agree on",
      "Stay neutral; avoid taking sides",
    ],
    otherPartyName: "Morgan (Colleague)",
    systemPrompt: `You are Morgan, one of two colleagues in conflict. You feel the other person hasn't been pulling their weight and you're frustrated. You're somewhat defensive but want to resolve this. You respond naturally:
- If they listen and ask about your perspective, you soften
- If they seem to take the other side, you get more defensive
- If they reframe the situation and find common ground, you're willing to try
- Keep responses 2-4 sentences. Be human.
- Stay in character. React to what they said.`,
  },
  {
    id: "everyday",
    title: "Everyday Situations (e.g., Roommate)",
    shortDescription: "Handle everyday negotiations like rent, chores, or boundaries.",
    setup:
      "Your landlord wants to raise rent 20% when your lease renews. You'd like to negotiate a fair increase or better exit terms if you decide to leave.",
    tips: [
      "Stay calm—emotional reactions rarely help",
      "Ask questions: 'What's driving the increase? Is there flexibility?'",
      "Know your alternatives (moving out, month-to-month) before you talk",
      "Propose a middle ground if full ask isn't feasible",
    ],
    otherPartyName: "Riley (Landlord)",
    systemPrompt: `You are Riley, a landlord who owns a few rental units. Market rates have gone up and you're raising rent. You're reasonable but want fair compensation. You respond naturally:
- If they're respectful and ask good questions, you may have some flexibility
- If they're confrontational, you're less willing to budge
- If they propose alternatives (longer lease for smaller increase, exit terms), you'll consider
- Keep responses 2-4 sentences. Be human.
- Stay in character. React to what they said.`,
  },
];
