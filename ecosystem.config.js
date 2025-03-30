require('dotenv').config({ path: '.env.deploy' });

module.exports = {
  apps: [
    {
      name: 'mesto-frontend',
      script: 'npm',
      args: 'run serve',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: process.env.DEPLOY_USER,
      host: process.env.DEPLOY_HOST,
      ref: process.env.DEPLOY_REF,
      repo: process.env.DEPLOY_REPO,
      path: process.env.DEPLOY_PATH,
      'pre-deploy-local':
        `scp .env ${process.env.DEPLOY_USER}@${process.env.DEPLOY_HOST}:${process.env.DEPLOY_PATH}/current/`,
      'post-deploy':
          'source ~/.nvm/nvm.sh && export NODE_OPTIONS=--openssl-legacy-provider && npm install && npm run build && pm2 restart ecosystem.config.js --env production',
    },
  },
};