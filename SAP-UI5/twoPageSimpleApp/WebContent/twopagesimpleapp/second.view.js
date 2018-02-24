sap.ui.jsview("twopagesimpleapp.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf twopagesimpleapp.second
	*/ 
	getControllerName : function() {
		return "twopagesimpleapp.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf twopagesimpleapp.second
	*/ 
	createContent : function(oController) {
		
		/**Add label input which user enters */
		var oLabel = new sap.m.Label("idLabel");
		
 		var oPage = new sap.m.Page({
			title: "Second Page",
			/** For Navigation Back Button*/
			showNavButton : true,
			
			/** Add action listner event : when the navigation buttn is pressed what action to be performed*/
			navButtonPress:function(oEvt){app.back();}, 
			content: [
		             
				oLabel
			]
		});
 		return oPage;
	}

});