import NextApp from 'next/app';

import {SiteContext, useSiteContext} from 'hooks/use-site';


import {getSiteMetadata} from 'lib/site';
import {getRecentPosts} from 'lib/posts';
import {getCategories} from 'lib/categories';
import NextNProgress from 'nextjs-progressbar';
import {getAllMenus} from 'lib/menus';

import 'styles/globals.scss';
import variables from 'styles/_variables.module.scss';

function App({Component, pageProps = {}, metadata, recentPosts, categories, menus}) {
    const site = useSiteContext({
        metadata,
        recentPosts,
        categories,
        menus,
    });


    return (
        <SiteContext.Provider value={site}>
            <NextNProgress height={4} color={variables.progressbarColor}/>
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
