let secureApi = (req, res, next) => {
    // console.log("ami middleware e asi");
    // next();
    // console.log(req.headers.authorization);
    if (req.headers.authorization == "jnbuSR2o0G7FYWW") {
        next();
    }else{
        res.send("Authoraization Failed")
    }
}

module.exports = secureApi;