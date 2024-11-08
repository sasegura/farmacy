import AssetsList from '@/app/components/assetsList/assetsList';
import Loading from '@/app/components/loading/loading';
import Section from '@/app/components/section/section';
import { useEffect, useState } from 'react';
import AssetDialog from '@/app/components/assetDialog/assetDialog';
import {
  IAsset,
  IAssetDetails,
  IFeatureResponse,
} from '@/app/interfaces/assets';
import { fetchFeatures, fetchFeatureById } from '@/app/services/fetchFeatures';

const FeaturedDashboard = () => {
  const [features, setFeatures] = useState<IAsset[]>([]);
  const [feature, setFeature] = useState<IAssetDetails>();

  const [featuresFav, setFeaturesFav] = useState<IAsset[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  const [loadingById, setLoadingById] = useState(false);

  const getFeatures = () => {
    setLoading(true);
    fetchFeatures().then((data: IFeatureResponse) => {
      setFeatures(data?.features);
      setFeaturesFav(data?.featuresFav);
      setLoading(false);
    });
  };

  const getFeatureByID = (id: number) => {
    setLoadingById(true);
    fetchFeatureById(id).then((data: IAssetDetails) => {
      setFeature(data);
      setLoadingById(false);
    });
  };

  useEffect(() => {
    getFeatures();
  }, []);

  const handleOnClick = (id: number) => {
    setOpenModal(true);
    getFeatureByID(id);
  };

  return (
    <Loading loading={loading}>
      <Section title={'Featured'} subtitle="Curated top picks from this week">
        <AssetsList
          assets={features}
          handleOnClick={handleOnClick}
          cardIcon={'pie.svg'}
        />
      </Section>
      <Section title={'Trending'} subtitle="Most popular by community">
        <AssetsList
          assets={featuresFav}
          handleOnClick={handleOnClick}
          cardIcon={'pie.svg'}
          fill={false}
        />
      </Section>
      <AssetDialog
        open={openModal}
        setOpen={setOpenModal}
        copyLink={() => console.log('copy Link')}
        favorite={() => console.log('favorite')}
        handleSelectChar={() => console.log('copy Link')}
        asset={feature ?? null}
        loading={loadingById}
        subtitle="Featured"
        assetIcon="pie.svg"
      />
    </Loading>
  );
};

export default FeaturedDashboard;
