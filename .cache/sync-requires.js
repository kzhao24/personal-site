const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/KevinZhao/Desktop/CS/Personal/personal-site/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/KevinZhao/Desktop/CS/Personal/personal-site/src/pages/index.js")))
}
