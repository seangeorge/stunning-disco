sap.ui.controller("tablesdemo1.tableSimple", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf tablesdemo1.tableSimple
*/
onInit: function() {

	/*Create Data*/
	var oData = {
			"names" :[{
				Id: 1,
				Name: "Dinosaur",
				Place: "Mountain"
			},
			{   
				Id: 2,
				Name: "Elephant",
				Place: "Forest"
			},{
				Id: 3,
				Name: "Whale",
				Place: "Sea"
			},{
				Id: 4,
				Name: "Duck",
				Place: "Water"
			},{
				Id: 5,
				Name: "Monkey",
				Place: "Tree"
			}]
		};
	
	/*Create Model*/
	var oModel = new sap.ui.model.json.JSONModel(oData);
	sap.ui.getCore().setModel(oModel);
	
},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf tablesdemo1.tableSimple
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf tablesdemo1.tableSimple
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf tablesdemo1.tableSimple
*/
//	onExit: function() {
//
//	}

});