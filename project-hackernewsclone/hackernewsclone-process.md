# Making a Clone of Hacker NewsAPI

## Project Overview

In order to utilize my new JavaScript skills and keep my HTML and CSS from getting stale, I undertook a side project of making a clone of Hacker News (which I called *Nosey News*) using an API. I started out with a basic version, using NewsAPI.org. For this one, I stuck with a very minimal approach, building off of a lesson from Bloc. I basically wanted to get something working so I could then play around with styling using the JS `then` promise code and CSS.

Later, I will move on to an advanced version, implementing more complex techniques.

## The Basic Version

As a web development student at Bloc, I did an exercise to code a JS fetch to take the News API data and return a `ul` of articles as `li`s. I basically expanded upon this idea while styling it in my own way.

My fetch started out pretty simple. First, I set my URL, using News API combined with a CORS work-around url.

```
let url=("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=8e635c537e7c4f3aa9a2074285e29875");
```
I declared my fetch function, passing my url as an argument, and using a `then` statement to return the JSON (JavaScript Object Notation) data from the server.
```
fetch(url)
  .then(r => {
    return r.json();
  })
```
A `catch` is always needed to handle errors in the response from the server, whether it's a "404: Page Not Found" error or a "501: Internal Server Error". `e` represents the event of the error.

```
.catch(e => {
  console.log(`Error: ${e}`);
});
```
Next, I needed to add another `then` statement to tell the browser how to handle the incoming JSON data.  
```
  .then(data => {
    let articles = data.articles;
    let newsList = document.createElement("ul");
    let body = document.querySelector("body");
    body.appendChild(newsList);
    articles.map(item => {
      let newsItem = document.createElement("li");
      newsItem.innerHTML = '<a href="' + item.url + '"<h3>' + item.title + '</h3></a><p>' + item.content + '</p>';
      newsList.appendChild(newsItem);
    });
  })
```
 `articles` is the name of the array of articles supplied by the News API, which is actually a property of the data object received from the server ([view example response data](https://newsapi.org/s/hacker-news-api)). The array of articles is accessed by dot notation - `data.articles`.

> Continue explaining my current JS promise code

```
let url=("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=8e635c537e7c4f3aa9a2074285e29875");

fetch(url)
  .then(r => {
    return r.json();
  })

  .then(data => {
    let articles = data.articles;
    let newsList = document.createElement("ul");
    let body = document.querySelector("body");
    body.appendChild(newsList);
    articles.map(item => {
      let newsItem = document.createElement("li");
      let newsPreview = document.createElement("p");
      let newsLink = document.createElement("p");
      newsLink.setAttribute("class", "readmore");
      newsItem.innerHTML = '<div class="title"><h3>' + item.title + '</h3></div>';
      newsPreview.innerHTML = item.content;
      newsLink.innerHTML = '<a href="' + item.url + '">Read More →</a>'
      newsList.appendChild(newsItem);
      newsItem.appendChild(newsPreview);
      newsPreview.appendChild(newsLink);
    });
  })

  .catch(e => {
    console.log(`Error: ${e}`);
  });
  ```

I would like to add:

- published date (`publishedAt": "2018-11-03T21:59:12Z",`)
- background image
- change color scheme to match background image (varying .title colors, transparent gray item.content color)
- add some kind of navigation?

## The Advanced Version

This will happen as I learn more things! I would like to implement the following:

- color coded based on subject ("As a user, I would like article headings to be color coded based on subject so I can easily spot the topics that interest me")
- filter based on subject ("As a user, I would like to be able to filter the results based on subject so I can easily find the topics that interest me")
- authentication integration of some sort ("As a user, I would like the convenience of logging in with an account I already have so I do not have to remember another password")
- maybe pull in related images, like Google News does ("As a project owner, I would like eye-catching images to be featured with articles to increase click rates")
- add search algorithm ("As a user, I would like to be able to search for articles with the keywords I am interested in")
