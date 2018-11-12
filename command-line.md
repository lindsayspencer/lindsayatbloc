# How to Use the Command Line to Feel Like a Hacker

Movies like *The Matrix* have made looking at the code behind the glossy, user-friendly face of computers cool. The fist time I learned how to open a file on my computer by typing a few commands, I felt like Trinity in that first scene. Look out, Mr. Smiths of the world!

In reality, I typed maybe three words to open a file I could have just double clicked on instead. Was it worth it? I think so, and I continue to find an excuse to use the command prompt. If you agree, here is a quick tutorial on navigating your computer with the command prompt. You don't need to know much to feel like a hacker!

## Accessing the Command Prompt

If you are using a Mac computer, the best way to access the command line is to open the program called "Terminal". Windows computers do have a native "Command Prompt" program, however I will be using Unix/Linux commands, which will not work in the "Command Prompt" app. I currently use and recommend installing [Git Bash](https://medium.com/@srimoyeebhattacharyya/getting-started-with-git-bash-6dc73a4c8bc2) to use Unix/Linux commands on a Windows computer.

## Moving Through Folders & Opening Files

The command prompt will look like this upon first launch:

(image1)

The ~ symbol means that you are currently located in the root folder of your computer. If you type in the command `pwd` and hit enter, this will provide a bit more information by listing the file path to your current location.

(image2)

Now I can see that my root folder is located at /c/Users/linds. You can navigate to this using your File Explorer to get a visual of what folder or **directory** is currently in focus.

Where should I navigate to next? When moving through folders in the command line, you can either go up, into a parent folder, or down, into a nested folder. Since I am currently located in the root ~ folder, I can only go down. However, in order to navigate down into another folder, I need to know a name to include it with my command. Let's take a look at my options by typing ls, which will list out all the folders and files contained in my current location, the root directory.

(image3)

It's a pretty long list! I have a lot of options for where to go next. My folders are purple, followed by a back slash /, and my files are blue.  

## Creating & Renaming Folders & Files
