({

    init: function(component, event, helper) {
        console.log(helper.controllerFile() + ' > init');

        // FAMILY TABLE columns
        component.set('v.tableColumns', [
           {label: 'First Name', fieldName: 'FirstName', type: 'text', sortable: true, cellAttributes: { alignment: 'left' } },
           {label: 'Last Name', fieldName: 'LastName', type: 'text', sortable: true, cellAttributes: { alignment: 'left' } },
           {label: 'Birthdate', fieldName: 'Birthdate', type: 'date-local', sortable: true, cellAttributes: { alignment: 'left' }, typeAttributes:{year:'numeric',month:'short',day:'2-digit'} },
           {label: 'Relationship', fieldName: 'Relationship', type: 'text', sortable: true, cellAttributes: { alignment: 'left' } },
           {type:  'button', typeAttributes: {iconName: 'utility:edit', label: '', name: 'edit', disabled: false}, cellAttributes: { alignment: 'center' } },
           {type:  'button', typeAttributes: {iconName: 'utility:delete', label: '', name: 'delete', disabled: false}, cellAttributes: { alignment: 'center' } },
        ]);

        // load family
        helper.setFamilyTableData(component);

    }, // end init

    closeModal: function (component, event, helper) {
        component.set('v.modalIsOpen', false);
    }, // end closeModal


    // FAMILY TABLE OPERATIONS

    updateColumnSorting: function (component, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        var showLoadingSpinner = true;
        helper.updateColumnSorting(component, fieldName, sortDirection, showLoadingSpinner);
    }, // end updateColumnSorting

    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        console.log(helper.controllerFile() + ' > row action: ' + JSON.stringify(action));

        switch (action.name) {
            case 'edit': {
                console.log(helper.controllerFile() + ' > edit familyMember: ' + JSON.stringify(row));
                helper.setFamilyMemberFields(component, row);

                // open modal
                component.set('v.modalAction', 'update');
                component.set('v.modalTitle', 'EDIT FAMILY');
                component.set("v.modalIsOpen", true);
                break;
            }
            case 'delete': {
                console.log(helper.controllerFile() + ' > delete familyMember: ' + JSON.stringify(row));
                helper.setFamilyMemberFields(component, row);

                // open modal
                component.set('v.modalAction', 'delete');
                component.set('v.modalTitle', 'DELETE FAMILY');
                component.set("v.modalIsOpen", true);
                break;
            }
        } // end switch

    }, // end handleRowAction


    // CHILD DETAIL MODAL OPERATIONS

    openModal_addFamilyMember: function(component, event, helper) {
       //console.log(helper.controllerFile() + ' > openModal_addFamilyMember');
       helper.openModal_addFamilyMember(component);
    }, // end openModal_addFamilyMember

    closeModal: function(component, event, helper) {
       component.set("v.modalIsOpen", false);
    }, // end closeModal

    saveFamilyMember: function(component, event, helper) {
        var modalAction = component.get('v.modalAction');
        var buttonClicked = event.getSource().getLocalId();
        console.log(helper.controllerFile() + ' > saveFamilyMember ( action:' + modalAction + ', buttonClicked: ' + buttonClicked + ')');

        var allGood = helper.validateFields(component);
        console.log(helper.controllerFile() + ' > saveFamilyMember - allGood: ' + allGood);

        if (allGood) {
            // familyMember
            var familyMember = component.get("v.familyMember");
            var family = component.get("v.family");

            // store familyMember
            console.log(helper.controllerFile() + ' > saveFamilyMember (' + modalAction + ') - familyMember: ' + JSON.stringify(familyMember));
            if (modalAction == 'create') {

                // add familyMember
                family.push(familyMember);
                component.get("v.family", family);

                // refresh table
                component.set("v.tableTitle", family.length);
                helper.setFamilyTableData(component);

            } else if (modalAction == 'update') {

                var familyMemberIndex = component.get("v.familyMemberIndex");
                var familyMember = component.get("v.familyMember");
                console.log(helper.controllerFile() + ' > saveFamilyMember (' + modalAction + ') - index: ' + familyMemberIndex + ': ' + JSON.stringify(familyMember));

                // update familyMember in list
                var family = component.get("v.family", family);
                family[familyMemberIndex] = familyMember;
                component.get("v.family", family);

                // refresh table
                helper.setFamilyTableData(component);

                // close modal
                component.set("v.modalIsOpen", false);
            }

            // close modal
            component.set("v.modalIsOpen", false);

            if (buttonClicked == "button_saveAddAnotherFamilyMember") {
               helper.openModal_addFamilyMember(component);
            }

        } // end if allGood

    }, // end saveFamilyMember

    deleteFamilyMember: function(component, event, helper) {

        var familyMemberIndex = component.get("v.familyMemberIndex");
        var familyMember = component.get("v.familyMember");
        console.log(helper.controllerFile() + ' > deleteFamilyMember - index: ' + familyMemberIndex + ': ' + JSON.stringify(familyMember));

        // delete familyMember from list
        var family = component.get("v.family", family);
        family.splice(familyMemberIndex, 1);
        component.get("v.family", family);

        // refresh table
        component.set("v.tableTitle", family.length);
        helper.setFamilyTableData(component);

        // close modal
        component.set("v.modalIsOpen", false);

    }, // end deleteFamilyMember


})