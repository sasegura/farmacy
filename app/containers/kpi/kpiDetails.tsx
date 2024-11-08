'use client';

import { fetchKpiById } from '@/app/services/fetchKPI';
import { IAssetDetails } from '@/app/interfaces/assets';
import { useEffect, useState } from 'react';
import AssetDialog from '@/app/components/assetDialog/assetDialog';
import { updateKpi } from '@/app/services/updateKpi';

interface IKpiProps {
  selectedKpiId: number;
  clearSelection: () => void;
}

const KpiDetails = ({ selectedKpiId, clearSelection }: IKpiProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [kpi, setKpi] = useState<IAssetDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(false);
    setKpi(null);
    clearSelection();
  };

  const getKpi = (id: number) => {
    setOpenDialog(true);
    setLoading(true);
    fetchKpiById(id).then((data) => {
      setKpi(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getKpi(selectedKpiId);
  }, [selectedKpiId]);

  const handleSelectedChar = (selection: string) => {
    if (kpi) {
      const tempKpi = { ...kpi };
      const tempSelectedVisuals = tempKpi.visualsAvailable.map((visual) => {
        if (visual.id === selection) {
          return { ...visual, selected: !visual.selected };
        } else {
          return visual;
        }
      });
      const newKpi = { ...kpi, visualsAvailable: tempSelectedVisuals };
      setKpi(newKpi);
      updateKpi(newKpi).then((data) => {
        console.log(`updated kpi ${data.id}`);
      });
    }
  };

  const handleCopyLink = () => {
    console.log('Copy Link');
  };

  return (
    <AssetDialog
      open={openDialog}
      setOpen={handleOpenDialog}
      loading={loading}
      favorite={() => console.log('Set as favorite')}
      asset={kpi}
      handleSelectChar={handleSelectedChar}
      copyLink={handleCopyLink}
      subtitle="KPI"
      assetIcon="kpi.svg"
    />
  );
};

export default KpiDetails;
