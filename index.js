const { argv } = require('yargs');
const parse = require('csv-parse');
const fs = require('fs');

parse(fs.readFileSync(argv.source), (err, output) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(output);
  const mapped = output.map(([name,, lat, lng, gmapsLink, link]) => ({
    name,
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    gmapsLink,
    link
  }));

  fs.writeFileSync(argv.target, JSON.stringify(mapped, undefined, 4));
});
