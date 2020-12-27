using Microsoft.EntityFrameworkCore;
using PasteleriaMG.Data.Contexts;
using PasteleriaMG.Data.Interfaces;
using PasteleriaMG.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PasteleriaMG.Data.Repositories
{
    public class ProductoRepository : IProductoRepository
    {
        PasteleriaMgDbContext _db;

        public ProductoRepository(PasteleriaMgDbContext db)
        {
            _db = db;
        }

        public async Task<bool> Add(Producto producto)
        {
            try
            {
                await _db.AddAsync(producto);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> Remove(Producto producto)
        {
            try
            {
                _db.Remove(producto);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<List<Producto>> GetAll()
        {
            return await _db.Producto.ToListAsync();
        }
    }
}
