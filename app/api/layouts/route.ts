import { NextResponse } from 'next/server';
import { layouts, layoutsFav } from '../mocks/layouts';

export async function GET() {
  return NextResponse.json(
    { layouts: layouts, layoutsFav: layoutsFav },
    { status: 200 }
  );
}
