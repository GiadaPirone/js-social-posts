const posts = [
    {   
        "like": 120,
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
        
    },
    {   
        "like": 42,
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {   
        "like": 15,
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {   
        "like": 87,
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {   
        "like": 6,
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let idCorrenti = [];
for (let i = 0; i < posts.length; i++) {
    const postCorrente = posts[i];
    

    //creo div .post
    const divPost = document.createElement("div");
    divPost.className ="post";
    document.querySelector(".posts-list").appendChild(divPost);
    // funzioneNuovoDiv("post",".posts-list" );

    //creo div postHeader
    const divPostHeade = document.createElement("div");
    divPostHeade.className ="post__header";
    divPost.appendChild(divPostHeade);

    //creo div postMeta
    const divPostMeta = document.createElement("div");
    divPostMeta.className ="post-meta";
    divPostHeade.appendChild(divPostMeta);

    //creo div postMetaIcon dentro post meta
    const divPostMetaIcon = document.createElement("div");
    divPostMetaIcon.className ="post-meta__icon";
    divPostMeta.appendChild(divPostMetaIcon);
    let immagineUtente = `<img class="profile-pic" src="${posts[i].author.image}">`

    divPostMetaIcon.innerHTML = immagineUtente;

    //creo div postMetadata dentro post meta
    const divPostMetaData = document.createElement("div");
    divPostMetaData.className ="post-meta__data";
    divPostMeta.appendChild(divPostMetaData);


    //creo postmetaauthor e postmetatime che sono dentro a post meta data
    //postmetaauthor
    const divPostMetaAuthor = document.createElement("div");
    divPostMetaAuthor.className = "post-meta__author";
    divPostMetaData.appendChild(divPostMetaAuthor);
    divPostMetaAuthor.innerHTML =`${posts[i].author.name}`;

    //postmetatime
    const divPostMetaTime = document.createElement("div");
    divPostMetaTime.className = "post-meta__time";
    divPostMetaData.appendChild(divPostMetaTime);
    divPostMetaTime.innerHTML ="4 mesi fa";

    const divPostText = document.createElement("div");
    divPostText.className = "post__text";
    divPost.appendChild(divPostText);
    divPostText.innerHTML = `${posts[i].content}`;

    const divPostImage = document.createElement("div");
    divPostImage.className ="post__image";
    divPost.appendChild(divPostImage);
    divPostImage.innerHTML = `<img src="${posts[i].media}" alt="">`;

    //////creao bottoni, mi piace///////


    const divPostFooter = document.createElement("div");
    divPostFooter.className= "post__footer";
    divPost.appendChild(divPostFooter);

    const divLikesJsLikes= document.createElement("div");
    divLikesJsLikes.className= "likes js-likes";
    divPostFooter.appendChild(divLikesJsLikes);


    const divLikesCTA = document.createElement("div");
    divLikesCTA.className="likes__cta";
    divLikesJsLikes.appendChild(divLikesCTA);

    //link
    const linckLikeButton = document.createElement("a");
    linckLikeButton.className="like-button  js-like-button";
    divLikesCTA.appendChild(linckLikeButton)

    //icona
    const iconaI = document.createElement("i");
    iconaI.className= "like-button__icon fas fa-thumbs-up";
    linckLikeButton.appendChild(iconaI);

    //testo dell'icona
    const spanLikeButtonLabel = document.createElement("span");
    spanLikeButtonLabel.className="like-button__label";
    linckLikeButton.appendChild(spanLikeButtonLabel);
    spanLikeButtonLabel.innerHTML=" Mi Piace"

    
    const divMiPiace = document.createElement("div");
    divMiPiace.className= "likes__counter ";
    divLikesJsLikes.appendChild(divMiPiace);
    divMiPiace.innerHTML= `Piace a ${posts[i].like} persone` ;

    
    
    linckLikeButton.addEventListener("click", function(){
        
        
        if ( idCorrenti.includes(posts[i].id )){
            idCorrenti = idCorrenti.filter(function(elemento) {
                return elemento !== posts[i].id;
            }) 
            posts[i].like--;

        } else{
            posts[i].like++;
            idCorrenti.push(posts[i].id);
        }
        
        divMiPiace.innerHTML= `Piace a ${posts[i].like} persone`;
        
        

        
    
    });
    

}



