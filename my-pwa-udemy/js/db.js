// HABILITA PERSISTENCIA EN FIREBASE
db.enablePersistence().catch(err => {
    if (err.code == 'failed-precondition') {
        console.log('multiple tabs opened')
    } else if (err.code == 'unimplemented') {
        console.log('browser not support')
    }
})



// read data from firestore and get data of changes
db.collection('pwa-plants').onSnapshot((snapshot) =>{
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            console.log(`${change.doc.id} is added`)
            //change.doc.data()
            //change.doc.id
            // renderContacts(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
            console.log(`${change.doc.id} is removed`)
            // removeContact(change.doc.id);
            // uso esa funcion para remover del dom
        }
    })
})

// write data on firestore
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        name: form.name.value,
        amount: form.detail.value
    }
    db.collection('pwa-plants').add(data).then(()=>{
        form.reset();
        console.log('data sended')
    }).catch((err)=>console.log('err to send data'))
})

// Delete data from firestore
// db.collection('contacts').doc(id).delete()