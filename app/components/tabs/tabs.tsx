'use client';
import { useState } from 'react';
import { TabContent } from '../tabContent/tabContent';

const tabsList = ['Featured', 'Kpi', 'Layouts', 'Storyboards'];

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div className='contasinerss'>
      <div className='flex flex-wrap justify-around items-center mt-5 rounded-md p-1 text-sm bg-slate-100 gap-1'>
        {tabsList.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`font-bold flex-1 h-8 flex justify-center items-center rounded-md text-slate-500 hover:bg-white focus:bg-white focus:shadow-sm focus:text-slate-700 ${
              selectedTab === index &&
              'bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <TabContent tab={selectedTab} />
    </div>
  );
};
