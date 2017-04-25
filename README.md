MKVISU
======

Quick and dirty visualizer for MKV files.

Extract informations from mkv files and generate a static web page.

NB: data is overwritten everytime this script is run.


Usage
-----
`./mkvisu VIDEOS TITLE`
- VIDEOS: Videos root directory. It will be scanned recursively looking for
  MKVs.
- TTITLE: Title of the html page generated :)

Example:
`./mkvisu ~/videos/ ~/videos/.metadata "My videos"`
