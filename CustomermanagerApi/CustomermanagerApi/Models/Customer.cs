using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomermanagerApi.Models
{
	public class Customer
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string PhotoUrl { get; set; }
		public int Age { get; set; }
		public string Description { get; set; }
		public Address Address { get; set; }
		public CustomerType Type { get; set; }
		public IEnumerable<string> Categories { get; set; }
		private static List<Customer> _customers;
		public static IEnumerable<Customer> Customers
		{
			get
			{
				return _customers.OrderBy(x => x.Id);
			}
		}

		public static void SetFakeData()
		{
			_customers = new List<Customer>()
			{
				new Customer()
				{
					Id = 1,
					Name = "Józef Kwiatek",
					PhotoUrl = "assets/images/customer2.png",
					Age = 34,
					Description = "very important client",
					Address = new Address()
					{
						Street = "Zielona",
						HouseNumber = 9,
						City = "Warszawa"
					},
					Type = CustomerType.VIP,
					Categories = new List<string>() {"zagraniczny", "mikroprzedsiębiorstwo", "duży obrót" }
				},
				new Customer()
				{
					Id = 2,
					Name = "Andrzej Jeziorak",
					PhotoUrl = "assets/images/customer3.png",
					Age = 51,
					Description = "Kluczowy klient",
					Address = new Address()
					{
						Street = "Fiołkowa",
						HouseNumber = 12,
						City = "Poznań"
					},
					Type = CustomerType.Premium,
					Categories =new List<string>() {"krajowy", "przedsiębiorstwo", "średni obrót" }
				},
				new Customer()
				{
					Id = 3,
					Name = "Kazimierz Nowak",
					PhotoUrl = "assets/images/customer.png",
					Age = 21,
					Description = "Niezbyt ważny klient",
					Address = new Address()
					{
						Street = "Bagenna",
						HouseNumber = 88,
						City = "Gdańsk"
					},
					Type = CustomerType.Standard,
					Categories = new List<string>() {"krajowy", "zielarstwo", "mikro obrót" }
				}
			};
		}

		public Customer GetCustomerById(int id)
		{
			return _customers.Where(x => x.Id == id).SingleOrDefault();
		}

		public void AddCustomer(Customer customer)
		{
			var customerHighiestId = _customers.OrderByDescending(x => x.Id).FirstOrDefault();
			customer.Id = customerHighiestId == null ? 1 : customerHighiestId.Id + 1;
			_customers.Add(customer);
		}

		public void DeleteCustomer(int id)
		{
			var customerToDelete = _customers.Where(x => x.Id == id).SingleOrDefault();
			if (customerToDelete != null)
				_customers.Remove(customerToDelete);
		}

		public void UpdateCustomer(Customer customer)
		{
			var customerToUpdate = _customers.Where(x => x.Id == customer.Id).SingleOrDefault();

			if (customerToUpdate != null)
			{
				DeleteCustomer(customerToUpdate.Id);
				AddCustomer(customerToUpdate);
			}
		}
	}
}
