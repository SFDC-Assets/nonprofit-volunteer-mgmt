({

    controllerFile: function() {
        return "VolunteerEvent_FamilyController";
    },
    
    helperFile: function() {
        return "VolunteerEvent_FamilyHelper";
    },
    
   	// FAMILY TABLE OPERATIONS

    setFamilyTableData: function(component) {

        var family = component.get("v.family");
        if (family == null) { family = []; }
        //console.log(this.helperFile() + ' > setFamilyTableData - family: ' + family.length);
        //console.log(this.helperFile() + ' > setFamilyTableData - family: ' + JSON.stringify(family));

        // family data
        var data = Array();
        for (var i = 0; i < family.length; ++i) {
            var item = family[i];
            var dataItem = {};
            dataItem.FirstName = item.FirstName;
            dataItem.LastName = item.LastName;
            dataItem.Birthdate = item.Birthdate;
            dataItem.Relationship = item.Description;
            data.push(dataItem);
        }
        //console.log(this.helperFile() + ' > setFamilyTableData - data: ' + JSON.stringify(data));

        // set table data
        component.set('v.tableData', data);

    }, // end setFamilyTableData

    updateColumnSorting: function(component, fieldName, sortDirection, showLoadingSpinner) {
        if (showLoadingSpinner) component.set('v.isLoading', true);
        // We use the setTimeout method here to simulate the async
        // process of the sorting data, so that user will see the
        // spinner loading when the data is being sorted.
        // Using var for 'this' because 'this.sortData' within the anonymous function isn't recognized
        // because 'this' inside the anonymous function is empty
        var helper = this;
        setTimeout(function() {
            component.set("v.sortedBy", fieldName);
            component.set("v.sortedDirection", sortDirection);
            helper.sortData(component, fieldName, sortDirection);
            if (showLoadingSpinner) component.set('v.isLoading', false);
        }, 0);
    }, // end updateColumnSorting

    sortData: function (component, fieldName, sortDirection) {
        var data = component.get("v.tableData");
        var reverse = sortDirection !== 'asc';

        data = Object.assign([],
            data.sort(this.sortBy(fieldName, reverse ? -1 : 1))
        );
        component.set("v.tableData", data);
    }, // end sortData

    sortBy: function (field, reverse, primer) {
        var key = primer
            ? function(x) { return primer(x[field]) }
            : function(x) { return x[field] };

        return function (a, b) {
            var A = key(a);
            var B = key(b);
            return reverse * ((A > B) - (B > A));
        };
    }, // end sortBy


   // MODAL DIALOG OPERATIONS

   openModal_addFamilyMember: function(component) {

        // init family member
        var familyMember = {};
        component.set("v.familyMember", familyMember);

        // open modal
        component.set('v.modalAction', 'create');
        component.set('v.modalTitle', 'Add Family Member');
    	component.set("v.modalIsOpen", true);

   	}, // end openModal_addFamilyMember


    setFamilyMemberFields: function(component, row) {
        //console.log(this.helperFile() + ' > setFamilyMemberFields - row: ' + JSON.stringify(row));

        // get familyMember
        var familyMember;
        var familyMemberIndex;
        var family = component.get("v.family");
        //console.log(this.helperFile() + ' > setFamilyMemberFields - family: ' + JSON.stringify(family));

        for (var i = 0; i < family.length; ++i) {
            var item = family[i];
            if ((item.FirstName == row.FirstName) && (item.LastName == row.LastName)) {
                familyMember = item;
                familyMemberIndex = i;
            }
        }
        //console.log(this.helperFile() + ' > setFamilyMemberFields - familyMember: ' + JSON.stringify(familyMember));

        // set familyMember attribute
        component.set("v.familyMember", familyMember);
        component.set("v.familyMemberIndex", familyMemberIndex);

    }, // setFamilyMemberFields

    validateFields: function (component) {

        //console.log(this.helperFile() + ' > validateFields');

        // checks all fields
        var allGood = component.find('field').reduce(function (validSoFar, inputCmp) {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);

        return allGood;

    }, // end validateFields

})