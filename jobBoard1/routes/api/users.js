var router = require('express')();
var auth = require('../auth');

//preloading user object on routes to the :id
router.param('id', require('../../controllers/userController').loadUser);

//home page along with search and featured jobs
router.get('/', require('../../controllers/userController').homepage);

//hoem page browse jobs without forms
router.get('/browsejobs', require('../../controllers/userController').browseJobs);

//home page having browse jobs options
router.get('/:id/browsejobs', auth.required, require('../../controllers/userController').browseJobs);

//browse all resumes
router.get('/:id/browseresumes', auth.required, require('../../controllers/userController').browseResumes);


//search a resume
router.post('/:id/searchresumes', auth.required, require('../../controllers/userController').searchResumes);

//search jobs
router.get('/searchjobs', require('../../controllers/userController').searchjobs);

//login for both 
router.post('/login', require('../../controllers/userController').login);

//signing up
router.post('/signup' ,require('../../controllers/userController').signup);

//adding jobseeker education
router.post('/:id/register/education', auth.required, require('../../controllers/userController')
            .educationDetails);

//user home page
router.get('/:id/home', auth.required, require('../../controllers/userController').userHome);

//route to adding job
router.get('/:id/addJob', auth.required, require('../../controllers/userController').addJobForm);

//adding jobs
router.put('/:id/addJob', auth.required, require('../../controllers/userController').addJob);

//editing job
router.get('/:id/editjob', auth.required, require('../../controllers/userController').viewEditJob);


module.exports = router;
