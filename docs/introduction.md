# About

Storefront UI is customization-first and elegant
UI framework for eCommerce (and not only)
based on Vue.js and
[Google Retail UX Playbook](https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf).

## Current state of the project

**StorefrontUI is currently in ALPHA which means
it is not suitable for production!
Expect things to be broken and APIs to possibly change. See roadmap section below for details**


## How to test StorefrontUI?

**Right now StorefrontUI is working only with Nuxt and Vue CLI!**

- Add the package:

```bash
npm install --save @storefrontui/vue
```

- Import stylesheets in App.vue or main.js:

```scss
import "@storefrontui/vue/dist/css/all.scss";
```

- It's done! Now you can import and use any of the components:

```js
import SfComponentName from "@storefrontui/vue/dist/SfComponentName.vue"
```

- You can find detailed information about every component inside each components
[stories](http://storybook.storefrontui.io/)



## How to customize?

StorefrontUI components can be customized in many ways:

- Global customization through SCSS variables
- Standard component customization with filling the props
- Replacement of default HTML with slots
- Heavy customization with usage of HTML, CSS and JS partials

You can find [detailed customization info here](customization.md).

## Join us!

StorefrontUI is a completely new approach for component libraries oriented
around customization possibilities instead of out of the box possibilities.
It's a great goal but it will take a lot of time to achieve it only by ourselves.
The project is open source and free to use.

If you'd like to support us and join the team please write to me:
**filip [at] vuestorefront.io** ;)

# Roadmap 

- Category page components (April) - Done
- Product Page components (May) (alpha release)
- Homepage, form elements and a11y (June) 
- Last polishments and focus on documentation (June/July) (beta release)

Want to help and make it even faster? Grab an issue and become part of our amazing community ;)

## Useful links

- [StorefrontUI Github](https://github.com/Divanteltd/storefront-ui)
- [Contribution guide](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md)
- [Storybook docs](https://storybook.js.org/docs/basics/introduction/)
