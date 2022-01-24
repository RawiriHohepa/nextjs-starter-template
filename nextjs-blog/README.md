This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Notes

### Routing
- routing is automatic based on the ``/pages`` directory e.g.
  - ``pages/index.js`` is associated with ``/``
  - ``pages/posts/first-post.js`` is associated with ``/posts/first-post``
- ``Link`` components use the route associated with the desired page
  - similar to react-router-dom but with ``href`` prop instead of ``to`` and with ``a`` child
  - ``Link`` is preferred to ``a``
    - doesn't refresh the whole browser when moving between pages
    - prefetches next page (might not prefetch if redirecting with ``Redirect`` equivalent)
