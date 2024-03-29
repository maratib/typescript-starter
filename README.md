# Typescript starter with TSUP, TSX and MOCHA testing enabled

You can develop typescript based NPM packages using this starter.
It enables testing, building and packaging your code as NPM package pretty easy.

### Setup

```bash
yarn init -y
yarn add -D typescript tsx mocha @types/mocha chai @types/chai tsup
tsc --init
```

### Local testing of NPM package

```bash
# Run the following command at root of your package
npm link

# Create another test project and link the npm package locally with
npm link name-of-package #in this case npm link typescript-starter

# To unlink
npm unlink name-of-package

```

### Publishing your package to NPM

```bash
npm login
npm publish
```

### References

[Mocha for TypeScript Testing](https://www.testim.io/blog/mocha-for-typescript-testing/)
