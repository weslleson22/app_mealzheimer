import { ItemProps } from "../components/Item";

export function foodContains(items: ItemProps[], foodName: string){
    for(const item of items){
        if (item.name.toLocaleLowerCase()===foodName.toLocaleLowerCase()){
            return true;
        }

    }
    return false;
}