export default class Account {
  public username: string;
  private password: string;
  readonly createdAt: Date;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.createdAt = new Date();
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  info(): string {
    return this.username + " - " + this.createdAt;
  }
}
