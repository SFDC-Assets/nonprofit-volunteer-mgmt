({

    controllerFile: function() {
        return "VolunteerEvent_ChildrenController";
    },
    
    helperFile: function() {
        return "VolunteerEvent_ChildrenHelper";
    },
    
   // CHILDREN TABLE OPERATIONS

    setChildrenTableData: function(component) {

        var children = component.get("v.children");
        if (children == null) { children = []; }
        //console.log(this.helperFile() + ' > setChildrenTableData - children: ' + children.length);
        //console.log(this.helperFile() + ' > setChildrenTableData - children: ' + JSON.stringify(children));

        // children data
        var data = Array();
        for (var i = 0; i < children.length; ++i) {
            var item = children[i];
            var dataItem = {};
            dataItem.FirstName = item.FirstName;
            dataItem.LastName = item.LastName;
            dataItem.Birthdate = item.Birthdate;
            data.push(dataItem);
        }
        //console.log(this.helperFile() + ' > setChildrenTableData - data: ' + JSON.stringify(data));

        // set table data
        component.set('v.tableData', data);

    }, // end setChildrenTableData

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

   openModal_addChild: function(component) {

        // init child
        var child = {};
        component.set("v.child", child);
        //console.log(this.helperFile() + ' > openModal_addChild - new child: ' + JSON.stringify(child));

        // open modal
        component.set('v.modalAction', 'create');
        component.set('v.modalTitle', 'Add Child');
    	component.set("v.modalIsOpen", true);

   	}, // end openModal_addChild


    setChildFields: function(component, row) {
        //console.log(this.helperFile() + ' > setChildFields - row: ' + JSON.stringify(row));

        // get child
        var child;
        var childIndex;
        var children = component.get("v.children");
        //console.log(this.helperFile() + ' > setChildFields - children: ' + JSON.stringify(children));

        for (var i = 0; i < children.length; ++i) {
            var item = children[i];
            if ((item.FirstName == row.FirstName) && (item.LastName == row.LastName)) {
                child = item;
                childIndex = i;
            }
        }
        //console.log(this.helperFile() + ' > setChildFields - child: ' + JSON.stringify(child));

        // set child attribute
        component.set("v.child", child);
        component.set("v.childIndex", childIndex);

    }, // setChildFields

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