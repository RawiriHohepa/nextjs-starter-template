This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Notes

### Routing
[Tutorial Section](https://nextjs.org/learn/basics/navigate-between-pages)
- routing is automatic based on the ``pages/`` directory e.g.
  - ``pages/index.js`` is associated with ``/``
  - ``pages/posts/first-post.js`` is associated with ``/posts/first-post``
- ``Link`` components use the route associated with the desired page
  - similar to react-router-dom but with ``href`` prop instead of ``to`` and with ``a`` child
  - ``Link`` is preferred to ``a``
    - doesn't refresh the whole browser when moving between pages
    - prefetches next page (might not prefetch if redirecting with ``Redirect`` equivalent)
    - when styling links, style the nested ``a`` child rather than the ``Link`` component

### Images
[Tutorial Section](https://nextjs.org/learn/basics/assets-metadata-css)
- Could render static images using ``img``, but would have to worry about:
  - Ensuring image is responsive on different screen sizes
  - Optimizing images with third-party tool or library
  - Only loading images when they enter the viewport
- Can use ``Image`` instead
  - Has support for [WebP format](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp)
  - Can serve smaller images to devices w/ small viewports (e.g. phones)
  - Can automatically adopt future image standards
  - Images lazy loaded by default
  - Images optimized on demand, even if hosted by external source like CMS
  - Rendered in ways that limit [CLS](https://web.dev/cls/)

### Metadata
[Tutorial Section](https://nextjs.org/learn/basics/assets-metadata-css/metadata)
- ``Head`` component allows editing of ``head`` contents like ``title``
- Can customize the ``html`` tag by creating a ``pages/_document.js`` file ([docs](https://nextjs.org/docs/advanced-features/custom-document))
- Can add 3rd party JS with the ``Script`` component (outside of ``Head``)
  - Can lazy load during browser idle time
  - Can run JS code after successful loading

### CSS
[Tutorial Section](https://nextjs.org/learn/basics/assets-metadata-css/css-styling)
- Example used [styled-jsx](https://github.com/vercel/styled-jsx) on ``pages/index.js`` (check initial commit)
- Example uses [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) for ``components/layout.js`` and ``styles/utils.module.css``
- Can use [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) too (no built-in support tho)
- Can import global styling into ``pages/_app.js``
  - ``pages/_app.js`` is the top-level component for **ALL PAGES**, so importing CSS here will apply it to all pages
  - Can't global import anywhere else since it would unintentionally affect other pages when navigating
- [Styling Tips](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)

### Data Fetching
[Tutorial Section](https://nextjs.org/learn/basics/data-fetching)
- [getStaticProps Details](https://nextjs.org/learn/basics/data-fetching/getstaticprops-details)
  - Can fetch from external API
  - Can make DB queries directly since getStaticProps is only run on server-side
  - In dev, getStaticProps runs on every request. In prod, only runs at build time
  - Can only export from a page (stored in ``pages/``)
  - If can't pre-render page ahead of user request, use [Server-side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) or skip pre-rendering
- [getServerSideProps or Client-side rendering](https://nextjs.org/learn/basics/data-fetching/request-time)
  - if fetching data on client-side, recommended to use [SWR](https://swr.vercel.app/)

### Dynamic Routes
[Tutorial Section](https://nextjs.org/learn/basics/dynamic-routes)
- To make dynamic routes, name the page with square brackets around the path variable
  - e.g. for ``/posts/<id>`` create page called ``[id].js`` in ``pages/posts``
- In dynamic page, export ``getStaticPaths`` that returns a list of possible values for the variable
  - MUST be a list of param objects containing the path variable e.g.<br>
  ```
  [
    {
      params: {
        id: 'ssg-ssr'
      }
    },
    {
      params: {
        id: 'pre-rendering'
      }
    }
  ]
  ```
- The path variable is used in ``getStaticProps``, which is passed a ``params`` object containing the variable e.g. ``params.id``
