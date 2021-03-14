# nonprofit-volunteer-mgmt

This is a Salesforce DX project that provides lightning components for volunteer shift signup that can be placed on an unauthenticated site. 

The code in here extends the Volunteers for Salesforce package: https://github.com/SalesforceFoundation/Volunteers-for-Salesforce


## Development

To work on this project in a scratch org:

1. [Set up CumulusCI](https://cumulusci.readthedocs.io/en/latest/tutorial.html)
2. Run `cci flow run dev_org --org dev` to create a scratch org and attempt to deploy this project. This will fail during the pushing of the source to the scratch org. The following steps fix this and deploys the project again.
3. Run `cci org browser dev` to open the org in your browser.