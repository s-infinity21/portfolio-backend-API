const router = require('express').Router();
const { getAbout } = require('../controllers/aboutControl');

/*ABOUT PAGE ROUTES */

//GET request (Get users)
router.get('/about', getAbout);

//GET request (Get specific user)
router.get('/about/:id', (req, res) => {
	res.send('About Page Get Request with ID ');
});

//POST request (Add Users)
router.post('/about', (req, res) => {
	res.send('About Page Post Request');
});

//PUT request (Update User)
router.put('/about/update/:id', (req, res) => {
	res.send('About Page Put Request with ID');
});

//DELETE request (Delete User)
router.delete('/about/:id', (req, res) => {
	res.send('About Page Delete Request with ID');
});

module.exports = router;
