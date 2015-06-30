Meteor.startup(function () {
    var questions = [
    {
        question: 'What color is the sky?',
        type: 'multi',
        options: ['red', 'blue', 'green'],
        answer: 'blue'
    }
    ];

    if (Questions.find().count() === 0) {
        questions.forEach(function (question) {
            Questions.insert(question);
        });
    }
});