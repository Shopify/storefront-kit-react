import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useShopifyCookies',
  category: 'utilities',
  isVisualComponent: false,
  related: [
    {
      subtitle: 'Utility',
      name: 'sendShopifyAnalytics',
      url: '/api/react-storefront-kit/utilities/sendShopifyAnalytics',
      type: 'gear',
    },
    {
      subtitle: 'Utility',
      name: 'getClientBrowserParameters',
      url: '/api/react-storefront-kit/utilities/getclientbrowserparameters',
      type: 'gear',
    },
    {
      subtitle: 'Utility',
      name: 'getShopifyCookies',
      url: '/api/react-storefront-kit/utilities/getShopifyCookies',
      type: 'gear',
    },
  ],
  description:
    'Sets Shopify user and session cookies and refreshes the expiry time.',
  type: 'utility',
  defaultExample: {
    description: 'I am the default example',
    codeblock: {
      tabs: [
        {
          title: 'JavaScript',
          code: './useShopifyCookies.example.jsx',
          language: 'jsx',
        },
        {
          title: 'TypeScript',
          code: './useShopifyCookies.example.tsx',
          language: 'tsx',
        },
      ],
      title: 'Example code',
    },
  },
  definitions: [
    {
      title: 'useShopifyCookies',
      type: 'UseShopifyCookiesGeneratedType',
      description: '',
    },
  ],
};

export default data;
