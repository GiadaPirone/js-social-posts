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
//creo div .post
nuovoDiv = document.createElement("div");
nuovoDiv.className ="post";
document.querySelector(".posts-list").appendChild(nuovoDiv);
// funzioneNuovoDiv("post",".posts-list" );

//creo div postHeader
nuovoDiv1 = document.createElement("div");
nuovoDiv1.className ="post__header";
nuovoDiv.appendChild(nuovoDiv1);

//creo div postMeta
nuovoDiv2 = document.createElement("div");
nuovoDiv2.className ="post-meta";
nuovoDiv1.appendChild(nuovoDiv2);

//creo div postMetaIcon dentro post meta
nuovoDiv2_1 = document.createElement("div");
nuovoDiv2_1.className ="post-meta__icon";
nuovoDiv2.appendChild(nuovoDiv2_1);
nuovoDiv2_1.innerHTML = `<img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione"></img>`

//creo div postMetadata dentro post meta
nuovoDiv2_2 = document.createElement("div");
nuovoDiv2_2.className ="post-meta__data";
nuovoDiv2.appendChild(nuovoDiv2_2);


//creo postmetaauthor e postmetatime che sono dentro a post meta data
//postmetaauthor
nuovoDiv2_2_1 = document.createElement("div");
nuovoDiv2_2_1.className = "post-meta__author";
nuovoDiv2_2.appendChild(nuovoDiv2_2_1);
nuovoDiv2_2_1.innerHTML ="Phil Mangione";

//postmetatime
nuovoDiv2_2_2 = document.createElement("div");
nuovoDiv2_2_2.className = "post-meta__time";
nuovoDiv2_2.appendChild(nuovoDiv2_2_2);
nuovoDiv2_2_2.innerHTML ="4 mesi fa";



// function funzioneNuovoDiv( classe, query ){
//   const  nuovoDiv = document.createElement("div");
//   nuovoDiv.className = classe;
//   document.querySelector(query).appendChild(nuovoDiv);
// }

