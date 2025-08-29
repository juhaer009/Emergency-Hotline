1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
document.getElementById("id")

    Selects one single element by its unique id.

    Returns the element directly (or null if not found).

document.getElementsByClassName("className")

    Selects all elements with that class.

    Returns a live HTMLCollection (auto-updates if DOM changes).

    Not an array, but you can loop through it.

document.querySelector("css-selector")

    Selects the first element that matches a CSS selector (e.g. .class, #id, div > p).

    Very flexible since you can use any valid CSS selector.

document.querySelectorAll("css-selector")

    Selects all elements that match the CSS selector.

    Returns a static NodeList (does not auto-update if DOM changes).

    You can loop with forEach.

2. How do you **create and insert a new element into the DOM**?
Ans:
document.createElement("tag") to create an element. To set its content or attributes we need .textContent, .className, .setAttribute. Finally, to insert it into the DOM .appendChild(), .prepend(), .innerText etc.

3. What is **Event Bubbling** and how does it work?
Ans:
Event Bubbling means when an event occurs on an element, it first runs on that element, then "bubbles up" through its parent elements, all the way up to document. For example, If you click a button inside a <div>, the event fires on the button first, then on the <div>, then <body>, then document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where you add one event listener to a parent element, and handle events for all its child elements inside that listener. It works because of event bubbling. 
It is useful because, it saves memory (fewer listeners), automatically works for dynamically added elements, produces cleaner code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault() stops the browser’s default action. Whereas, stopPropagation() stop the event from bubbling up.


