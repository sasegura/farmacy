import { NextResponse } from 'next/server';
import { featuresDetails } from '../../mocks/featuresDetails';
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res =
    featuresDetails.find((feature) => feature.id.toString() === id) || null;
  return NextResponse.json(res, { status: 200 });
}
