-- performed the testing at https://sqliteonline.com/
SELECT 
    strftime("%Y", o.ordered_at) as 'year',
    strftime("%m", o.ordered_at) as 'month',
    o.customer_id,
		MAX(t.total_monthly_order_value) as total_monthly_order_value
FROM (
	SELECT order_id, SUM(unit_price*quantity) as total_monthly_order_value
	FROM order_line_items
	GROUP BY order_id
) t, orders as o, customers AS c
WHERE o.customer_id = c.customer_id AND t.order_id = o.order_id
GROUP BY strftime("%m-%Y", o.ordered_at)
ORDER BY strftime("%m-%Y", o.ordered_at) ASC -- or 'year' month'