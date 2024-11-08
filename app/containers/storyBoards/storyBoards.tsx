import AssetsList from '@/app/components/assetsList/assetsList';
import Loading from '@/app/components/loading/loading';
import Section from '@/app/components/section/section';
import {
  IAsset,
  IAssetDetails,
  IStoryBoardsResponse,
} from '@/app/interfaces/assets';
import {
  fetchStoryboards,
  fetchStoryboardsById,
} from '@/app/services/fetchStoryboards';
import { useEffect, useState } from 'react';
import AssetDialog from '@/app/components/assetDialog/assetDialog';

const StoryBoardsDashboard = () => {
  const [storyboards, setStoryboards] = useState<IAsset[]>([]);
  const [storyboard, setStoryboard] = useState<IAssetDetails>();
  const [storyboardsFav, setStoryboardsFav] = useState<IAsset[]>([]);

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [loadingById, setLoadingById] = useState(false);

  const getFeatures = () => {
    setLoading(true);
    fetchStoryboards().then((data: IStoryBoardsResponse) => {
      setStoryboards(data?.storyBoards);
      setStoryboardsFav(data?.storyBoardsFav);
      setLoading(false);
    });
  };

  const getFeatureByID = (id: number) => {
    setLoadingById(true);
    fetchStoryboardsById(id).then((data: IAssetDetails) => {
      setStoryboard(data);
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
      <Section
        title={'Storyboards'}
        subtitle="Curated top picks from this week"
      >
        <AssetsList
          assets={storyboards}
          handleOnClick={handleOnClick}
          cardIcon={'story.svg'}
        />
      </Section>
      <Section title={'Trending'} subtitle="Most popular by community">
        <AssetsList
          assets={storyboardsFav}
          handleOnClick={handleOnClick}
          cardIcon={'story.svg'}
          fill={false}
        />
      </Section>
      <AssetDialog
        open={openModal}
        setOpen={setOpenModal}
        copyLink={() => console.log('copy Link')}
        favorite={() => console.log('favorite')}
        handleSelectChar={() => console.log('copy Link')}
        asset={storyboard ?? null}
        loading={loadingById}
        subtitle="StoryBoard"
        assetIcon="story.svg"
      />
    </Loading>
  );
};

export default StoryBoardsDashboard;
