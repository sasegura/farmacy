import KpiDashboard from '../../containers/kpiList/kpiList';
import FeaturedDashboard from '../../containers/featured/featured';
import LayoutsDashboard from '../../containers/layouts/layouts';
import StoryBoardsDashboard from '../../containers/storyBoards/storyBoards';

const RenderTab = ({ tab }: { tab: number }) => {
  switch (tab) {
    case 0:
      return <FeaturedDashboard />;
    case 1:
      return <KpiDashboard />;
    case 2:
      return <LayoutsDashboard />;
    case 3:
      return <StoryBoardsDashboard />;
    default:
      return <div>No hay componente seleccionado</div>;
  }
};

export const TabContent = ({ tab }: { tab: number }) => {
  return (
    <div className='content-tabs'>
      <RenderTab tab={tab} />
    </div>
  );
};
