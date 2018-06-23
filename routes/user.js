const cwd = process.cwd();
var express = require('express');
const db = require(cwd+'/database/db');
const controller=require(cwd+'/controller/user/controller');
var router = express.Router();


/* GET home page. */
//제일 초기화면 경로는 /로 받아온다. index화면을 뿌려줌.
router.get('/',controller.main_content);

//메인화면은 방송중인 화면으로 경로는 /main이다.
router.get('/main', function(req, res, next) {res.render('user/main');});

//공지사항, 사연, 후기 리스트를 보여주는 화면 controller 외부 모듈의 함수를 이용한다.
router.get('/notice',controller.notice_list);
router.get('/story',controller.story_list);
router.get('/review',controller.review_list);

//리스트 중에서 내용 클릭 시 해당 내용들을 보여주는 화면, controller 외부 모듈의 함수를 이용.
router.get('/story/:id',controller.story_view);
router.get('/review/:id',controller.review_view);
router.get('/notice/:id',controller.notice_view);

//사용자가 사연을 작성할때 get으로 받으면 화면을 뿌려주고, post로 받으면 controller 외부모듈 함수를 이용해서 디비에 값을 넣어준다.
router.get('/story_write',function(req,res,next){res.render('user/story_write');});
router.post('/story_write',controller.story_write);

//사용자가 후기를 작성할때 get으로 받으면 화면을 뿌려주고, post로 받으면 controller 외부모듈 함수를 이용해서 디비에 값을 넣어준다.
router.get('/review_write',function(req,res,next){res.render('user/review_write');});
router.post('/review_write',controller.review_write);


module.exports = router;
