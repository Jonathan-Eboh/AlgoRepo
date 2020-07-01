using System;

namespace Arrays_one_dimension
{
    partial class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            ArrayTest();
        }


        static void ArrayTest()
        {
            int[] array = new int[] { 1, 2, 3 };

            foreach ( int num in array){
                Console.WriteLine(num);
            }


        }
    }
}
