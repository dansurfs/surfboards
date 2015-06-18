Images = new FS.Collection("myImages", {
  stores: [new FS.Store.FileSystem("myImages", {path: "~/uploads"})]
});

PlayersList = new Mongo.Collection('players');