const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const makeImagesListMarkup = ({url, alt}) => {
    return `
    <li>
    <img src=${url} alt=${alt}</li>
    `
  };
  const makeImageMarkup = images.map(makeImagesListMarkup).join('');
    const galleryContainerRef = document.querySelector("#gallery");
galleryContainerRef.insertAdjacentHTML('beforeend',makeImageMarkup);

// const createImagesRef = ({url, alt}) =>{
  //   const liRef = document.createElement('li');
  //   const imgRef = document.createElement('img');
  //   imgRef.src = url;
  //   imgRef.alt = alt;
  //   liRef.append(imgRef);
  //   console.log(liRef);
  //   return liRef;
  // }

  // const imageElements = images.map(createImagesRef)
  // galleryContainerRef.append(...imageElements)