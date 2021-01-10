import db from '../../db/models/';

class CustomersController {

    // Get all
    async getAll(req, res) {
        try {
            const docs = await db.Customers.findAll();
            return res.status(200).json(docs);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    // Insert
    async create(req, res) {
        try {
            const costomer= {
                fullName: req.body.fullName,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address
            }
            const obj = await db.Customers.create(costomer);
            return res.json({ success: true, msg: ' Costumer is Created successfully.' });
        } catch (err) {
            return res.status(400).json({ success: false, msg: 'Costumer  Email already use' });
        }
    }
    // Get by id
    async get(req, res) {
        try {
            const obj = await db.Customers.findOne({
                where: {
                    id: req.params.id
                }
            });;
            if (obj)
                return res.status(200).json(obj);
            else { return res.status(404).json({ error: 'Costumer not found' }) };
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
    // Update by id
    async put(req, res) {
        try {
            const postCollection = await db.Customers.findOne({
                where: { id: req.params.id }
            });
            if (postCollection) {
                const updatedCostumer = await postCollection.update({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address
                })
                res.status(201).send(updatedCostumer);
            }
            else {
                res.status(404).send({ message: 'Costumer Not Found' });
            }
        }
        catch (err) {
            return res.status(404).json({ success: false, msg: 'Costumer does not exist!' });
        }
    }
    // Delete by id
    async delete(req, res) {
        try {
            const user = await db.Customers.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (user) {
                if (!user) {
                    return res.status(400).json({ message: 'Costumer Not Found' });
                }
                user.destroy()
                return res.status(200).json({ message: 'Costumer deleted' })
            }
        }
        catch (err) {
            return res.status(400).json({ success: false, msg: 'Costumer does not exist!' });
        }
    }
}

export default new CustomersController; 