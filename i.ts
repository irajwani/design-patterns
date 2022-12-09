/* 
 Interface Segregation
 We don't want classes to have methods that they don't use
 A client should define what it needs by using several conrete interfaces that serve a unique interface
 Keep your interfaces small, and they should only declare properties/methods that they really need
 Instead of 'header' interfaces, we use role interfaces 
*/

interface User {
  id: string;
  name: string;
}

interface IRepository<T> {
  create(dto: T): boolean;
  findOne(id: string): T;
}

interface IFileLocator {
  locateFile(id: string): string;
}

/* 
Our clients can use different interfaces instead of using one bulky interface which might introduce
unneeded methods in them
*/

class UserRepository implements IRepository<User> {
  create(dto: User): boolean {
    return true;
  }

  findOne(id: string): User {
    return { id: "1", name: "imad" };
  }
}

class Service implements IRepository<User>, IFileLocator {
  create(dto: User): boolean {
    return true;
  }

  findOne(id: string): User {
    return { id: "1", name: "imad" };
  }

  locateFile(id: string): string {
    return "/cwd/tmp";
  }
}
