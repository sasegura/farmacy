import { IAsset, IAssetDetails } from '@/app/interfaces/assets';

export const fetchKpiData = async (): Promise<IAsset[]> => {
  const response = await fetch('/api/kpi');
  return await response.json();
};

export const fetchKpiById = async (id: number): Promise<IAssetDetails> => {
  const response = await fetch(`/api/kpi/${id}`);
  return await response.json();
};
