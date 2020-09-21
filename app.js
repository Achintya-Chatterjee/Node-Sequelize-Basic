const Sequelize = require("sequelize");

const connection = new Sequelize("demo_schema", "root", "7872386160", {
  host: "localhost",
  dialect: "mysql",
});

const Article = connection.define("article", {
  title: Sequelize.STRING,
  bosy: Sequelize.TEXT,
});

connection.sync().then(function () {
  Article.findAll().then(function (articles) {
    console.log(articles.length);
  });
});
