import { NextResponse } from 'next/server';
import { layoutsDetails } from '../../mocks/layoutsDetails';
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res =
    layoutsDetails.find((layout) => layout.id.toString() === id) || null;
  return NextResponse.json(res, { status: 200 });
}
