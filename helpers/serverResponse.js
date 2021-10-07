const serverResponse = ({
  res,
  data,
  status = 200,
  statMessage = "Request is success",
}) => {
  res.status(status).json({
    status: statMessage,
    code: status,
    data,
  });
};

module.exports = serverResponse;
