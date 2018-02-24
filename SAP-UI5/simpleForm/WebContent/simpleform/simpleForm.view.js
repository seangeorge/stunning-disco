sap.ui.jsview("simpleform.simpleForm", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf simpleform.simpleForm
	*/ 
	getControllerName : function() {
		return "simpleform.simpleForm";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf simpleform.simpleForm
	*/ 
	createContent : function(oController) {
 		
		var oLabel = new sap.m.Label({
            text : "Simple Form"
        });
		
		var oInput = new sap.m.Input({
            placeholder:"Simple Input"
        });
		

        var oButton = new sap.m.Button({
            text: "Press Me"
        });
        
        var oRI = new sap.m.RatingIndicator({
            value:4.7
        });
        
        var oTextArea = new sap.m.TextArea({
            value:"Awesome Text Area"
        });
        
        var oDatePicker = new sap.m.DatePicker({
            
        });
        
        
        
        var oBar = new sap.m.Bar({
            
            contentRight : [
                new sap.m.Button({
                    text:"Right Side"
                })
                
                ]
        });
        
        var oVBox = new sap.m.VBox({
            items : [
                
                new sap.m.Button({
                    text : "VBox 1"
                }),
                
                new sap.m.Button({
                  text : "VBox 2"  
                })
                
                ]
        });
        
        var oHBox = new sap.m.HBox({
            items : [
                
                new sap.m.Button({
                    text : "HBox 1"
                }),
                
                new sap.m.Button({
                  text :"HBox 2"  
                })
                
                ]
        });
		
		var oPage = new sap.m.Page({
			title: "Elements",
			content: [
			    
				oLabel,
				oInput,
				oButton,
				oRI,
				oTextArea,
				oDatePicker,
				
				oBar,
				oVBox,
				oHBox
				
				
			]
		});
 		
 	return oPage;
	}

});