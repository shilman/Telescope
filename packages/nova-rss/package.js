Package.describe({
  name: "nova:rss",
  summary: "Telescope RSS package",
  version: "0.26.2-nova",
  git: "https://github.com/TelescopeJS/telescope-rss.git"
});

Npm.depends({rss: "1.1.1"});

Package.onUse(function (api) {

  api.use(['nova:core@0.26.2-nova']);

  api.addFiles(['lib/server/rss.js', 'lib/server/routes.js'], ['server']);

});
