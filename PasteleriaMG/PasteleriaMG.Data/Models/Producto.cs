
using PasteleriaMG.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class Producto
    {
        [Key]
        public Guid Id { get; set; }
        public string IdExterno { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public ETipoProducto TipoProducto { get; set; }
        public ICollection<ProductoIngredienteLimitante> IngredientesLimitantes { get; set; }

        public bool TieneIngredientesLimitantes()
        {
            return IngredientesLimitantes != null && IngredientesLimitantes.Count > 0;
        }
    }
}
