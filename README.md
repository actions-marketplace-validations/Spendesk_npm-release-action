# npm-release-action

This action makes it easy to release a package to the npm repository.
Specifically, it will:
 - Set up Node.js (using [`actions/setup-node`](https://github.com/actions/setup-node))
 - Cache the `node_module` + `yarn cache directories` (using [`actions/cache`](https://github.com/actions/cache) )
 - Install dependencies defined in `package.json` if not found in the cache
 - Build the artifacts using `yarn run build` (the command must be defined in `package.json`)
 - Release the package to npm
# Documentation
## Usage

### Prerequisite
- Workflow run on linux OS
- Package manager is `yarn`
- key used to cache yarn assets: `${{ runner.os }}-node-${{ env.NODE_VERSION }}-yarn-${{ hashFiles('**/yarn.lock') }}`
- `build` command must be defined

### Required env variables
- `GITHUB_TOKEN`: github credentials
- `NPM_TOKEN`: npm credentials
- `NODE_VERSION`: node version to install
### Inputs

- `use-semantic-release`: defaults to `'true'`. If `'true'`, will use [`semantic-release`](https://github.com/semantic-release/semantic-release) to manage the release.
Otherwise, it performs a plain `yarn publish`
- `skip-checks`: defaults to `'false'`. If truthy, skips the `lint and test` step


