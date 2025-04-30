export interface StatisticType {
  id: number;
  value: string;
  label: string;
}

export interface AwardType {
  id: number;
  text: string;
}

export interface ChartDataType {
  category: string;
  value: number;
}

export interface BrandStatementProps {
  statistics: StatisticType[];
  awards: AwardType[];
  chartData: ChartDataType[];
  quote: string;
}
