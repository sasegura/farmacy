import { IAssetDetails, ILayoutsResponse } from '@/app/interfaces/assets';

export const fetchLayouts = async (): Promise<ILayoutsResponse> => {
  const response = await fetch('/api/layouts');
  return await response.json();
};
export const fetchLayoutById = async (id: number): Promise<IAssetDetails> => {
  const response = await fetch(`/api/layouts/${id}`);
  return await response.json();
};
