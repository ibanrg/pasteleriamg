using System;
using System.Collections.Generic;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class ProductoIngredienteLimitante
    {
        public Guid IdProducto { get; set; }
        public Producto Producto { get; set; }
        public Guid IdIngredienteLimitante { get; set; }
        public IngredienteLimitante IngredienteLimitante { get; set; }
    }
}
