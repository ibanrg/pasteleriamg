using Microsoft.Extensions.DependencyInjection;
using PasteleriaMG.Services.Interfaces;
using PasteleriaMG.Services.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace PasteleriaMG.Data.Extensions
{
    public static class RegisterServices
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            //services.AddScoped<IClienteService, ClienteService>();
            //services.AddScoped<IDireccionService, DireccionService>();
            //services.AddScoped<IIngredienteLimitanteService, IngredienteLimitanteService>();
            //services.AddScoped<ILocalidadService, LocalidadService>();
            //services.AddScoped<IPastelService, PastelService>();
            //services.AddScoped<IPedidoService, PedidoService>();
            //services.AddScoped<IProductoPedidoService, ProductoPedidoService>();
            services.AddScoped<IProductoService, ProductoService>();
            return services;
        }
    }
}
