/**
 * Created by ryan.cox on 2019-01-17.
 */
({

    init: function(component, event, helper) {

        console.log(helper.controllerFile() + ' > init');

        var flowName = "Volunteer_Event_Signup";

        // find the view component (by aura:id) where the flow will be displayed
        var flow = component.find(flowName);

        // flow inputs
        var eventID = component.get("v.eventID");
        var eventName = component.get("v.eventName");
        var signupChannel = component.get("v.signupChannel");
        console.log(helper.controllerFile() + ' > init - eventID: ' + eventID + ', eventName: ' + eventName + ', signupChannel: ' + signupChannel);
        var inputVariables = [];
        if (eventID) {
            inputVariables[0] = { name : "eventID", type : "String", value: eventID };
        } else if (eventName) {
            inputVariables[0] = { name : "eventName", type : "String", value: eventName };
        }
        if (signupChannel) {
            inputVariables[1] = { name : "signupChannel", type : "String", value: signupChannel };
        }
        console.log(helper.controllerFile() + ' > init - inputVariables: ' + JSON.stringify(inputVariables));

        // start the flow by the flow Unique Name
        flow.startFlow(flowName, inputVariables);

    }, // end init

})