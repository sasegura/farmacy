import AssetsList from '@/app/components/assetsList/assetsList';
import Loading from '@/app/components/loading/loading';
import Section from '@/app/components/section/section';
import {
  IAsset,
  IAssetDetails,
  ILayoutsResponse,
} from '@/app/interfaces/assets';
import { fetchLayoutById, fetchLayouts } from '@/app/services/fetchLayouts';
import { useEffect, useState } from 'react';
import AssetDialog from '@/app/components/assetDialog/assetDialog';

const LayoutsDashboard = () => {
  const [layouts, setLayouts] = useState<IAsset[]>([]);
  const [layoutsFav, setLayoutsFav] = useState<IAsset[]>([]);

  const [loading, setLoading] = useState(false);

  const [layout, setLayout] = useState<IAssetDetails>();
  const [loadingById, setLoadingById] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getLayouts = () => {
    setLoading(true);
    fetchLayouts().then((data: ILayoutsResponse) => {
      setLayouts(data?.layouts);
      setLayoutsFav(data?.layoutsFav);
      setLoading(false);
    });
  };
  const getLayoutByID = (id: number) => {
    setLoadingById(true);
    fetchLayoutById(id).then((data: IAssetDetails) => {
      setLayout(data);
      setLoadingById(false);
    });
  };

  useEffect(() => {
    getLayouts();
  }, []);

  const handleOnClick = (id: number) => {
    setOpenModal(true);
    getLayoutByID(id);
  };

  return (
    <Loading loading={loading}>
      <Section title={'Layouts'} subtitle="Curated top picks from this week">
        <AssetsList
          assets={layouts}
          handleOnClick={handleOnClick}
          cardIcon={'grid.svg'}
        />
      </Section>
      <Section title={'Trending'} subtitle="Most popular by community">
        <AssetsList
          assets={layoutsFav}
          handleOnClick={handleOnClick}
          cardIcon={'grid.svg'}
          fill={false}
        />
      </Section>
      <AssetDialog
        open={openModal}
        setOpen={setOpenModal}
        copyLink={() => console.log('copy Link')}
        favorite={() => console.log('favorite')}
        handleSelectChar={() => console.log('copy Link')}
        asset={layout ?? null}
        loading={loadingById}
        subtitle="Layout"
        assetIcon="grid.svg"
      />
    </Loading>
  );
};

export default LayoutsDashboard;
