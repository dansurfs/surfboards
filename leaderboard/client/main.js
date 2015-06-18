Template.addPlayerForm.events({
  'submit form': function(e,t){

  dropzone.processQueue();

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


Template.imageUpload.onRendered(function(){

  var arrayOfImageIds = [];

  Dropzone.options.autoDiscover = false;

  dropzone = new Dropzone("form#dropzone", {
    autoDiscover: false,
    autoProcessQueue: false,
    success: function(file, done){
      Images.insert(file, function(err, file){
        if(err){
          console.log("Error");
        } else {
          console.log("Success");
        };
      });

      if(dropzone.getQueuedFiles().length === 0){
        dropzone.removeAllFiles();
      }
    }
  });

});