const fs =  require('fs');
const factory = require('./factory');

const makeUser = (i) => {
  return {
    id: i,
    name: `name_${i}`,
  }
}

const makeUsers = (depth, maxDepth) => {
  return (i) => {

    if(depth <= maxDepth) {
      const nextDepth = depth + 1;
      return {
        ...makeUser(i),
        children: factory.range(0, 3, makeUsers(nextDepth, maxDepth))
      }
    }

    return {
      ...makeUser(i)
    }
  }
}

const data = {
  users: []
};
data.users = factory.range(0, 10, makeUsers(1,3));
factory.createJson(data, './dist/index.json');
