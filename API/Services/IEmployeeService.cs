using API.Models;

namespace API.Services
{
    public interface IEmployeeService
    {
        Task<Employee> GetEmployeeAsync(Guid id);

        Task<List<Employee>> GetEmployeesAsync();

        Task<Employee> AddEmployeeAsync(Employee employee);

        Task<Employee> RemoveEmployeeAsync(Guid id);
    }
}
