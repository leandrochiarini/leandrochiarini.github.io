---
title: A very simple command line interface for today's arXiv entries
date: 2023-03-29 23h37min
categories: python, arXiv
---

# The motivation

As many researcher in mathematics, I open arXiv daily to check on the latest articles on my field. And like many of them, I find arXiv's interface slightly underwhelming. I like to be able to see the abstract and to be able to navigate through those articles a bit faster. 

# The script

There are several projects aiming to improve arXiv's functionality (e.g [arxiv-sanity](https://arxiv-sanity-lite.com/) and [arXivist](https://arxivist.com/)). However, I wanted a bit more of flexibility to be able to integrate to my workflow with (n)vim. So I wrote this [little python script](https://gist.github.com/leandrochiarini/202cd7e5c2d52cb7e2c45e2c9e4431db) that checks on the today's arXiv. 

It uses [fzf](https://github.com/junegunn/fzf) (and its implementation in python ``pyfzf``) to let you select the multiple articles from today's arXiv RSS, read the abstract. You can easily modify the script to change the area you are following.


Once the script is running, enter your query to filter today's article, press `TAB` to select each articles of your interest, then press `ENTER` to open all the selected articles. Besides opening the articles on your browser, the script also saves the information of all articles you opened via this script in a file `~/.arxiv-history`, which I use together with `vim-fzf` and `vim-UltiSnips` for easy reference it in my notes.

% TODO Add reference vim article


# References
% TODO
- [fzf guide]()
- [pyfzf]()
- [UltiSnips]()
