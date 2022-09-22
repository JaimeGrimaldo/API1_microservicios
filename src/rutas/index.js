const {Router} = require("express");
const router = Router();


router.get('/test', (req,res) => {
    const data = {
        "nombre":"Jaime Grimaldo Moreno",
        "Cuatrimestre":"12"
    }
    res.json(data);
});

module.exports = router;