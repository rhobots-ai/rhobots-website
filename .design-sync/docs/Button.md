---
category: primitives
---

The one button. `variant` carries the emphasis, `size` the scale. Renders a react-router `<Link>` when given `to`, an `<a>` when given `href`, otherwise a `<button>`.

```jsx
<Button variant="primary" to="/demo">Request a demo</Button>
<Button variant="secondary" href="https://docs.example.com">Read the docs</Button>
<Button variant="ghost" onClick={reset}>Clear</Button>
```
