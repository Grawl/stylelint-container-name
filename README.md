# stylelint-container-name

[![Npm version](https://img.shields.io/npm/v/stylelint-container-name.svg)](https://www.npmjs.com/package/stylelint-container-name)

Stylelint rule for [`container-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name) property

## Installation

`.stylelintrc`:

```json
{
  "plugins": [
    "stylelint-container-name"
  ],
  "rules": {
    "stylelint-container-name/container-name": true
  }
}
```

By default, the rule will require `container-name` if `container-type` is specified, so

**Invalid CSS**:

```css
.anonymous {
	container-type: inline-size;
}
```

```
 1:1  ✖  must specify 'container-name' property at '.anonymous' stylelint-container-name/container-name
```

**Valid CSS**:

```css
.named {
	container-name: card;
	container-type: inline-size;
}
```

## Options

If you want to disallow `container-name` usage, you can configure like this:

```
"stylelint-container-name/container-name": { "mode": "block" }
```

```
 2:2  ✖  must not specify container-name  stylelint-container-name/container-name
```

But you can just use Stylelint built-in [`property-disallowed-list`](https://stylelint.io/user-guide/rules/property-disallowed-list) rule.

---

Options are provided by [`stylelint-rule-creator`](https://www.npmjs.com/package/stylelint-rule-creator):

```ts
boolean | {
    mode: DefaultOptionMode
    fileExceptions?: string[]
    lineExceptions?: string[]
}
```

The `DefaultOptionMode` is `"off" | "require" | "block"`, and `require` is default mode.

## Contributing

1. Fork source repository
2. Clone it to your computer
3. `npm install`
4. Change `src/index.ts` and/or `test/test.css`
5. Transpile TypeScript to JavaScript so Stylelint can use this rule: `npm run build`
6. Check it live at `npm run stylelint`

## TODO

- [x] Require or disallow `container-name` property
- [ ] Require or disallow name for `@container` at-rule
