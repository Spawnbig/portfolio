import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeAttrs',
                    params: { attrs: '(fill|stroke)' },
                  },
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
