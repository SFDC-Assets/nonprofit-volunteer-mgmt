({

    controllerFile: function() {
        return "VolunteerPositionsController";
    },

    helperFile: function() {
        return "VolunteerPositionsHelper";
    },
    
    getVolunteerPositions: function(component) {

        console.log(this.helperFile() + ' > getVolunteerPositions');
        
        // Create the action
        var action = component.get("c.getVolunteerPositions"); // method on the VolunteerEventController
        
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            console.log(this.helperFile() + ' > getVolunteerPositions response: ' + response.getState())
            var state = response.getState();
            if (state === "SUCCESS") {
                
                // jobList
                var jobList = response.getReturnValue();
                console.log(this.helperFile() + ' > getVolunteerPositions - jobList: ' + JSON.stringify(jobList));
                component.set("v.jobList", jobList);
                
            }
            else {
                console.log(this.helperFile() + ' > getVolunteerPositions - failed with state: ' + state);
            }
        });
        
        // Send action off to be executed
        $A.enqueueAction(action);
        
    }, // end getVolunteerPositions

})