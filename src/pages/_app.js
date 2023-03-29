import NextApp from 'next/app'

import { SiteContext, useSiteContext } from 'hooks/use-site'


import { getSiteMetadata } from 'lib/site'
import { getAllMenus } from 'lib/menus'

import 'styles/globals.scss'


function App({Component, pageProps = {}, metadata, recentPosts, categories, menus}) {
    const site = useSiteContext({
        metadata,
        recentPosts,
        categories,
        menus,
    });


    return (
        <SiteContext.Provider value={site}>
            <Component {...pageProps} />
        </SiteContext.Provider>
    );
}

App.getInitialProps = async function (appContext) {
    const appProps = await NextApp.getInitialProps(appContext);


    const {menus = []} = await getAllMenus();


    return {
        ...appProps,
        metadata: await getSiteMetadata(),
        menus,
    };
};

export default App;
