import Knex from '../database/connection';
import {Request, Response} from 'express';
class PointsController{

    async show(request: Request, response: Response){
        const {id} = request.params;
        const point = await Knex('points').where('id', id).first();

        if (!point){
            return response.status(400).json({message: 'Point nor found'});
        }

        /**
         * SELECT *FROM items
         * JOIN point_items ON items.id = point_items.item_id
         * WHERE point_items.point_id = {id}
         */
        const items = await Knex('items')
            .join('point_items','items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');
        return response.json({point,items});
    }

    async create(request: Request, response: Response ){
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;


  const points = {
             
    image: 'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  };
  const trx = await Knex.transaction();
  const insertedIds =  await trx('points').insert(points);
const point_id = insertedIds[0];

const pointItems = items.map((item_id: number)=>{
    return{
        item_id,
        point_id,
    };
})
await trx('point_items').insert(pointItems);
await trx.commit();
   return response.json(
    {
        id: point_id,
        ...points,
    }
   );
    }
}
export default PointsController;