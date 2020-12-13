using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PasteleriaMG.Data.Models;
using PasteleriaMG.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PasteleriaMG.Frontend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class ProductoController : ControllerBase
    {
        private IProductoService _productoService;

        public ProductoController(IProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet]
        public async Task<List<Producto>> Get()
        {
            return await _productoService.GetAll();
        }

        [HttpPost]
        public async Task<bool> Add([FromBody] Producto producto)
        {
            return await _productoService.Add(producto);
        }
    }
}
