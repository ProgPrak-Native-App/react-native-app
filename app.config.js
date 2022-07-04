// eslint-disable-next-line import/no-anonymous-default-export
export default ({ config }) => {
  return {
    ...config,
    version: process.env.APP_VERSION || '1.0.0',
    extra: {
      environment: process.env.NODE_ENV ?? 'development',
    },
  };
};
