
var question = prompt(`   Choose your favourite season:
   1) SPRING
   2) SUMMER
   3) AUTUMN
   4) WINTER`
)

if(question.toLowerCase() === 'spring'){
document.write(`<div class="card card1" style="width: 20rem;">
  <img src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-1664.gif" alt="">
  <div class="content">
    <h4>ITS SPRING SEASON!</h4>
    <p>Spring is a season of renewal, with flowers
     blooming and trees growing fresh leaves. The weather
      warms, days get longer, and nature comes alive with 
      vibrant colors and scents. It’s a time of growth and new beginnings.</p>
  </div>
</div>`)
}

else if(question.toLowerCase() === 'summer'){
document.write(`<div class="card card2" style="width: 20rem;">
  <img src="https://media3.giphy.com/media/lMxgTrubpGu30jiOEe/giphy.gif?cid=790b7611s3426ye4u69buhdg4pr06ex8ulb6jc0iyxfj0yw8&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="">
  <div class="content">
    <h4>ITS SUMMER SEASON!</h4>
    <p>Summer is the warmest season, with long, sunny days and short nights. People enjoy outdoor activities like swimming and hiking, while nature is full of vibrant life. It’s a time for vacations, relaxation, and fun under the sun.</p>
  </div>
</div>`)
}

else if(question.toLowerCase() === 'autumn'){
document.write(`<div class="card card3" style="width: 20rem;">
  <img src="https://media4.giphy.com/media/ZwjW5oLPG6qNuliuaJ/giphy.gif?cid=6c09b952yanravmwlj4el3v08bw7yu28xf899lhk5e9eur18&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="">
  <div class="content">
    <h4>ITS AUTUMN SEASON!</h4>
    <p>Autumn is a season of change, with cooler weather and leaves turning vibrant shades of red, orange, and yellow. Days grow shorter, the air becomes crisp, and nature prepares for winter.</p>
  </div>
</div>`)
}

else if(question.toLowerCase() === 'winter'){
document.write(`<div class="card card4" style="width: 20rem;">
  <img src="https://i.gifer.com/JuHT.gif" alt="">
  <div class="content">
    <h4>ITS WINTER SEASON!</h4>
    <p>Winter is the coldest season, with short days, <br> cold weather, and snow. Nature slows, and <br> people enjoy cozy indoor time or winter sports. Though chilly, winter has a quiet beauty.</p>
  </div>
</div>`)
}

else{
document.write(`<img class="img2" src="https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=6c09b952nf96msqjwl1g23snwceygy73fzz6ujl27i2cmonq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt=""></div>
`)
}