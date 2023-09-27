import lume from "lume/mod.ts";

const site = lume();

export default site;

site.ignore("README.md", "CHANGELOG.md", "node_modules");
site.ignore((path) => {
    return path.match(/^\/draft\/.*\.md$/) !== null;
});

site.copy("favicon.ico");
