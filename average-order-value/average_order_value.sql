-- performed the testing at https://sqliteonline.com/
SELECT
  c.name,
  SUM(ol.unit_price*ol.quantity) as total_order_value,
  s.order_count,
  SUM(ol.unit_price*ol.quantity)/s.order_count AS avg_order_value
FROM (
  SELECT customer_id, COUNT(order_id) as 'order_count' FROM orders GROUP by customer_id
) s, order_line_items as ol, orders as o, customers as c
WHERE c.customer_id = o.customer_id AND ol.order_id = o.order_id AND s.customer_id = o.customer_id
GROUP BY c.customer_id
ORder by avg_order_value DESC