function processMailFailure(result) {
  // show a failure message in the UI
  console.table(result); // table shows us an object in table form
  alert(result.message);

  // show some UI here to let the user know the mail attempt was successful
}

function processMailSuccess(result) {
  // show a success message in the UI
  console.table(result); // table shows us an object in table form
  alert(result.message);

  // show some UI here to let the user know the mail attempt was successful
}

export { processMailFailure };
export { processMailSuccess };
