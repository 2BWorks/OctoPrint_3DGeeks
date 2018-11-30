#!/usr/bin/env bash
zip -r plugin.zip .
/Users/snoep/OctoPrint/venv/bin/pip install plugin.zip
rm plugin.zip
/Users/snoep/OctoPrint/venv/bin/octoprint serve
