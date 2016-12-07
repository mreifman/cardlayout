# cardlayout

CSS and JavaScript for a mobile-first responsive layout that re-organizes
content blocks into multiple columns on wider screens. For example:

Mobile:
```
1
2
3
```
Desktop:
```
1 2
3
```

The initial goal was to implement only with CSS in order to avoid moving 
DOM nodes. I came close with `display: flex`, but there were two issues:

1. A container height needs to be set to force items to flow into a new column
2. Items can flow into an adjacent column if that columns is shorter than its neighbor

The implementation needed some JavaScript to measure the height of the
tallest column and add spacers at the bottom of shorter columns to fill
them out.
