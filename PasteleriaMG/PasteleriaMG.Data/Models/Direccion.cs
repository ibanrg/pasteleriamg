using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PasteleriaMG.Data.Models
{
    public class Direccion
    {
        [Key]
        public Guid Id { get; set; }
        public string Calle { get; set; }
        public int CodigoPostal { get; set; }
        public Localidad Localidad { get; set; }
        public Provincia Provincia { get; set; }
    }
}
