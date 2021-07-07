

class Calculator{
    constructor(number){
        this.NumCalc = number;
        this.num1 = 'num1' + this.NumCalc;
        this.num2 = 'num2' + this.NumCalc;
        this.operator = 'operator' + this.NumCalc;
        this.result = 'result' + this.NumCalc;
        this.btn = 'btn' + this.NumCalc;
    };

    creatElement = () =>{
        let div = document.createElement('div');
        div.classList.add('div');
        let num1 = document.createElement('input');
        num1.id = this.num1;
        let operator = document.createElement('input');
        operator.id = this.operator;
        let num2 = document.createElement('input');
        num2.id = this.num2;
        let btn = document.createElement('button');
        btn.id = this.btn;
        btn.textContent = 'result';
        let result = document.createElement('span')
        result.id = this.result;

        result.textContent = " ";    
        div.append(num1);
        div.append(operator);
        div.append(num2);
        div.append(btn);
        div.append(result);
        document.body.append(div);


        let newBtn = document.getElementById(this.btn);
        newBtn.addEventListener('click', this.solve);


    };

    solve = () => {
        let num1 = document.getElementById(this.num1);
        let num2 = document.getElementById(this.num2);
        let operator = document.getElementById(this.operator);
        let result = document.getElementById(this.result);

        //console.log(operator.value) 

        switch(operator.value){
            case '+':
            return result.textContent = parseInt(num1.value) +  parseInt(num2.value);

            case '-':
            return result.textContent = parseInt(num1.value) -  parseInt(num2.value);

            case '*':
            return result.textContent = parseInt(num1.value) *  parseInt(num2.value);

            case '/':
            return result.textContent = parseInt(num1.value) /  parseInt(num2.value);

            default:
                break

        };
    }
}
  let calculator = new Calculator(1);
  calculator.creatElement();

  let calculator2 = new Calculator(2);
  calculator2.creatElement();