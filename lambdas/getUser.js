const Responses = require("./API_Responses");

exports.handler = async (event) => {
  console.log(`Getting user with ${JSON.stringify(event)}`);

  const { pathParameters } = event;

  if (!pathParameters.ID) {
    // failed without an ID
    return Responses._400({ message: "missing the ID from the path" });
  }

  let id = pathParameters.ID;

  if (!data[id]) {
    // failed as ID not in the data
    return Responses._400({ message: "no ID in data" });
  }

  // return data
  return Responses._200(data[id]);
};

const data = {
  1: { name: "Crystal Luciano", age: 26, job: "QA" },
  2: { name: "Brian Luciano", age: 24, job: "Backend Developer" },
  3: { name: "Peter Griffin", age: 38, job: "Factory Worker" },
};
