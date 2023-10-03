import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
const config: StorybookConfig = {
  core: {},
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  webpackFinal: async (config) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts

    // add your own webpack tweaks if needed

    const imageRule = config?.module?.rules?.find((rule) =>
      rule.test?.test(".svg")
    );
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      image: {
        loading: 'eager',
      },
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  docs: {
    autodocs: true,
  },
};
module.exports = config;
