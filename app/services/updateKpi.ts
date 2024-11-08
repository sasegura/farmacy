import { IAssetDetails } from '@/app/interfaces/assets';

export const updateKpi = async (kpi: IAssetDetails): Promise<IAssetDetails> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(kpi);
    }, 200);
  });
};
