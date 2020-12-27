using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PasteleriaMG.Data.Models;
using PasteleriaMG.Frontend.ViewModels;
using PasteleriaMG.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PasteleriaMG.Frontend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly IMapper _mapper;
        private IProductoService _productoService;

        public ProductoController(IMapper mapper, IProductoService productoService)
        {
            _mapper = mapper;
            _productoService = productoService;
        }

        [HttpGet]
        public async Task<List<ProductoVM>> Get()
        {
            List<Producto> productos = await _productoService.GetAll();
            return _mapper.Map<List<ProductoVM>>(productos);
        }

        [HttpPost]
        public async Task<bool> Add([FromBody] ProductoVM productoVM)
        {
            try
            {
                Producto producto = _mapper.Map<Producto>(productoVM);
                return await _productoService.Add(producto);
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        [HttpDelete]
        public async Task<bool> Remove([FromBody] ProductoVM productoVM)
        {
            try
            {
                Producto producto = _mapper.Map<Producto>(productoVM);
                return await _productoService.Remove(producto);
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
