const express=require('express');
const exRoute=express.Router();
const AuthVal=require('../../Middleware/Auth');
const ctrl=require('../../Controller/Admin/cat');

exRoute.post('/addCat',AuthVal,ctrl.handleAddCat);

exRoute.post('/addSubCat',AuthVal,ctrl.handleAddSubCat);

exRoute.post('/addSubSubCat',AuthVal,ctrl.handleAddSubSubCat);

module.exports=exRoute;