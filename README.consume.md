# Summary

[This is an executive summary of why this component exists and what it does.]

To contribute to the development of this component, see guidance on [contributing](README.contribute.md).

# Installation

This project supports versions of [Node.js](https://nodejs.org) and the npm client in your development toolchain that are 
in Active LTS (Long Term Support) by the Node.js Release Working Group.

Install and save in your package.json:

    npm install @pearson-components/[component-name] --save

## External Dependencies

React and ReactDOM are external dependencies required to use this component. They are npm-installable or available from 
a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

## Cross-browser Compatibility

The [Polyfill.io](https://cdn.polyfill.io/v2/docs/examples) service is recommended for consuming this component with 
cross-browser support:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
```

The CustomEvent polyfill is for Internet Explorer, and the Intl.js polyfill is for Safari. As you support more languages,
add them to the list of features requested.

If your browser already supports a feature, this service automatically optimizes and does not download unnecessary code.

# How to Consume in an Application

See the /demo directory for example usage.
    
    [CONFIG INFO GOES HERE]
