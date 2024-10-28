import { NextResponse } from 'next/server';
import dayjs from 'dayjs';

export
async function GET(req: Request) {
  return NextResponse.json({
    message: `hello now is ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
  });
}

export
async function POST(req: Request) {
  const json = await req.json();
  return NextResponse.json({
    object: json,
  });
}
