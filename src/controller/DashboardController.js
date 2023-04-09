import Coffee from "../models/Coffee";

class DashboardController {
    async show(req, res) {
        const { user_id } = req.headers;

        const coffees = await Coffee.find({ user: user_id })

        return res.json(coffees);
    }
}

export default new DashboardController();