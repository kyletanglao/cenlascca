/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Code below disables building of the maps
exports.onCreateWebpackConfig = ({ actions, stage }) => {
    // If production JavaScript and CSS build
    if (stage === 'build-javascript') {
      // Turn off source maps
      actions.setWebpackConfig({
        devtool: false,
      })
    }
  };