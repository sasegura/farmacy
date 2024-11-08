import { NextResponse } from 'next/server';
import { features, featuresFav } from '../mocks/features';

export async function GET() {
  return NextResponse.json(
    { features: features, featuresFav: featuresFav },
    { status: 200 }
  );
}
