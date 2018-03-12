MKVISU
======

Simple visualizer for browsing MKV files.

How it works: metadata informations are extracted from mkv files and used to
generate an interface with static web pages.

NB: generated data is overwritten each time this script is run.


Usage
-----
`./mkvisu VIDEOS_ROOT_DIR TITLE`
- VIDEOS_ROOT_DIR: Videos root directory. It will be scanned recursively looking for
  MKVs.
- TITLE: Title of the html page generated

Example:
`./mkvisu ~/videos/ "My videos"`

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
- Auto-detect sub-folders and auto-generate its cover (composite of sub-images)
