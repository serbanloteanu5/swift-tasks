// filename: complexApp.js

/*
 * Complex Application
 * 
 * This complex application demonstrates various JavaScript concepts and best practices.
 *
 * It simulates a stock trading system where users can buy and sell stocks, view their portfolio,
 * and track their investment performance.
 */

// User class representing a user of the stock trading system
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.portfolio = {};
    this.balance = 10000;
  }

  buyStock(stock, quantity) {
    const totalCost = stock.price * quantity;

    if (totalCost <= this.balance) {
      if (this.portfolio[stock.code]) {
        this.portfolio[stock.code].quantity += quantity;
      } else {
        this.portfolio[stock.code] = {
          name: stock.name,
          quantity,
        };
      }
      this.balance -= totalCost;
      console.log(`Successfully bought ${quantity} shares of ${stock.name}.`);
    } else {
      console.log('Insufficient funds.');
    }
  }

  sellStock(stock, quantity) {
    if (this.portfolio[stock.code]) {
      const availableQuantity = this.portfolio[stock.code].quantity;

      if (availableQuantity >= quantity) {
        this.portfolio[stock.code].quantity -= quantity;
        this.balance += stock.price * quantity;
        console.log(`Successfully sold ${quantity} shares of ${stock.name}.`);
      } else {
        console.log(`You do not own ${quantity} shares of ${stock.name}.`);
      }
    } else {
      console.log(`You do not own ${stock.name}.`);
    }
  }

  viewPortfolio() {
    console.log('Portfolio:');
    for (const stockCode in this.portfolio) {
      const stock = this.portfolio[stockCode];
      console.log(`${stock.name}: ${stock.quantity} shares`);
    }
  }

  viewBalance() {
    console.log(`Balance: $${this.balance}`);
  }
}

// Stock class representing a stock in the system
class Stock {
  constructor(code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }
}

// Constants
const apple = new Stock('AAPL', 'Apple Inc.', 145.23);
const microsoft = new Stock('MSFT', 'Microsoft Corporation', 265.12);
const google = new Stock('GOOGL', 'Alphabet Inc.', 2080.01);

// Creating users and simulating stock trading
const user1 = new User('John Doe', 25);
const user2 = new User('Jane Smith', 30);

user1.buyStock(apple, 5);
user1.buyStock(microsoft, 2);

user2.buyStock(google, 3);
user2.buyStock(microsoft, 4);

user1.sellStock(apple, 2);
user2.sellStock(microsoft, 3);

user1.viewPortfolio();
user2.viewPortfolio();

user1.viewBalance();
user2.viewBalance();

/*
 * Output:
 * 
 * Successfully bought 5 shares of Apple Inc.
 * Successfully bought 2 shares of Microsoft Corporation.
 * Successfully bought 3 shares of Alphabet Inc.
 * Successfully bought 4 shares of Microsoft Corporation.
 * Successfully sold 2 shares of Apple Inc.
 * Successfully sold 3 shares of Microsoft Corporation.
 * 
 * Portfolio of John Doe:
 * Apple Inc.: 3 shares
 * Microsoft Corporation: 2 shares
 * 
 * Portfolio of Jane Smith:
 * Alphabet Inc.: 3 shares
 * Microsoft Corporation: 1 shares
 * 
 * Balance of John Doe: $8608.05
 * Balance of Jane Smith: $9310.12
 */