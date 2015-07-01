//Stores the Question id
var questionID;
Meteor.methods({

    randomQuestion: function () {
        var random = _.sample(Questions.find().fetch());
        var question = Questions.findOne({_id: random && random._id}, {fields: {'question': 1}});
        questionID = question._id;

    },
    submitQuestion: function (entry) {
        //First Security check i know its not really secure..
        if (entry['keyCode'] != 13) throw new Meteor.Error('OMG DONT HACK THE GAME');
        /*
         Check the answer
         */
    }
});