# dados-atletas
Repository to store the Devstart course project.

Project Summary:

Create an application capable of receiving athlete information, as well as calculating parameters and displaying them to the user.

Introduction:

The organizers of the competition held during the previous project greatly liked your proposed solution and your development profile. As a result, they decided to place a new order using the JavaScript language, where you must create software capable of receiving athlete information and displaying their category, BMI, calculated average, and other captured information.

Specifications:

You must create an `Athlete` class to centralize the attributes and methods of the athletes.

The class should receive the following attributes:
* name
* age
* weight
* height
* scores

The class should have the following methods:
* `calculateCategory()`, to calculate the athlete's category.
* `calculateBMI()`, to calculate the athlete's BMI.
* `calculateValidAverage()`, to calculate the athlete's valid average.
* `getAthleteName()`, which returns the athlete's name.
* `getAthleteAge()`, which returns the athlete's age.
* `getAthleteWeight()`, which returns the athlete's weight.
* `getAthleteScores()`, which returns the athlete's scores.
* `getCategory()`, which returns the athlete's category.
* `getBMI()`, which returns the athlete's BMI.
* `getValidAverage()`, which returns the athlete's valid average.

Use the following rules:

1.  To calculate the category:
    * Infantil (Children): 9 to 11 years old
    * Juvenil (Youth): 12 and 13 years old
    * Intermediário (Intermediate): 14 and 15 years old
    * Adulto (Adult): 16 to 30 years old
    * Sem categoria (No category): other ages

2.  To calculate the BMI:
    * Formula: bmi = weight / (height x height)

Example input:
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    Example output:
Name: Cesar Abascal
Age: 30
Weight: 80
Height: 1.7
Scores: 10, 9.34, 8.42, 10, 7.88
Category: Adult
BMI: 27.68166089965398
Valid average: 9.25333333

