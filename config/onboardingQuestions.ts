// Shared types
type InputType = "text" | "number" | "textarea" | "select" | "range";

interface QuestionConfig {
  id: string;
  type: InputType;
  label: string;
  options?: string[];
  rows?: number; // for textarea
}

interface StepConfig {
  title: string;
  description?: string;
  questions: QuestionConfig[];
}

// Buyer Onboarding Steps
export const buyerSteps: StepConfig[] = [
  {
    title: "Tell us about your ideal acquisition",
    questions: [
      {
        id: "budget",
        type: "number",
        label: "What is your acquisition budget?",
      },
      {
        id: "industry",
        type: "select",
        label: "Preferred industry/vertical?",
        options: ["Tech/SaaS", "Retail/E-commerce", "Healthcare"],
      },
      {
        id: "involvement",
        type: "select",
        label: "What type of involvement do you desire?",
        options: [
          "Owner-operator",
          "Passive investor",
          "Strategic partnership",
        ],
      },
      {
        id: "background",
        type: "textarea",
        label: "Briefly describe your background in acquisitions",
        rows: 3,
      },
    ],
  },
];

// Seller Onboarding Steps
export const sellerSteps: StepConfig[] = [
  {
    title: "About your business",
    questions: [
      { id: "businessName", type: "text", label: "Business Name" },
      { id: "industry", type: "text", label: "Industry" },
      { id: "askingPrice", type: "number", label: "Asking price (optional)" },
      {
        id: "uniqueSellingPoint",
        type: "textarea",
        label: "What makes your business unique?",
        rows: 3,
      },
      {
        id: "buyerType",
        type: "select",
        label: "What type of buyer are you looking for?",
        options: [
          "Experienced operator",
          "Investor",
          "Strategic acquirer",
          "Any",
        ],
      },
    ],
  },
];
