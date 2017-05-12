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
    
    var standardGlyph = {
      name:         "REPLACEMENT CHARACTER" ,
      unicodeDec:   65533 ,
      completePath: [] }

    var replacementFont  = {
      name:   "Replacement Font" ,
      glyphs: [ standardGlyph ] }

    var standardFonts = [ replacementFont ];

    // Load user database
    var Database = new presetManager( 'OutlineFonts.Database', standardFonts );

    // P R I V A T E   F U N C T I O N S 
    // - - - - - - - - - - - - - - - - -
    function copy ( obj ) {
      return JSON.parse( JSON.stringify(obj) );
    }

    function getUnicode( stringText ) {
      var unicodeArray = new Array();
      // For every char in string save unocode 
      return unicodeArray;
    }

    function drawPath( entirePath ) {
      // This functions draws the entire path
    }

    function convertFont( font ) {
      // This function converts a currently loaded font
      // in InDesign to a IOF font format
    }

    function getFont( fontName ) {
      // This function loads a font out of the font database
    }

    function saveFont( font, charCodes ) {
      // This functions saves the font in IOF fomat (InDesign Outline Font)
      // Optionally give a list of `charCodes` to only save a subset
    }

    // Creates pen object
    //--------------------------
    function pen ( Font, pointSize ) {
      var Pen = this;

      Pen.Font = copy( Font );
      Pen.Percent = ( pointSize / Pen.Font.size )*100;

      Pen.draw = function ( unicode ) {
        var Glyph = Pen.Font.getGlyph( unicode );
        return drawPath( Glyph.entirePath, Pen.percent );
      }
    }

    // Creates the writer object
    //--------------------------
    function writer( pen, size ) {

      var Writer    = this;
      var Pen       = pen;
      var writeSize = size || Pen.Font.size;

      Writer.getPen = function () {
        return Pen;
      }

      Writer.getWriteSize = function () {
        return writeSize;
      }

      Writer.setWriteSize = function ( size ) {
        writeSize = parseFloat( size );
      }

      Writer.changeHand = function ( fontName, size ) {
        writeSize = size || writeSize;
        var Font = getFont( fontName );
        Pen = new pen( Font, writeSize );
      }

      Writer.write = function ( string ) {
        return drawPath( Glyph.entirePath, Pen.percent );
      }

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
    Fm.Writer = new writer( new pen(standardFonts[0]) );

}


