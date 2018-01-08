using Microsoft.VisualStudio.TestTools.UnitTesting;
using Calculator.Logic.Logic;
using Calculator.Logic.Models;

namespace Calculator.Tests
{
    [TestClass]
    public class CalculatorTests
    {
        [TestMethod]
        public void Add_Number_Succeed()
        {
            Calculate calculate = new Calculate {
                Next = 10,
                Total = 10,
                Operator = "+"
            };

            Calculate result = CalculatorLogic.Calculate(calculate);
            Assert.AreEqual(calculate.Total, 20);
        }

        [TestMethod]
        public void Subtract_Number_Succeed()
        {
            Calculate calculate = new Calculate
            {
                Next = 10,
                Total = 20,
                Operator = "-"
            };

            Calculate result = CalculatorLogic.Calculate(calculate);
            Assert.AreEqual(calculate.Total, 10);
        }

        [TestMethod]
        public void Multiply_Number_Succeed()
        {
            Calculate calculate = new Calculate
            {
                Next = 9,
                Total = 9,
                Operator = "X"
            };

            Calculate result = CalculatorLogic.Calculate(calculate);
            Assert.AreEqual(calculate.Total, 81);
        }

        [TestMethod]
        public void Divide_Number_From_Zero_Succeed()
        {
            Calculate calculate = new Calculate
            {
                Next = 9,
                Total = 0,
                Operator = "/"
            };

            Calculate result = CalculatorLogic.Calculate(calculate);
            Assert.AreEqual(calculate.Total, 9);
        }

        [TestMethod]
        public void Divide_Number_Succeed()
        {
            Calculate calculate = new Calculate
            {
                Next = 2,
                Total = 10,
                Operator = "/"
            };

            Calculate result = CalculatorLogic.Calculate(calculate);
            Assert.AreEqual(calculate.Total, 5);
        }
    }
}
