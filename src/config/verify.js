
import db from "../../db/models/";

class ValidationRules  {

   
  
    async checkDuplicateEmail(req, res, next) {
        try {
          const user = await db.Customers.findOne({ where: { email: req.body.email } });
          if (user) {
            return res.json({ success: false, msg: 'Email already exists! ' });
          }
          return next();
        }
        catch (error) {
          return res.status(400).json(error);
        }
      }
  
  }
  export default new ValidationRules();