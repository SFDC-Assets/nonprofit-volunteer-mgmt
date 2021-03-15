USER_ALIAS="${USER_ALIAS:-nonprofit_prod}"
PERM_SET=Volunteer_Mgmt
echo assigning permission set $PERM_SET to USER_ALIAS = $USER_ALIAS
sfdx force:user:permset:assign -n $PERM_SET -u $USER_ALIAS