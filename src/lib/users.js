import { getApolloClient } from 'lib/apollo-client';

import parameterize from 'parameterize';

import { QUERY_ALL_USERS, QUERY_ALL_USERS_SEO } from 'data/users';



export function authorPathBySlug(slug) {
  return `/authors/${slug}`;
}

export async function getUserBySlug(slug) {
  const { users } = await getAllUsers();

  const user = users.find((user) => user.slug === slug);

  return {
    user,
  };
}


export function authorPathByName(name) {
  return `/authors/${parameterize(name)}`;
}


export async function getUserByNameSlug(name) {
  const { users } = await getAllUsers();

  const user = users.find((user) => parameterize(user.name) === name);

  return {
    user,
  };
}

export function userSlugByName(name) {
  return parameterize(name);
}

export async function getAllUsers() {
  const apolloClient = getApolloClient();

  let usersData;
  let seoData;

  try {
    usersData = await apolloClient.query({
      query: QUERY_ALL_USERS,
    });
  } catch (e) {
    console.log(`[users][getAllUsers] Failed to query users data: ${e.message}`);
    throw e;
  }

  let users = usersData?.data.users.edges.map(({ node = {} }) => node).map(mapUserData);



  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_ALL_USERS_SEO,
      });
    } catch (e) {
      console.log(`[users][getAllUsers] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    users = users.map((user) => {
      const data = { ...user };
      const { id } = data;

      const seo = seoData?.data?.users.edges.map(({ node = {} }) => node).find((node) => node.id === id)?.seo;

      return {
        ...data,
        title: seo.title,
        description: seo.metaDesc,
        robots: {
          nofollow: seo.metaRobotsNofollow,
          noindex: seo.metaRobotsNoindex,
        },
        social: seo.social,
      };
    });
  }

  return {
    users,
  };
}



export async function getAllAuthors() {
  const { users } = await getAllUsers();

  return {
    authors: users,
  };
}

export function mapUserData(user) {
  return {
    ...user,
    roles: [...user.roles.nodes],
    avatar: user.avatar && updateUserAvatar(user.avatar),
  };
}

export function updateUserAvatar(avatar) {
  return {
    ...avatar,
    url: avatar.url?.replace('http://', 'https://'),
  };
}
