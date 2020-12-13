using Microsoft.EntityFrameworkCore;
using PasteleriaMG.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PasteleriaMG.Data.Contexts
{
    public partial class PasteleriaMgDbContext : DbContext
    {
        public PasteleriaMgDbContext(DbContextOptions<PasteleriaMgDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Pedido> Pedido { get; set; }
        public virtual DbSet<ProductoPedido> ProductoPedido { get; set; }
        public virtual DbSet<Localidad> Localidad { get; set; }
        public virtual DbSet<Provincia> Provincia { get; set; }
        public virtual DbSet<Producto> Producto { get; set; }
        public virtual DbSet<Pastel> Pastel { get; set; }
        public virtual DbSet<Tarta> TartaPersonalizada { get; set; }
        public virtual DbSet<IngredienteLimitante> IngredienteLimitante { get; set; }
        public virtual DbSet<Cliente> Cliente { get; set; }
        public virtual DbSet<Direccion> Direccion { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductoIngredienteLimitante>()
                .HasKey(x => new { x.IdProducto, x.IdIngredienteLimitante });
            modelBuilder.Entity<ProductoIngredienteLimitante>()
                .HasOne(x => x.Producto)
                .WithMany(x => x.IngredientesLimitantes)
                .HasForeignKey(x => x.IdProducto);
            modelBuilder.Entity<ProductoIngredienteLimitante>()
                .HasOne(x => x.IngredienteLimitante)
                .WithMany(x => x.Productos)
                .HasForeignKey(x => x.IdIngredienteLimitante);
        }

    }
}
