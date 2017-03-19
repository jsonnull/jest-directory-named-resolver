# jest-directory-named-resolver

## Install and Configure

```sh
yarn add jsonnull/jest-directory-named-resolver
```

Configure Jest to use the custom resolver:

```json
"jest": {
  "resolver": "jest-directory-named-resolver"
}
```

[`resolver` option in the Jest documentation](https://facebook.github.io/jest/docs/configuration.html#resolver-string)

**NOTE:** Custom resolvers are not yet in a published Jest release, so in order
to use this you will need to run your tests off a local build of Jest. See [the
Jest
CONTRIBUTING.md](https://github.com/facebook/jest/blob/master/CONTRIBUTING.md)
for information on how to test using a local build.
