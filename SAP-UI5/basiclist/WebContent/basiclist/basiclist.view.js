sap.ui.jsview("basiclist.basiclist", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf basiclist.basiclist
	*/ 
	getControllerName : function() {
		return "basiclist.basiclist";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf basiclist.basiclist
	*/ 
	createContent : function(oController) {
		
		/**Data 
		 Added a name Key,Name Key contains array,Each array contains objects,Each object is a record*/
		
		var oData = {
			names:[{
				Name : "Dinosaur",
				Place : "Mountain"
			},
			{
				Name : "Elephant",
				Place : "Forest"
			},{
				Name : "Whale",
				Place : "Sea"
			},{
				Name : "Duck",
				Place : "Water"
			},{
				Name : "Monkey",
				Place : "Tree"
			}]
		};
		
		var oModel = new sap.ui.model.json.JSONModel();
		
		
		/**oModel.setData(oData);
		oList.setModel(oModel); */
		
		/**Create List item*/
		/**var oItem1 = sap.m.StandardListItem({
			title: "{/Name}",
			description:"{/Place}"
		});*/
		
		/**Create List*/
		var oList = new sap.m.List({
			headerText : "Animals",
			items:[
				/*oItem1*/
			]
		});
		
		/*Bind data*/
		oList.bindItems({
			path: "/names",
			template: new sap.m.StandardListItem({
				title: "{Name}",
				description:"{Place}"
			})
		});
		
        oModel.setData(oData);
		
		/**Set list to model*/
		oList.setModel(oModel);
	
 		var oPage = new sap.m.Page({
			title: "UI5 Simple List Page",
			content: [
		          oList	
			]
		});
 		
 		return oPage;
	}

});