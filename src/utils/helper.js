export const firebaseLooper = (snapshot) => {
    let restaurants_data = [];
    snapshot.forEach(doc => {
        restaurants_data.push({
            ...doc.data(),
            id : doc.id
        })
    })

    return restaurants_data;
}