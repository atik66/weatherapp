
window.addEventListener("load", () => {
  let long;
  let lat;
   let tem=document.querySelector('h2')
   let loc=document.querySelector('h1')
   let dis=document.querySelector('#h1')
   let ico=document.querySelector('#ic')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fb432b1c02b03d4b64d1edf087066a08`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const {feels_like}= data.main
          const {name}=data
          const {description}=data.weather[0]
          const {id}=data.weather[0]
          tem.innerHTML=Math.round(feels_like-273);
          loc.textContent=name
          dis.innerHTML=description;
          if(id<250){
                  ico.src="icon/strom.svg"
          }
          else if(id<350){
            ico.src="icons/strom.svg"

          }

          else if(id<350){
            ico.src='icons/drizzle.svg'

          }
          else if(id<550){
            ico.src='icons/rain.svg'

          }
          else if(id<650){
            ico.src="icons/snow.svg"

          }

          else if(id<800){
            ico.src="icons/atmosphere.svg"

          }

          else if(id===800){
            ico.src="icons/clear.svg"

          }

          else if(id>800){
            ico.src="icons/clouds.svg"

          }

       







        });
    });
  }
});
