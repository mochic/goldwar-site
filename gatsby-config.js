module.exports = {
  siteMetadata: {
    title: 'goldwar',
    menuLinks: [
      { name: 'about', link: '/about' },
      { name: 'events', link: '/events' },
    ],
    socialMediaLinks: [
      { name: 'instagram', uri: 'https://www.instagram.com' },
      { name: 'twitter', uri: 'https://www.twitter.com' },
      { name: 'facebook', uri: 'https://www.facebook.com' },
    ],
    events: [
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
      {
        date: new Date(2018, 11, 25),
        link: {
          name: 'Blue Moon',
          link: 'http://bluemoon.com',
        },
      },
    ],
    soundcloud: {
      albums: [
        {
          art: 'https://i1.sndcdn.com/avatars-000341355387-zpbcdn-t500x500.jpg',
        },
      ],
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`sriracha`, `sue ellen francisco`, `major mono display`],
      },
    },
    `gatsby-plugin-layout`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
