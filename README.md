# monorepo-docker
An attempt to solve the combination of micro-services / multi-server / multi-client in lerna (JS) monorepo running in Docker

# desired dev features
- Files are watched in dev across running docker services, trigger reload of clients, servers and services
- The repo can be reused across several separate projects, only using services and packages needed
- JS packages works in node and in browser (using babel on the fly from any package)
- A separate test environment can be run in a project to watch and run tests when files changes