using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomermanagerApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CustomermanagerApi.Controllers
{


	[Route("api/[controller]")]
	[ApiController]
	[EnableCors("AllowLocalHost")]
	public class CustomerController : ControllerBase
	{
		private Customer _customerRepository;

		public CustomerController (Customer customer)
		{
			_customerRepository = customer;
		}


		// GET api/values
		[HttpGet]
		public IActionResult Get()
		{
			return Ok(Customer.Customers);
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			var customer = _customerRepository.GetCustomerById(id);

			if (customer != null)
				return Ok(customer);

			return BadRequest();
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody] Customer customer)
		{
			_customerRepository.AddCustomer(customer);
		}

		// PUT api/values/5
		[HttpPut]
		public void Put([FromBody] Customer customer)
		{
			_customerRepository.UpdateCustomer(customer);
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			_customerRepository.DeleteCustomer(id);
		}
	}
}
