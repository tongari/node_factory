const fs =  require('fs');

const range = (start, length, makeStruct) => {
  const result = [];
  for(let i = start; i < length; ++i) {
    result.push(makeStruct(i));
  }
  return result;
}

const createJson = (data, dist) => {
  const dir =  fs.readdirSync('./dist');
  if(!dir) fs.mkdirSync('./dist');
  
  fs.writeFile(dist, JSON.stringify(data, null, '  '), (err) => {
    if (err) throw err;
    console.log('Build Success!!');
  });
}

module.exports = {
  range,
  createJson
}