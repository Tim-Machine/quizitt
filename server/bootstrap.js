Meteor.startup(function () {

    if (Questions.find().count() === 0) {
        the_simpsons();
    }
});