({

    controllerFile: function() {
        return "VolunteerEventListController";
    },

    helperFile: function() {
        return "VolunteerEventListHelper";
    },
    
    getCampaigns: function(component) {

        console.log(this.helperFile() + ' > getCampaigns');

        // Create the action
        var action = component.get("c.getCampaigns"); // method on the VolunteerEventController

        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            console.log(this.helperFile() + ' > getCampaigns response: ' + response.getState())
            var state = response.getState();
            if (state === "SUCCESS") {

                // campaignList
                var campaignList = response.getReturnValue();
                console.log(this.helperFile() + ' > getCampaigns - campaignList: ' + JSON.stringify(campaignList));
                component.set("v.campaignList", campaignList);

            }
            else {
                console.log(this.helperFile() + ' > getCampaigns - failed with state: ' + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);

    }, // end getCampaigns

})