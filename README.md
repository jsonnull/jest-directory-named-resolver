# jest-directory-named-resolver

Allow Jest require paths to look for files that match the directory name when
trying to resolve. For use with
[directory-named-webpack-plugin](https://github.com/shaketbaby/directory-named-webpack-plugin).

## Install and Configure

Install the package:

```sh
yarn add jsonnull/jest-directory-named-resolver
```

Configure Jest to use the custom resolver:

```json
"jest": {
  "resolver": "jest-directory-named-resolver"
}
```

See the [`resolver`
option](https://facebook.github.io/jest/docs/configuration.html#resolver-string)
from the Jest documentation.

---

**NOTE:** Custom resolvers are not yet in a published Jest release, so in order
to use this you will need to run your tests off a local build of Jest. See [the
Jest
CONTRIBUTING.md](https://github.com/facebook/jest/blob/master/CONTRIBUTING.md)
for information on how to test using a local build.
