using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class IngredienteLimitante
    {
        [Key]
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public ICollection<ProductoIngredienteLimitante> Productos { get; set; }
    }
}
