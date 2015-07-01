//Only for DEMO USAGE
if (Questions.find().count() === 0) {
    the_simpsons();
}
function the_simpsons() {
    Questions.remove({});
    for (var i = 0; i < 200; i++) {
        /*
         { a: 'Sector 7B',
         b: 'Sector 7G',
         c: 'Area 7B',
         d: 'Area 7G',
         answer: 'B',
         question: 'In what part of the nuclear power plant does Homer work?',
         totalGamesPlayed: '13304',
         correctPercentage: 87,
         usedHints: '316',
         rand: 1,
         hint: 'He works in a sector.' }
         */

        var question = HTTP.get('http://www.thesimpsonstrivia.com/functions/nextQuestion?nextQuestionId=' + i);
        question = JSON.parse(question.content);
        if (question.question) {
            Questions.insert({
                question: question.question,
                type: 'multi',
                options: [question.a, question.b, question.c, question.d],
                answer: question.answer
            });
        }
    }
}