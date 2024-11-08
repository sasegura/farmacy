import { IAssetDetails, IFeatureResponse } from '@/app/interfaces/assets';

export const fetchFeatures = async (): Promise<IFeatureResponse> => {
  const response = await fetch('/api/feature');
  return await response.json();
};

export const fetchFeatureById = async (id: number): Promise<IAssetDetails> => {
  const response = await fetch(`/api/feature/${id}`);
  return await response.json();
};
