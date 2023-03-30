---
title: Vim for mathematicians
subtitle: Writing latex can be much faster
date: 2022-05-28 21h37min
categories: vim
---
# A word of warning

Perhaps the most debatable part of this article is which text editor to use, there are several other very efficient text editor such as [atom](https://atom.io/), [overleaf](https://www.overleaf.com/), [eMacs](https://www.gnu.org/software/emacs/) (which is way more than a text editor). All of these have premium features, such as git integration, either out of the box or via some plugin. 

# vim: What does it try to solve?

Writing code, even if it is just latex, involve a lot of repetition. For
instance, we often take time to write long commands that not only become
difficult to read, but also take a awful long time to write. One can define
their own commands in latex to reduce the burden, but often you might not agree
with your co-authors in which is the best version of said commands and that just
becomes a nuisance. 

Before I explain how vim works, I will explain how it doesn't.
works. You know how in Microsoft word (and most other text editors)
- You can always move by using the arrow keys or the mouse 
- You can always insert text by pressing any character 
- You can always either arrow+Shift keys or drag the mouse to select text.
- You can always click on the menus at the top to invoke a special function
  
Well, vim has a different approach to it. Instead, you have normal, insert,
visual and commands modes to do these tasks to do these tasks respectively.
You can go from a mode to another by certain combinations of key presses. For
instance, if you are in normal mode, you can enter insert mode by pressing the
key "i" and you can return to the normal mode by pressing the Esc key.

# vim: Why should you care?

The quick answer is: vim let's you automatize a lot of the boring parts of
writing latex files. Let's just give a few examples.

This separation into modes I mention in the previous section might seen like
madness at first. But the idea is to use the keyboard more effectively. Because
each key behaves in a different way depending in the mode you are on. For
instance, in insert mode, pressing the key "i" will insert the character "i" in
your file. But in normal mode, this puts you in insert mode instead. 

And why is this any more effective? When you are in normal mode, which could be
read as "movement mode" as well, this means that your whole keyboard to do other
things rather then insert. For example:
1. Go from moving around in the file (say go to to the next paragraph,
or to the location of the last error that appeared during latex compilation) 
2. Make bulk changes in your file (like turn
the current paragraph in your latex file into a comment). 

Maybe you are not convinced yet. Here is the thing, vim lets you change the
behaviour of absolutely any of its default actions when pressing a key of
combination of keys or to define any new combinations. This means you can make
the whole program behave exactly like you want! Either by using its basic
version, by changing some presets yourself or by adding some plugins you can
make it do very specific behaviour in situations that you face hundreds of times
when writing latex.

Here are few example, specially when working of rough drafts of files, I use a
lot of the ```align*``` environment in latex, with as many lines as possible so it is
easy for me to review later. I changed the default behaviour of my vim to
whenever I am in a situation like this

```
\begin{align*}
	a 
&=
	a-b+b | <------- CURSOR RIGHT HERE
\end{align*}
```
if I press the ```Y``` i.e ```Shift+y```, my vim will automatically copy the contents of
the last line of the align* environment and copy it bellow. That is, the content
of the file not becomes this:
```
\begin{align*}
	a 
&=
	a-b+b
\\&=
	a-b+b | <------- CURSOR RIGHT HERE
\end{align*}
```
Notice that it even knows that you now need a \\ at the beginning of the  new
line.

This seems useless, but when each line of latex is composed by multiple lines of
integrals and other things, this is much quicker than either holding down shift
and moving around, copying and pasting making the new changes and repeating the
exact same procedure. This can be done without the help of any plugins.

But plugins can indeed be super useful, for instance with the plugin [vimtex](https://github.com/lervag/vimtex),
vim becomes a latex powerhouse. For instance it know when your cursor is inside
a line of text or in a line of math display and it can behave differently
depending on the circunstantes. Together with another plugin called [UltiSnips](https://github.com/sirver/UltiSnips),
whenever I am not in a math environment, if I press tab mid-word (in insert mode)
vim will auto complete the word I am currently writing based on both the
dictionary and on previous words I used in that file. For example, it completes
```
[...] Four| <------- CURSOR RIGHT HERE
```
to 
```
[...] Fourier |<------- CURSOR RIGHT HERE.
```
However, if I am in insert mode, whenever I press tab mid-word inside of a math
environment, vim will behave differently depending of what the word is. For
instance:
1. If the word is a single letter (or the code for a Greek letter such as
   ```\alpha, \beta``` ) vim knows I like it to be a function, so it add the
   parenthesis and moves my cursor to where the parameter goes. I.e, if before
   pressing tab, I had
	```
	f| <------- CURSOR RIGHT HERE
	```
	vim changes it to 
	```
	f(|)	    CURSOR IN BETWEEN THE PARENTHESIS HERE
	```
	same for
	```
	\alpha| <------- CURSOR RIGHT HERE
	```
	vim changes it to 
	```
	\alpha(|)	    CURSOR IN BETWEEN THE PARENTHESIS HERE
	```
2. If the word is more than one letter long (and it is not a Greek letter), vim
   assumes it is a latex command, and it adds a backslash at the beginning of
   it. So for instance
	```
	bar| <------- CURSOR RIGHT HERE
	```
	goes to
	```
	\bar| <------- CURSOR RIGHT HERE
	```
	after pressing tab.
3. And if I press tab again, the previous code now becomes 
	```
	\bar{|}      CURSOR IN BETWEEN THE BRACKETS
	```
	so that vim knows that it is a command that needs a argument.

And many other more specific examples. Those are very easy to customize and they
are great for making exactly the features that YOU want in your text editor,
instead of hoping that one day it would be added.

Finally, vim's search and replace accepts regular expressions.  To be fair this
is fairly standard but people don't seem to use them as often as they could.
What this means is that maybe you are searching for all the instances of $$a^2_n$$
because you realised your are using $$a$$ for another quantity as well, and you
would like to substitute it for $$b^2_n$$,  but how do you know whether you wrote
```a_n^2,{a_n}^2,a^{2}_n,a_n^{2}``` and so on? With regular expressions you can search for
something line ```(a^\{?2\}?_\{?n\}?|\{?a_\{?n\}?\}?^\{?2\}?)```  which looks horrid (but
so did ```\int_{0}^{a+\theta} f(\omega)d\omega``` the first time you wrote it) and
now you have all the 16 versions at once!

# Vim: References and tutorials
- [Vim tutor](https://www.systutorials.com/vim-tutorial-beginners-vimtutor/) -
  the oficial tutorial for vim.
- [Vim adventures](https://vim-adventures.com/) - an adventure game that helps
  you getting used to vim commands.
	- Once you are used to them, you can try [vim
	  Golf](https://www.vimgolf.com/). Where you are asked to change a file from
	  state to another in the minimal amount of key strokes.
- [Missing Semester](https://missing.csail.mit.edu/2020/editors/), as mentioned
  before, of introductory lectures that explain from the theory to a simple
  tutorial of how to use vim. I do recommend it!
- [Talk: Learning vim in a
  week](https://www.youtube.com/watch?v=_NUO4JEtkDw&list=PL8tzorAO7s0jy7DQ3Q0FwF3BnXGQnDirs&index=16&ab_channel=thoughtbot)
  a talk on how to not lose too much time getting used to vim, but just going
  straight into work.
- [Gilles Castel website](https://castel.dev/) is also a mathematician,
  currently on his PhD. He is very skilled with the command line and does a lot
  of scripts to also deal with latex files. Definitely a source of inspiration
  for this blog.

