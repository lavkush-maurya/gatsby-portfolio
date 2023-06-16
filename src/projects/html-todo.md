---
title: Html Todo
stack: Html, Css & Javascript
slug: html-todo
liveSite: https://lavkush-maurya.github.io/todo-with-javascript/
date: 2023-03-05T00:00:00+00:00
thumb: ../images/thumbs/TodoHtml.png
featuredImg: ../images/featured/todo-banner.png
---

### Html Todo List

To create a simple HTML todo list, start by setting up the HTML structure with the necessary tags such as **`<html>`**, **`<head>`**, and **`<body>*`**. Within the **`<body>`** tag, create a container **`<div>`** that will hold your todo list.

Inside the container **`<div>`**, add an **`<input>`** element of type "text" to allow users to enter their tasks. Additionally, include a **`<button>`** element that users can click to add the task to the todo list.

To handle user interactions, you'll need to add event handlers in JavaScript. Create an event handler for the button click event, where the function retrieves the text from the input field and performs the necessary actions to add the task to the todo list.

Next, create an unordered list **`(<ul>)`** within the container **`<div>`** to display the todo tasks. Initially, the list will be empty.

In the event handler function, retrieve the text from the input field using JavaScript. Create a new list item **`(<li>)`** element dynamically using JavaScript and set its text to the entered task. Append the list item to the unordered list.

For task completion, consider adding a checkbox or a button next to each task. Implement event handlers to handle the completion of tasks. When a task is marked as complete, update the styling of the list item to reflect its completed state.

Optionally, you can add a delete button next to each task to provide the ability to delete tasks. Implement an event handler for the delete button to remove the corresponding list item from the unordered list.

To enhance the visual appeal of your todo list, apply CSS styling. Define the appearance of the input field, button, list items, and other elements using CSS.

After implementing your todo list, thoroughly test it in different browsers to ensure it functions correctly. Make any necessary refinements to the code or styling based on your testing results.

By following these steps, you'll be able to create a simple HTML todo list that allows users to add tasks, mark them as complete, and potentially delete them. Remember to adapt and expand the implementation based on your specific requirements and additional features you may want to incorporate.
