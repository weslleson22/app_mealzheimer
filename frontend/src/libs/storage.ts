import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";


export interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
  hour: string;
  dateTimeNotification: Date;
}

interface StoragePlantPros{
  [id: string]: {
    data: PlantProps;
  }
}
export async function savePlant(plant: PlantProps): Promise<void> {
  
}
