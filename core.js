var battle = [//数字の入力は%で
  {use_oil :  20, use_bullet :  20, types:"通常戦闘・昼のみ"},
  {use_oil :  20, use_bullet :  30, types:"通常戦闘・夜戦込み"},
  {use_oil :   8, use_bullet :   0, types:"対潜水艦隊"},
  {use_oil :   4, use_bullet :   8, types:"対PT戦"},
  {use_oil :  10, use_bullet :  10, types:"開幕夜戦・対水上艦隊"},
  {use_oil :  20, use_bullet :  30, types:"払暁戦・昼移行"},
  {use_oil :   8, use_bullet :   4, types:"空襲戦"},
  {use_oil :  20, use_bullet :  20, types:"航空戦"},
]

function reculc(){
  var last_oil=100
  var last_bullet=100
  var battle_count=0
  var counts = document.getElementsByName("count")
  console.log(counts)
  var counter = 0
  counts.forEach(function(item){
    last_oil -= item.value * battle[counter].use_oil
    last_bullet -= item.value * battle[counter].use_bullet
    battle_count += Number(item.value)
    counter++
  })

  var battle_count_view = document.getElementById("battle_count_view")
  var oil = document.getElementById("oil")
  var bullet = document.getElementById("bullet")

  if(last_oil < 0)last_oil = 0
  if(last_bullet < 0)last_bullet = 0

  console.log(battle_count)

  battle_count_view.innerHTML = battle_count + "回"
  oil.innerHTML = last_oil+"%"
  bullet.innerHTML = last_bullet+"%"
}

window.onload = function() {
  var input = document.getElementById("input")

  battle.forEach(function(item){
    console.log(item)
    var child = document.createElement("div")
    var text = document.createElement("span")
    var field = document.createElement("input")
    text.innerHTML = item.types
    field.type="number"
    field.min="0"
    field.step="1"
    field.value="0"
    field.name = "count"
    field.addEventListener('input',reculc)
    child.appendChild(text)
    child.appendChild(field)
    input.appendChild(child)
  })

  reculc()
}
