import { IAssetDetails, IStoryBoardsResponse } from '@/app/interfaces/assets';

export const fetchStoryboards = async (): Promise<IStoryBoardsResponse> => {
  const response = await fetch('/api/storyboards');
  return await response.json();
};

export const fetchStoryboardsById = async (
  id: number
): Promise<IAssetDetails> => {
  const response = await fetch(`/api/storyboards/${id}`);
  return await response.json();
};
