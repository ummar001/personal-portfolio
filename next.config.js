// next.config.js

module.exports = {
    images: {
      domains: ['github-readme-stats.vercel.app', 'streak-stats.demolab.com'],
    },
    
    // Add the export configuration
    output: {
      // This will create a static export in the 'out' directory.
      // Adjust the path as needed.
      path: '/out',
    },
  };
  