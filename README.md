# cardlayout

CSS and JavaScript for a mobile-first responsive layout that re-organizes
content blocks into multiple columns. For example:

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

The initial goal was to implement only with CSS, particularly to avoid moving 
DOM nodes. I came close using `display: flex`, but there were two issues:

1) A container height needs to be set to force items to flow into a new column
2) Items can flow into an adjacent column if that columns is shorter than its neighbor


CSS flexbox + JS demo, 


with goal of not moving any DOM nodes.  using flexbox still required some javascript to measure and set column heights to force blocks to flow(?).  For cross-browser support the actual implementation required not using flexbox and thus needing to moving DOM nodes.
