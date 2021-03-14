({
    controllerFile: function() {
        return "VolunteerJobShiftListController";
    },

    helperFile: function() {
        return "VolunteerJobShiftListHelper";
    },

    formatDateString: function(dateString) {

        //console.log(this.helperFile() + ' >  formatDateString - dateString in: ' + dateString);
        //dateString = $A.localizationService.formatDate(dateString, "EEE MMM d, yyyy hh:mm a");
        dateString = $A.localizationService.formatDate(dateString, "EEE MMM d hh:mm a");
        //console.log(this.helperFile() + ' >  formatDateString - date out: ' + dateString);
        return dateString;

     }, // end formatDateString

    setSelectedShift: function(component, row) {

        console.log(this.helperFile() + ' >  setSelectedShift - row: ' + JSON.stringify(row));

        // get selected shift
        var shifts = component.get("v.job.GW_Volunteers__Volunteer_Job_Slots__r");
        for (var i = 0; i < shifts.length; ++i) {
            var shift = shifts[i];
            var shiftStartTime = this.formatDateString(shift.GW_Volunteers__Start_Date_Time__c);
            var shiftEndTime = this.formatDateString(shift.End_Date_Time__c);
            var shiftDuration = shift.GW_Volunteers__Duration__c;
            var shiftNumVolunteersNeeded = shift.GW_Volunteers__Number_of_Volunteers_Still_Needed__c;

            // the shift Name is not in the table row, so use all other attributes to figure out the selected shift
            if ((row.StartTime == shiftStartTime) && (row.EndTime == shiftEndTime)
                && (row.Duration == shiftDuration) && (row.NumVolunteersNeeded == shiftNumVolunteersNeeded)
               ) {

                // set selected shift
                component.set("v.selectedShift", shift);
                component.set("v.selectedShiftID", shift.Id);
                component.set("v.shiftStartTime", shiftStartTime);
                component.set("v.shiftEndTime", shiftEndTime);
                component.set("v.shiftDuration", shiftDuration);
            }

        } // end for loop

        var selectedShift = component.get("v.selectedShift");
        console.log(this.helperFile() + ' >  setSelectedShift - selectedShift: ' + JSON.stringify(selectedShift));

    }, // setSelectedShift

})