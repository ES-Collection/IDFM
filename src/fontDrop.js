/*
  Many parts of this code below are borrowed from IndiSnip
  http://indisnip.wordpress.com/2010/08/24/findchange-missing-font-with-scripting/
*/

//get unique Array elements
Array.prototype.unique = function () {
  var r = new Array();
  o:for (var i = 0, n = this.length; i < n; i++) {
    for (var x = 0, y = r.length; x < y; x++) {
      if (r[x]==this[i]) {
        continue o;
      }
    }
    r[r.length] = this[i];
  }
  return r;
}

//search inside array
Array.prototype.findIn = function(search){
  var r = Array();
  for (var i=0; i<this.length; i++) {
    if (this[i].indexOf(search) != -1) {
      r.push(this[i].substr(this[i].indexOf("\t") + 1, this[i].length));
    }
  }
  return r;
};

Array.prototype.findID = function (str) {
  for (var i = 0; i < this.length; i++) {
    if (this[i].indexOf(str) === 0) {
      return i;
    }
  }
  return 0;
};


//FontSelect makes a font selection gui widget, and returns an object
//with the single method getFont, which can be called to get the selected font
function FontSelect(group, font, onChangeCallBack) {
  var fontFamily = "";
  var fontStyle  = "";
  
  function setFontName(font) {
    if (typeof font === 'string' || font instanceof String) {
      var splitFont = font.split('\t');
      if(splitFont.length == 2) {
        fontFamily = splitFont[0];
        fontStyle = splitFont[1];
      }
    }
  }

  setFontName(font);

  var sysFonts = app.fonts.everyItem();
  var sysFontsList = sysFonts.fontFamily.unique();
  sysFontsList.unshift("- Select Font Family -");

  var fontFamilyId = sysFontsList.findID(fontFamily);

  var availableFonts = group.add('dropdownlist', undefined, sysFontsList);
  var availableStyles = group.add('dropdownlist');

  availableFonts.minimumSize = [230,25];
  availableStyles.minimumSize = [220,25];
  
  availableFonts.onChange = function () {
    availableStyles.removeAll();
    var sysFontAvailableStyles = sysFonts.name.findIn(availableFonts.selection);
    for (var i = 0; i < sysFontAvailableStyles.length; i++) {
      availableStyles.add('item',sysFontAvailableStyles[i]);
    }
    fontStyleId = sysFontAvailableStyles.findID(fontStyle);
    availableStyles.selection = fontStyleId;
    onChangeCallBack();
  } 

  availableStyles.onChange = function () {
    onChangeCallBack();
  }

  availableFonts.selection = fontFamilyId;

  return {
    getFont: function () {
      if (availableFonts.selection && availableStyles.selection) {
        return availableFonts.selection.text + '\t' + availableStyles.selection.text;
      }
      else {
        return null; //Now we know the font is not loaded
      }
    },
    setFont: function(fontName){
      setFontName(fontName);
      fontFamilyId = sysFontsList.findID(fontFamily);
      availableFonts.selection = fontFamilyId;
      
      availableStyles.removeAll();
      
      var sysFontAvailableStyles = sysFonts.name.findIn(availableFonts.selection);
      for (var i = 0; i < sysFontAvailableStyles.length; i++) {
        availableStyles.add('item',sysFontAvailableStyles[i]);
      }
      
      fontStyleId = sysFontAvailableStyles.findID(fontStyle);
      availableStyles.selection = fontStyleId;
    }
  };
}

// END fontDrop.js


