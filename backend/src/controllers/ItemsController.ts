import Knex from '../database/connection';
import {Request, Response} from 'express';

class ItemsController{
    async index(request: Request, response: Response){
        const items = await Knex('items').select('*');
        const serializedItems = items.map(item=>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://128.199.7.156:3333/uploads/${item.image}`,
            }; 
        }); 
        return response.json(serializedItems);
    }
}

export default ItemsController;