export default class BankAccount {
    private balance: number = 0;

    currentBalance(): number {
        return this.balance;
    }

    withdraw(amount: number): string {
        if(this.balance >= amount) {
            this.balance = amount;
            return "Rút thành công";
        }
        return "Số dư không đủ";
    }
    deposit(amount: number): string {
        if(amount<=0) return "Số tiền nạp vào cần > 0"
        this.balance += amount;
        return "Nạp thành công"
    }
}
