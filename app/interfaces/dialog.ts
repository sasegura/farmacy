import { IAssetDetails } from './assets';

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
}
