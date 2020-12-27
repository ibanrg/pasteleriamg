using PasteleriaMG.Data.Interfaces;
using PasteleriaMG.Data.Models;
using PasteleriaMG.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PasteleriaMG.Services.Services
{
    public class ProductoService : IProductoService
    {
        IProductoRepository _productoRepository;

        public ProductoService(IProductoRepository productoRepository)
        {
            _productoRepository = productoRepository;
        }

        public async Task<bool> Add(Producto producto)
        {
            return await _productoRepository.Add(producto);
        }

        public async Task<List<Producto>> GetAll()
        {
            return await _productoRepository.GetAll();
        }

        public async Task<bool> Remove(Producto producto)
        {
            return await _productoRepository.Remove(producto);
        }
    }
}
