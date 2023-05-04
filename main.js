const posts = [
    {
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
divPostMetaIcon.innerHTML = `<img src="${posts[i].author.image}" alt="" class="profile-pic">`

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


}



// function funzioneNuovoDiv( classe, query ){
//   const  nuovoDiv = document.createElement("div");
//   nuovoDiv.className = classe;
//   document.querySelector(query).appendChild(nuovoDiv);
// }

