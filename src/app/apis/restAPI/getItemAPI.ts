import { ItemInterface } from "@/app/apis/addItem"

const getItemAPI = async ({
  id,
}: {
  id: string
}) : Promise<ItemInterface> =>{

  try{
    const res = await fetch('https://[PROJECT_ID].firebaseio.com/users/jack/name.json')
  }
  
  

}

export default getItemAPI
