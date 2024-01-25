//Creo le variabili

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

//Aggiungo classe al container e creo card

function createPostCard(post) {
    const container = document.getElementById('container');
  
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    // Costruisci l'header del post
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
  
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
  
    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
  
    const profilePic = document.createElement('img');
    profilePic.classList.add('profile-pic');
    profilePic.src = post.media;
    profilePic.alt = post.author.name;
  
    postMetaIcon.appendChild(profilePic);
  
    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
  
    const postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaAuthor.textContent = post.author.name;
  
    const postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaTime.textContent = post.created;
  
    postMetaData.appendChild(postMetaAuthor);
    postMetaData.appendChild(postMetaTime);
  
    postMeta.appendChild(postMetaIcon);
    postMeta.appendChild(postMetaData);
  
    postHeader.appendChild(postMeta);
  
    postElement.appendChild(postHeader);

    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postText.textContent = post.content;
    postElement.appendChild(postText);
  
    // condizione
    if (post.image) {
        const postImage = document.createElement('div');
        postImage.classList.add('post__image');
    
        const imageElement = document.createElement('img');
        imageElement.src = post.image;
        imageElement.alt = 'Post Image';
        postImage.appendChild(imageElement);
    
        postElement.appendChild(postImage);
      }