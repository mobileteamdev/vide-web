Build Artifact
==============

As compilation succeed VIDE create a JSON file for each compiled contract.
These JSON files contains several metadata

Library Deployment
------------------

By default VIDE automatically deploy needed libraries.

`linkReferences` contains a map representing libraries which depend on the current contract. 
Values are addresses of libraries used for linking the contract.

`autoDeployLib` defines if the libraries should be auto deployed by VIDE or if the contract should be linked with libraries described in `linkReferences`

Note that VIDE will resolve addresses corresponding to the current network.
By default, a configuration key follow the form: `<network_name>:<networkd_id>`, but it is also possible
to define `<network_name>` or `<network_id>` as keys.
