var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); // 加密库
var Schema = mongoose.Schema;
var UserSchema = new Schema(
  {
    username : {type: String, unique: true, required : true},
    password : {type: String, required: true}
  },
  { timestamps: true }  //时间戳
);

// 在执行save执行的操作
UserSchema.pre('save', function(next) {
  var user = this, SALT_FACTOR = 5;
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // 生成hash以后，替换user的password
      user.password = hash;
      next();
    });
  });
});



module.exports = mongoose.model('User', UserSchema);
