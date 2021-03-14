/**
 * Created by ryan.cox on 2019-01-16.
 */
({
    controllerFile: function() {
        return "VolunteerEvent_ViewController";
    },

    helperFile: function() {
        return "VolunteerEvent_ViewHelper";
    },
    
    getCampaign: function(component, eventID, eventName) {

        console.log(this.helperFile() + ' > getCampaign - eventID: ' + eventID + ', eventName: ' + eventName);

        // Create the action
        var doAction = true;
        var action = component.get("c.getCampaign"); // method on the VolunteerEventController
        if (eventID && (eventID != '')) {
            action.setParams({
                "campaignID": eventID
            });
        } else if (eventName && (eventName != '')) {
            action.setParams({
                "campaignName": eventName
            });
        } else {
            // no input parameters to find Order
            doAction = false;
        }

        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            console.log(this.helperFile() + ' > getCampaign response: ' + response.getState())
            var state = response.getState();
            if (state === "SUCCESS") {

               	// campaignList
                var campaignList = response.getReturnValue();
            	console.log(this.helperFile() + ' > getCampaign - campaignList: ' + JSON.stringify(campaignList));

                if (campaignList.length > 0) {
                    var campaign = campaignList[0];
                    component.set("v.campaign", campaign);
                    eventID = campaign.Id;
                    component.set("v.eventID", eventID);
                    component.set("v.eventName", campaign.Name);

                    if (campaign.IsActive) {
                        component.set("v.eventIsActive", true);
                        this.getVolunteerJobs(component, eventID);
                    } else {
                        component.set("v.eventIsActive", false);
                    }

                } // if campaigns returned

            }
            else {
                console.log(this.helperFile() + ' > getCampaign - failed with state: ' + state);
            }
        });

        // Send action off to be executed
        if (doAction) {
        	$A.enqueueAction(action);
        }

    }, // end getCampaign

    getVolunteerJobs: function(component, eventID) {

         // retrieve event volunteer jobs, including job shifts
        console.log(this.helperFile() + ' > getVolunteerJobs - eventID: ' + eventID);

         // outcome is setting this value into the component attribute 'jobList'
         var jobList = null;

         // Create the action
         var doAction = true;
         var action = component.get("c.getVolunteerJobs"); // method on the VolunteerEventController
         if (eventID != '') {
             action.setParams({
                 "campaignID": eventID
             });
         } else {
             doAction = false;
         }

         // Add callback behavior for when response is received
         action.setCallback(this, function(response) {
             console.log(this.helperFile() + ' > getVolunteerJobs response: ' + response.getState())
             var state = response.getState();
             if (state === "SUCCESS") {

                 // jobList
                 jobList = response.getReturnValue();
             	 console.log(this.helperFile() + ' > getVolunteerJobs jobList: ' + JSON.stringify(jobList));
                 component.set("v.jobList", jobList);

             }
             else {
                 console.log(this.helperFile() + ' > getVolunteerJobs - failed with state: ' + state);
             }
         });

         // Send action off to be executed
         if (doAction) {
         	$A.enqueueAction(action);
          }

     }, // end getVolunteerJobs

})