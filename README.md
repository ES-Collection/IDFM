IDFM  
====
InDesign Font Manager (IDFM) makes it easy to load and save Indesign Outline Fonts (IOF) to be used later (by a script) without having the font loaded into InDesign.

Theoretically you could save a font to `/Library/Application Support/Adobe/Fonts/` to have the font instantly loaded. Practically this does not work consistently as font conflicts are easily created and hard to troubleshoot.

This font manager draws character outlines inside a textframe so shapes are still composed using Adobe's parapgraph composer. This means we have the ability to resize the textbox and use justification settings to align the text.

Hyphenation is not supported (yet) but it does apply a non-breaking style to keep words together.

Review the Wiki for [API overview](https://github.com/GitBruno/IDFM/wiki/API).


Future Development
------------------
- generate (and use) the kern table
- create recompose functionality


Dependencies
------------
- [ExtendScript Preset Manager (ESPM)](https://github.com/GitBruno/ESPM)


Requests
--------

Bugs and feature requests are tracked with [the github issue tracker](https://github.com/GitBruno/IDFM/issues).  


Licence
---------
MIT license (MIT)
