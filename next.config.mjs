import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
  },
  output: 'export', // Injecting the output property
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // Plugin names as strings so options are serializable for Turbopack builds.
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['@mapbox/rehype-prism'],
  },
});

export default withMDX(nextConfig);