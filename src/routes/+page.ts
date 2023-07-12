import { PUBLIC_API_KEY } from '$env/static/public';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
  console.log('SSR + Client: prerendered', PUBLIC_API_KEY);
  // console.log('APP_API', APP_API) // secret 🤫
}
