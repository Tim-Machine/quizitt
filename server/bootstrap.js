Meteor.startup(function () {

    var questions = [
    {
        question: 'What color is the sky?',
        type: 'multi',
        options: ['red', 'blue', 'green'],
        answer: 'blue'
    },
        {
            question: 'Is Meteor good for everyone?',
            type: 'multi',
            options: ['yes', 'no'],
            answer: 'yes'
        },
        {
            question: 'Yes?',
            type: 'string',
            answer: 'yes'
        }

    ];

    if (Questions.find().count() === 0) {
        questions.forEach(function (question) {
            Questions.insert(question);
        });
    }
});