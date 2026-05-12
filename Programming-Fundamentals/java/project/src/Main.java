import java.util.Scanner;

public class Main {

    public static double add(double a, double b) {
        return a + b;
    }

    public static double subtract(double a, double b) {
        return a - b;
    }

    public static double multiply(double a, double b) {
        return a * b;
    }

    public static double divide(double a, double b) {

        if (b == 0) {
            System.out.println("Cannot divide by zero");
            return 0;
        }

        return a / b;
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int option = 0;

        while (option != 5) {

            System.out.println("\n=== JAVA CALCULATOR ===");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Divide");
            System.out.println("5. Exit");

            System.out.print("Choose an option: ");
            option = input.nextInt();

            if (option >= 1 && option <= 4) {

                System.out.print("Enter first number: ");
                double num1 = input.nextDouble();

                System.out.print("Enter second number: ");
                double num2 = input.nextDouble();

                double result = 0;

                switch (option) {

                    case 1:
                        result = add(num1, num2);
                        break;

                    case 2:
                        result = subtract(num1, num2);
                        break;

                    case 3:
                        result = multiply(num1, num2);
                        break;

                    case 4:
                        result = divide(num1, num2);
                        break;
                }

                System.out.println("Result: " + result);

            } else if (option == 5) {

                System.out.println("Goodbye!");

            } else {

                System.out.println("Invalid option");
            }
        }

        input.close();
    }
}