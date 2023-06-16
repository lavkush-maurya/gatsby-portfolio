---
title: Axios-fetching Blog with Night mode
stack: ReactJs
slug: axios-fetching-blog
liveSite: https://blogpagal.web.app/
date: 2023-03-05T00:00:00+00:00
thumb: ../images/thumbs/Blog-API.png
featuredImg: ../images/featured/blog-banner.png
---

### Axios-fetching-blog

To begin, you'll need to choose a front-end framework such as React, Vue.js, or Angular. For this example, we'll use React. Set up a new React project using Create React App or your preferred boilerplate tool.

Next, style your blog using CSS or a CSS preprocessor like Sass or Less. Create two separate stylesheets—one for the day mode and one for the night mode. These stylesheets will define the visual appearance of your blog in different lighting conditions.

Set up routing within your React app using a library like React Router. This allows users to navigate between different pages or blog posts seamlessly.

To handle API calls, install Axios, a JavaScript library that simplifies making HTTP requests. Axios will be used to fetch blog posts or other content from your server.

Create a reusable component in React to display your blog posts. This component will receive the data fetched from the server via Axios and dynamically render it on the page.

Now it's time to implement the night mode feature. Add a toggle button or switch in your UI that allows users to switch between day and night modes. When the user activates the night mode, update the CSS classes or theme dynamically to switch to the appropriate stylesheet with dark colors and styles.

To remember the user's preference for night mode, you can use the browser's local storage or session storage. Whenever the user switches modes, save their preference in storage, and retrieve it when the page loads. This way, the blog will load in the user's preferred mode automatically.

Ensure that your night mode feature is accessible to all users. Consider providing alternative color schemes or options for users with visual impairments. Accessibility should be a key consideration in designing and implementing the night mode feature.

Finally, deploy your blog to a web server or a platform like Netlify, Vercel, or GitHub Pages. Test your blog thoroughly in different browsers and devices to ensure compatibility and functionality.

By following these steps, you'll be able to create an Axios-fetching blog with a night mode feature using React or any other front-end framework of your choice. Remember to adapt these instructions based on your specific requirements and technologies used.
