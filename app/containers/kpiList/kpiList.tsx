import { useState, useEffect } from 'react';
import { fetchKpiData } from '@/app/services/fetchKPI';
import { IAsset } from '@/app/interfaces/assets';
import Image from 'next/image';
import KpiDetails from '@/app/containers/kpi/kpiDetails';
import { getChart } from '@/app/components/assetDialog/assetDialog';
import Section from '@/app/components/section/section';
import AssetsList from '@/app/components/assetsList/assetsList';

const charts = ['pie', 'line', 'bar', 'doughnut'];

const KpiDashboard = () => {
  const [kpis, setKpis] = useState<IAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedKpi, setSelectedKpi] = useState<number>(0);

  useEffect(() => {
    const getKpis = () => {
      setLoading(true);
      fetchKpiData().then((data) => {
        setKpis(data);
        setLoading(false);
      });
    };
    getKpis();
  }, []);

  const handleOnClick = (id: number) => {
    setSelectedKpi(id);
  };

  return (
    <div>
      <Section title={'KPI'} subtitle={'Curated top picks from this week'}>
        {loading ? (
          <p className="flex justify-center">Loading KPIs...</p>
        ) : (
          <>
            <AssetsList
              assets={kpis}
              handleOnClick={handleOnClick}
              cardIcon={'cardIcon.svg'}
            />

            {selectedKpi !== 0 && (
              <KpiDetails
                selectedKpiId={selectedKpi}
                clearSelection={() => setSelectedKpi(0)}
              />
            )}
          </>
        )}
      </Section>

      <Section title={'Charts'} subtitle={'Available charts'}>
        <div className="w-full rounded bg-slate-50 p-5 flex gap-4 flex-wrap">
          {charts.map((chart, index) => (
            <Image
              key={index}
              src={getChart(chart)}
              alt={chart}
              width={60}
              height={60}
              className={`shadow-md bg-white flex-col  p-4 justify-center items-center flex h-32 w-32 rounded-md hover:shadow-md `}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default KpiDashboard;
