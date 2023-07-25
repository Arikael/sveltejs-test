import type {Handle} from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'

export const handle: Handle = (async ({event, resolve}) => {
  
  if(event.url.pathname === '/test') {
    throw redirect(303, '/')
  }

  return resolve(event)
}) satisfies Handle