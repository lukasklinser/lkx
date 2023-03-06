const { execSync } = require("child_process");

const commitTimestamp = execSync("git log -1 --format=%ct").toString();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/humans.txt",
        destination: "/api/humans",
      },
    ];
  },
  publicRuntimeConfig: {
    modifiedDate: new Date(parseInt(commitTimestamp) * 1000).toISOString(),
  },
};
