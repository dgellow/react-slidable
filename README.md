# react-slidable

## Usage

Install `react-slidable` from npm

```
npm install react-slidable
```

In your javascript, require `react-slidable` and render a `Slidable` component

```javascript
var React = require('react'),
    Slidable = require('react-slidable');

React.render(
    <Slidable>
        <div class="slide">
            <h1>1. A title</h1>
            <p>Some text</p>
        </div>
        <div class="slide">
            <h1>2. Another title</h1>
            <p>Another text</p>
        </div>
    </Slidable>,
    document.body
);
```

Add `slidable.css` in your <head>

```html
<head>
    <title>...</title>
    <link rel="stylesheet" type="text/css"
          href="node_modules/react-slidable/lib/slidable.css">
</head>
```

## Dev

Clone the repo

```
git clone git@github.com:dgellow/react-slidable.git
cd react-slidable
```

Install dependencies

```
npm install
```

Build JSX

```
npm run build
```

or

```
npm run watch
```

Build and run examples

```
npm run examples
```

## Author

Samuel El-Borai aka dgellow, http://webp.ch
