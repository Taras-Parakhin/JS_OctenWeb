
class Card {
    constructor(balance, transactionLimit, historyLogs, key) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs;
        this.key = key;
    }

    putCredits(putCredits) {
        this.balance = this.balance + putCredits;

        this.historyLogs.push({
            operation: 'Received credits',
            credits: putCredits,
            operationTime: ''
        })
    }

    takeCredits(takeCredits) {
        if (this.transactionLimit > takeCredits && this.balance > takeCredits) {
            this.balance = this.balance - takeCredits;

            this.historyLogs.push({
                operation: 'Withdrawal of credits',
                credits: takeCredits,
                operationTime: ''
            })
        } else {
            console.error('сума перевищує баланс або встановлений ліміт');
        }
    }

    setTransitionLimit(setTransitionLimit) {
        this.transactionLimit = setTransitionLimit;

        this.historyLogs.push({
            operation: 'Transition limit change',
            credits: setTransitionLimit,
            operationTime: ''
        });
    }

    transferCredits(amountCredits, receiveCard) {
        if (this.transactionLimit > amountCredits && this.balance > amountCredits) {
            this.balance = this.balance - (amountCredits + amountCredits * 0.5);

            for (const userCard of cards) {
                if (userCard.key === receiveCard) {
                    userCard.balance = userCard.balance + (amountCredits + amountCredits * 0.5);
                }
            }
        } else {
            console.error('сума перевищує баланс або встановлений ліміт');
        }
    }
}


const card1 = new Card(100, 100, [], 1);
const card2 = new Card(100, 100, [], 2);
const card3 = new Card(100, 100, [], 3);

const cards = [card1, card2, card3];

const userCard = n => {
    for (const item of cards) {
        if (item.key === n) {
            return item;
        }
    }
};

