Cookie Monster, GitHub edition
==============================

This is an **unofficial** GitHub mirror of [flyingkumquat's official PasteBin](http://pastebin.com/2KRNm8Gm).

Cookie Monster is a JavaScript add-on that can be loaded into Cookie Clicker. This add-on is for displaying calculated data to help make purchasing that next Building or Upgrade a bit easier to decide.  
If you want to read up on it, more documentation is available on the [Cookie Clicker Wiki](http://cookieclicker.wikia.com/wiki/Cookie_Monster_(JavaScript_Add-on\)).

The wiki also has instructions on how to install the script.  I've included several versions of those install scripts 
in this repo, or you can simply follow the instructions on the wiki, but replace the PasteBin URL 
(`http://pastebin.com/raw.php?i=2KRNm8Gm&`) with the following URL to this repo: `https://raw.github.com/cincodenada/Cookie-Monster/master/core.js.min`

I'll gladly take pull requests here, and do my best to pull in changes from the pastebin as I notice them.  This repo
will also include my own improvements, although I'll try to keep the original version in the `flyingkumquat` branch.

I'm not sure what minifier was used on the original code, the closest result I've found was at [javascript-minifier.com](http://javascript-minifier.com),
which helpfully has an API but unhelpfully doesn't mention any engine or code that I can find.  I've included Douglas Crockford's jsmin in the minifiers/
directory as well, with a bash script to call it.  You'll have to compile it yourself if you want to use it, but it should be a pretty straightforward compile.
