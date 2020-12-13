using PasteleriaMG.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class Pedido
    {
        [Key]
        public Guid Id { get; set; }
        public ICollection<ProductoPedido> ProductosPedido { get; set; }
        public DateTime FechaPedido { get; set; }
        public DateTime FechaEntrega { get; set; }
        public ETipoEntrega TipoEntrega { get; set; }
        public Cliente Cliente { get; set; }
    }
}
