// domain/.netlify/functions/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello Andrew, I am Node, nice to meet you :)",
  };
};
