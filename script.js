const accessKey = "-cOIyLL5EPrcqbFv4POduqDNPeKKEOpFTPvlMpWhNxU";
const search = document.getElementById("search");
const input = document.getElementById("input");
const searchResults = document.getElementById("searchResults");
const showMore = document.getElementById("showMore");
let inputData = "";
let page = 1;

async function searchImages(){
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
      searchResults.innerHTML = "";
    }
  
    const results = data.results;
  
    results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("searchResult");
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;
  
      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResults.appendChild(imageWrapper);
    });
  
    page++;
};


search.addEventListener('click', ()=> {
  searchImages();
  page = 1;
  });
  
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    searchImages();
    page = 1;
  }
})

showMore.addEventListener("click", () => {
    searchImages();
  });

  function user1(){
    document.body.innerHTML=`
    <div class="text-white p-20 ml-96 pl-32"><span class="text-3xl">Congratulations</span> <br>
    You have found User1... <br>
    It is none other than <span class="text-sky-600 text-lg">@Anoop2005</span> 
    <br>
    <img class="py-5 size-72" src="https://media1.tenor.com/m/_3Yl5nGN2P8AAAAC/sherlock-sherlock-holmes.gif" alt="">
    <br>
    <a href="index.html"><span class="hover:text-blue-500 cursor-pointer animate-pulse text-xl">&leftarrow; Go Back</span></a>
    </div>`;
    }
    
