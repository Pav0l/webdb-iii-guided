<!-- INNER JOIN -->

```
SELECT orders.id as order_id, customers.name as customer_name, salespersons.name as salesperson_name
FROM orders /// We're selecting FROM = left hand side of the table
INNER JOIN customers  // JOIN is the right side of the table
ON orders.customer = customers.id  // Condition, where tables overlap
INNER JOIN salespersons
ON orders.salesperson = salespersons.id
```


<!-- LEFT JOIN -->

```
SELECT *
FROM customers AS cus
LEFT JOIN orders AS o
ON o.customer = cus.id;
```

<!-- Find the salesperson that has no sales -->
```
SELECT salespersons.name as lazy_salespeople
FROM salespersons
LEFT JOIN orders
ON orders.salesperson = salespersons.id
WHERE orders.id is null
```