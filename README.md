# nonprofit-volunteer-mgmt

This is a Salesforce DX project that provides lightning components for volunteer shift signup that can be placed on an unauthenticated site. 

The code in here extends the Volunteers for Salesforce package -> https://github.com/SalesforceFoundation/Volunteers-for-Salesforce

See description and screen shots of these components here -> [Nonprofit Volunteer Mgmt](rc-nonprofit-volunteer-mgmt/docs/Nonprofit_Volunteer_Mgmt_March2021.pdf)

## Development

To work on this project in a scratch org:

1. [Set up CumulusCI](https://cumulusci.readthedocs.io/en/latest/tutorial.html)
2. Run `cci flow run dev_org --org dev` to create a scratch org, configure the dependent Nonprofit Success Pack and Volunteers for Salesforce packages, and deploy this project. 
3. Run `cci org browser dev` to open the org in your browser.

## Deploy

See deploy and config instructions here -> https://sfdc.co/rc-nonprofit-volunteer-mgmt