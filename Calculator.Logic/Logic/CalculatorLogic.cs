using Calculator.Logic.Models;

namespace Calculator.Logic.Logic
{
    public static class CalculatorLogic
    {
        /// <summary>
        /// Calculate totals based on total, next number and operator
        /// </summary>
        /// <param name="calculate"></param>
        /// <returns>Calculate</returns>
        public static Calculate Calculate(Calculate calculate)
        {
            if (calculate.Next == null && calculate?.Operator?.ToUpper() != "C") { return calculate; }

            // If total is 0, and user is trying to subtract, divide or multiply, set the total to the amount chosen, so they can choose another number to operate against
            if (calculate.Total == 0 && (calculate?.Operator?.ToUpper() == "-" || calculate?.Operator?.ToUpper() == "X" || calculate?.Operator?.ToUpper() == "/"))
            {
                calculate.Total = (decimal)calculate.Next;
                return calculate;
            }

            switch (calculate?.Operator?.ToUpper())
            {
                case "+":
                    calculate.Total = (calculate.Total + (decimal)calculate.Next);
                    break;
                case "-":
                    calculate.Total = (calculate.Total - (decimal)calculate.Next);
                    break;
                case "/":
                    calculate.Total = (calculate.Total / (decimal)calculate.Next);
                    break;
                case "X":
                    calculate.Total = (calculate.Total * (decimal)calculate.Next);
                    break;
                case "%":
                    calculate.Total = (calculate.Total * (decimal)calculate.Next / 100);
                    break;
                case "C":
                    calculate.Total = 0;
                    break;
            }

            return calculate;
        }
    }
}