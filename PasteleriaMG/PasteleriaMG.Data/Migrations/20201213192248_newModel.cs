using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PasteleriaMG.Data.Migrations
{
    public partial class newModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_IngredienteLimitante_Producto_ProductoId",
                table: "IngredienteLimitante");

            migrationBuilder.DropIndex(
                name: "IX_IngredienteLimitante_ProductoId",
                table: "IngredienteLimitante");

            migrationBuilder.DropColumn(
                name: "ProductoId",
                table: "IngredienteLimitante");

            migrationBuilder.AddColumn<decimal>(
                name: "Precio",
                table: "Producto",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateTable(
                name: "ProductoIngredienteLimitante",
                columns: table => new
                {
                    IdProducto = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdIngredienteLimitante = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductoIngredienteLimitante", x => new { x.IdProducto, x.IdIngredienteLimitante });
                    table.ForeignKey(
                        name: "FK_ProductoIngredienteLimitante_IngredienteLimitante_IdIngredienteLimitante",
                        column: x => x.IdIngredienteLimitante,
                        principalTable: "IngredienteLimitante",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductoIngredienteLimitante_Producto_IdProducto",
                        column: x => x.IdProducto,
                        principalTable: "Producto",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductoIngredienteLimitante_IdIngredienteLimitante",
                table: "ProductoIngredienteLimitante",
                column: "IdIngredienteLimitante");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductoIngredienteLimitante");

            migrationBuilder.DropColumn(
                name: "Precio",
                table: "Producto");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductoId",
                table: "IngredienteLimitante",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_IngredienteLimitante_ProductoId",
                table: "IngredienteLimitante",
                column: "ProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_IngredienteLimitante_Producto_ProductoId",
                table: "IngredienteLimitante",
                column: "ProductoId",
                principalTable: "Producto",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
