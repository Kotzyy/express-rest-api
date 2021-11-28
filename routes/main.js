__path = process.cwd()
let express = require('express');
let db = require(__path + '/database/db');
try {
let KotzGanz = db.get("api2");
} catch (e) {
	console.log('')  
}
let router = express.Router();

// Scrapernya
const { herodetails } = require(__path + '/plugin/herodetail')

router.get('/', (req, res) => {
    res.status(200).json({
    	status: false,
    	message: "Sorry, the page you are looking for doesn't exist",
        feature: {
        	herordetail: https://" + req.hostname + "/herodetail?query=Zilong"
        	}
})
})

router.get('/herodetail', async (req, res, next) => {
     const query = req.query.query;
           
     herodetails(query).then(result => {
        res.status(200).send({creator: "Kotzyy", status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
})


module.exports = router
