///////////////////////사용자 controller///////////////////////
const cwd = process.cwd();
const db=require(cwd+'/database/db');

///////////////메인화면 부분////////////////
exports.main_content=(req,res)=>{
  db.query('select * from story where isSelected = 1',(err,results)=>{
    if(err) console.log(err);
    res.render('user/index',{story:results});
  });
};


/////////////////사연 부분///////////////////////////////
//데이터베이스에서 사연 테이블을 조회해서 ejs파일로 값을 넘겨주고 띄어준다.
exports.story_list=(req,res)=>{
  db.query('select * from story',(err,results)=>{
    if(err) console.log(err);
    res.render('user/story',{story:results});
  });
};

//사연 작성페이지에서 ejs에 넘어온 값을 받아서 디비에 넣어준다.
exports.story_write=(req,res)=>{
  var title = req.body.title;
  var name = req.body.name;
  var dest = req.body.dest;
  var content = req.body.content;
  db.query('Insert into story(Story_Title,Story_Dest,Story_Content,User_Name) values (?,?,?,?)',[title,dest,content,name],(err,results)=>{
    if(err) console.log(err);
    res.redirect('/story')
  });
};

//사연 리스트에서 사연을 클릭하면 해당 사연의 내용을 보여준다.
exports.story_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from story where Story_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('user/story_content',{story:results});
  });
};

////////////////후기 부분/////////////////////////////
//데이터베이스에서 후기 테이블을 조회해서 ejs파일로 값을 넘겨주고 띄어준다.
exports.review_list=(req,res)=>{
  db.query('select * from review',(err,results)=>{
    if(err) console.log(err);
    res.render('user/review',{review:results});
  });
};

//후기 리스트에서 후기을 클릭하면 해당 후기의 내용을 보여준다.
exports.review_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from review where Review_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('user/review_content',{review:results});
  });
};

//후기 작성페이지에서 ejs에 넘어온 값을 받아서 디비에 넣어준다.
exports.review_write=(req,res)=>{
  var title = req.body.title;
  var name = req.body.name;
  var content = req.body.content;
  db.query('Insert into review(Review_Title,Review_Content,User_Name) values (?,?,?)',[title,content,name],(err,results)=>{
    if(err) console.log(err);
    res.redirect('/review')
  });
};

//////////////////공지사항 부분////////////////////////
//공지사항 리스트를 보여주는 화면
exports.notice_list=(req,res)=>{
  db.query('select * from notice',(err,results)=>{
    if(err) console.log(err);
    res.render('user/notice',{notice:results});
  });
};

//공지사항 리스트에서 공지사항을 클릭하면 해당 공지사항 내용을 보여준다.
exports.notice_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from notice where Notice_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('user/notice_content',{notice:results});
  });
};
