sap.ui.jsview("databindingfactoryfunctionlist.dbffldemo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf databindingfactoryfunctionlist.dbffldemo
	*/ 
	getControllerName : function() {
		return "databindingfactoryfunctionlist.dbffldemo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf databindingfactoryfunctionlist.dbffldemo
	*/ 
	createContent : function(oController) {
 		
		//Create List
		var oList = new sap.m.List({
			headerText:"Animals"
		});
		
		//Factory Function
		oList.bindAggregation(
				"items",
				"/names",
				function(sId,oContext){
					
					//get value
					var sValue = oContext.getProperty("Name");
					var sDec1 = "Are still roaming around";
					var sDec2 = "Are extinct";
					var sDec3 = "Are still swimming";
					if(sValue === "Dinosaur"){
						return new sap.m.StandardListItem({
							title:sValue,
							description: sDec2
						})
					}else{
						return new sap.m.StandardListItem({
							title:sValue,
							description: sDec1

					})
				}
				}
				);
		
		var oPage =  new sap.m.Page({
			title: "List Page",
			content: [
	                  oList		
			]
		});
 		return oPage;
	}

});