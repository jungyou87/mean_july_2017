let myString: string = `Hello world`;
let myNumber: number = 4;

let anything: any = [];

let myBoolean: boolean = true;

let myArr: any[] = [1,2,2,3,'string'];

const thisString: string = `Hello world`;

thisString = `Hello something else`;

const thisArr: number[] = [1,2,3,4,5];

thisArr[0] = 100;
thisArr.push(90);
thisArr = [0];



function test(yourName: string, options?: object): any{
    console.log('testing tests');
    if(true){

    }
}

test('Cody', {});

interface UserInterface {
    name: string,
    age: number,
    occupation: string,
    sayMyName(): void,
    growOld(): number,
}


class User implements UserInterface {

}
