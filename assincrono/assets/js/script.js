const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const getBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async()=>{
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
    // //Alterntive
    // const data = await fetch(BASE_URL)
    // .then((res)=> res.json())
    // .catch((e)=> console.log(e));

};

const loadImg = async()=>{
    catImg.src = await getCats();
}

getBtn.addEventListener('click', loadImg);
loadImg();