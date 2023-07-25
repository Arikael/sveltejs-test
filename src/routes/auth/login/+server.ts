import type {RequestHandler} from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'

export const POST: RequestHandler = (async ({ cookies }) => {
	throw redirect(303, '/about');

}) satisfies RequestHandler;
