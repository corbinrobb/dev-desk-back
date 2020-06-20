
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { username: "Steve",
          password: "$2a$08$IWkMKT9n1/oBainF6gWH7.nkwe.STComE40nHovPywm.ZgwRqPq3y",
          is_helper: 0,
          email: "steve@email.com" },
        { username: "Sara",
          password: "$2a$08$FUhSouIfgLyLcg3wNQzd4.rDY9Z0M6YZY6gbpVIrajgm6xI93R.e2",
          is_helper: 1,
          email: "sara@email.com" }
      ]);
    });
};
