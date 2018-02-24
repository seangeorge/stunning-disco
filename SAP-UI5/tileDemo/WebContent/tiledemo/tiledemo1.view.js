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
 		/*Create First Tile*/
		var oT1 = new sap.m.StandardTile({
			title: "Dinosaur",
			info: "Mountain",
			icon:"sap-icon://sap-ui5"
		});
		var oT2 = new sap.m.StandardTile({
			title: "Elephant",
			info: "Forest",
			icon:"sap-icon://general-leave-request"
		});
		var oT3 = new sap.m.StandardTile({
			title: "Whale",
			info: "Sea",
			icon:"sap-icon://map"
		});
		var oT4 = new sap.m.StandardTile({
			title: "Duck",
			info: "Water",
			icon:"sap-icon://flight"
		});
		
		/*Create Tile Container*/
		var oTileCont = new sap.m.TileContainer({
			tiles:[
				oT1,
				oT2,
				oT3,
				oT4
			]
		});
		
		var oPage =  new sap.m.Page({
			title: "Title Demo",
			content: [
			          oTileCont
			]
		});
 		return oPage;
	}

});