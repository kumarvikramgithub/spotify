// import {backendURL} from './config'
export const makeUnauthenticatedPOSTRequest = async (route, body)=>{
    const response = await fetch("http://localhost:8001"+ route, {
      method: "post",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}