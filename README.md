# Eleventy Bug

This demonstrates a potential Eleventy bug where JS data files are not correctly handled when the `data` folder is above the `input` scope.

### Update

It looks like this issue only occurs when `input` receives an absolute path.
