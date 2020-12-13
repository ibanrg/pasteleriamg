using PasteleriaMG.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PasteleriaMG.Services.Interfaces
{
    public interface IProductoService
    {
        Task<List<Producto>> GetAll();
        Task<bool> Add(Producto producto);
    }
}
