const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    console.log(req.body);
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { Docente } = req.body;
        const { username } = req.body;
        const { password } = req.body;
        const { nombre } = req.body;
        const { numero } = req.body;
        const { correo } = req.body;
        const newUser = new User({ Docente, username, password, nombre, numero, correo });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = userCtrl;