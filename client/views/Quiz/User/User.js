//Todo: replace this bullshit with real Accounts and Database

Session.setDefault('userName', 'GUEST' + Random.id(4));
Session.setDefault('userPoints', 0);
Session.setDefault('isGuest', true);


/**
 * USER EVENTS
 */
Template.user.events({
    'click .setUsername': function () {
        var newUsername = $('#username').val();
        Session.set('userName', newUsername);
        Session.set('isGuest', false);
    }
});

/**
 * USER HELPERS
 */
Template.user.helpers({

    'isGuest': function () {

        return Session.get('isGuest');

    },
    'userName': function () {
        return Session.get('userName');
    },

    'userPoints': function () {
        //Todo:  point generator
        return Session.get('userPoints');
    }
});





