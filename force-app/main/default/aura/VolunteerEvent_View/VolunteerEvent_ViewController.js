/**
 * Created by ryan.cox on 2019-01-16.
 */
({

    init: function(component, event, helper) {

        var eventID = component.get('v.eventID');
        var eventName = component.get('v.eventName');
        console.log(helper.controllerFile() + ' > init - eventID: ' + eventID + ', eventName: ' + eventName);

        helper.getCampaign(component, eventID, eventName);

    }, // end init

    shiftSelected: function(component, event, helper) {

        var shiftSelectedID = event.getParam("value");
        console.log(helper.controllerFile() + ' > shiftSelected: ' + shiftSelectedID);

        // set 'navigation' attribute that the flow will use to determine flow path
        component.set('v.navigation', 'nav_signup');

        // go forward in the flow; this does the same thing as the "Next" button in the standard flow footer
        var navigate = component.get("v.navigateFlow");
        if (navigate) {
            navigate("NEXT");
        }

    }, // end shiftSelected

})