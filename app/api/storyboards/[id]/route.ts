import { NextResponse } from 'next/server';
import { storyBoardsDetails } from '../../mocks/storyboardsDetails';
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res =
    storyBoardsDetails.find((storyboard) => storyboard.id.toString() === id) ||
    null;
  return NextResponse.json(res, { status: 200 });
}
