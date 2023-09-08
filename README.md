# remixer-smoother
Remix.run framework crash course

```
? Which Stack do you want? (Learn more about these stacks: 
'https://remix.run/stacks') 
❯ Blues 
  Indie 
  Grunge 
```

Remix Stacks is a feature of the Remix CLI that allows you to generate a Remix project

### What is hydration?

Hydration is the process of using client-side JavaScript to add application state and interactivity to server-rendered HTML.

#### On-demand hydration
[useShouldHydrate](https://github.com/sergiodxa/remix-utils#useshouldhydrate) hook

If you are building  a Remix application where most routes are static, and you want to avoid loading client-side JavaScript, you can use this hook, plus some conventions, to detect if one or more active routes needs JS and only render the Scripts component in that case

