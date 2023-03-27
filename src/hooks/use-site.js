import { useContext, createContext } from 'react';

import config from '../../package.json';

import { removeLastTrailingSlash } from 'lib/util';

export const SiteContext = createContext();


export function useSiteContext(data) {
  let { homepage = '' } = config;
  homepage = removeLastTrailingSlash(homepage);

  return {
    ...data,
    homepage,
  };
}



export default function useSite() {
  const site = useContext(SiteContext);
  return site;
}
