using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly AuthDbContext _dbContext;

        public EmployeeService(AuthDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Employee> AddEmployeeAsync(Employee employee)
        {
            await _dbContext.Employees.AddAsync(employee);
            await _dbContext.SaveChangesAsync();
            return employee;
        }

        public async Task<Employee> GetEmployeeAsync(Guid id) => await _dbContext.Employees.FirstOrDefaultAsync(p => p.Id == id);

        public async Task<List<Employee>> GetEmployeesAsync() => await _dbContext.Employees.ToListAsync();

        public async Task<Employee> RemoveEmployeeAsync(Guid id)
        {
            var employee = await _dbContext.Employees.FirstOrDefaultAsync(p => p.Id == id);
            _dbContext.Employees.Remove(employee);
            await _dbContext.SaveChangesAsync();
            return employee;
        }
    }
}
