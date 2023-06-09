
using Application.Activities;
using Application.Core;
using MediatR;

using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {

        public static IServiceCollection AddApplicationService(this IServiceCollection services, IConfiguration config)
        {

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.ConfigurePersistenceServices(config);

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });
            services.AddMediatR(typeof(List.Handler));

            services.AddAutoMapper(typeof(MappingProfile).Assembly);



            return services;
        }
    }
}