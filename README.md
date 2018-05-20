MKVISU
======

Simple visualizer for MKV files.

How it works: metadata informations are extracted from mkv files and used to
generate an interface with static web pages.

NB: generated data is overwritten each time this script is run.

![Demo](demo/demo.gif)

Usage
-----
`./mkvisu VIDEOS_ROOT_DIR TITLE`
- VIDEOS_ROOT_DIR: Videos root directory. It will be scanned recursively looking for
  MKVs.
- TITLE: Title of the html page generated

Example:
`./mkvisu ~/videos/ "My videos"`

All generated files will be in the *generated* directory, with *index.html*
being the entry point.

Informations extracted
----------------------
The following metadata attributes are currently taken into account:
- title
- cover (jpeg attachment)
- audio languages

Features
--------
- Search (filter) by name
- Cover grid display
- Title and languages on hover
- Recursive sub-folder detection
