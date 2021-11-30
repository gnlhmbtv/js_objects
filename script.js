//1.
// a)Choxlu company-leri(obyect)  saxliyan bir array yaradirsiz,icerisinde bir nece muxtelif 
// companyler olsun, 
// b).bu obyektlerin name,yaradilma tarixi,ve.s kimi propertyler elave edin ;
// c).sonra array uzerinde iterationlari tetbiq edin mes:adina gore ,yaranma tarxinine ve.s

// let users = [
//     {
//         name: "Gunel",
//         surname: "Humbatova",
//         date:"02.07.2021"
//     },
//     {
//         name:"Sevinc",
//         surname:"Aliyeva",
//         date:"02.05.2022"
//     },
//     {
//         name:"Fidan",
//         surname:"Mirzayeva",
//         date:"08.04.2012"
//     }
// ];
// users.forEach(value=>{
//     console.log(value);
// })

// let user=users.find(value=>value.name==="Gunel")
// console.log(user);


// let user=users.filter(value=>value.date==="08.04.2022");
// console.log(user);






// 2.
// a)Group(id-si, adi ve studentCount fieldleri, students arrayi ve addStudent methodu olsun) 
// ve student(adi,soyadi,yashi) classlari yaradin,
// b)Student yaradib Group icerisindeki arraya elave edende yoxlama aparin eyer qrup doludursa 
// icaze vermesin
// c)Eyni id-li student Groupda varsa elave etmek mumkun olmasin 


class Group{
    constructor(id,GroupName,studentCount){
        this.id=id;
        this.GroupName=GroupName;
        this.studentCount=studentCount;
        this.arr=[];
    }
    addStudent(user){
        let fullUser={...user};
        if((this.arr.length<this.studentCount)){
        this.arr.push(fullUser)
        }
    }
} 
let user2=new Student(1,"Resul","Rustemli",25)
let user1=new Student(1,"Resul","Rustemli",25)

let grup=new Group(1,"P",2)
grup.addStudent(user2);
grup.addStudent(user1);
console.log(grup.arr)
console.log(this.arr.find(x=>{x.Id==Id}));
