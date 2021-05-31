---
title: Building a Simple Program
desc: Now let's put some of the building blocks we learned together and solve a real problem with a program we'll write below.
canonical: https://cooperhollmaier.com/post/building-a-simple-program/
date: 2020-09-12
---

This article is the sequel to [Getting Started with Python.](https://cooperhollmaier.com/article/getting-started-python)

<span class="firstcharacter">A</span>ssuming you read the article above, you should now understand how to install the latest version of Python on your computer. You should also have some basic knowledge about how an Integrated Development Environment (IDE) works. Now let's put some of the building blocks we learned together and solve a real problem with a program we'll write below.

Let's get started.

## Documentation

Every time I'm working on a new project, I like to document what I'm doing and why I'm doing it. This helps me organize my thoughts as I'm building and provides a helpful reference to look back at it later. Though it seems like unnecessary work, you'll thank yourself when you're building the next cool thing and some of your ideas are already on the page.

### Why are we building this?

This blog doesn't use a content management system (CMS). I write every post in HTML by hand. This gets tedious and as you imagine is prone to my own human error. My goal is to write an application using Python that will request a website, parse its HTML source code, and run a series of tests against it. While I could review my code by hand, developing a Python application to do it for me will make the process faster.

### What technology are we using?

We're going to use the out-of-the-box Python IDE (v.3.7.9). We'll be writing a series of instructions via the File Editor that will run in the Python Shell. The language has some built-in functions but we'll also make use of some libraries — [Requests](https://requests.readthedocs.io/en/master/) and [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/). These will make our work easier and result in fewer lines of code.

### What was the thought process?

Building each blog post on this website is a very manual process. Every time I want to publish a new post, I build the page from scratch using HTML and CSS.

To ensure I have all the boilerplate elements that I need (navigation, name, date, h1, etc.), I have to review the code I've written line-by-line. I want to automate this process so that I can spend more time writing and less time checking.

### What did we learn?

It's okay to get your ideas down in code and then refactor.

I built the original version of this program with a couple hundred more lines of messy code. The version we'll build in this article is only 33\. Then, I discovered dictionaries and it made this the code cleaner to read, and easier to work with.

## Setting Up the File

Now that we've spent some time documenting our process and thinking about our goal, let's get down to coding.

The first thing that we're going to need to do is to open up the Python Shell and create a new file in the File Editor. This will open up a blank file editor window where we are going to write our first Python application.

We're going to start off our file with two import statements. These will bring in the libraries we need to request a webpage from a server and parse its HTML source code.

You might notice that if you try and save and run this program now, it won't work. This is because we haven't installed the libraries on your machine. Let's do that now.

**If you're on a Mac:**

**If you're on Windows:**

- Open up Command Prompt
- Type "cd C:\Program Files (x86)\Python37-32\Scripts" and press Enter
- Type "pip install requests" and press Enter
- Once the requests library is installed, let's install Beautiful Soup
- Type "pip install bs4" and press Enter
- Once the installation finishes, we can go back to the file editor.

Now that we've got the libraries we'll need for our project installed, let's add a few more lines to the top of the file. These don't do anything meaningful and are cosmetic.

One more quick addition and we'll start parsing some code on the web page of our choice. Let's add a variable called "url" that we'll pass user input to. This will allow us to change the URL we're testing every time we run the program.

If you're following along, your program should now look like this:

## Parsing the Document

So far in our program, we've told the computer:

- we'd like to import and use two libraries (Requests and Beautiful Soup)
- we'd like to print out some introductory statements to help the user know the program is running
- we'd like to prompt the user for a URL, which we'll assign as a string to a variable, "url"

Now, let's create a variable to store the page we're requesting with the Requests library and a variable to store our parsed HTML from Beautiful Soup. I decided to name these in an obvious fashion but feel free to pick the names that bring you joy.

It'd be silly if we stopped here. If you wanted to look at the source code of a particular webpage, you could have gotten this far with your browser. You didn't need to do all this work in Python.

If you've gotten this far, I assume that you're looking to parse a webpage for _specific elements_. Let's set-up the next part of the program to allow you to parse to your heart's desire. We'll be building a dictionary with all the things you want to find.

Let's define a few simple dictionary definitions. If you add a print statement to the end of your program and run it, here's what you should get.

### Code

### Output

If your program is functioning the same way as mine is, you've done it! You've created your first functional program with Python. It takes a URL, executes an HTTP request, parses the HTML that comes back and prints out the HTTP response code and the title of the page.

If you're like me though, you've seen the possibilities and now you're hungry for more. The reason I dreamed up this program was to look at a page on this blog and make sure that it met my own quality guidelines. Let's define some conditions that we want to be true and then build some tests in Python to check if they are on our test page.

## Running the Tests

### Define the Requirements

1.  A page should return a 200 response code
2.  A page should have a title and it should only exist once in the code

### Write the Code

Before we build a test, it's important that we have all the information in the format we need it in. The response code is easy, because this is a simple response from a server, not present in the source code of the page.

The title tag is a bit trickier. We want to find every title tag in the code, count the number that we found, and then assuming there is only one, print it out. To do this, we're going to use the find_all() method. This will search the entire parsed HTML for the title element and return the results in what's called a "result set" (this is like an array).

Notice when you run the program now, the title tag element is surrounded by square brackets. If there are two title elements on a page, you'll see both appear here, separated by a comma.

Now that the data we want to analyze is coming back in a helpful format, let's write some tests.

Notice the test I've created above. We know that response codes fall into five distinct families (1xx, 2xx, 3xx, 4xx, 5xx). We also know that the value returned by requests will be a number. Using this information, we can define the case we want, any possible other scenarios, and a fallback case if our cases don't match anything.

- If the HTTP status is 200, "Okay" is printed to the shell
- If the page we provide is redirected, "Redirected" will print to the shell
- If we enter an invalid URL or the page returns a 404, "Not found" will be printed to the shell
- If the HTTP response is out of the bounds above, "Error" will print to the shell.

Try this out with a few different URLs that you know should be redirected or return a 404 error. Did our program work?

Our second set of requirements dealt with the title tag. We want to make sure there is at least one title for the page. Also, if there is a title, we want to make sure it's the only title.

So there you have it, now you have a working program that will test your requirements (in this case for the HTTP response and the title tag element).

## Interpretting the Results

Let's take this one step further. Now you have a program that you can use to check your code against a set of rules. But once the results are printed, what if you want to know what triggered the logic one way or the other. We could print out the dictionary using a print statement, but with a lot of rules in the queue, this could look messy.

Let's use some logic to print out the data we used to check our code.

Using a for statement, we can iterate through each key and value pair in our dictionary and print out the data. Using "\n" adds a new line after each time through the loop.

## Homework

I challenge to build upon this code and build something that's useful for your daily life. It doesn't have to be response codes and page titles.

It could be other elements that are on your pages. If you end up with something cool, I'd be excited to see what you came up with.
