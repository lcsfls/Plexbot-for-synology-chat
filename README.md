# Plexbot

This is a script I wrote to send me notifications to Plex via Tautulli on my Synology NAS. It runs on a docker container on the synology via Node.js.

Goal is to send notification via Synology Chat every time a new Movie or Episode from a show is added to the library.
The metadata is pulled from IMDB

In Tautulli, the changes and JSON settings need to be made accordingly. The Input is POST.

![image](https://user-images.githubusercontent.com/92322977/137142423-aae37a53-fd15-456c-9c59-63c3f9c0d3fb.png)
