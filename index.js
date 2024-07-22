// task 1 : Itération avec Async/Await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 async function iterateWithAsyncAwait(arr) {
    for (const el of arr) {
      console.log(el);
      await delay(1000); 
    }
  }
  //iterateWithAsyncAwait([1,2,3])

  // task 2: En attente d'un appel

  //task 2
async function waitCall() {

    try{
         const response = await fetch('https://fakestoreapi.com/products');
         const responseData = await response.json();
         console.log(responseData);
          return responseData
     }catch(error)
     {
         console.error("Erreur lors de la récupération des données de l'API :", error.message);
     }  
 }
waitCall()

// task 3 Gestion des erreurs avec Async/Await

async function chainedAsyncFunctions() {
    try {
      await waitCall();
      await delay(3000);
      await waitCall();
      await delay(3000);
      await waitCall();
   
      console.log('all functions was executed');
    } catch (error) {
      console.error(error);
    }
  }
  chainedAsyncFunctions()

 

