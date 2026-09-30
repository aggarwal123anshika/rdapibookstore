const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin() {
    try {
        let user = await User.findOne({ email: 'anshika@yopmail.com' });
        //console.log(user)
        if (user) {
            console.log('user updated successfully...');
        } else {
            user = new User();
            user.firstName = 'Anshika';
            user.lastName = 'Aggarwal';
            user.mobileNo = '9258409966';
            user.email = "anshika@yopmail.com";
            let password = bcrypt.hashSync('123456', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("user created successfully....");
        }
    } catch (err) {
        console.log(err)
    }
}
module.exports = createAdmin