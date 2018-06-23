const cwd = process.cwd();
var express = require('express');
const db = require(cwd+'/database/db');
const controller=require(cwd+'/controller/admin/controller');
var router = express.Router();


router.get('/', function(req, res, next) {res.render('admin/index');});
router.get('/main', function(req, res, next) {res.render('admin/main');});

//공지사항, 사연, 후기 리스트를 보여주는 화면 controller 외부 모듈의 함수를 이용한다.
router.get('/notice',controller.notice_list);
router.get('/story',controller.story_list);
router.get('/review',controller.review_list);

//리스트 중에서 내용 클릭 시 해당 내용들을 보여주는 화면, controller 외부 모듈의 함수를 이용.
router.get('/story/:id',controller.story_view);
router.get('/review/:id',controller.review_view);
router.get('/notice/:id',controller.notice_view);

//관리자가 공지사항을 작성할때 get으로 받으면 화면을 뿌려주고, 
//post로 받으면 controller 외부모듈 함수를 이용해서 디비에 값을 넣어준다.
router.get('/notice_write',function(req,res,next){res.render('admin/notice_write');});
router.post('/notice_write',controller.notice_write);

//후기, 사연, 공지사항 리스트에서 삭제버튼 클릭시 포스트 방식으로 ID값을 넘겨준것을 받는다.
router.post('/review',controller.review_delete);
router.post('/story',controller.story_delete);
router.post('/notice',controller.notice_delete);

//사연 채택 시 /story/selet/:id라는 url에 post방식으로 값을 넘긴다.
router.post('/story/select/:id',controller.story_select);

module.exports = router;
