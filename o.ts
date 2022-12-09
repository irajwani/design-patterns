/* 
Open-Closed principle
A software artifact should be open to extension but closed to modification 
The idea is to separate policy from implementation by writing a common interface(s) and abstract class(es)
which dictates our higher level policy, and then write concrete classes that implement that policy
*/

interface IEmailTransmissionResult {
  success: boolean;
  error?: string;
}

// common interface
export interface IEmailService {
  sendMail(email: any): Promise<IEmailTransmissionResult>;
}

// concrete class 1
export class MailChimpService implements IEmailService {
  async sendMail(email: any): Promise<IEmailTransmissionResult> {
    /* Do MailChimp biz logic to send mail */
    return { success: true };
  }

  async getEmailClicks() {
    /*  */
  }
}

// concrete class 2
export class AWSSESService implements IEmailService {
  async sendMail(email: any): Promise<IEmailTransmissionResult> {
    /* Do AWS SES to send mail */
    return { success: true };
  }

  async generateReport() {
    /*  */
  }
}
