using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PasteleriaMG.Frontend.ViewModels
{
    public class ProductoIngredienteLimitanteVM
    {
        public string IdProducto { get; set; }
        public ProductoVM Producto { get; set; }
        public string IdIngredienteLimitante { get; set; }
        public IngredienteLimitanteVM IngredienteLimitante { get; set; }
    }
}
