const authCtrl = require('../controllers/authCtrl');

const mw = async function(req, res, next) {
  const userID = req.session.userID;
   if (!userID) {
      req.dearUser = { status: 'identify error: user is not identify'}
      next();
      return;
   }

   const user = await authCtrl.identifyUser(userID);
   console.log('* * * * success identify user', user.status);
   req.dearUser = user;
   next();
}

module.exports = mw;