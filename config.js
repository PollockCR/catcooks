const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://hasura.io",
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo:
      "https://catherinepollock.com/img/initials-logo.svg",
    logoLink: "https://catherinepollock.com",
    title:
      "<a href='https://cookwithcat.netlify.app'>Cook with Cat (^..^)ﾉ</a>",
    githubUrl: "https://github.com/PollockCR/cookwithcat",
    helpUrl: "",
    tweetText: "",
    social: ``,
    links: [{ text: "", link: "" }],
    search: {
      enabled: true,
      indexName: "recipes",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      "/", // add trailing slash if enabled above
      "/codeblock",
    ],
    collapsedNav: [
      "/codeblock", // add trailing slash if enabled above
    ],
    links: [{ text: "Catherine Pollock", link: "https://catherinepollock.com" }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: "Cook with Cat | Catherine Pollock",
    description: "Recipes loved by Catherine Pollock, professional web developer and amateur chef.",
    ogImage: null,
    docsLocation:
      "https://github.com/PollockCR/cookwithcat/tree/master/content",
    favicon: "https://catherinepollock.com/img/initials-logo.svg",
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Cook with Cat | Catherine Pollock",
      short_name: "Cook with Cat",
      start_url: "/",
      background_color: "#3C5D62",
      theme_color: "#3C5D62",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
