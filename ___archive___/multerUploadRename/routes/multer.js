const express = require('express');
const multer = require('multer');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
   res.render('multer');
});

const upload = multer({dest: './public/uploads/'});

router.post('/', upload.single('inpFileUpload'), (req, res) => {
   const customName = req.body.inpFileUploadText;
   const fileName = req.file.filename;
   fs.rename(`./public/uploads/${fileName}`, `./public/uploads/${customName}`, () => {
      console.log('new filename is:', customName);
  });

   res.json({status: 'ok'});
});


module.exports = router;
