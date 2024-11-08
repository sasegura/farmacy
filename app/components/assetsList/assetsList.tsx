import { IAsset } from '@/app/interfaces/assets';
import Image from 'next/image';

interface AssetListProps {
  assets: IAsset[];
  handleOnClick: (id: number) => void;
  cardIcon: string;
  fill?: boolean;
}

const AssetsList = ({
  assets,
  handleOnClick,
  cardIcon,
  fill = true,
}: AssetListProps) => {
  return (
    <div className='flex gap-5 flex-wrap content-center items-center '>
      {assets?.map((asset: IAsset) => (
        <div
          key={asset.id}
          onClick={() => handleOnClick(asset.id)}
          className={`${
            fill ? 'bg-white border' : ''
          } cursor-pointer hover:bg-slate-100 border-slate-200 rounded-lg p-5 flex flex-wrap gap-4`}
        >
          <div className='w-28 h-28 rounded-xl bg-slate-100 flex items-center justify-center'>
            <Image
              src={cardIcon}
              alt='Pie icon'
              width={50}
              height={50}
              color='red'
            />
          </div>
          <div className='w-44 md:w-80 lg:w-72 xl:w-52 2xl:w-44'>
            <p className='font-bold'>{asset.title}</p>
            <p className='my-2 truncate'>{asset.description}</p>
            <p className='text-slate-300'>{asset.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetsList;
