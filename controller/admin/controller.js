///////////////////////관리자 controller///////////////////////
const cwd = process.cwd();
const db=require(cwd+'/database/db');

/////////////////사연 부분///////////////////////////////
//데이터베이스에서 사연 테이블을 조회해서 ejs파일로 값을 넘겨주고 띄어준다.
exports.story_list=(req,res)=>{
  db.query('select * from story',(err,results)=>{
    if(err) console.log(err);
    res.render('admin/story',{story:results});
  });
};

//사연 리스트에서 사연을 클릭하면 해당 사연의 내용을 보여준다.
exports.story_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from story where Story_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('admin/story_content',{story:results});
  });
};
//사연 리스트에서 사연을 삭제하는 코드
exports.story_delete=(req,res)=>{
  var id = req.body.id;
  console.log(id);
  db.query('delete from story where Story_ID = ?',[id],(err)=>{
    if(err) console.log(err);
    res.redirect('/admin/story');
  });
};
//사연 리스트에서 사연을 채택하는 코드
exports.story_select=(req,res)=>{
  var id = req.body.select_id;
  console.log(id);
  db.query('update story set isSelected = 0 where isSelected = 1',(err)=>{
    if(err) console.log(err);
      db.query('update story set isSelected = 1 where Story_ID = ?',[id],(err)=>{
        if(err) console.log(err);
          res.redirect('/admin/story');
      });
  });
};

////////////////후기 부분/////////////////////////////
//데이터베이스에서 후기 테이블을 조회해서 ejs파일로 값을 넘겨주고 띄어준다.
exports.review_list=(req,res)=>{
  db.query('select * from review',(err,results)=>{
    if(err) console.log(err);
    res.render('admin/review',{review:results});
  });
};

//후기 리스트에서 후기을 클릭하면 해당 후기의 내용을 보여준다.
exports.review_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from review where Review_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('admin/review_content',{review:results});
  });
};

exports.review_delete=(req,res)=>{
  var id = req.body.id;
  console.log(id);
  db.query('delete from review where Review_ID = ?',[id],(err)=>{
    if(err) console.log(err);
    res.redirect('/admin/review');
  });
};


//////////////////공지사항 부분////////////////////////
//공지사항 리스트를 보여주는 화면
exports.notice_list=(req,res)=>{
  db.query('select * from notice',(err,results)=>{
    if(err) console.log(err);
    res.render('admin/notice',{notice:results});
  });
};

//공지사항 리스트에서 공지사항을 클릭하면 해당 공지사항 내용을 보여준다.
exports.notice_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from notice where Notice_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('admin/notice_content',{notice:results});
  });
};

//공지사항 작성페이지에서 ejs에 넘어온 값을 받아서 디비에 넣어준다.
exports.notice_write=(req,res)=>{
  var title = req.body.title;
  var content = req.body.content;
  db.query('Insert into notice(Notice_Title,Notice_Content) values (?,?)',[title,content],(err,results)=>{
    if(err) console.log(err);
    res.redirect('/admin/notice')
  });
};

exports.notice_delete=(req,res)=>{
  var id = req.body.id;
  console.log(id);
  db.query('delete from notice where Notice_ID = ?',[id],(err)=>{
    if(err) console.log(err);
    res.redirect('/admin/notice');
  });
};