export interface IAsset {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface IAssetDetails extends IAsset {
  category: string;
  metricIds: { id: string; name: string }[];
  businessQuestions: { id: string; name: string; description: string }[];
  visualsAvailable: { id: string; name: string; selected: boolean }[];
  data: Record<string, string>[];
}

export interface IFeatureResponse {
  features: IAsset[];
  featuresFav: IAsset[];
}

export interface ILayoutsResponse {
  layouts: IAsset[];
  layoutsFav: IAsset[];
}

export interface IStoryBoardsResponse {
  storyBoards: IAsset[];
  storyBoardsFav: IAsset[];
}
