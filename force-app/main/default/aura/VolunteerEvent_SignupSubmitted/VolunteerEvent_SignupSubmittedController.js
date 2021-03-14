/**
 * Created by ryan.cox on 2019-01-16.
 */
({

    init: function(component, event, helper) {

        var shiftID = component.get('v.shiftID');
        var contact = component.get('v.contact');
        var signup = component.get('v.signup');
        var contactID;
        if (signup) {
            contactID = signup.GW_Volunteers__Contact__c;
            component.set('v.contactID', contactID);
        }
        console.log(helper.controllerFile() + ' > init - shiftID: ' + shiftID + ', signup: ' + JSON.stringify(signup) + ', contactID: ' + contactID + ', contact: ' + JSON.stringify(contact));

        helper.getJobShift(component, shiftID);

    }, // end init

    handleNavigation : function(component, event, helper) {

        // set 'navigation' attribute that the flow will use to determine flow path
        var buttonClicked = event.getSource().getLocalId();
        component.set('v.navigation', buttonClicked);
        console.log(helper.controllerFile() + ' > handleNavigation - clicked: ' + buttonClicked);

        if (buttonClicked == "nav_finish") {
            // go forward in the flow; this does the same thing as the "FINISH" button in the standard flow footer
            var navigate = component.get("v.navigateFlow");
            if (navigate) {
                navigate("FINISH");
            }
        } else {
            // submit signup
            helper.submitSignup(component);
        }

    }, // end handleNavigation

    goToContactRecord : function(component, event, helper) {

        var contactID = component.get('v.contactID');
        console.log(helper.controllerFile() + ' > goToContactRecord - contactID: ' + contactID);

        // Fire the event to navigate to the contact record
        var nav = $A.get("e.force:navigateToSObject");
        nav.setParams({
            "recordId": contactID,
            "slideDevName": "detail"
        })
        nav.fire();

     } // end goToContactRecord


})