// const user = {
//     name: 'John',
//     age: 30,
//     aboutUser() {
//         console.log(this.age);
//     }
// }

// console.log(user.aboutUser());

// const user = new Object({
//     name: 'John',
//     age: 30
// })

// class Human {
//     constructor(obj) {
//         this.name = obj.name;
//         this.gender = obj.gender;
//     }

//     about() {
//         console.log('Я человек');
//     }

// init() {
//     this.about()
// }
// }

// class Woman extends Human {
//     constructor(obj) {
//         super(obj)
//     }

//     aboutMe() {
//         super.about()
//     }
// }
// class Man extends Human {
//     constructor(obj) {
//         super(obj)
//     }
// }


// const human = new Human({
//     name: 'Имя',
//     gender: 'Пол'
// })

// console.log(human.about());

// const woman = new Woman({
//     name: 'Alisa',
//     gender: 'Ж'
// })

// console.log(woman.aboutMe());


// const man = new Man({
//     name: 'John',
//     gender: 'M'
// })

// console.log(man);


class Area {
    constructor(selector) {
        this.box = document.querySelector(selector);
    }

    square() {
        this.box.style = `
        background: red;
        width: 250px;
        height: 250px;
        border-radius: 0;
        `
      

    }



    circle() {
        this.square()
        this.box.addEventListener('click', () => {
             if (this.box.style.borderRadius == '50%') {
                 this.box.style.borderRadius = '0'
            }else {
                 this.box.style.borderRadius = '50%'
            }
        })
    }
}

const box = new Area('.box')

box.circle()