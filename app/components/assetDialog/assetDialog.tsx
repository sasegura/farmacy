import Image from 'next/image';
import { IKpiModalProps } from '@/app/interfaces/dialog';
import CustomModal from '../modal/modal';

export const getChart = (visual: string) => {
  switch (visual) {
    case 'pie':
      return 'pie.svg';
    case 'line':
      return 'line.svg';
    case 'bar':
      return 'bar.svg';
    case 'doughnut':
      return 'doughnut.svg';
    default:
      return 'pie.svg';
  }
};

export default function AssetDialog({
  open,
  setOpen,
  loading,
  asset,
  handleSelectChar,
  copyLink,
  favorite,
  subtitle,
  assetIcon,
}: IKpiModalProps) {
  return (
    <CustomModal open={open} handleClose={() => setOpen(false)}>
      <div className="absolute top-3 right-3 text-gray-400 flex gap-1">
        <button onClick={copyLink} className="hover:bg-slate-100 rounded-lg">
          <Image src={'link.svg'} alt="link icon" width={20} height={20} />
        </button>
        <button className="hover:bg-slate-100 rounded-lg">
          <Image
            src={'close.svg'}
            alt="link icon"
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        </button>
      </div>

      <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center m-auto p-3">
        <Image
          src={assetIcon}
          alt="kpi icon"
          width={50}
          height={50}
          color="red"
        />
      </div>

      {loading ? (
        <p className="flex justify-center mt-8">Loading Asset...</p>
      ) : (
        asset && (
          <>
            <div className="flex justify-center items-center gap-2 mt-4">
              <h2 className="text-2xl font-bold uppercase">{asset.title}</h2>
              <span className="bg-slate-100 text-slate-400 p-1 text-xs rounded-xx">
                {subtitle}
              </span>
            </div>
            <p className="text-slate-400 text-xs m-auto text-center mt-1 mb-6">
              Descriptive name of the {subtitle}
            </p>

            <p className="text-center">{asset.description}</p>

            <div className="flex justify-center gap-1 mt-3">
              {asset.metricIds.map((metric) => (
                <span
                  key={metric.id}
                  className="border bg-slate-100 text-slate-400 p-1 text-xs rounded"
                >
                  {metric.name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x divide-slate-300 my-8">
              {asset?.data?.map((data) => (
                <div key={data.name} className="flex-1 text-center p-4">
                  <p className="text-md font-bold">{data?.value}</p>
                  <p className="text-xs text-slate-500">{data?.name}</p>
                </div>
              ))}
            </div>

            <div className="w-full rounded bg-slate-50 p-5 flex gap-4 flex-wrap min-h-80">
              {asset?.visualsAvailable?.map((visual) => (
                <button
                  key={visual.id}
                  onClick={() => handleSelectChar(visual.id)}
                  className={`${
                    visual.selected && 'shadow-md bg-white'
                  } flex-col  p-4 justify-center items-center flex h-32 w-32 rounded-md hover:shadow-md `}
                >
                  <Image
                    src={getChart(visual.name)}
                    alt={visual.name}
                    width={60}
                    height={60}
                  />
                  <p>{visual.name}</p>
                </button>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mt-9 mb-3">
                Bussiness Questions
              </h3>
              <div className="grid grid-cols-1  sm:grid-cols-2 gap-3">
                {asset.businessQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-white hover:bg-slate-100 rounded-md p-4"
                  >
                    <p className="font-bold text-md">{question.name}</p>
                    <p>{question.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={favorite}
              className="bg-slate-800 text-white px-4 py-2 flex justify-center items-center h-10 rounded w-full hover:bg-slate-700  mt-5"
            >
              <Image
                src={'favorite.svg'}
                alt="Pie icon"
                width={30}
                height={30}
                color="red"
              />
              Favorite item
            </button>
          </>
        )
      )}
    </CustomModal>
  );
}
