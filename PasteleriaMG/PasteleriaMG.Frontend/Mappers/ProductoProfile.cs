using AutoMapper;
using PasteleriaMG.Data.Models;
using PasteleriaMG.Frontend.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PasteleriaMG.Frontend.Mappers
{
    public class ProductoProfile : Profile
    {
        public ProductoProfile()
        {
            // ProductoVM -> Producto
            _ = CreateMap<ProductoVM, Producto>()
                .ForMember(m =>
                    m.Id,
                    vm => vm.MapFrom(src => src.Id))
                .ForMember(m =>
                    m.IdExterno,
                    vm => vm.MapFrom(src => src.IdExterno))
                .ForMember(m =>
                    m.Nombre,
                    vm => vm.MapFrom(src => src.Nombre))
                .ForMember(m =>
                    m.Precio,
                    vm => vm.MapFrom(src => Decimal.Parse(src.Precio.Replace(".", ","))))
                .ForMember(m =>
                    m.TipoProducto,
                    vm => vm.MapFrom(src => src.TipoProducto));

            // Producto -> ProductoVM
            _ = CreateMap<Producto, ProductoVM>()
                .ForMember(m =>
                    m.Id,
                    vm => vm.MapFrom(src => src.Id))
                .ForMember(m =>
                    m.IdExterno,
                    vm => vm.MapFrom(src => src.IdExterno))
                .ForMember(m =>
                    m.Nombre,
                    vm => vm.MapFrom(src => src.Nombre))
                .ForMember(m =>
                    m.Precio,
                    vm => vm.MapFrom(src => src.Precio.ToString()))
                .ForMember(m =>
                    m.TipoProducto,
                    vm => vm.MapFrom(src => ((int)src.TipoProducto).ToString()));

            CreateMap<ProductoIngredienteLimitante, ProductoIngredienteLimitanteVM>();
            CreateMap<IngredienteLimitante, IngredienteLimitanteVM>();
        }
    }
}
