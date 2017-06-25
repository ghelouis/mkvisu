MKVISU
======

Simple visualizer for MKV files.

Extract informations from mkv files and generate a static web page.

NB: generated data is overwritten everytime the script is run.


Usage
-----
`./mkvisu VIDEOS TITLE`
- VIDEOS: Videos root directory. It will be scanned recursively looking for
  MKVs.
- TITLE: Title of the html page generated :)

Example:
`./mkvisu ~/videos/ "My videos"`

Informations extracted
----------------------
The following metadata are exploited:
- title
- cover (jpeg attachment)
- audio languages
