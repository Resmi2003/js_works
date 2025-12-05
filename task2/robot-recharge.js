// Robot recharge


var battery = 0;

while(battery<100){
    battery += 20;
    console.log(`Charging...battery at ${battery}%`);
}

console.log("Fully charged!");
