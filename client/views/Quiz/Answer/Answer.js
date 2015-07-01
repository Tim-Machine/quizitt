/**
 * EVENTS
 */
Template.answer.events({
    'keydown .answer': function (e) {
        if (e.keyCode === 13) {
            Meteor.call('submitQuestion',
                {
                    keyCode: e.keyCode,
                    answer: 'submit'
                },
                function (err, res) {
                    if (err) {
                        Session.set('result', 'DONT HACK THE GAME');
                    }

                    console.log(res);
                }
            );
        }
    }
});
