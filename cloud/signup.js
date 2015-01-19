/**
 




 */



exports.userBeforeSave = Parse.Cloud.beforeSave(Parse.User, function(request, response) {
  var email = request.object.get("email").toLowerCase();
  var emailRegExp = new RegExp("(\W|^)[\w.+\-]{0,15}@(up)\.edu(\W|$)", "i");

  console.log("Working.")

  // Ensure @up.edu
  if (emailRegExp.test(email)) {
    response.success();
  } else {
  	response.error("You must use an @up.edu email address.")
  }

});
