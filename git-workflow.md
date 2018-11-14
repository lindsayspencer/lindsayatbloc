# Git Workflow

At my first coding job, I managed 100+ pages of HTML, CSS, JS, and ASP for 2 years. To save my work in case I needed to roll back an update, I kept three USB drives: one I updated weekly, one I updated monthly, and one I updated 6 biyearly. I know, laugh away. This was not the best system, but it was all I could think to do at the time. Today, I avoid can ensure every file and code change is saved using Git.   
Using Git is practically necessary these days to track changes in your code and allow teams to collaborate seamlessly. It is a virtual assistant that exists to keep your work organized and under control. If you're new to Git, here is an overview of how to use it in your next project.

## How It Works

Git is a version control software, which basically means it is a program that helps track the various changes and "versions" of your code throughout a project. The command line is used to access the Git software and tell it what to do. You may want to read my article on (getting started with the command line) if it is new territory for you.

When Git starts tracking a certain project, a **repository** is made for all the information it records. A repository will contain **commits** and **branches**.

A commit is a snapshot of the code at the time of saving (called "committing") to the Git repository. It also contains any notes from the developer detailing what was done since the last commit. Because Git tracks all of this information, you can easily see each stage of the project files as they were built by looking through the commits made during the project.

The branches of a repository will include a master branch (the live code) as well as other branches cloned from the master. While the master branch is automatically created when initializing a repository, you can create cloned branches at any time, In these cloned branches, changes can be made and tested without affecting the master branch. A cloned branch can be merged with the master once the code is tested and accurate.

Commits allow developers to track the history of a project, while branches make it possible to work on files without changing the originals until they are tested. And all of this is meticulously tracked and preserved by Git in the project's repository.


## Setting Up a Repository




A **local repository** is saved locally on your computer, while a **remote repository** is saved externally, such as on a site like Github. Saving a repository remotely ensures the information is backed up in case something happens to your local device, and it makes the repository files available from anywhere. You can view your own project on any computer, or clone it to another device and keep working on it locally.  

## Using Branches
## Keeping It Clean
