import { NextResponse } from 'next/server';
import { kpi } from '../mocks/kpi';

export async function GET() {
  return NextResponse.json(kpi, { status: 200 });
}
