using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PasteleriaMG.Frontend.ViewModels
{
    public class ProductoVM
    {
        public string Id { get; set; }
        public string IdExterno { get; set; }
        public string Nombre { get; set; }
        public string Precio { get; set; }
        public string TipoProducto { get; set; }
        public ICollection<ProductoIngredienteLimitanteVM> IngredientesLimitantes { get; set; }
    }
}
