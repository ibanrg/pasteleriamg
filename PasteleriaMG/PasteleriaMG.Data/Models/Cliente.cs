using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class Cliente
    {
        [Key]
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public Direccion Direccion { get; set; }
    }
}
