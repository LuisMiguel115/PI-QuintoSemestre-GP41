using ServerPI.Domain.Model.Usuario;
using ServerPI.Aplication.Repositories;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//injeção de dependencia
builder.Services.AddTransient<IUsuarioInterface, UsuarioRepository>();
builder.Services.AddTransient<IListaInterface, ListaRepository>();
builder.Services.AddTransient<ITarefasInterface, TarefaRepository>();

//liberando o CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
