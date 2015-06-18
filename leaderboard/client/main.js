PlayersList = new Mongo.Collection('players');

Template.leaderboard.helpers({
  'player': function(){
    return PlayersList.find()
  }
});

Template.addPlayerForm.events({
  'submit form': function(e,t){

   event.preventDefault();
   var brandNameVar = event.target.brandName.value;
   var modelNameVar = event.target.modelName.value;
   var heightVar = event.target.height.value;
   var widthVar = event.target.width.value;
   var thicknessVar = event.target.thickness.value;
   var boardTypeVar = event.target.boardType.value;
   var tailTypeVar = event.target.tailType.value;
   var finSetupVar = event.target.finSetup.value;
   var finSystemVar = event.target.finSystem.value;
   var locationVar = event.target.location.value;
   var emailVar = event.target.email.value;
   var phoneVar = event.target.phone.value;

   PlayersList.insert({
    brandName: brandNameVar,
    modelName: modelNameVar,
    height: heightVar,
    width: widthVar,
    thickness: thicknessVar,
    boardType: boardTypeVar,
    tailType: tailTypeVar,
    finSetup: finSetupVar,
    finSystem: finSystemVar,
    location: locationVar,
    email: emailVar,
    phone:  phoneVar
  });
 }
});

Template.dropzone.events({
  'change .myFileInput': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }
}); 


