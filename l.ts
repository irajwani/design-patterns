/* 
 Liskov-Substitution 
 We should be able to swap one implementation for another with ease. Similar to Open-Closed principle

 To build software systems from interchangeable parts, 
 those parts must adhere to a contract that allows those parts to be substituted one for another.
 Basically, interfaces and abstract classes
*/

import { AWSSESService, IEmailService, MailChimpService } from "./o";

class Controller {
  /*  reference the interface that any concrete implementation implements */
  private emailService: IEmailService;
  constructor(emailService: IEmailService) {
    this.emailService = emailService;
  }

  handleRequest() {
    const mail = {};
    this.emailService.sendMail(mail);
  }
}

/* now instantiate a specific concrete class */

const mailChimpService = new MailChimpService();
const awsService = new AWSSESService();

/* and finally */

const controllerA = new Controller(mailChimpService);
const controllerB = new Controller(awsService);

controllerA.handleRequest();
