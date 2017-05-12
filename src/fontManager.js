/* 

  fontManager.js

  InDesign Font Manager

  Bruno Herfst 2017
  Version 0.1
  
  MIT license (MIT)

  https://github.com/GitBruno/IDFM

*/


function fontManager() {
    var Fm = this;
    
    var currentFont;
    var currentLocation;

    // P R I V A T E   F U N C T I O N S 
    // - - - - - - - - - - - - - - - - -

    function convertFont( font ) {
      // This function converts a currently loaded font
      // in InDesign to a IOF font format
    }

    function loadFont( fontName, fontStyle ) {
      // This function loads a font out of the font database
    }

    function write( charCode, textFrame ) {
      // this function adds a character to the given textFrame
    }

    function saveFont( font, charCodes ) {
      // This functions saves the font in IOF fomat (InDesign Outline Font)
      // Optionally give a list of `charCodes` to only save a subset
    }

    function writer( ) {
      // Creates the writer object
    }

    function suiSelectFont() {
      // This function creates SUI and returns a font name

      // It is up to the user to make sure they don't break any font licence when saving
      // the font in a different format. This font manager will always alert the user
      // every time they add a new font to the database.

    }

    // P U B L I C   F U N C T I O N S 
    // - - - - - - - - - - - - - - - -

    Fm.add = function () {
      // This function creates a SUI for the user to select a font 
      // that is currently loaded on the machine
      // The chosen font will be converted and added to the database
      return suiSelectFont();
    }

    Fm.load = function ( fontName ) {
      // This function loads a font into the writer
    }

    // I N I T 
    // - - - -
    Fm.Writer = new writer();

}


