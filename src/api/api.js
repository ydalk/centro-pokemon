
const API = "http://localhost:4000"

export const getData =  () => {

    const get = async () =>{

        const response = await fetch(`${API}/data`);
        const result = await response.json()
        return result;
    }

    
}


export const postData = async (body) => {

    const settings = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
      }
    }


    fetch(`${API}/new`, settings)
    .then(respuesta => respuesta.json())
   
};
