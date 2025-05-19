const categorySelect = document.getElementById("category");
const animeImg = document.getElementById("anime-img");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");

let currentImageUrl = animeImg.src;

async function generateAnimeImage(){
 const category = categorySelect.value;
 try{
    animeImg.src = "https://i.stack.imgur.com/kOnzy.gif";
    const response = await fetch(`https://api.waifu.pics/sfw/${category}`);
    const data = await response.json();
    currentImageUrl = data.url;
    animeImg.src = data.url;
 }catch(error){
    alert("Failed to load image. Try again!");
    console.error(error);
 }
}

function downloadImg(){
  const link = document.createElement('a');
  link.href = currentImageUrl;
  link.download = "anime-img-download.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

generateBtn.addEventListener("click", generateAnimeImage);
downloadBtn.addEventListener("click", downloadImg);