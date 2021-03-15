USER_ALIAS=nonprofit_sandbox
META_DATA_DIR=../mdapioutput
echo deploying metadata to org w/ USER_ALIAS = $USER_ALIAS
# ignore errors (-o) and ignore warnings (-g)
sfdx force:mdapi:deploy -o -g -d $META_DATA_DIR -w 100 -u $USER_ALIAS