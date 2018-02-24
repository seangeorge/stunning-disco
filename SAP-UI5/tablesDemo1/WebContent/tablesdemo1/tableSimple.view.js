sap.ui.jsview("tablesdemo1.tableSimple", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tablesdemo1.tableSimple
	*/ 
	getControllerName : function() {
		return "tablesdemo1.tableSimple";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tablesdemo1.tableSimple
	*/ 
	createContent : function(oController) {
 		
		/*Create Col 1 Name*/
		/**Not required in ui.table var oCol1 = new sap.m.Column({
			header : new sap.m.Label({
				text: "Name"
			})
		});*/
		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({text: "Name"}),
			template: new sap.m.Text({
				text:"{Name}"
			})
		});
		
		/*Create Col 2 Place*/
		/**Not required in ui.table var oCol2 = new sap.m.Column({
			header : new sap.m.Label({
				text: "Place"
			})
		});*/
		
		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({text: "Place"}),
			template: new sap.m.Text({
				text:"{Place}"
			})
		});
		
		/*Create Col 3 id*/
		/**Not required in ui.table var oCol3 = new sap.m.Column({
			header : new sap.m.Label({
				text: "Id"
			})
		});*/
		
		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({text: "Id"}),
			template: new sap.m.Text({
				text:"{Id}"
			})

		});
		
		/*Create Table*/
		/**Not required in ui.table var oTable = new sap.m.Table({
			title : "Simple Table",
			columns : [
				oCol1,
				oCol2,
				oCol3
			]
		});*/
		var oTable = new sap.ui.table.Table({
			title : "Simple Table",
			columns : [
				oCol1,
				oCol2,
				oCol3
			]
		});
		
		/*Create a template of how rows will look like*/
		/** Not required in ui.table var oTemp = new sap.m.ColumnListItem({
			cells : [
				new sap.m.Text({
					text: "{Name}"
				}),new sap.m.Text({
					text: "{Place}"
				}),new sap.m.Text({
					text: "{Id}"
				})
			]
		});*/
		
		/*Set the binding*/
		/**Not required in ui.table oTable.bindItems({
			path : "/names",
			template : oTemp
		});*/
		
		oTable.bindRows("/names");
 		
		var oPage = new sap.m.Page({
			title: "Simple Animal List",
			content: [
			   oTable
			]
		});
		return oPage;
	}

});