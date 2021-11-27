
class Card {
    constructor(balance, transactionLimit, historyLogs, key) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs;
        this.key = key;
    }

    getCardOptions() {
        return this;
    }

    putCredits(putCredits) {
        this.balance = this.balance + putCredits;

        this.historyLogs.push({
            operation: 'Received credits',
            credits: putCredits,
            operationTime: new Date().toISOString().substring(0, 19).replaceAll('-', '/').replace('T', ', ')
        })
    }

    takeCredits(takeCredits) {
        if (this.transactionLimit > takeCredits && this.balance > takeCredits) {
            this.balance = this.balance - takeCredits;

            this.historyLogs.push({
                operation: 'Withdrawal of credits',
                credits: takeCredits,
                operationTime: new Date().toISOString().substring(0, 19).replaceAll('-', '/').replace('T', ', ')
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
            operationTime: new Date().toISOString().substring(0, 19).replaceAll('-', '/').replace('T', ', ')
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

const userCard = n => {
    const cards = [
        new Card(100, 100, [], 1),
        new Card(100, 100, [], 2),
        new Card(100, 100, [], 3),
    ];

    for (const item of cards) {
        if (item.key === n) {
            return item;
        }
    }
};


class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }

    addCard() {
        let num = 1;

        this.cards.card = userCard(num);
        num++;
    }

    getCardByKey(n) {
        for (const item in this.cards) {
            if (item.key === n) {
                return item;
            }
        }
    }
}

