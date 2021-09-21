const successRequest = (res, data, status = 200) => {
  res.status(status).json({
    status: "Request is success",
    code: status,
    data,
  });
};

module.exports = successRequest;
