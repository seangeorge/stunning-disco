sap.ui.jsview("databinding.databinding", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf databinding.databinding
	*/ 
	getControllerName : function() {
		return "databinding.databinding";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf databinding.databinding
	*/ 
	createContent : function(oController) {
 		
		var oLabel1 = new sap.m.Label({
			text : "{/key1}"
		});
		
		var oLabel2 = new sap.m.Label({
			text : "{/key2}"
		});
		
		var oData = {
			
			"key1": "some value",
			"key2": "some more value"
		};
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);
		
		oLabel1.setModel(oModel);
		oLabel2.setModel(oModel);
			
		var oPage =  new sap.m.Page({
			title: "Title",
			content: [
				
				oLabel1,
				oLabel2
			
			]
		});
 		
 		return oPage;
	}

});