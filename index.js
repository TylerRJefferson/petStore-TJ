import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./serviceAccount.js";

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// const newCustomer = {
//   name: 'Damian',
//   phone: 1234567890,
//   email: 'damian@bocacode.net',
//   location: 'Boca Raton',
// }

// db.collection('Customers').add(newCustomer)
//   .then(doc => console.log('Customer created:', doc.id))
//   .catch(console.error);

// const newPet = {
//   name: 'Crush',
//   species: 'tortoise',
//   //breed: 'English Bulldog',
//   vaccinated: false,
//   age: '30 years',
// }

// db.collection('Pets').add(newPet)
//   .then(doc => console.log('Pet added:', doc.id))
//   .catch(console.error);

const newProduct = {
  name:"Dog Food",
  price:"$24.99",
  sku:"38591",
  stocked: "2022-09-07",
}

db.collection('Products').add(newProduct)
  .then(doc => console.log('Product added:', doc.id))
  .catch(console.error);