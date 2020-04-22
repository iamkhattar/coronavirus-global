const api = require("./api");
const chalk = require("chalk");
const Table = require("cli-table");

/**
 * Prints global Covid19 Summary in the command Line
 */
const printSummary = async () => {
  const res = await api.getSummary();
  var table = new Table();

  const newConfirmed = chalk.blue.bold(res.NewConfirmed);
  const totalConfirmed = chalk.cyan.bold(res.TotalConfirmed);
  const newDeaths = chalk.magenta.bold(res.NewDeaths);
  const totalDeaths = chalk.red.bold(res.TotalDeaths);
  const newRecovered = chalk.yellow.bold(res.NewRecovered);
  const totalRecovered = chalk.greenBright.bold(res.TotalRecovered);

  table.push(["New Confirmed Cases", newConfirmed]);
  table.push(["Total Confirmed Cases", totalConfirmed]);

  table.push(["New Deaths", newDeaths]);
  table.push(["Total Deaths", totalDeaths]);

  table.push(["New Recovered Cases", newRecovered]);
  table.push(["Total Recovered Cases", totalRecovered]);

  console.log(table.toString());
};

const printSlugs = async () => {
  const res = await api.getSlugs();
  console.log(res);
};

module.exports.printSummary = printSummary;
module.exports.printSlugs = printSlugs;