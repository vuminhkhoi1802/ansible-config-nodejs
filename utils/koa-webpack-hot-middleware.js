const { PassThrough } = require('stream');
const hotMiddleware = require('webpack-hot-middleware');

module.exports = (compiler, opts) => {
  const expressMiddleware = hotMiddleware(compiler, opts);
  return async (ctx, next) => {
    const stream = new PassThrough();
    ctx.body = stream;
    await expressMiddleware(
      ctx.req, {
        write: stream.write.bind(stream),
        writeHead: (status, headers) => {
          ctx.status = status;
          ctx.set(headers);
        },
        end: (content) => {
          ctx.body = content;
        },
      },
      next,
    );
  };
};
