module.exports = function(app, passport, db, multer, ObjectId) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  app.get('/success', isLoggedIn, function(req, res) {
    var currentpage = req.user.currentPage
    console.log(currentpage)
    res.redirect(currentpage)
  })


  // PROFILE SECTION =========================
  app.get('/profile', isLoggedIn, function(req, res) {
    // console.log(req)
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  // PROFILE 2 SECTION==============================
  app.get('/profile2', isLoggedIn, function(req, res) {
    console.log(req)
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile2.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  // PROFILE 3 SECTION==============================
  app.get('/profile3', isLoggedIn, function(req, res) {
    console.log(req)
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile3.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  // PROFILE 4 SECTION==============================
  app.get('/profile4', isLoggedIn, function(req, res) {
    console.log(req)
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile4.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  // HOME PAGE SECTION =========================
  app.get('/home', isLoggedIn, function(req, res) {
    console.log(req)
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('home.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  app.put('/currentPage', isLoggedIn, function(req, res){

    var email = req.user.local.email
    var password = req.user.local.password
    db.collection('users')
    .findOneAndUpdate({'local.email': email, 'local.password': password}, {
      $set: {
        currentPage:req.body.currentPage
      }
    }, {
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // react routes ================================================================

  // MAIN TEST ROUTE
  app.get('/api/messages', function(req, res) {
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.json(result)
    })
  });

  // message board routes ========================================================

  app.post('/messages', (req, res) => {
    db.collection('messages').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0, page:req.body.page}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile',)
    })
  })

  // message board routes ========================================================

  app.post('/messages2', (req, res) => {
    db.collection('messages').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0, page:req.body.page}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile2',)
    })
  })

  // message board routes ========================================================

  app.post('/messages3', (req, res) => {
    db.collection('messages').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0, page:req.body.page}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile3',)
    })
  })

  app.post('/messages4', (req, res) => {
    db.collection('messages').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0, page:req.body.page}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile4',)
    })
  })

  app.put('/messages', (req, res) => {
    db.collection('messages')
    .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
      $set: {
        thumbUp:req.body.thumbUp + 1
      }
    }, {
      sort: {_id: + 1},
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

  app.put('/messagesDown', (req, res) => {
    db.collection('messages')
    .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
      $set: {
        thumbDown:req.body.thumbDown - 1
      }
    }, {
      sort: {_id: - 1},
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

  app.delete('/messages', (req, res) => {
    db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
      if (err) return res.send(500, err)
      res.send('Message deleted!')
    })
  })

  //---------------------------------------
  // IMAGE CODE
  //---------------------------------------
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + ".png")
    }
  });
  var upload = multer({storage: storage});

  app.post('/up', upload.single('file-to-upload'), (req, res, next) => {

    insertDocuments(db, req, 'images/uploads/' + req.file.filename, () => {
      //db.close();
      //res.json({'message': 'File uploaded successfully'});
      res.redirect('/home')
    });
  });

  var insertDocuments = function(db, req, filePath, callback) {
    var collection = db.collection('users');
    var uId = ObjectId(req.session.passport.user)
    collection.findOneAndUpdate({"_id": uId}, {
      $set: {
        profileImg: filePath
      }
    }, {
      sort: {_id: -1},
      upsert: false
    }, (err, result) => {
      if (err) return res.send(err)
      callback(result)
    })
  }

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/login', function(req, res) {
    res.render('index.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/success', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', isLoggedIn, function(req, res) {
    var user            = req.user;
    user.local.email    = undefined;
    user.local.password = undefined;
    user.save(function(err) {
      res.redirect('/profile');
    });
  });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
  return next();

  res.redirect('/');
}
