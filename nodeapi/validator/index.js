exports.createPostValidator = (req, res, next)=>{ 
    req.check('title', "write a title").notEmpty() //title
    req.check('title', "title must be 4-150").isLength({
        min: 4,
        max: 150
    })

    req.check('body', "write a body").notEmpty() //body
    req.check('body', "body must be 4-2000").isLength({
        min: 4,
        max: 2000
    })

    const errors = req.validationErrors() //check errors
    
    if(errors){  //if errors show the first one as they happen
        const firstError = errors.map((error)=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next() //proceed to next middle ware

}




