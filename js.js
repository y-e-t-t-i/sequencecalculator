        function fibo(fnum) {
            let fibonum = document.getElementById("fnum").value;
            let fval = parseFloat(fibonum);

            let num1 = 0, num2 = 1, fibonacci;

            if (fval == 1 || fval == 0) 
                {
                    fibonacci = 0;
                }

                else if (fval == 2) 
                    {
                        fibonacci = 1;
                    }
                        else 
                        {
                            for (let i = 3; i <= fval; i++) 
                            {
                                fibonacci = num1 + num2;
                                num1 = num2;
                                num2 = fibonacci;
                            }
                        }
            document.getElementById("fres").innerHTML = "The " + fval + "th Term in the Fibonacci Sequence is " + fibonacci;
        }

        function lucas(lnum) {
            let lunum = document.getElementById("lnum").value;
            let lval = parseFloat(lunum);

            let num1 = 2, num2 = 1, lucas;
            if (lval == 0) 
            {
                lucas = 0;
            }
                if (lval == 1) 
                {
                    lucas = 2;
                }
                    else if (lval == 2) 
                    {
                        lucas = 1;
                    }
                        else 
                        {
                            for (let i = 3; i <= lval; i++) 
                            {
                                lucas = num1 + num2;
                                num1 = num2;
                                num2 = lucas;
                            }
                        }
            document.getElementById("lres").innerHTML = "The " + lval + "th Term in the Lucas Sequence is " + lucas;
        }

        function tribo(tres) {
            let trinum = document.getElementById("tnum").value;
            let tval = parseFloat(trinum);

            let num1 = 0, num2 = 0, num3 = 1, tribonacci;

            if (tval == 0 || tval == 1 || tval == 2) 
            {
                tribonacci = 0;
            }
                else if (tval == 3) 
                {
                    tribonacci = 1;
                }
                    else 
                    {
                        for (let i = 4; i <= tval; i++) 
                        {
                            tribonacci = num1 + num2 + num3;
                            num1 = num2;
                            num2 = num3;
                            num3 = tribonacci;
                        }
                    }
            document.getElementById("tres").innerHTML = "The " + tval + "th Term in the Tribonacci Sequence is " + tribonacci;
        }
    