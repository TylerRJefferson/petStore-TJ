//Create and connect to firestoredb

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "./serviceAccount.js";

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

//-------------------------------------------------------------------//
/* Create and add info for a pet store
3 collections - customers, pets, products
at least 2 docs each */

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


// const newProduct = {
//   name:"Dog Food",
//   price:"$24.99",
//   sku:"38591",
//   stocked: "2022-09-07",
// }

// db.collection('Products').add(newProduct)
//   .then(doc => console.log('Product added:', doc.id))
//   .catch(console.error);

//-----------------------------------------------------------------//
//Query all customers, pets, & products

// db.collection('Customers').get()
//   .then(collection => {
//     collection.docs.forEach(doc => {
//       console.log(doc.id, doc.data())
//     })
//   })
//   .catch(console.error);

// db.collection('Products').get()
//   .then(collection => {
//     collection.docs.forEach(doc => {
//       console.log(doc.id, doc.data())
//     })
//   })
//   .catch(console.error);

// db.collection('Pets').get()
//   .then(collection => {
//     collection.docs.forEach(doc => {
//       console.log(doc.id, doc.data())
//     })
//   })
//   .catch(console.error);

//--------------------------------------------------//
//Update one pet & one product

// db.collection('Pets').doc('A8YVELoSZ20re6zQHAfB')
//   .update({Breed: 'Calico'})
//   .then(() => console.log('Update Done!'))
//   .catch(console.error)

db.collection('Products').doc('7uiE0iG7a9J9om9FTsgM')
  .update({Price: '$24.99'})
  .then(() => console.log('Update Done!'))
  .catch(console.error)

