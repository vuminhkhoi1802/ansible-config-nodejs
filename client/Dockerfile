FROM node:12

# Global install yarn package manager
ENV YARN_VERSION 1.17.3

RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
&& tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
&& ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
&& ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
&& rm yarn-v$YARN_VERSION.tar.gz

RUN mkdir -p /home/node/app/node_modules && mkdir -p /home/node/app/build && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node yarn.lock ./
COPY --chown=node:node package.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]
