/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/react-native-minimalist/img/Minimalist-Logo.png',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'React Native Minimalist' /* title for your website */,
  tagline: 'An opinionated minimalist UI library for React Native',
  url: 'https://applification.github.io/react-native-minimalist/' /* your website url */,
  baseUrl: '/react-native-minimalist/' /* base url for your project */,
  projectName: 'react-native-minimalist',
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/Minimalist-Logo.png',
  footerIcon: 'img/Minimalist-Logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#4E9CB5',
    secondaryColor: '#67AAC0',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Applification Ltd',
  organizationName: 'Applification', // or set an env variable ORGANIZATION_NAME
  //projectName: 'react-native-minimalist', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;