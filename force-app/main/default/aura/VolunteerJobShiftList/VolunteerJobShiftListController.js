({

    init: function(component, event, helper) {

        console.log(helper.controllerFile() + ' >  init');

        var job = component.get("v.job");

        // job location - set to either the location name or address
        var location = (job.Location_Name__c) ? '' + job.Location_Name__c : null;
        if (!location && job.GW_Volunteers__Location_Street__c && job.GW_Volunteers__Location_City__c
            && job.GW_Volunteers__Location__c && job.GW_Volunteers__Location_Zip_Postal_Code__c) {
                location = '' + job.GW_Volunteers__Location_Street__c + ' ' + job.GW_Volunteers__Location_City__c
                 + ', ' + job.GW_Volunteers__Location__c + ' ' + job.GW_Volunteers__Location_Zip_Postal_Code__c;
        }
        component.set("v.jobLocation", location);

        // job shifts
        var shifts = job.GW_Volunteers__Volunteer_Job_Slots__r;

        // table data
        var data = null;
        if (shifts != null) {
            data = Array();
            for (var i = 0; i < shifts.length; ++i) {
              var item = shifts[i];
              var dataItem = {};
              dataItem.Name = item.Name;
              dataItem.StartTime = helper.formatDateString(item.GW_Volunteers__Start_Date_Time__c);
              dataItem.EndTime = helper.formatDateString(item.End_Date_Time__c);
              dataItem.Duration = item.GW_Volunteers__Duration__c;
              dataItem.NumVolunteersNeeded = item.GW_Volunteers__Number_of_Volunteers_Still_Needed__c;
              data.push(dataItem);
            }
            //console.log(helper.controllerFile() + ' >  init - table data: ' + JSON.stringify(data));

            // table height based on number of shifts
            var heightPerRow = 50;
            var height = heightPerRow * (shifts.length + 1); // +1 is for the header row
            if (height > 300) { height = 300; } // cap the height
            component.set("v.tableHeight", height + 'px');

            // table definition
            component.set('v.tableColumns', [
                //{label: 'SHIFT NAME', fieldName: 'Name', type: 'text', sortable: false, iconName: "standard:lead_list", cellAttributes: { alignment: 'left' } },
                {label: 'START TIME', fieldName: 'StartTime', type: 'text', sortable: false, iconName: "custom:custom95", cellAttributes: { alignment: 'left' } },
                {label: 'END TIME', fieldName: 'EndTime', type: 'text', sortable: false, iconName: "custom:custom7", cellAttributes: { alignment: 'left' } },
                //{label: 'HOURS', fieldName: 'Duration', type: 'number', sortable: false, iconName: "standard:today", cellAttributes: { alignment: 'center' } },
                {label: 'VOLUNTEERS NEEDED', fieldName: 'NumVolunteersNeeded', type: 'number', sortable: false, iconName: "standard:queue", cellAttributes: { alignment: 'center' } },
                {type:  'button', typeAttributes: {/*iconName: 'utility:new_window', */ label: 'SIGN UP', name: 'signup', disabled: false}, cellAttributes: { alignment: 'center' } },
               ]);

        } // end table data

        // set table data
        component.set('v.tableData', data);
        component.set('v.shiftsLoaded', true);

    }, // end init

    handleRowAction: function (component, event, helper) {

        var action = event.getParam('action');
        var row = event.getParam('row');
        console.log(helper.controllerFile() + ' >  row action: ' + JSON.stringify(action));

        switch (action.name) {
            case 'signup': {
                helper.setSelectedShift(component, row);

                // open modal
    			//component.set("v.isOpen", true);
                break;
            }
        } // end switch

    }, // end handleRowAction

})