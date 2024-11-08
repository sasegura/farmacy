'use client';

import { useState } from 'react';

import { sendRequest } from '@/app/services/sendRequest';
import Image from 'next/image';
import CustomModal from '@/app/components/modal/modal';

export default function RequestAccess({}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const sendRequestAccess = () => {
    setLoading(true);
    sendRequest(id, reason).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        setOpen(false);
      } else {
        setLoading(false);
      }
    });
  };

  return (
    <>
      <div className="absolute top-3 right-3 text-gray-400 flex gap-1">
        <button
          onClick={() => setOpen(true)}
          className="bg-slate-500 flex gap-3 py-2 px-5 rounded-md text-white justify-center items-center hover:bg-slate-600"
        >
          <Image src={'cube.svg'} alt="link icon" width={18} height={18} />
          Request
        </button>
      </div>

      <CustomModal open={open} handleClose={handleCloseDialog}>
        <div className="absolute top-3 right-3 text-gray-400 flex gap-1">
          <button className="hover:bg-slate-100 rounded-lg">
            <Image
              onClick={handleCloseDialog}
              src={'close.svg'}
              alt="close icon"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 my-5">
          <h2 className="text-2xl font-bold uppercase text-slate-700">
            Request access
          </h2>
        </div>

        <label htmlFor="access" className="mt-5 text-sm text-slate-500">
          Access Request for
        </label>
        <input
          onChange={(input) => setId(input.target.value)}
          id="access"
          type="text"
          placeholder="KPI-2369, Layout 15..."
          className="w-full mb-5 p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 text-sm"
        />
        <label htmlFor="reason" className=" text-sm text-slate-500">
          Reason for Request
        </label>
        <textarea
          onChange={(area) => setReason(area.target.value)}
          id="reason"
          placeholder="I need access to create..."
          className=" w-full p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          rows={10}
        />
        <button
          onClick={() => sendRequestAccess()}
          disabled={loading}
          className="bg-slate-500 ml-auto flex gap-3 py-2 px-5 rounded-md text-white justify-center items-center disabled:bg-slate-300 hover:bg-slate-600 mt-3"
        >
          Request access
        </button>
      </CustomModal>
    </>
  );
}
