---
title: Git for mathematicians
subtitle: A better way to collaborate and keep track of your latex files
date: 2022-05-28 19h49min
categories: Git
---

# Git: What does it try to solve?
Most times I am collaborating with other researchers, we end up using Dropbox to
keep the updated version of the article. More often than not, we both have
copies of these same Dropbox folders somewhere else in our computers just to
avoid conflicts or lose a previous version of our files (I know that one can see
files from up to 30 days old on the website, or even more with the premium
features, but I don't find those particularly convenient). This can get clunky
and often leads to dozens of different files with slightly different names. 
Even worse if you are sending versions back and forth by email. 

There are other software that deal with this very same problem, they are usually
called "version control systems". The most famous one is called git, no, not
github (github is a provider, much like gmail and email are not the same thing,
but very related). Git was created by Linus Torvalds, the person behind the
origin of Linux. He developed it when dealing with Linux development, which as
an open source project, had to deal with several other people collaborating
in the same code.

# Git: Why should you care?

First, git will only sync when you ask it to. This sounds inconvenient, but it
means that you are not caught by surprise when it changes. Second, you can put
it anywhere you want in your computer and you tell it exactly what files you
want synced, therefore you don't get the rubbish like .aux, .log files if you
compile your latex in the same folder. Third, it actually keeps copies of every
past version you asked it to remember in your computer. This might sound
inefficient for memory of the computer, but if you only ask it to remember the
.tex files and not the .pdf files, it really doesn't take a lot of memory. In
fact, it does more than that! It let's you create branches so you have parallel
versions of that same file. All with a robust way of navigating between all such
branches. 

Let's try to give an example. Suppose you finished the proof of your main
result, but now you think you found a better proof that would require some
substantial rewriting of the paper. But maybe you are not sure yet, so you don't
want to completely scrap the previous version.  You can tell git to "create a
new branch", and you can edit your .tex files (or any other files tracked by
git) freely without worrying about destroying your previous work. At the end,
you may think that either the proof should be implemented or not, at which point
you can tell git to merge these two versions into a single one, or just
ignore/delete the new one. One could always manually keep track of several
different files manually, but this can get messy. And it can become very tricky
to backtrack your steps. By letting git take care of that, you don't need to
worry about it and you can concentrate only on the article writing itself.

Two things that really help organising are: whenever you make a commit i.e, you
tell git to keep a new version, you are prompted to enter a quick message
telling what you have done to the file. Even just a few words on every commit
can make the process of looking at previous versions much easier. The second
nice feature is that git let's you see every single difference in the code, much
like [latex diff](https://ctan.org/pkg/latexdiff), line by line, highlighted so
it is easy to see! Long gone the days manually trying to spot exactly what your
collaborators changed in between version v-01-02-17.tex and v-01-02-22.tex.

I should mention that beside the command line/terminal, there are several
programs that let you use git in a more "graphical" way, including
[atom](https://atom.io/)'s integration with git,
[sourcetree](https://www.sourcetreeapp.com/) and [github
desktop](https://atom.io/). I use the plugin
[vim-fugitive](https://github.com/tpope/vim-fugitive) to deal with git. I think
any of these solutions do a good job nowadays.

# Git: References and Tutorials
- [Missing semester](https://missing.csail.mit.edu/2020/version-control/) - a
  site I will reference often for other topics. Here, they offer a 85' talk
  about version control from theoretical to practical. They also offer a
  comprehensive. If you are confused about how do deal with the shell/terminal,
  do take a look at their first lecture, which I will talk about later on.
- [Git, the simple guide](https://rogerdudler.github.io/git-guide/) the absolute
  opposite of the previous item. This is a quick reference list that I always
  come back to with only the basics.
	- [Oh shit, git](https://ohshitgit.com/) In a very similar style to the
	  previous item, but focusing on how to clean up your mistakes in git.
- [Youtube playlist: coding train - git for poets](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV&ab_channel=TheCodingTrain)
  a series of short videos introducing different aspects of git part by part.
  Very friendly even if you never used the command line.
- [Book: Pro git](https://git-scm.com/book/en/v2): If you want to know git in a
  lot of detail, might be the way to go. But you do not need to go that deep on
  your first trial.



