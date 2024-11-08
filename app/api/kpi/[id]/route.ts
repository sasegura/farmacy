import { NextResponse } from 'next/server';
import { kpiDetails } from '../../mocks/kpiDetails';
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res = kpiDetails.find((kpi) => kpi.id.toString() === id) || null;
  return NextResponse.json(res, { status: 200 });
}
