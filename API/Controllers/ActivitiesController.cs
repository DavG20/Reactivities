using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }

        // [HttpDelete("{id}")]

        // public async Task<ActionResult<int>> DeleteActivity(Guid id){
        //     // activity = await GetActivity(id);
        //     Activity activity = await _context.Activities.FindAsync(id);

        //    if (activity != null){ 
        //     return await _context.Activities.Remove(activity);
        //    }
        // }

    }
}