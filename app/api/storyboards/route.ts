import { NextResponse } from 'next/server';
import { storyBoards, storyBoardsFav } from '../mocks/storyboards';

export async function GET() {
  return NextResponse.json(
    { storyBoards: storyBoards, storyBoardsFav: storyBoardsFav },
    { status: 200 }
  );
}
