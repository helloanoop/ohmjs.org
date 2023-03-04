/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  mySidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'link',
      label: 'Tutorial',
      href: 'https://nextjournal.com/dubroy/ohm-parsing-made-easy',
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          label: 'Syntax reference',
          id: 'syntax-reference',
        },
        {
          type: 'doc',
          label: 'API reference',
          id: 'api-reference',
        },
        {
          type: 'doc',
          label: 'Extras',
          id: 'extras',
        },
        {
          type: 'doc',
          label: 'Errors',
          id: 'errors',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          label: 'Using with TypeScript',
          id: 'typescript',
        },
        {
          type: 'doc',
          label: 'Publishing grammars',
          id: 'publishing-grammars',
        },
        {
          type: 'doc',
          label: 'Contributing',
          id: 'contributor-guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Release notes',
      items: [
        {
          type: 'doc',
          label: 'v17.0',
          id: 'releases/ohm-js-17.0',
        },
        {
          type: 'doc',
          label: 'v16.0',
          id: 'releases/ohm-js-16.0',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Patterns and pitfalls',
      id: 'patterns-and-pitfalls',
    },
  ],
};

module.exports = sidebars;
