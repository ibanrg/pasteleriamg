using Microsoft.Extensions.DependencyInjection;
using PasteleriaMG.Data.Interfaces;
using PasteleriaMG.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace PasteleriaMG.Data.Extensions
{
    public static class RegisterDataServices
    {
        public static IServiceCollection AddDataServices(this IServiceCollection services)
        {
            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<IDireccionRepository, DireccionRepository>();
            services.AddScoped<IIngredienteLimitanteRepository, IngredienteLimitanteRepository>();
            services.AddScoped<ILocalidadRepository, LocalidadRepository>();
            services.AddScoped<IPastelRepository, PastelRepository>();
            services.AddScoped<IPedidoRepository, PedidoRepository>();
            services.AddScoped<IProductoPedidoRepository, ProductoPedidoRepository>();
            services.AddScoped<IProductoRepository, ProductoRepository>();
            services.AddScoped<IProvinciaRepository, ProvinciaRepository>();
            services.AddScoped<ITartaRepository, TartaRepository>();
            return services;
        }
    }
}
