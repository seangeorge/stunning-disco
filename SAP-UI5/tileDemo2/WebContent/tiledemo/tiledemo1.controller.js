sap.ui.controller("tiledemo.tiledemo1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf tiledemo.tiledemo1
*/
onInit: function() {
	
	/*Create Data*/
	var oData = {
			"names" :[{
				icon:"sap-icon://sap-ui5",
				Name: "Dinosaur",
				Place: "Mountain"
			},
			{   
				icon:"sap-icon://general-leave-request",
				Name: "Elephant",
				Place: "Forest"
			},{
				icon:"sap-icon://map",
				Name: "Whale",
				Place: "Sea"
			},{
				icon:"sap-icon://flight",
				Name: "Duck",
				Place: "Water"
			}]
		};
	
	/*Create Model*/
	var oModel = new sap.ui.model.json.JSONModel(oData);
	sap.ui.getCore().setModel(oModel);

},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf tiledemo.tiledemo1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf tiledemo.tiledemo1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf tiledemo.tiledemo1
*/
//	onExit: function() {
//
//	}

});