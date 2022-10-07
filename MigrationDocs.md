# Read before migration file creation, editing, etc

## Main rules

- The latest version is currently V9 so increment your versions upwards from that! 

- Do not duplicate version numbers

- Version numbers must be sequential, the newest file must have a larger number than the previous

- To edit a table, ***do not edit a previous file***! This will do nothing, so a new file must be created in order to execute new/edited commands

- When collaboratively coding, check with your collaborators to see the version numbers in use. Use rules 1 and 2 to see what to do

- If you encounter a migration error, an easy way to beat said migration error is to edit the ***flyway_schema_history*** and then delete the version of the migration that you were
  recieving the error from, make sure to update the table that you are trying to change ***accordingly*** 