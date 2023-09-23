const { StatusCodes } = require("http-status-codes");

const {UserService} = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");


async function signup(req, res) {
    try {
      const user  = await UserService.create({
       email: req.body.email,
       password : req.body.password
      });
      SuccessResponse.data = user;
      return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function signin(req, res) {
  try {
    const response  = await UserService.signin({
     email: req.body.email,
     password : req.body.password
    });
   
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function addRoleToUser(req, res) {
  try {
    const role  = await UserService.addRoleToUser({
     role: req.body.role,
     id:req.body.id,
    });
    SuccessResponse.data = role;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
   signup,
   signin,
   addRoleToUser
}