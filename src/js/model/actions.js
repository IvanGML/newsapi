import { API_KEY as apiKey } from '../stuff/constants';

export default async function fetchInfo({ request, country, sources, keyWord }) {
  request = request || (() => { });
  let type = country ? 'GET_NEWS' : 'GET_SOURCES';
  return await request({ apiKey, country, sources, keyWord })
    .then(payload => ({ type, payload }))
}
