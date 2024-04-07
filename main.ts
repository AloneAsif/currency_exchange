import inquirer from 'inquirer';
import  chalk  from "chalk";

import { log } from 'console';

const currency:any = {
    USD:1,
    PKR:277.54,
    SAR:3.75,
    AED:3.67

}

let answer = await inquirer.prompt([{
    name:'from',
    type:'list',
    message:'Enter from currency',
    choices:['USD','PKR','AED','SAR']
},
{name:'to',
type:'list',
message:'enter to currency',
choices:['USD','PKR','AED','SAR']
},
{
    name:'amount',
    type:'number',
    message:'Enter your ammount'

}

])

let fromValue = currency[answer.from]
let toValue = currency[answer.to]
let ammount = answer.amount

let baseAmount = ammount / fromValue 
let converted = baseAmount * toValue
console.log(`your converted currency is ${chalk.green(converted.toFixed(2))}`);

// console.log(fromValue);
// console.log(toValue);
// console.log(ammount);

