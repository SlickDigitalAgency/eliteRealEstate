import {
  StatisticType,
  AwardType,
  ChartDataType,
} from "@/types/brandStatement/brandStatementTypes";

export const STATISTICS: StatisticType[] = [
  {
    id: 1,
    value: "$1.2B",
    label: "Sales Volume",
  },
  {
    id: 2,
    value: "150+",
    label: "Luxury Properties Sold",
  },
  {
    id: 3,
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    id: 4,
    value: "15+",
    label: "Years of Experience",
  },
];

export const AWARDS: AwardType[] = [
  {
    id: 1,
    text: "Top 1% of Luxury Agents Nationwide",
  },
  {
    id: 2,
    text: "Diamond Circle Award 2024",
  },
  {
    id: 3,
    text: "Best in Client Satisfaction 2023",
  },
  {
    id: 4,
    text: "Luxury Property Specialist",
  },
];

export const CHART_DATA: ChartDataType[] = [
  { category: "Luxury Sales", value: 95 },
  { category: "Response Time", value: 90 },
  { category: "Negotiation", value: 98 },
  { category: "Market Knowledge", value: 92 },
  { category: "Client Satisfaction", value: 96 },
];

export const EXCELLENCE_QUOTE =
  "Our commitment to excellence has established us as leaders in the luxury real estate market.";
