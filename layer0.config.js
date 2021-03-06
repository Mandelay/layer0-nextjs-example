module.exports = {
  connector: '@layer0/next',
  backends: {
    // Define a domain or IP address to proxy as a backend
    // More on: https://docs.layer0.co/guides/layer0_config#backends
    legacy: {
//       domainOrIp: 'ros-layer0-nextjs-example-default.layer0-limelight.link',
//       hostHeader: 'ros-layer0-nextjs-example-default.layer0-limelight.link',
//       domainOrIp: 'dou.ua',
//       hostHeader: 'dou.ua',
//       domainOrIp: 'docs.layer0.co',
      domainOrIp: 'developer.mozilla.org',
      hostHeader: 'developer.mozilla.org',
      disableCheckCert: true,
    },
    new: {
      domainOrIp: 'ros-layer0-nextjs-example-new-default.layer0-limelight.link',
      hostHeader: 'ros-layer0-nextjs-example-new-default.layer0-limelight.link',
      disableCheckCert: true,
    },

    api: {
      domainOrIp: 'layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link',
      hostHeader: 'layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link',
      // Disable backend SSL certificate security check, read more on:
      // https://docs.layer0.co/guides/layer0_config#:~:text=browser%20is%20used.-,disableCheckCert,-Boolean
      disableCheckCert: true,
    },
  },
}
