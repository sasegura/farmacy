import { IAssetDetails } from './assets';
import { IKpiDetails } from './kpi';

interface IModalBaseProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  description?: string;
  favorite: () => void;
  copyLink: () => void;
}

export interface IKpiModalProps extends IModalBaseProps {
  loading: boolean;
  asset: IAssetDetails | null;
  handleSelectChar: (visualId: string) => void;
  subtitle: string;
  assetIcon: string;
  kpi: IKpiDetails;
  handleShare: () => void;
}
