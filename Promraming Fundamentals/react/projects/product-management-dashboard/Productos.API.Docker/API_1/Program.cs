using Abstracciones.Interfaces.DA;
using Abstracciones.Interfaces.Flujo;
using DA;
using DA.Repositorios;
using Flujo;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Productos
builder.Services.AddScoped<IProductoFlujo, ProductoFlujo>();
builder.Services.AddScoped<IProductoDA, ProductoDA>();

// Categoria
builder.Services.AddScoped<ICategoriaFlujo, CategoriaFlujo>();
builder.Services.AddScoped<ICategoriaDA, CategoriaDA>();

// SubCategoria
builder.Services.AddScoped<ISubCategoriaFlujo, SubCategoriaFlujo>();
builder.Services.AddScoped<ISubCategoriaDA, SubCategoriaDA>();

builder.Services.AddScoped<IRepositorioDapper, RepositorioDapper>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
