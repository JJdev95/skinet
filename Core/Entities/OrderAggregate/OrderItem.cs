namespace Core.Entities.OrderAggregate
{
    public class OrderItem : BaseEntity
    {
        private ProductItemOrdered itemOrdered;

        public OrderItem()
        {
        }

        public OrderItem(ProductItemOrdered itemOrdered, decimal price)
        {
            this.itemOrdered = itemOrdered;
            Price = price;
        }

        public OrderItem(ProductItemOrdered itemOrdered, decimal price, int quantity)
        {
            ItemOrdered = itemOrdered;
            Price = price;
            Quantity = quantity;
        }

        public ProductItemOrdered ItemOrdered { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        
        
        
        
    }
}