# READ BEFORE CREATING OR EDITING MIGRATION FILES

## Main rules

- Do not duplicate version numbers, clashing version numbers will result in one of the files not being read and therefore some migration not being completed
- Make sure the version numbers are sequential, file numbers must increase from the highest current version number
- When altering a table, ***do not change a previous files contents***, create a new file with new code to change the exisiting table
- If doing collaborative coding, check with each of your collaborators to see if any of you have used the same version number. _If_ you have, of of you should keep that version number but the others should sequentially increase them.