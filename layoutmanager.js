var LayoutManager = function() {
  this.container = document.getElementById('container');
  this.columns = ['a', 'b'];
  if (this.container.className == 'thirds') {
    this.columns.push('c');
  };
  //this.isLayoutNarrow;
  this.updateLayout();
};

LayoutManager.prototype.isDocumentNarrow = function() {
  return window.document.body.clientWidth < 500;
};

LayoutManager.prototype.updateColumns = function() {
  var columnHeights = {};
  var maxHeight = 0;

  // Get column heights and determine which is tallest.
  this.columns.forEach(function(colName) {
    var colHeight = 0;
    var boxes = document.querySelectorAll('div.card.' + colName);
    for (var i=0, box; box = boxes[i]; i++) {
      colHeight += box.offsetHeight + 10;  // hack to handle margins
    }
    columnHeights[colName] = colHeight;
    if (colHeight > maxHeight) {
      maxHeight = colHeight;
    }
  });

  // Even out the columns.
  this.columns.forEach(function(colName) {
    var colHeight = columnHeights[colName];
    var spacer = document.getElementById('spacer-' + colName);
    if (spacer) {
      spacer.style.height = maxHeight - colHeight + 'px';  
    }
  });

  // set container height
  this.container.style.height = maxHeight + 'px';  
};

LayoutManager.prototype.clearSpacers = function() {
  this.columns.forEach(function(colName) {
    var spacer = document.getElementById('spacer-' + colName);
    if (spacer) {
      spacer.style.height = '';  
    }
  });
  this.container.style.height = '';
};

LayoutManager.prototype.updateLayout = function() {
  var isDocumentNarrow = this.isDocumentNarrow();
  if (this.isLayoutNarrow == isDocumentNarrow) {
    return;
  }
  this.isLayoutNarrow = isDocumentNarrow;
  if (this.isLayoutNarrow) {
    this.clearSpacers();
  } else {
    this.updateColumns();
  }
};

window.onload = function() {
  if (Array.prototype.forEach) {
    var lm = new LayoutManager();
    function resizeHandler() {
      lm.updateLayout();
    }
    window.addEventListener("resize", resizeHandler, false);
  } else {
    fallbackLayout();
  }
};


var fallbackLayout = function() {
  var container = document.getElementById('container');
  var col = document.createElement('div');
  col.style.position = 'absolute';
  col.style.top = '0';
  col.style.right = '0';
  container.appendChild(col);
  var bCards = [];
  for (var i = 0, el; el = container.childNodes[i]; i++) {
    if (el.className.substr(0, 6) == 'card b') {
      bCards.push(el);
    }
  }
  for (var i = 0, el; el = bCards[i]; i++) {
    col.appendChild(el);
  }
};