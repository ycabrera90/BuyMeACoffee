import { NextRequest, NextResponse } from 'next/server';

type Data = {
	message: string;
	name: string;
	portfolio: string;
	linkedin: string;
	github: string;
};

export async function GET(req: NextRequest) {
	const data: Data = {
		message: 'Hello!!! Im Yosniel Cabrera, the developer of this project',
		name: 'Yosniel',
		portfolio: 'https://yosniel-dev.com/',
		linkedin: 'https://www.linkedin.com/in/eip-studios/',
		github: 'https://github.com/ycabrera90',
	};

	return NextResponse.json(data);
}
