# An Intro to Git

"Git" started with Git! (Apologies for the pun, couldn't help myself.)

I got my intro to coding by managing a library's website for two years. To save my work in case I needed to roll back an update, I kept three USB drives: one I updated weekly, one I updated monthly, and one I updated biyearly. I wasn't a developer, I was a librarian at a public library system - I didn't know any better! This method saved me a few times, but now I can ensure every file and code change is saved using Git.   

Git is practically necessary these days to track changes in your code and allow teams to collaborate seamlessly. It is a virtual assistant that exists to keep your work organized and under control. If you're new to Git, here is an overview of how to use it in your next project!

## How It Works

Git is a version control software, which basically means it is a program that helps track the various changes and "versions" of your code throughout a project. The command line is used to access the Git software and tell it what to do. You may want to read my article on getting started with the command line(https://medium.com/datadriveninvestor/how-to-use-the-command-line-to-feel-like-a-hacker-e3c5e9f9eee6) if this is new territory for you.

When Git starts tracking a certain project, a **repository** is made for all the information it records. To add info to the repository, you create a **commit**.

A commit is a snapshot of the code at the time of saving (called "committing") to the Git repository. It also contains any notes from the developer detailing what was done since the last commit. Because Git tracks all of this information, you can easily see each stage of the project files as they were built by looking through the commits made during the project.

// The branches of a repository will include a master branch (the live code) as well as other branches cloned from the master. While the master branch is automatically created when initializing a repository, you can create cloned branches at any time, In these cloned branches, changes can be made and tested without affecting the master branch. A cloned branch can be merged with the master once the code is tested and accurate.

// Commits allow developers to track the history of a project, while branches make it possible to work on files without changing the originals until they are tested. And all of this is meticulously tracked and preserved by Git in the project's repository.


## Basic Commands

So you've created a root folder for your new project, and you want to track it with Git. What do you do now?

### git init

To start tracking a project with Git:
1. Open the command prompt
2. Navigate to the root file of your project
3. Enter the command git init

As soon as you enter git init (init for "initialize"), a hidden .git directory is created in your project files. This is where all the repository information gets saved. Other Git commands can be used to access this information, so you don't have to go to .git directly.

(img git1)

### git status

You've created a couple of initial files for your project

(img git3)

### git add

Using git add on a file means you are staging it to be committed to the Git repository.


### git commit


### git status

Let's say you're ready to wrap up this project for the day, but you cannot remember if you've saved everything to Git. In this case, you can rely on the command git status. git status tells you exactly what to do next. Did you forget to add something? It will tell you what files and/or folders you need to stage for a commit. Have a few staged files that haven't yet been committed to the repository? It will let you know.  

(img git3)


## Viewing History


### git log

Ready to see everything that you've worked on?

### git checkout *commit-id*

To return to the current state of your project, use the command git checkout master (assuming you are working on the master branch)

// A **local repository** is saved locally on your computer, while a **remote repository** is saved externally, such as on a site like Github. Saving a repository remotely ensures the information is backed up in case something happens to your local device, and it makes the repository files available from anywhere. You can view your own project on any computer, or clone it to another device and keep working on it locally.  

## Using Branches


## Keeping It Clean
