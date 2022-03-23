module.exports = {
  apps: [
    {
      name: "back-server",
      script: "server.js",
      cwd: "back-end/",
      watch: false,
    },
    {
      name: "front-server",
      script: "server.js",
      cwd: "front-end/",
      watch: false,
    },
  ],
};
