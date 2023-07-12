import { APP_API } from '$env/static/private'


export async function load() {
  console.log('Only SSR: prerendered');
  console.log('APP_API SSR', APP_API) // secret 🤫
}
