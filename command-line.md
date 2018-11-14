# How to Use the Command Line to Feel Like a Hacker

Movies like *The Matrix* have made looking at the code behind the glossy, user-friendly face of computers cool. The fist time I learned how to open a file on my computer by typing a few commands, I felt like I could control the Matrix like Neo. Look out, Mr. Smiths of the world!

(image: "I know Kungfu")

In reality, I typed maybe three words to open a file I could have just double clicked on instead. Was it worth it? I think so, and I continue to find an excuse to use the command prompt. If you agree, here is a quick tutorial on navigating your computer with the command prompt. You don't need to know much to feel like a hacker!

## Accessing the Command Prompt

If you are using a Mac computer, the best way to access the command line is to open the program called "Terminal". Windows computers do have a native "Command Prompt" program, however I will be using Unix/Linux commands, which will not work in the "Command Prompt" app. I currently use and recommend installing [Git Bash](https://medium.com/@srimoyeebhattacharyya/getting-started-with-git-bash-6dc73a4c8bc2) to use Unix/Linux commands on a Windows computer.

## Navigating with Commands

The command prompt will look like this upon first launch:

(image1)

The ~ symbol means that you are currently located in the root folder of your computer. If you type in the command pwd and hit enter, this will provide a bit more information by listing the file path to your current location.

(image2)

Now I can see that my root folder is located at /c/Users/linds. You can navigate to this using your File Explorer to get a visual of what folder or **directory** is currently in focus.

Where should I navigate to next? When moving through folders in the command line, you can either go up, into a parent folder, or down, into a nested folder. The command to go up is cd .. (.. represents the parent directory). The command to go down is cd *name-of-folder*.

Since I am currently located in the root ~ folder, I can only go down. However, in order to navigate down into another folder, I need to know a name to include with my command. Let's take a look at my options by typing ls, which will list out all the folders and files contained in my current location, the root directory.

(image3)

It's a pretty long list! I have a lot of options for where to go next. My folders are purple, followed by a back slash /, and my files are blue. I think I'll go to my Documents folder to see what's there, so I need to:
1. Use cd documents to move to that directory
2. Use ls to list the contents of that directory

(image4)

Looks like there's a file named hello.txt, which I have conveniently prepared to use in this example. To open this file, I can use the command start *name-of-file*

(image5)

This automatically opened the file in the default program for handling .txt files. Feel like a hacker yet?

## More Fun Tricks

We can also rename, move, and delete items using the command line.

**To Rename**: mv *old-file-name* *new-file-name*

**To Move**: mv *file-name* *new-file-path*

**To Delete**: rm *file/folder-name*

**To Make a File**: touch *new-file-name*

**To Make a Folder**: mkdir *new-folder-name*

Now you know enough to feel like a real hacker! These are very simple tricks, but ones any level of computer nerd can try out and have a little fun with. Checkout these articles for more ideas on what to do with the command prompt next. 

https://medium.com/the-code-review/top-10-bash-file-system-commands-you-cant-live-without-4cd937bd7df1
https://www.mediacollege.com/linux/command/linux-command.html
https://medium.freecodecamp.org/conquering-the-command-line-f85f5e46c07c
