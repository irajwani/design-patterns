/* 
 Single Responsibility

 Seperate code based on the social structure of users using the application
 It is important that we only go to ONE place to change behavior of an algorithm that 
 is likely to change

 If we see a lot of nasty if statements or long switch statements, that's a sign to refactor
 to several classes

*/

abstract class Tree {
  // private props or methods aren't available to anything but the base class itself
  private location = "Earth";

  // algorithms that will be specific to specific extensions of tree
  abstract countLeaves(): number;

  abstract countAnimals(): number;

  // common measure algorithm
  measureLength(): number {
    return 4;
  }

  // common protected trim algorithm
  // protected methods and props are only available within the base class or derived classes/subclasses
  // of the class they are declared in
  protected trim(): void {
    /*  */
  }
}

class Juniper extends Tree {
  countLeaves(): number {
    /* business logic */
    this.trim();
    return 10;
  }

  countAnimals(): number {
    return 5;
  }
}

class Birch extends Tree {
  countLeaves(): number {
    return 1;
  }

  countAnimals(): number {
    return 20;
  }
}
