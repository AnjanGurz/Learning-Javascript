
//Notes Dom -> 


/*

-> Dom represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document (e.g., an element, attribute, or text).

-> Nodes:
Nodes are the basic units in the DOM tree. They can be elements, text, or attributes.

Example:

<p>This is a <strong>paragraph</strong>.</p>

    <p> and <strong> are element nodes.
    "This is a" and "paragraph" are text nodes.
    Attributes like class or id (if present) are attribute nodes.


-> Elements:

Elements represent HTML tags.

Example:

<div id="myDiv" class="container"></div>

    <div> is an element with id and class attributes.


-> Attributes:

Attributes provide additional information about elements.

Example:

<img src="image.jpg" alt="An image">

    src and alt are attributes of the <img> element.


-> Selecting Elements

* document.getElementById(id)
    Selects a single element by its ID.

* document.getElementsByClassName(class)
    Selects all elements with the specified class.

* document.getElementsByTagName(tag)
    Selects all elements with the specified tag.

* document.querySelector(selector)
    Selects the first element that matches the CSS selector.

* document.querySelectorAll(selector)
    Selects all elements that match the CSS selector. here we get the node list -> Loop through NodeLists using forEach, for, or for...of to manipulate multiple elements.

    NodeList is similar to an array, but there are some key differences:

Similarities to Arrays

    Index-Based Access: You can access elements in a NodeList using an index, just like an array.
    Length Property: NodeList has a length property that indicates the number of nodes in the list.

Differences from Arrays

    Not All Array Methods: A NodeList does not support all array methods directly. For example, methods like map, filter, and reduce are not available on a NodeList.
    Type: A NodeList is an object, not an actual array. It has a NodeList prototype, not an Array prototype.



    -----Key Takeaways

    Use querySelector for selecting a single element and querySelectorAll for selecting multiple elements.
    Loop through NodeLists using forEach, for, or for...of to manipulate multiple elements.
    Understand how to select, manipulate, and handle events in the DOM to create dynamic and interactive web pages.


-> innerText, textContent, and innerHTML

    innerText: Gets or sets the visible text content of an element.
    textContent: Gets or sets all the text content of an element, including hidden text.
    innerHTML: Gets or sets the HTML content of an element, including its descendants.


-> manpulating element by names

    When you retrieve elements from the DOM using methods like getElementsByTagName or getElementsByClassName, you get back an HTMLCollection. Unlike arrays, HTMLCollection objects are live and don't support all array methods directly. To manipulate them easily with array methods like forEach, map, 
    filter, etc., you should convert them into an array.

How to Convert HTMLCollection to Array:

You can convert an HTMLCollection to an array using Array.from() or by using the spread syntax ([...htmlCollection]). Here’s how you can do it:

    Using Array.from():

javascript

const paras = document.getElementsByTagName('p'); // HTMLCollection
const paraArray = Array.from(paras); // Convert HTMLCollection to array

paraArray.forEach((p) => {
    // Manipulate each <p> element here
    console.log(p.textContent);
});



*/