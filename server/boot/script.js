module.exports = function(app){
  app.models.Todo.create([
    {
      "priority": 3,
      "task": "Je connais angular",
      "checked": false
    },
    {
      "priority": 1,
      "task": "Je connais l'alphabet",
      "checked": true
    },
    {
      "priority": 2,
      "task": "Je suis recruté chez Theodo",
      "checked": true
    },
    {
      "priority": 4,
      "task": "Je deviens CTO",
      "checked": false
    }
  ]);
}
