
## architect database using migrations

App should have users

id, username,  wallet_id, created_at, updated_at

> create 3 users

----------------------------------------------------

## User can have many wallets

wallet properties are

id, currency_id, balance, created_at, updated_at

> create randomly wallets for users
> each user should have 1 or 2 wallet

----------------------------------------------------

## App must have currencies

currency properties are

id, country, code

> create 2 currencies
> first one ---> Armenia, AMD
> second one --> America, USD

----------------------------------------------------

App should have slot_transactions

slot_transaction properties are

id, wallet_id, status, sum, created_at

*status type must be enum ---> ['WIN', 'LOST']*

----------------------------------------------------


1) Application cross origin requests must be open
2) Application doesn't have auth system
3) App should serve RESTFULL api

----------------------------------------------------

Application should support current requests


### 1) GET `/api/users` should return all users

### 2) POST `/api/spin`, 

body example
```json
{
	"user_id": 1,
	"sum": 10,
	"currency_id": 1
}
```

This means user spinned casino slot, and server should randomly respond user winn or lost.

when user WIN
```json
	{
		"status": "success",
		"user_id": 1,
		"status": "WIN"
	}
```

wher user LOST
```json
	{
		"status": "success",
		"user_id": 1,
		"status": "LOST"
	}
```

whern user's balance is not enough to spin

```json
	{
		"status": "failed",
		"user_id": 1,
		"reason": "low balance"
	}
```

### 3) Application should support report page

GET `api/users/1/report`

Should return report for last 2 minutes
```json
	{
		"user_id": 1,
		"wallets": [{
			"currency": {
				"id": 1,
				"country": "Armenia",
				"code": "AMD"
			},
			"balance": 100,
		}],
		"report": {
			"start": "timestamp here",
			"end": "timestamp here",
			"win": 100,
			"lost": 50
		}
	}
```
