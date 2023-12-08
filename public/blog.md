Starter

````markdown
```
src/
├── components/
│   ├── ui/
│   │   ├── button
│   │   ├── header
│   │   ├── footer
│   │   ├── card
│   │   ├── toast
│   │   └── modal
│   ├── post-list/
│   │   ├── post.tsx
│   │   ├── post.test.tsx
│   │   ├── post-list.tsx
│   │   └── post-list.test.tsx
│   └── edit-post/
│       ├── add-post.tsx
│       ├── add-post.test.tsx
│       ├── update-post.tsx
│       └── update-post.test.tsx
├── hooks/
│   ├── use-toast.tsx
│   └── use-modal.tsx
└── context/
    └── dark-mode.context.ts

```
````

Simplest form

````markdown
```
src/
├── components/
│   ├── ui
│   ├── post-list
│   └── edit-post
├── hooks
└── contexts
```
````

### Growth patter

````markdown
```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── modal.tsx
│   └── post-form/
│       ├── post-form.tsx
│       └── post-form.test.tsx
├── hooks/
│   ├── use-toast.tsx
│   └── use-modal.tsx
├── contexts/
│   └── dark-mode.context.ts
└── pages/
    ├── create-post.tsx
    ├── home/
    │   ├── home-page.tsx
    │   └── post-list/
    │       ├── post-item.tsx
    │       ├── post-item.test.tsx
    │       ├── post-list.tsx
    │       └── post-list.test.tsx
    ├── terms
    ├── privacy-policy
    ├── cookie-policy
    ├── login
    └── profile
```
````

simplest growth pattern

````markdown
```
src/
├── components
├── hooks
└── pages/
    ├── home-page
    ├── terms
    ├── privacy
    ├── cookie-policy
    └── login
```
````

Omittting context , hooks handle this by itself

### Enterprize

this is the first things I have ever since created in my history
