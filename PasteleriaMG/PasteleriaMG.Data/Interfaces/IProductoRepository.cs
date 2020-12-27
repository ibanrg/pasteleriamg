using PasteleriaMG.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PasteleriaMG.Data.Interfaces
{
    public interface IProductoRepository
    {
        Task<List<Producto>> GetAll();
        Task<bool> Add(Producto producto);
        Task<bool> Remove(Producto producto);
    }
}
