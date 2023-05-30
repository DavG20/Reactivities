
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Persistence
{
    public static class PersistenceServicesRegistration
    {
        public static IServiceCollection ConfigurePersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DataContext>(opt =>
            opt.UseNpgsql(configuration.GetConnectionString("ActivityConnectionString")));


            // services.AddScoped<IUnitOfWork, UnitOfWork>();

            // services.AddScoped<ICheckListRepository, CheckListRepository>();

            // services.AddScoped<ITasksRepository, TasksRepository>();
            return services;
        }
    }
}
