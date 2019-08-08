const devMiddleware = require('webpack-dev-middleware');

module.exports = (compiler, opts) => {
  const expressMiddleware = devMiddleware(compiler, opts);

  async function middleware(ctx, next) {
    await expressMiddleware(
      ctx.req, {
        end: (content) => {
          ctx.body = content;
        },
        setHeader: (name, value) => {
          ctx.set(name, value);
        },
      },
      next,
    );
  }

  middleware.close = expressMiddleware.close;
  middleware.fileSystem = expressMiddleware.fileSystem;
  middleware.invalidate = expressMiddleware.invalidate;
  middleware.waitUntilValid = expressMiddleware.waitUntilValid;
  middleware.getFilenameFromUrl = expressMiddleware.getFilenameFromUrl;

  return middleware;
};
