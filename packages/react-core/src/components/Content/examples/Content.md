---
id: Content
section: components
cssPrefix: pf-v5-c-content
propComponents: ['ContentWrapper', 'Content', 'ContentList', 'ContentListItem']
---

The `<Content>` component provides simple, built-in styling for putting common blocks of HTML elements together. It establishes the block of content and styling within it for the elements listed in the `component` property (`h1` through `h6`, `p`, `a`, `small`, `blockquote`, and `pre`), as well as the content component suite `<ContentList>`, and `<ContentListItem>`.

`ContentWrapper` may be used as a container for the content components, but nesting them inside `<ContentWrapper>` is not required. `ContentWrapper` provides styling for plain HTML elements nested inside it. For example, instead of using `<Content component="h1">`, you can wrap an `h1` element with the `<ContentWrapper>`.

You cannot nest other components within `<Content>`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `<Content>` component's properties to achieve the same results.

For example, rather than nesting the `<List>` and `<Title>` components within `<Content>`, you should pass `component="h1"` into the `<ContentList>` and `<Content>` components. Similarly, when you need to add a divider, rather than passing in a separate `<Divider>` component, you should utilize the `component="hr"` property that `<Content>` supports, which will be styled as a divider.

## Examples

### Headings

```ts file="./ContentHeadings.tsx"

```

### Body

```ts file="./ContentBody.tsx"

```

### Unordered list

```ts file="./ContentUnorderedList.tsx"

```

### Ordered list

```ts file="./ContentOrderedList.tsx"

```

### Plain list

```ts file="./ContentPlainList.tsx"

```

### Description list

```ts file="./ContentDescriptionList.tsx"

```

Content components such as Content, ContentList, ContentListItem can be placed within a ContentWrapper to provide styling for html elements, and additional styling options applied to the children.

### Wrapped in ContentWrapper

```ts file="./ContentWrapperWrapped.tsx"

```

### Link and visited link

```ts file="./ContentVisited.tsx"

```
