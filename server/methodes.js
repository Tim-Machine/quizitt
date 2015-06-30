Meteor.methods({

    randomQuestion: function () {

    },


    submitQuestion: function (entry) {
        if (entry['keyCode'] == 13) {
            //Check answer
        } else {
            throw new Meteor.Error('OMG DONT HACK THE GAME');

        }


    }


});