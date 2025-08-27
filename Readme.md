1.Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
Answer:
  *getElementById: selects 1 element by its id & returns a single element.

  *getElementsByClassName: selects all elements with a given class. Returns a HTMLCollection like Array.

   *querySelector/querySelectorAll: selects elements using any CSS selector. querySelector returns the first match element & querySelectorAll returns all matches elements like an Array.


2.How to create and insert a new element into the DOM
Answer: 
   To create and insert a new element into the DOM, first create the element using document.createElement. Then set its content using innerHTML. Finally, insert it into the DOM by using methods append. This allows you to dynamically add elements without writing them directly in HTML.


3.What is Event Bubbling and how does it work?
Answer: 
   Event bubbling is a JavaScript DOM event propagation mechanism where, after an event occurs on an element, it travels up the DOM tree through its parent and ancestor elements to the root of the document. Instead of the event only being handled by the element that was directly interacted with, other elements higher in the hierarchy can also receive and respond to that event as it bubbles up.


4.What is Event Delegation in JavaScript? Why is it useful?
Answer:
   Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of your code, especially when dealing with dynamic content or a large number of elements. By leveraging event bubbling, you can reduce the number of event listeners and streamline your code.


5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:
   preventDefault() stops the default action of an event (like following a link or submitting a form), while stopPropagation() stops the event from bubbling up to parent elements, preventing other event handlers from being triggered.