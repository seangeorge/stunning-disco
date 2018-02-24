sap.ui.jsview("tiledemo.tiledemo1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tiledemo.tiledemo1
	*/ 
	getControllerName : function() {
		return "tiledemo.tiledemo1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tiledemo.tiledemo1
	*/ 
	createContent : function(oController) {
 		
		var oTileTemp = new sap.m.StandardTile({
			icon:"{icon}",
			title:"{Name}",
			info:"{Place}"
				
		});
		
		/*Create Tile Container*/
		var oTileCont = new sap.m.TileContainer({
			
		});
		
		/*Binding*/
		oTileCont.bindAggregation("tiles","/names",oTileTemp);
		
		var oPage =  new sap.m.Page({
			title: "Title Demo",
			content: [
			          oTileCont
			]
		});
 		return oPage;
	}

});