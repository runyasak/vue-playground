# Event Handlers

The directive `v-on` listens to DOM events and execute a handler when that events are triggered.

To use this directive just type `v-on:<event>="<handler>"`. This code execute `<handler>` when `<event>` occurs. The same code can be written as `@<event>="<handler>"`, that is `v-on:` is the same as `@`.

## Example 1

There are two buttons that execute handlers when clicked (`@click`). The first adds one to `nClicks` (attribute from data property) value: `nCLicks++` . The second resets `nClicks` value to zero: `nClicks = 0`.

- events
  - `click`
- handlers
  - `nClicks++`
  - `nClicks = 0`

## Event Modifiers

To call `event.preventDefault()` or `event.stopPropagation()` you just need to insert postfixes direct on directive like: `v-on:click.stop` calls `event.stopPropagation()`.

You can also chain modifiers: `v-on:click.stop.prevent` calls `event.preventDefault()` and `event.stopPropagation()`.

List of event modifiers for `v-on`:

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

## Example 2

When a handler logic is more complex you can write a method on `methods` Vue property and puts it as attribute on `v-on` directive, like in this example.

When the input is selected and the enter is pressed (`@keydown.enter`), the `submitName` method is executed, changing the `userName` (attribute from data property) value to the value inserted on input.

- events
  - `@keydown.enter`
- handlers
  - `submitName`

## Key Modifiers

The Vue directive `v-on`  can also listen to keyboard events, like in example 2: `@keydown.<key>` or `@keyup.<key>`

Vue provides aliases for the most commonly key codes:

- `.enter`
- `.tab`
- `.delete`
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`
- `.ctrl`
- `.alt`
- `.shift`
- `.meta`