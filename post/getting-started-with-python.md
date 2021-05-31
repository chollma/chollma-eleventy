---
title: Getting Started with Python
desc: Whether you're a software engineer, data scientist, or someone who wants to make tedious tasks easy, Python might be the programming language you've been dreaming of.
canonical: https://cooperhollmaier.com/post/getting-started-with-python/
date: 2020-09-11
---

<span class="firstcharacter">W</span>hether you're a software engineer, data scientist, or someone who wants to make tedious tasks easy, [Python](https://www.python.org/) might be the programming language you've been dreaming of. I recently started playing around with Python and I have to say that I'm impressed. It's easy to get rolling (especially if you're on a Mac) and I am amazed by all the things Python can help me do.

In the paragraphs to follow, we'll walk through setting up the Python Integrated Development Environment (IDE) on your computer, what the IDE offers us as new developers, and introduce some programming lingo you will need to be familiar with.

**Note:** the simple program we'll build in the [next article](https://cooperhollmaier.com/article/build-a-simple-program) can make it very easy to extract content from a webpage. It is important to be "good citizens of the web" and parse only information that we own or have permission to access.

Now that we've considered the ethics, let's unpack all the goodness Python has to offer.

## Installing Python

Before we start writing code, it is important to pick a good text editor. We'll use this editor to write instructions that computers can understand. If you don't have a favorite editor yet, that's okay. Python's out-of-the-box editor is very easy to master. If you want to try out a 3rd-party solution, I've found [PyCharm](https://www.jetbrains.com/pycharm/download) or [Visual Studio Code](https://code.visualstudio.com/download) to be pretty good, too.

One of the reasons I love working in Python is because of how straight forward it can be for a first time programmer.

**If you're on a Mac:**  
Check out the [Mac OS X downloads section](https://www.python.org/downloads/mac-osx/). You'll want to download the most current version of Python. At the time of this writing, we're on version 3.7.9\. The type of download you are looking for is the "macOS 64-bit installer".

**If you're on a PC:**  
Check out the [Windows downloads section](https://www.python.org/downloads/windows/). The file you want to download is the "x86 executable installer"

**If you're running a different operating system:**  
Don't worry. There's a [downloads section](https://www.python.org/download/other/) for you too.

Once you've downloaded the latest version of Python for your system, open and run the file. The installer should walk you through all the steps to get Python running on your computer.

## The Moving Parts

The software you've installed on your computer is what's called an Integrated Development Environment or IDE. This is a set of tools that make a developer's job easier. In our case, the Python IDE comes with 2 different tools - an interactive shell and a file editor. We'll be using both to build program in the next article.

### The Integrated Development Environment

#### The Interactive Shell

Think of this kind of like a calculator. You can punch stuff in and get back a response. The interactive shell will allow you to run code that you write, 1 item at a time. This shell is also where you'll be able to see the outputs from the program that we'll be building.

The shell is great for doing simple operations but likely the work you're hoping to make easier is a little more complex. For most applications of Python, we'll use the file editor. This way, we can write out long instructions once and let the shell do the heavy lifting for us.

#### The File Editor

A file editor is a tool we can use to create entire programs for the Python Shell to run. We will use the file editor to build our program so that we can save our file and run it versus entering our instructions line-by-line. You can create a new program by selecting "File" and then "New File"

## The Key Principles

Now that we have a blank file in front of us, it's time to start putting our ideas on paper. Before we do that, though, we'll want to understand some of the building blocks available to us in Python.

Every programming language has a "syntax". This is a set of words, phrases, and symbols that provide specific instructions to the computer. This is how a computer can process the things we give them and return our desired result. One of the best things about Python is that it's syntax is pretty simple. We won't need to end each line of code with a semi-colon or a closing bracket like other languages.

I've listed some terms below you should know as you're building your own program in the next article. In the future, I'd recommend reviewing the [full vocabulary](https://docs.python.org/3/reference/index.html).

### Syntax to Know

#### Dictionaries

When we are working with large amounts of data, we need a container to store things in. We also need a way to locate and access individual items later.

Dictionaries in Python work like how they did in your high school English class. A dictionary is a data structure that contains an unordered list of values. We can access the data in this dictionary by referring to it's "key".

In the example below, the key for the string, "seattle" is "word".

#### Else if statements

Abbreviated as "elif" in our code, this statement allows us to test if a condition is true or false when there are many cases possible.

Look at the example below. If the variable, "name" does not equal "sonya", the first block of code won't run and the program moves to the second condition. We'll use these many times in our program.

#### If statements

If statements are a little bit less complex than else if statements. With these, there is only **one** case we're evaluating.

In the example below, if the variable "age" is greater than 30, nothing prints out, and the program exits.

#### Import()

Sometimes, someone has already developed an elegant solution to a problem so we don't have to.

The import statement at the beginning of a program allows us to pull in what's called a "library". This adds more functionality that we want to use later in the program.

#### Input()

What if we want to collect information from a user to use in our program? The input function allows us to do this. In the example below, we've used it to collect a user's age and assign it to the "age" variable.

#### Len()

This one is pretty straight forward. The length function returns the number of items in the object it's called on. For example, if I call it on a string of text (below), it will return the number of characters (with spaces) of that string.

#### Libraries

Libraries are common in any programming language. These are reusable snippets of code that we'll use to perform complex actions. Other developers have built out useful code that has many uses and that we can apply to our problem.

We'll use two different libraries in our program: [Requests](https://requests.readthedocs.io/en/master/) and [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

#### Lower()

One of the downsides of taking user input is that the user could use capitalization. This can break your program if you haven't accounted for this. We'll use the lower method to lowercase all our user input. This way, we don't have to worry about it later.

#### Print()

This method prints data or a message to the screen. When we use this method in our program, it'll display our text in the interactive shell.

#### Str()

Sometimes it's easier to work with information if we turn it into a string of text. This is especially true when we want to parse HTML and search that HTML for something. We'll use the string method to turn data into strings of text.

## Doing Something Useful

Now that you've completed the steps above to get the Python IDE installed on your machine, and you're familiar with some of the moving parts, let's use the methods, functions, and libraries we've learned to build something useful that will help you in your everyday job.

We're going to [build a tool](https://cooperhollmaier.com/article/build-a-simple-program) to request a webpage and determine if the data returned to us meets a set of requirements we set.
