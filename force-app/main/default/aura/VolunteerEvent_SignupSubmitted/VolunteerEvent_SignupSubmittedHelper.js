/**
 * Created by ryan.cox on 2019-01-16.
 */
({

    controllerFile: function() {
        return "VolunteerEvent_SignupSubmittedController";
    },
    
    helperFile: function() {
        return "VolunteerEvent_SignupSubmittedHelper";
    },
    
   	getJobShift: function(component, shiftID) {

        console.log(this.helperFile() + ' > getJobShift - shiftID: ' + shiftID);

        // outcome is setting this value into the component attribute 'shift'
        var shift = null;

        // Create the action
        var doAction = true;
        var action = component.get("c.getVolunteerJobShift"); // method on the VolunteerEventController
        if (shiftID) {
            action.setParams({
                "shiftID": shiftID
            });
        } else {
            doAction = false;
        }

        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            console.log(this.helperFile() + ' > getJobShift response: ' + response.getState())
            var state = response.getState();
            if (state === "SUCCESS") {

                var shiftList = response.getReturnValue();
                console.log(this.helperFile() + ' > getJobShift shiftList: ' + JSON.stringify(shiftList));
                if (shiftList.length > 0) {
                    // shift
                    var shift = shiftList[0];
                    component.set("v.shift", shift);
                    var shiftStartTime = this.formatDateString(shift.GW_Volunteers__Start_Date_Time__c);
                    component.set("v.shiftStartTime", shiftStartTime);
                    var shiftEndTime = this.formatDateString(shift.End_Date_Time__c);
                    component.set("v.shiftEndTime", shiftEndTime);
                    component.set("v.shiftDuration", shift.GW_Volunteers__Duration__c);

                    // campaign
                    component.set("v.campaign", shift.GW_Volunteers__Volunteer_Job__r.GW_Volunteers__Campaign__r);

                    // job
                    component.set("v.job", shift.GW_Volunteers__Volunteer_Job__r);
                }
             }
             else {
                 console.log(this.helperFile() + ' > getJobShift - failed with state: ' + state);
             }
        });

        // Send action off to be executed
        if (doAction) {
            $A.enqueueAction(action);
        }

    }, // end getVolunteerJobs

    formatDateString: function(dateString) {

         //console.log(this.helperFile() + ' > formatDateString - dateString in: ' + dateString);
         dateString = $A.localizationService.formatDate(dateString, "EEE MMM d, yyyy hh:mm a");
         //console.log(this.helperFile() + ' > formatDateString - date out: ' + dateString);
         return dateString;

    }, // end formatDateString

})