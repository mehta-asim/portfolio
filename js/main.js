(() => {
  const theGallery = document.querySelector("#gallery"),
    galleryPiece = document.querySelector("#galleryPieceTemplate").content;

  let baseURL = "./includes/index.php";

  function getSrc() {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        debugger;

        buildImg(data);
      });
  }

  function buildImg(imgSource) {
    console.log(imgSource);
    debugger;

    let isource = Object.keys(imgSource[0]);
    debugger;
    // let source = JSON.parse(imgSource);
    isource.forEach((img) => {
      let panel = galleryPiece.cloneNode(true);
      debugger;

      let imgContainer = panel.firstElementChild.firstElementChild;

      panel.firstElementChild.dataset.key = img.id;

      let finalSource = imgSource[0][img].Source;

      imgContainer.src = `images/${finalSource}`;

      theGallery.appendChild(panel);
    });

    // Object.keys(imgSource).forEach((img) => console.log(img));
    debugger;
  }

  getSrc();
})();
