import Coffee from '../models/Coffee'
import User from '../models/User';

class CoffeeController{

    async index(req, res) {
        const { status } = req.query;

        const coffee = await Coffee.find({ status });

        return res.json(coffee);
    }
    async store(req, res){
        const { filename } = req.file;
        const { description, brand, price, status, type } = req.body;
        const { user_id } = req.headers;

    


        const coffee = await Coffee.create({
            photo: filename,
            user: user_id,
            description,
            brand,
            price,
            status,
            type,
        });
        return res.json(coffee);
    }
    async update(req, res){
        const { filename } = req.file;
        const { coffee_id } = req.params;
        const { description, brand, price, status, type } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        const coffee = await Coffee.findById(coffee_id);
        if(String(user._id) !== String(coffee.user)) {
            return res.status(401).json({ error: `Não autorizado`});
        }

        await Coffee.updateOne({ _id: coffee_id }, {
            hoto: filename,
            user: user_id,
            description,
            brand,
            price,
            status,
            type,
        });

        return res.send();
    }

    async destroy(req, res) {

        const { coffee_id } = req.body;
        const { user_id } = req.headers;

        await Coffee.findByIdAndDelete({ _id: coffee_id })


        return res.json({ message: "Excluída com sucesso!"});
    }
}

export default new CoffeeController();