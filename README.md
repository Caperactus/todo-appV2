# 🥸 My React 101⚛
I recommend learning React after knowing:

- Basic Command line 
- HTML
- CSS
- JavaScript

Once you feel confident about your knowleadge in those topics, you can start learning React.

> I personally study duting 1 year html, css and Javascript before starting with React.
#### 📚 Resources
I'm using **Vite** to set the development enviroment of the project, to start a porject with *Vite* :
1. Run in the command line: ``npm create vite@latest`` and follow the instructions.

Of course I recommend having the documentation open in a browser to search for anything when needed, this time I'm using typescript so don't forget to include it: 
- [React ⚛️](https://react.dev/learn)
- [Vite ⚡️](https://vitejs.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Sass](https://sass-lang.com/documentation/)

#### 🤓 Learning process
I'll be pointing some topics with their respective link to the documentation, so be sure you head to them when you don't understand the code written.

## 😵‍💫 Let's start
For someone that is not familiar with React yet, React is a way to develop more complex web sites in a structured manner, because you have to see your website as a Lego, you will have multiple pieces, some would look similar, some would be bigger, some will have the same form but with different color. When you see your website like that is not hard to understand a component.

### 🏗 [Components](https://react.dev/learn#components)
 > A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

 In the next code you will see two components written in React, we define components using functions and naming them in *PascalCase* with the first letter capitalized.

 These components will be HTML elements later, and the structure is defined in the return. The first component will be a button, nothing strange there, right?.

~~~
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
~~~

### ✍🏼 [JSX](https://react.dev/learn#writing-markup-with-jsx)

JSX is this syntax you see that looks like HTML but it isn't , as you already should know HTML think about JSX as a cousin language with some new features and a language that live and interact actively with JavaScript in the same file.

You will notice the differences between them in the process as we see how it works, so don't worry about it, I'll be sure to point out what's important to keep in mind.

Continuing with the above code, the second component (**MyApp**) return a div[^1] with two "tags" inside, the first one is an H1 element and the second one is a component, the one defined above, as you see, here is the first difference between HTML and JSX: components can be nested, you just have to wrap the name of the component in **<"NameHere"/>** so what will be there is the button tag defined in the first component.


[^1]: Component can only return a single tag, so if you want to send multiple siblings, you can wrap them in one tag or an empty one (<>`code`</>) also known as fragment.

---

### [👀 Sass](https://sass-lang.com/guide) 

In this project, I will be using Sass instead of Css so let's dedicate a section to understand Sass.

#### [📦 Variables](https://sass-lang.com/documentation/variables)

- To define variables you need: 'name', 'value' and '$'.
- Variables have global and local scope as Js variables.
- To use variables use the '$' and the 'name'.
- Variable's value can be reassigned.

```
$base-color: #c6538c;//---Variable definition
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;//---Variable used
}
```
#### [🪣 Nesting](https://www.w3schools.com/sass/sass_nesting.php)
This is one of the most useful advantages that Sass provides, and it's really simple, it just means that you can stylize a selector inside a parent style block, this will look similar to HTML structure:
```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

#### [🗄 Modules](https://sass-lang.com/documentation/at-rules/use)

Modules in Sass work as modules in Js, at least in the function it provides. This will help us to maintain the styles oredered in different files with the possibility to call a module (aka partial) into any other sheetstyles.

- The at-rule "@use" is used to call a module.
- When a module is used, it will include the styles generated by that file.
- We can also access to the variables and mixins from the module used with a syntax like "object.properties" where the object is the "module" and the "property" is the name of the variable(with the "$") or the name of the mixin.
- We can rename a module when is imported using "as" to define how we want to reffer to the module.
- We can define private members (variables, mixins or functions) adding a "-" or a "_" at the start of the name.
```
// src/_corners.scss
$-radius: 3px;

@mixin rounded {
  border-radius: $-radius;
}
```
```
// style.scss
@use "src/corners";

.button {
  @include corners.rounded;

  // This is an error! $-radius isn't visible outside of `_corners.scss`.
  padding: 5px + corners.$-radius;
}
```
##### Partials

> As a convention, Sass files that are only meant to be loaded as modules, not compiled on their own, begin with _ (as in _code.scss). These are called partials, and they tell Sass tools not to try to compile those files on their own. You can leave off the _ when importing a partial.

#### [@mixin & @include](https://sass-lang.com/documentation/at-rules/mixin)

For me is easy to understand mixins by comparing them with interfaces in Typescript or classes in JavaScript. The main idea is that mixins are structures that we define as a template or as a package to include in our styles.

- Mixins are defined with the at-rule "@mixin" followed by the name of the mixin which we'll need to use.

- Mixins can have defined values, default values or values passed as arguments.

```
SCSS SYNTAX
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```
```
//CSS translation
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```
- A mixin can include another mixins into their structure.
- Arguments can be passed with its value name, this is useful when the mixin have multiple optional arguments:

```
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.avatar {
  @include square(100px, $radius: 4px);
}
```
**Sass have some pretty interesting features to do advanced style configuration like cicles, rest args, functions or conditionals.**
```
@mixin order($height, $selectors...) {
  @for $i from 0 to length($selectors) {
    #{nth($selectors, $i + 1)} {
      position: absolute;
      height: $height;
      margin-top: $i * $height;
    }
  }
}

@include order(150px, "input.name", "input.address", "input.zip");

```
>  A mixin can declare that it takes a content block by including the **@content** at-rule in its body. The content block is passed in using curly braces like any other block in Sass, and it’s injected in place of the @content rule.

```
@mixin hover {
  &:not([disabled]):hover {
    @content;
  }
}

.button {
  border: 1px solid black;
  @include hover {
    border-width: 2px;
  }
}
```
#### [🖇 Inheritance](https://sass-lang.com/documentation/at-rules/extend)
As working with classes, Sass let us extend the styles definded in another block.

> Extends and mixins are both ways of encapsulating and re-using styles in Sass, which naturally raises the question of when to use which one. Mixins are obviously necessary when you need to configure the styles using arguments, but what if they’re just a chunk of styles?

> As a rule of thumb, extends are the best option when you’re expressing a relationship between semantic classes (or other semantic selectors). Because an element with class .error--serious is an error, it makes sense for it to extend .error. But for non-semantic collections of styles, writing a mixin can avoid cascade headaches and make it easier to configure down the line.

```
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```
#### [📌 Parent Selector](https://sass-lang.com/documentation/style-rules/parent-selector)

Parent selector **"&"** is used in nested styles to refer to the outer selector. See the code above where "**&--serious**"  will be translated as **.error--serious** since *.error* is the "parent" selector of the *&* selector.

```
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```
In the above example the selectors using **&** will be translated to CSS as:

- .accordion__copy
- .accordion__copy--open

The nested level of this selectors don't represent the HTML hierarchy as it may be the case in other nested selectors.

### [Sass files Structure](https://dev.to/dostonnabotov/a-modern-sass-folder-structure-330f)

I found this method called 7-1 which seems to be well received by the community so I'll be using it, if you want to try another method to organize your project files is up to you.

**If you want to know more about Sass I encourage you to read the documentation and explore the different functionalities that this preprocessor offers to us.**