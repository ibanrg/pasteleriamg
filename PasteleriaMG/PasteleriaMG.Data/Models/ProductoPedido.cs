using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class ProductoPedido
    {
        [Key]
        public Guid Id { get; set; }
        public Producto Producto { get; set; }
        public int Cantidad { get; set; }
    }
}
