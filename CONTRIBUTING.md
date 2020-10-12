[EN](CONTRIBUTING.md) | [ES](CONTRIBUTING_es.md) | [BM](CONTRIBUTING_bm.md)
# Contributing

After you clone the project please install dependencies.

```
$ npm install
```

Next, you can run development by `serve` command.

```
$ npm run serve
```

You can add your topic lesson by adding folder with files in `src/views/` that specified on structure tree below:

```
HelloWorld
│   code.js
│   index.vue
│   README.md
```

* `code.js`: Code that you want to preview with export string.
* `index.vue`: The example result that you want to display.
* `README.md`: The description for topic as markdown.

Then, adding route of you topic in `src/router.js`.

```javascript
{
  path: '/hello-world',
  name: 'HelloWorld',
  meta: { title: 'Hello World!' }
}
```

* `name`: The name of your folder.
* `title`: The text that would be display in navigation.

Finally, please make a pull request and target to `master` branch.

# Feature Requests

Ideas and feedbacks are welcome. Please, create an issue with some explanations of your ideas. Your issues will be merit and priceless for developers in the future.
