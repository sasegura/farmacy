import Image from 'next/image';
import { Tabs } from './components/tabs/tabs';
import RequestAccess from './containers/requestAccess/requestAccess';

export default function Home() {
  return (
    <main className="p-8 container mx-auto">
      <RequestAccess />
      <div className="z-10 w-full">
        <h1 className="text-5xl font-bold text-center mb-8 w-full">Library</h1>
        <p className="text-base text-center">
          Browse for assets needed to report and present analysis.
        </p>
        <div className="relative w-full mt-10">
          <input
            type="search"
            placeholder="Type to search..."
            className="w-full p-3 pl-10 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 text-sm"
          />
          <Image
            src="search.svg"
            alt="searchIcon"
            width={15}
            height={15}
            className="absolute left-4 top-3 h-4 w-4 text-slate-400"
          />
        </div>
        <Tabs />
      </div>
    </main>
  );
}
