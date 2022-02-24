let found:boolean=true;
let grade:number=88.6;
let firstName:string="Habtom";
let lastName:string='Gebre';

console.log(found);
console.log("The grade is "+grade);
console.log("Hi " +firstName+" "+lastName);

// shows compiler error while put different type

/*found=0;
grade="A";
firstName=false;*/

//concatnate(tamplate string) using backticks
console.log(`Hi ${firstName} ${lastName}`);