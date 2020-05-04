const { User: Users } = require('../../../../models/index');


const removeUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.destroy({
            where: { id: id }
        })
        res.send(200);
    }
    catch (e) {
        res.send(e)
        console.log("error", e.message)
    }
}
module.exports = removeUser;

