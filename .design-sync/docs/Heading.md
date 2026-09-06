---
category: primitives
---

Sentence-case, medium-weight headings — levels 1-4. Deliberately no uppercase, italic, heavy weight or negative tracking. `as` overrides the tag without changing the visual level.

Note: it applies `text-on-surface`, which wins over any plain `text-*` class you pass. On a dark surface (`Section tone="inverse"`) force the colour: `className="!text-inverse-on-surface"`.

```jsx
<Heading level={1}>Enterprise AI that works with what you have</Heading>
<Heading level={3} as="p">Visually a level 3, semantically a paragraph</Heading>
```
