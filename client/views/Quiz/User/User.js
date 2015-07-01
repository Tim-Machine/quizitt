//Todo: replace this bullshit with real Accounts and Database


Session.setDefault('user', {
    name: 'GUEST' + Random.id(2),
    isGuest: true,
    points:0
});


/**
 * USER EVENTS
 */
Template.user.events({
    'click .setUsername': function () {
        //Check if Username is unique
        var newUsername = $('#username').val();
        var user = Session.get('user');

        if (user.name === newUsername) {
            sweetAlert('username is already taken');
            newUsername.val('');
        } else {
            Session.set('user',
                {
                    name: newUsername,
                    isGuest: false
                });
        }
    }

});

/**
 * USER HELPERS
 */
Template.user.helpers({

    'isGuest': function () {
        var user = Session.get('user');
        if (user.isGuest) {
            return true;
        }
        return false;
    },
    'userName': function () {
        return Session.get('user').name;
    },

    'userPoints': function () {
       //Todo:  point generator
        return Session.get('user').points;
    }


});





