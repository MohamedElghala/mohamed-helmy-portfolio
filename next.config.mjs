/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'mohamed-helmy-portfolio';

const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : '',
  },
};

export default nextConfig;
