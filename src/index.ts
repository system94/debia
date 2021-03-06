import 'module-alias/register';
import { DebiaClient } from '@lib/DebiaClient';
import { BOT_TOKEN, CLIENT_OPTIONS } from '@root/config';
import { floatPromise } from '@utils/utils';

const client = new DebiaClient(CLIENT_OPTIONS);

async function main() {
	await client.login(BOT_TOKEN);
}

floatPromise({ client }, main());

export const mainTest = () => 'this builds and pushes';
