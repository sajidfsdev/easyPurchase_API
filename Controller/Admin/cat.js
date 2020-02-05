const catModel=require('../../Model/Admin/cat');
const subCatModel=require('../../Model/Admin/subCat');
const subSubCatModel=require('../../Model/Admin/subSubCat');

exports.handleAddCat=async (req,resp,next)=>{

    let { cat }=req.body;

    //Conversions........
    cat=cat.toUpperCase();


    //try catch starts here.................
    try
    {
        //first checking duplication possibility......
        const dupRes=await catModel.findOne({cat});

        if(dupRes)
        {
            return resp.status(500).json({
                errorMessage:"This Category Already Exists"
            });
        }

        //No Duplication Found......

        const newCat=new catModel({cat:cat,prods:0});

        const saveres=await newCat.save();

        if(saveres)
        {
            return resp.status(201).json({
                successMessage:"Category Has Been Added Successfully",
                cat:cat
            });
        }
        else
        {
            return resp.status(500).json({
                errorMessage:"Error Occurred While Saving Category Information"
            });
        }
    }
    catch(err)
    {
        return resp.status(500).json({
            errorMessage:err.message
        });
    }
    //try catch ends here...................

}//....................................handle add cat ends...







exports.handleAddSubCat=async (req,resp,next)=>{

    let { cat,subCat }=req.body;

    //Conversions........
    cat=cat.toUpperCase();
    subCat=subCat.toUpperCase();


    //try catch starts here.................
    try
    {
        //first checking duplication possibility......
        const dupRes=await subCatModel.findOne({cat,subCat});

        if(dupRes)
        {
            return resp.status(500).json({
                errorMessage:"This Sub-Category Already Exists"
            });
        }

        //No Duplication Found......

        const newSubCat=new subCatModel({cat:cat,subCat:subCat,prods:0});

        const saveres=await newSubCat.save();

        if(saveres)
        {
            return resp.status(201).json({
                successMessage:"Sub-Category Has Been Added Successfully",
                cat:cat
            });
        }
        else
        {
            return resp.status(500).json({
                errorMessage:"Error Occurred While Saving Sub-Category Information"
            });
        }
    }
    catch(err)
    {
        return resp.status(500).json({
            errorMessage:err.message
        });
    }
    //try catch ends here...................

}//....................................handle add Sub-cat ends...














exports.handleAddSubSubCat=async (req,resp,next)=>{

    let { cat,subCat,subSubCat }=req.body;

    //Conversions........
    cat=cat.toUpperCase();
    subCat=subCat.toUpperCase();
    subSubCat=subSubCat.toUpperCase();


    //try catch starts here.................
    try
    {
        //first checking duplication possibility......
        const dupRes=await subSubCatModel.findOne({cat,subCat,subSubCat});

        if(dupRes)
        {
            return resp.status(500).json({
                errorMessage:"This Sub-Sub-Category Already Exists"
            });
        }

        //No Duplication Found......

        const newSubSubCat=new subSubCatModel({cat:cat,subCat:subCat,subSubCat,subSubCat,prods:0});

        const saveres=await newSubSubCat.save();

        if(saveres)
        {
            return resp.status(201).json({
                successMessage:"Sub-Sub-Category Has Been Added Successfully",
                cat:cat
            });
        }
        else
        {
            return resp.status(500).json({
                errorMessage:"Error Occurred While Saving Sub-Sub-Category Information"
            });
        }
    }
    catch(err)
    {
        return resp.status(500).json({
            errorMessage:err.message
        });
    }
    //try catch ends here...................

}//....................................handle add SubSubcat ends...