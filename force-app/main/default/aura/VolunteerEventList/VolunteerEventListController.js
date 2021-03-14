({

    init: function(component, event, helper) {

        console.log(helper.controllerFile() + ' > init');

        helper.getCampaigns(component);

    }, // end init

})