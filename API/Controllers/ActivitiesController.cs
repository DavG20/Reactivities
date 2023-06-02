using System;
using System.Data;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {


        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Detail.Query { Id = id });
        }

        // [HttpDelete("{id}")]

        // public async Task<ActionResult<int>> DeleteActivity(Guid id){
        //     // activity = await GetActivity(id);
        //     Activity activity = await _context.Activities.FindAsync(id);

        //    if (activity != null){ 
        //     return await _context.Activities.Remove(activity);
        //    }
        // }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {

            return Ok(await Mediator.Send(new Create.Command { Activity = activity }));


        }

        [HttpPut("{id}")]

        public async Task<IActionResult> Edit(Guid Id, Activity activity)
        {
            activity.Id = Id;

            return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));

        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(Guid Id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = Id }));

        }

    }
}