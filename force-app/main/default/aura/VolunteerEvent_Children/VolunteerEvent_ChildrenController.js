({
    
    init: function(component, event, helper) {
        console.log(helper.controllerFile() + ' > init');

        // CHILDREN TABLE columns
        component.set('v.tableColumns', [
           {label: 'First Name', fieldName: 'FirstName', type: 'text', sortable: true, cellAttributes: { alignment: 'left' } },
           {label: 'Last Name', fieldName: 'LastName', type: 'text', sortable: true, cellAttributes: { alignment: 'left' } },
           {label: 'Birthdate', fieldName: 'Birthdate', type: 'date-local', sortable: true, cellAttributes: { alignment: 'left' }, typeAttributes:{year:'numeric',month:'short',day:'2-digit'} },
           {type:  'button', typeAttributes: {iconName: 'utility:edit', label: '', name: 'edit', disabled: false}, cellAttributes: { alignment: 'center' } },
           {type:  'button', typeAttributes: {iconName: 'utility:delete', label: '', name: 'delete', disabled: false}, cellAttributes: { alignment: 'center' } },
        ]);

        // load children
        helper.setChildrenTableData(component);

    }, // end init

    closeModal: function (component, event, helper) {
        component.set('v.modalIsOpen', false);
    }, // end closeModal


    // CHILDREN TABLE OPERATIONS

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
                console.log(helper.controllerFile() + ' > edit child: ' + JSON.stringify(row));
                helper.setChildFields(component, row);

                // open modal
                component.set('v.modalAction', 'update');
                component.set('v.modalTitle', 'EDIT CHILD');
                component.set("v.modalIsOpen", true);
                break;
            }
            case 'delete': {
                console.log(helper.controllerFile() + ' > delete child: ' + JSON.stringify(row));
                helper.setChildFields(component, row);

                // open modal
                component.set('v.modalAction', 'delete');
                component.set('v.modalTitle', 'DELETE CHILD');
                component.set("v.modalIsOpen", true);
                break;
            }
        } // end switch

    }, // end handleRowAction


    // CHILD DETAIL MODAL OPERATIONS

    openModal_addChild: function(component, event, helper) {
       //console.log(helper.controllerFile() + ' > openModal_addChild');
       helper.openModal_addChild(component);
    }, // end openModal_addChild

    closeModal: function(component, event, helper) {
       component.set("v.modalIsOpen", false);
    }, // end closeModal

    saveChild: function(component, event, helper) {
        var modalAction = component.get('v.modalAction');
        var buttonClicked = event.getSource().getLocalId();
        console.log(helper.controllerFile() + ' > saveChild ( action:' + modalAction + ', buttonClicked: ' + buttonClicked + ')');

        var allGood = helper.validateFields(component);
        console.log(helper.controllerFile() + ' > saveChild - allGood: ' + allGood);

        if (allGood) {
            // child
            var child = component.get("v.child");
            var children = component.get("v.children");

            // store child
            console.log(helper.controllerFile() + ' > saveChild (' + modalAction + ') - child: ' + JSON.stringify(child));
            if (modalAction == 'create') {

                // add child
                children.push(child);
                component.get("v.children", children);

                // refresh table
                component.set("v.tableTitle", children.length);
                helper.setChildrenTableData(component);

            } else if (modalAction == 'update') {

                var childIndex = component.get("v.childIndex");
                var child = component.get("v.child");
                console.log(helper.controllerFile() + ' > saveChild (' + modalAction + ') - index: ' + childIndex + ': ' + JSON.stringify(child));

                // update child in list
                var children = component.get("v.children", children);
                children[childIndex] = child;
                component.get("v.children", children);

                // refresh table
                helper.setChildrenTableData(component);

                // close modal
                component.set("v.modalIsOpen", false);
            }

            // close modal
            component.set("v.modalIsOpen", false);

            if (buttonClicked == "button_saveAddAnotherChild") {
               helper.openModal_addChild(component);
            }

        } // end if allGood

    }, // end saveChild

    deleteChild: function(component, event, helper) {

        var childIndex = component.get("v.childIndex");
        var child = component.get("v.child");
        console.log(helper.controllerFile() + ' > deleteChild - index: ' + childIndex + ': ' + JSON.stringify(child));

        // delete child from list
        var children = component.get("v.children", children);
        children.splice(childIndex, 1);
        component.get("v.children", children);

        // refresh table
        component.set("v.tableTitle", children.length);
        helper.setChildrenTableData(component);

        // close modal
        component.set("v.modalIsOpen", false);

    }, // end deleteChild


})