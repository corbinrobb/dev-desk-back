
exports.seed = function(knex) {
  return knex('tickets').truncate()
    .then(function () {
      return knex('tickets').insert([
        { title: "Getting strange error",
          description: "Couldn't get index file to open",
          tried: "Googling it",
          category: "Web",
          created_by: 1,
          assigned_to: 0
        },
        {
          title: "Cant sign in to github",
          description: "Tried to sign in but it was not working",
          tried: "Googling it and asking a friend",
          category: "Github",
          created_by: 1,
          assigned_to: 2
        }
      ]);
    });
};
