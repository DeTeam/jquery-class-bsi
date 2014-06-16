# jQuery

Welcome!

From the previous sessions we will need:

* Variables
* Functions
* Basic types (bool, numbers, strings)
* Objects

## Events

Obvious: click, mouse scroll, mouse moving over a given element, key down, key up, etc.
Less obvious (user-less): page loaded, async request events (AJAX), CSS3 animation/transitions events

We can get notified when events occur.

```javascript
document.body.addEventListener('click', function() {
  alert('User clicked somewhere on the page');
});
```

`.addEventListener` — is a function inside `document.body` object.
All Elements on the page have it.

However it's not always like that. In IE6:

```javascript
document.body.attachEvent('onclick', function() {
    alert('User clicked somewhere on the page');
});

```

Now we have browser-specific API (interface, code look, function names and so on).

If we build a rich web-application or website with lots of events, we may write something like:

```javascript
if (document.body.addEventListener) {
    document.body.addEventListener('click', function() {
      alert('User clicked somewhere on the page');
    });
} else if (document.body.attachEvent) {
    document.body.attachEvent('onclick', function() {
        alert('User clicked somewhere on the page');
    });
}
```

Terrible!

## Selecting elements

Long time ago it was like that:

```html
var interestingElement = document.body.firstChild.firstChild.nextSibling;
```

or

```html
var interestingElement = document.body.getElementById('interesting-element');
```

So, we have a bunch of methods like that:

```
getElementById
getElementsByTagName
getElementsByName
getElementsByClassName
```


Not bad, but not handy when need something complex: `Find all disabled the checkboxes with class "green" inside any form with class "subscribe"`.

*Try to do it yourself with the methods mentioned above*.

But what if we could use CSS selectors to get elements? In modern browsers there is such feature:

```javascript
document.querySelector(); // will return null or first matching element
document.querySelectorAll(); // will return a list of matching elements (could me an empty list!)
```

http://caniuse.com/queryselector — IE support it only from IE8 version.

## Welcome jQuery

http://jquery.com/ — is a library which provide consistent way of working with mentioned features. It was started in 2005 by this guy http://ejohn.org/about/ John Resig. Guess one of his goals was make web-development more pleasant :)

```javascript
var interestingElements = $('form.subscribe inputy:checkbox:disabled.green'); // now it's more then trivial
```

jQuery consist of different parts, it might be useful to explore come corners by your own. Currently project is lead by the jQuery Foundation, they provided lots of tutorials, docs, API references to get in touch.

Just to mention few:

* http://learn.jquery.com/
* http://try.jquery.com/

We will value the following parts of jQuery:

* Core
* Selectors
* Events
* Animations
* Plugins
* Ajax

### Basics

jQuery is a library, which provides only one external variable: `jQuery` or it's alias `$` ().
This `dollar` is everything we will use.
We can use it as a function `$('.blog-post')` or as an object `$.get('/the-url')`.

* Try to run: `$ === jQuery` in your dev tools console. If it's evaluates to `true`, then it's the same object.`

### Selectors

Selectors allows us to quickly get a bunch of elements we're interested in (like in the example with checkboxes).
jQuery selecots works on top of library called Sizzle (http://sizzlejs.com/) which provide a speedy way to find matching elements.
We can use all the css selectors, plus a bunch of cool things like `:not(:disabled)`, `:empty`, etc.


### Events

When it comes to events jQuery is very handy (especially when you need support for old browsers):

```javascript
$('.post').click(function() {
    alert('Hey');
});
```

It will work cross-browser.

### Animations

Sometimes we need complex animations (one animation starting after another with two other fired in between).
jQuery allowed us to do this things before CSS3 animations and transitioned were implemented:

```javascript
$('.post').animate({
    backgroundColor: 'red',
    opacity: 0.5
});
```

`.animate` can take several properies (an object, describing final values of different css properties, duration and easing function): http://easings.net/



## Summary

Some useful links:

* http://jquery.com/
* http://jqueryui.com/
* + all of the subdomains of jquery.com website (docs, try-site, learn, etc.)
* http://visionmedia.github.io/move.js/ — run CSS3 animations from javascript
* http://www.lokeshdhakar.com/projects/lightbox2/?u=9

Email: timur.deteam@gmail.com
Twitter: @TimurAmirov 

