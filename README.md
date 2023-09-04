# Basic TypeScript Tutorial
>TypeScript is a syntactic superset of JavaScript which adds static typing.

## Data Types
- `boolean`
- `number` (Whole numbers and floating point values)
- `string`
- `bigint` (Whole numbers and floating point values, but allows larger negative and positive numbers than the `number` type.)
- `symbol` (To create a globally unique identifier)
- `any` (A special type that disables type checking and effectively allows all types to be used)
- `unknown` (A safer alternative to `any`)
- `never` (Effectively throws an error whenever it is defined)
- `undefined` & `null` (These special types refer to the JavaScript primitives `undefined` and `null` respectively.)

## Basic Commands

### How to install `TypeScript`
- `npm install typescript --save-dev`
  - The compiler is installed in the `node_modules` directory and can be run with: `npx tsc`
- `npm i -g typescript`
  - The compiler is available globally, so `npx` is not necessary

### How to initialize a TypeScript project
- `tsc --init`
- This command will generate a `tsconfig.json` file

### How to use `tsc` to compile a file
- `tsc index.ts`

### How to use `node` cli to run js file
- `node index`

