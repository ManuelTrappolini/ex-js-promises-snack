//Ottieni il titolo di un post con una Promise.

//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
//🎯 Bonus: Ottieni l'intero post con l'autore
//Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.



const getPost = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {

                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(userData => {

                        post.user = userData;
                        resolve(post);
                    })
                    .catch(reject);
            })
            .catch(reject);
    });
}

getPost(1)
    .then(data => console.log(`
        Title: ${data.title}
        Body: ${data.body}
        Tags: ${data.tags}
        User: ${data.userId}`))
    .catch(error => console.error(error));



