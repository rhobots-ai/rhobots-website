---
category: layout
---

The route shell. Renders `NavbarLanding`, the active route via react-router's `<Outlet/>`, and `FooterLanding`. Every route in the app is nested under it.

```jsx
<Routes>
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
  </Route>
</Routes>
```
