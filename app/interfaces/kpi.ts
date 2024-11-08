export interface IKpiData {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface IKpiDetails extends IKpiData {
  date: string;
  category: string;
  metricIds: IMetric[];
  businessQuestions: IQuestion[];
  calculation: string;
  visualsAvailable: IVisual[];
  affiliateApplicability: boolean;
}

export interface IQuestion {
  id: string;
  name: string;
  description: string;
}

export interface IVisual {
  id: string;
  name: string;
  selected: boolean;
}

export interface IMetric {
  id: string;
  name: string;
}
